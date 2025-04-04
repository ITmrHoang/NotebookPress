function maxSubarray(arr) {
    // Write your code here
    let any_negative = true;
    const last_index = arr.length - 1;
    let j = last_index, i =  0 ;
    while (i < j) {
        if(any_negative && (arr[i] > 0 || arr[j] > 0)) any_negative = false;
        if (any_negative && arr[i] < 0 && arr[j] < 0 ) {
            j = --j;
            i = ++i;
            if(i === j) return [-1,-1]
            continue;
        }
        while(arr[i] < 0) {
            i = ++i;
        }
        while(arr[j]< 0) {
            j = --j;
        }
        break;
    }
    let  best_subsequence= 0;

    if(i === j) return [arr[i], arr[j]]
    const new_arr = arr.slice(i,j+1)
    let best_subarray = 0;
    let new_subarray = 0;

    for(let _i=i; _i<=j; _i++) {
        best_subsequence = Math.max(best_subsequence, best_subsequence + arr[_i]);

        new_subarray = new_subarray + arr[_i]
        best_subarray = Math.max(best_subarray, new_subarray)
    }
    return [best_subarray, best_subsequence]

}
const arr1 = [1,-2,3,5]

const arr2 = [-2 ,-3, -2 ,-4 ,-6]
const result = maxSubarray(arr1)
console.log(result)