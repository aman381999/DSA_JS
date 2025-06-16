function checkPlaindrome(val) {
    let result = 0;
    let initialVal = val;

    val = Math.abs(val);

    while (val > 0) {
        let num = val % 10;
        val = Math.floor(val / 10);
        result = (result * 10) + num;
    }
    console.log("result", result, initialVal);

    let limit = Math.pow(2,31);
    // let limit = 2**31;

    if (limit < result || -limit > -result) {
        return 0;
    }

    return initialVal < 0 ? -result : result;
}

let val = 1534236469;
const result = checkPlaindrome(val);

console.log(result);