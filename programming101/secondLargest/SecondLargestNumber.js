function secondLargestNumber (arr) {
    // let sortArr = arr.sort((a,b) => a-b);
    // return sortArr[sortArr.length-2];

    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = arr[i];
        } else if (largestNum !== arr[i] && arr[i] > secondLargestNum) {
            secondLargestNum = arr[i]
        }
    }

    return secondLargestNum;
}

let arr = [5, 35, 84, 24, 9, 64, 3, 12, 84];

let result = secondLargestNumber(arr);

console.log(result);