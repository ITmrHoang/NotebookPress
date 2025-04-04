def create_combinations(stack1, stack2, num_choices):
    def combinations_from_stacks(stack1, stack2, num_choices):
        result = []
        def backtrack(path, i, j, k):
            if k == 0:
                result.append(path[:])
                return
            if i < len(stack1):
                path.append(stack1[i])
                backtrack(path, i + 1, j, k - 1)
                path.pop()
            if j < len(stack2):
                path.append(stack2[j])
                backtrack(path, i, j + 1, k - 1)
                path.pop()
        backtrack([], 0, 0, num_choices)
        return result

    return combinations_from_stacks(stack1, stack2, num_choices)

# Ví dụ ngăn xếp
stack1 = ['a', 'b', 'c']
stack2 = [1, 2, 3]

# Số lần chọn định sẵn
num_choices = 2

# Tạo tổ hợp
combinations = create_combinations(stack1, stack2, num_choices)
for comb in combinations:
    print(comb)