function findIndexOfElem (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [4, 5, 8, 10, 7, 30];
let target = 10;

let result = findIndexOfElem(arr,target);
console.log("result",result);