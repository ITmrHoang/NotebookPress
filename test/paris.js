const k =2
const arr = [1,3, 5, 8, 55]

function pairs(k, arr) {
    // Write your code here
    let count = 0
    const sortArr = arr.sort((a, b) => a - b)
    console.log(sortArr)
    const len = sortArr.length

    /*
    case dùng cho dãy số có lặp lạp lại giá trị
    nếu dãy số không trùng nhau có thể break  i tới j luôn nếu đã = k
     */
    loop1 : for(let i = 0; i < len-1; ++i) {
        loop2 : for(let j = i+1; j < len; ++j) {
            //  hiệu phần tử phía sau trừ phần tử trước sẽ luôn duong với dãy đã sắp xếp
            //neu k > 0;
            console.log(i,j, sortArr[j] - sortArr[i], sortArr[j] , sortArr[i])
            if (k >= 0) {
                let _k = sortArr[j] - sortArr[i]
                if(_k === k) {
                    count++
                }
                else if ( _k > k)
                {
                    break loop2;
                }

            }
            // với k < 0
            else {
                let _k = sortArr[i] - sortArr[j]
                if(_k === k) {
                    count++
                }
                else if ( _k < k)
                {
                    break loop2;
                }
            }
        }
    }
    return count

}

const a = pairs(-2, arr)
console.log(a)