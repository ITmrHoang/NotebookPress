<template>
  <div>
    <code> 
      import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { debounce, isEmpty, isString, isArray, isFunction, get } from 'lodash'; // Giả sử bạn dùng lodash hoặc các hàm utils tương tự

// --- Helpers (Giả lập các hàm bạn đang dùng nếu chưa có) ---
const isBlank = (value) => value === null || value === undefined || value === '';
// ... Các hàm validate helpers khác của bạn (_validations object) ...

// --- Core Validation Rules ---
// TODO update defined list of validation rules
const _validations = {
  required: (value) => (isRequired(value) ? '' : 'This field is required'),
  number: (value) =>
    isBlank(value) || isNumber(value) ? '' : 'This field is not a number',
  email: (value) =>
    isBlank(value) || isEmailAddress(value) ? '' : 'Invalid email address',
  minLength: (value, options) => {
    const { params: minLength } = options;

    return isBlank(value) || value.length >= parseInt(minLength)
      ? ''
      : `Must be at least ${minLength} characters long`;
  },
  min: function (value, options) {
    if (isBlank(value)) return '';
    if (isNumber(value)) return this.minimum(value, options);
    if (isString(value)) return this.minLength(value, options);
  },
  maxLength: (value, options) => {
    const { params: maxLength } = options;

    return isBlank(value) || value.length <= parseInt(maxLength)
      ? ''
      : `Must be less than or equal to ${maxLength} characters`;
  },
  max: function (value, options) {
    if (isBlank(value)) return '';
    if (isNumber(value)) return this.maximum(value, options);
    if (isString(value)) return this.maxLength(value, options);
  },
  maximum: (value, options) => {
    const { params: max } = options;
    return isBlank(value) || (isNumber(value) && Number(value) <= parseInt(max))
      ? ''
      : `Must be less than or equal to ${max}`;
  },
  minimum: (value, options) => {
    const { params: min } = options;

    return isBlank(value) || (isNumber(value) && Number(value) >= parseInt(min))
      ? ''
      : `Must be greater than or equal to ${min}`;
  },
  regex: (value, options) => {
    const { params: regex } = options;

    return isBlank(value) || new RegExp(regex).test(value)
      ? ''
      : `Invalid data with rule`;
  },
  pattern: (value, { params: pattern }) =>
    isBlank(value) || new RegExp(pattern).test(value)
      ? ''
      : `Must match the pattern ${pattern}`,
  unique: (value, options) => {
    const { filed: fieldName = '', data } = options;
    if (isBlank(value)) return '';
    if (
      data[fieldName].filter(
        (item) => JSON.stringify(item) === JSON.stringify(value),
      )
    ) {
      return 'This value is already taken';
    }
    return '';
  },
  same: (value, { params, data }) => {
    if (value !== data[params]) {
      return `The field must the same ${params}`;
    }
    return '';
  },
  hasUpperCase(value) {
    return isBlank(value) || hasUpperCase(value)
      ? ''
      : 'The field must be upper case';
  },
  hasLowerCase(value) {
    return isBlank(value) || hasLowerCase(value)
      ? ''
      : 'The field must have lower case';
  },
  hasSpecialChar(value) {
    return isBlank(value) || hasSpecialChar(value)
      ? ''
      : 'The field must have Special char in !@#$%^&*(),.?":{}|<>';
  },
  hasNumber(value) {
    return isBlank(value) || hasNumber(value)
      ? ''
      : 'The field must have number';
  },
  phoneNumber(value) {
    return isBlank(value) || isPhoneNumber(value) ? '' : 'Invalid phone number';
  },
  ipAddress: (value) =>
    isBlank(value) || isIpAddress(value) ? '' : 'Invalid IP address',
  ipv4: (value) =>
    isBlank(value) || isIpV4(value) ? '' : 'Invalid IP v4 address',
  ipv6: (value) =>
    isBlank(value) || isIpV6(value) ? '' : 'Invalid IP v6 address',
};

