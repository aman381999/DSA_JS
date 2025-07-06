//Print n..to..1 using Recursion

function fun(num) {
    if (num < 1) return;

    console.log(num);
    num = num - 1;
    fun(num); 
}

let a = 12;

fun(a)