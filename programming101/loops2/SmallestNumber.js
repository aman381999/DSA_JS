function findSmallestNumber (arr) {
    let smallestNum = arr[0];
    // let smallestNum = -Infinity; //you can put -Infinity just in case 

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }

    return smallestNum;
}

let arr = [5, 35, 84, 24, 9.5, 64, 3, 12];

let result = findSmallestNumber(arr);

console.log(result);