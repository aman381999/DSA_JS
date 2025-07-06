function fun(num) {

    /*****************
     * when BASE CASE is not added it goes into INFINITE RECURSION and throws and error i.e. "RangeError: Maximum call stack size exceeded".
     * So that's why BASE CASE is important
     */

    if(num == 0) return;

    console.log(num);
    num = num - 1;
    fun(num);
}

let a = 5;

fun(a);


// output
// 5
// 4
// 3
// 2
// 1