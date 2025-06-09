function findNegativeNumber (arr) {
    let count = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0) {
            count++;
        }
    }

    return count;
}

let arr = [-1, 20, -5, 6, -4, -7, 8];

let result = findNegativeNumber(arr);

console.log(result);