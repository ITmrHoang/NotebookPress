def twoStacks(maxSum, a, b):
    # tim tong cac phan tu chi o ngan xep a
    sum_a = 0
    count_a = 0
    for i in range(len(a)):
#          neu old sum + value taij index i > max sum thi break neeus khoong cong sum va tang count a  new index check
        if sum_a + a[i] > maxSum:
            break
        sum_a += a[i]
        count_a += 1

    #  tim tong phan tu count ben stack b a giam dan neu max lon hon
    sum_b = 0
    count_b = 0
    max_count = count_a # luu lai count a cu da duyet max
    for j in range(len(b)):
        sum_b += b[j]
        print(sum_b, sum_a)
        count_b += 1
        while sum_a + sum_b > maxSum and count_a > 0:
            count_a -= 1
            sum_a -= a[count_a ]  #  xoa phan tu a tai index cuoi trong list a ma tong van nho hon max sum
        if sum_a + sum_b <= maxSum:
            max_count = max(max_count, count_a + count_b)

    return max_count

# Ví dụ ngăn xếp
stack1 = [8, 1, 1]
stack2 = [1, 1, 1,1,1,1,1]

print(twoStacks(10, stack1, stack2))

