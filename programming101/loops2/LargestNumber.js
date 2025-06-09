function findLargestNumber (arr) {
    let largestNum = arr[0];
    // let largestNum = -Infinity; //you can put -Infinity just in case 

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;
}

let arr = [5, 35, 84, 24, 9.5, 64, 3, 12];

let result = findLargestNumber(arr);

console.log(result);