/**
 * Hàm tách rule string: "min:5" -> { name: "min", params: "5" }
 */
const parseRule = (rule) => {
  if (isString(rule)) {
    const [name, params] = rule.split(':');
    return { name, params };
  }
  return { name: rule, params: null };
};

export const useValidation = (
  defaultValues = {},
  validationRules = {},
  options = {}
) => {
  const { wait = 300, isErrorDefault = true } = options;

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const isFirstRender = useRef(true);

  // Dùng ref để giữ validationRules mới nhất mà không gây re-render nếu object thay đổi tham chiếu nhưng nội dung giống nhau (nếu bạn xử lý deep compare).
  // Tuy nhiên, tốt nhất là Parent Component nên dùng useMemo cho validationRules.
  const rulesRef = useRef(validationRules);

  useEffect(() => {
    rulesRef.current = validationRules;
  }, [validationRules]);

  // Hàm thực thi validate cho một field
  const validateField = useCallback((fieldName, value, rules, currentData) => {
    let fieldErrors = [];
    const ruleList = isArray(rules) ? rules : [rules];

    for (const rule of ruleList) {
      let errorMessage = '';

      if (isFunction(rule)) {
        errorMessage = rule(value, currentData);
      } else if (isString(rule)) {
        const { name, params } = parseRule(rule);
        const validationFn = _validations[name];
        
        if (validationFn) {
            // Gọi rule từ _validations
            errorMessage = validationFn(value, { params, data: currentData, field: fieldName });
        }
      }

      if (errorMessage) {
        fieldErrors.push(errorMessage);
        // Nếu muốn dừng ở lỗi đầu tiên của field đó thì break;
      }
    }
    return fieldErrors;
  }, []);

  // Hàm validate toàn bộ (Core Logic)
  const runValidation = useCallback((currentValues) => {
    const newErrors = {};
    const currentRules = rulesRef.current;
    let hasError = false;

    Object.keys(currentRules).forEach((field) => {
      const fieldErrors = validateField(
        field, 
        currentValues[field], 
        currentRules[field], 
        currentValues
      );

      if (!isEmpty(fieldErrors)) {
        newErrors[field] = fieldErrors;
        hasError = true;
      }
    });

    return { newErrors, hasError };
  }, [validateField]);

  // Debounce việc set Errors để tránh giật lag khi gõ nhanh
  const debouncedSetErrors = useMemo(
    () =>
      debounce((newErrors) => {
        setErrors(newErrors);
      }, wait),
    [wait]
  );

  // Effect lắng nghe thay đổi của values hoặc validationRules
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const { newErrors } = runValidation(values);
    
    if (wait) {
      debouncedSetErrors(newErrors);
    } else {
      setErrors(newErrors);
    }

    // Cleanup debounce khi unmount
    return () => debouncedSetErrors.cancel();
  }, [values, validationRules, runValidation, debouncedSetErrors, wait]);

  // Hàm trigger validate thủ công (thường dùng khi bấm Submit)
  const validate = () => {
    // Hủy debounce đang chờ để lấy kết quả ngay lập tức
    debouncedSetErrors.cancel(); 
    
    const { newErrors, hasError } = runValidation(values);
    setErrors(newErrors);
    return { isError: hasError, errors: newErrors };
  };

  // Hàm reset form
  const reset = () => {
    setValues(defaultValues);
    setErrors({});
    isFirstRender.current = true; // Reset lại trạng thái first render để không hiện lỗi ngay
  };

  // Tính toán isError dựa trên state hiện tại của errors
  // Lưu ý: isError này phản ánh trạng thái UI hiện tại (có thể bị delay do debounce).
  // Nếu muốn check chính xác để submit, hãy dùng hàm `validate()` trả về kết quả.
  const hasErrors = Object.keys(errors).length > 0;

  return {
    values,
    setValues,
    errors,
    isError: hasErrors, // Trả về boolean thay vì ref để UI update được
    setErrors,
    validate,
    reset,
  };
};
    </code>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>