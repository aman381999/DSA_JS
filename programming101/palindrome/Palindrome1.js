function checkPlaindrome(val) {
    let result = 0;
    let initialVal = val;
    while (val > 0) {
        let num = val % 10;
        val = Math.floor(val / 10);
        result = (result * 10) + num;
    }
    // console.log("result", result, initialVal);
    if(Number(result) == initialVal) {
        return true;
    } 

    return false;
}

let val = 123;
const result = checkPlaindrome(val);

console.log(result);