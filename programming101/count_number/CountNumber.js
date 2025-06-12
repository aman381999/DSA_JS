function countDigits(n) {
    //handle number zero 
    if(n == 0) return 1;


    //handle negative number
    // if(n < 0) {
    //     n = n * (-1);
    // }

    n = Math.abs(n);

    let counter = 0;
    while (n > 0) {
        n = Math.floor(n /10); //n = parseInt(n /10);
        counter++
    }

    return counter;
}

let num = 1;

let result = countDigits(num);

console.log(result);