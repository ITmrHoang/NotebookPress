export function readingFileToBase64(file: string | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const _result = reader.result;
      resolve(_result as string);
    };
    reader.readAsDataURL(file as any);
  });
}

export function base64ToBlob(data: string): Promise<Blob> {
  return new Promise<Blob>((resolve, reject) => {
    fetch(data)
      .then((result) => {
        result.blob().then((blob) => {
          resolve(blob);
        });
      })
      .catch((err) => reject(err));
  });
}

export function blobToUri(blob: Blob): string {
  return URL.createObjectURL(blob);
}

export function readBase64(str: string): string {
  return atob(str);
}

export function callbackReadFileToBase64(target: string | Blob, callback: (_data: string) => void): void {
  let reader = new FileReader();
  reader.onload = function (event) {
    let data: string = btoa(event?.target?.result as string); // the actual conversion of data from binary to base64 format
    callback(data);
  };
  reader.readAsDataURL(target as Blob);
}

export function mergeObjects() {
  Object.assign({}, ...arguments);
}

export function throttle(func: Function, limit: number): Function {
  let inThrottle = false;
  return (): void => {
    const args = arguments;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function debounce(fn: Function, wait: number) {
  var timeout: NodeJS.Timeout | null = null;
  return function () {
    const args = arguments;
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn.apply(context, args), wait);
  };
}

export function once(func: Function) {
  var ran: boolean = false,
    memo: Function;
  const _this = this;
  return function () {
    if (ran) return memo;
    ran = true;
    memo = func.apply(_this, arguments);
    return memo;
  };
}

export function isEmpty(target: any): boolean {
  return (
    typeof target === "undefined" ||
    target === 0 ||
    target === "0" ||
    target === null ||
    target === "" ||
    target === "null" ||
    target.length === 0 ||
    (typeof target === "object" && !Object.keys(target).length)
  );
}

export const isSet = (target: any): boolean =>
  target !== "null" && target !== null && target !== undefined && target !== "undefined" && target !== "";

export const isFunction = (value: any): boolean =>
  value instanceof Function ||
  Object.prototype.toString.call(value) === "[object Function]" ||
  "function" === typeof value;

export const isArray = (variable: any): boolean =>
  variable.constructor === Array ||
  variable instanceof Array ||
  Array.isArray(variable) ||
  Object.prototype.toString.call(variable) === "[object Array]";
export const isString = (value: any): boolean =>
  value instanceof String || "string" === typeof value || Object.prototype.toString.call(value) === "[object String]";

export const isObject = (value: string | Object | any): boolean =>
  value instanceof Object || "object" === typeof value || Object.prototype.toString.call(value) === "[object Object]";
export const isNumber = (value: any) =>
  value instanceof Number || typeof value === "number" || (!isNaN(Number(value)) && value !== "");

export function isIpAddress(ip: string): boolean {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
}

export function isIpV4(ip: string): boolean {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  return ipv4Pattern.test(ip);
}
export function isIpV6(ip: string): boolean {
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv6Pattern.test(ip);
}

export function isEmailAddress(string: string): boolean {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(string);
}

export function isBlank(string: string): boolean {
  return string === "";
}
export default {
  mergeObjects,
  throttle,
  debounce,
  isEmpty,
  isFunction,
  isArray,
  isString,
  isObject,
  isNumber,
  isIpAddress,
  isIpV4,
  isIpV6,
  isEmailAddress,
  isBlank,
};
