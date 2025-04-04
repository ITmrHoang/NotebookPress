function maxSubarray(arr) {
    let any_negative = true;
    const last_index = arr.length - 1;
    let j = last_index, i = 0;

    while (i < j) {
        if (any_negative && (arr[i] > 0 || arr[j] > 0)) any_negative = false;
        if (any_negative && arr[i] < 0 && arr[j] < 0) {
            j--;
            i++;
            if (i === j) return [-1, -1];
            continue;
        }
        while (arr[i] < 0) {
            i++;
        }
        while (arr[j] < 0) {
            j--;
        }
        break;
    }

    if (i === j) return [arr[i], arr[j]];

    let best_subarray = -Infinity;
    let current_subarray = 0;
    let best_subsequence = 0;

    for (let _i = i; _i <= j; _i++) {
        console.log(current_subarray)
        current_subarray = Math.max(arr[_i], current_subarray + arr[_i]);
        best_subarray = Math.max(best_subarray, current_subarray);

        if (arr[_i] > 0) {
            best_subsequence += arr[_i];
        }
    }


    return [best_subarray, best_subsequence];

}


const arr1 = [8,-2,9, -1, -15, 9,9]

const arr2 = [-2 ,-3, -2 ,-4 ,-6]
const result = maxSubarray(arr1)
console.log(result)