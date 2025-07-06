// print 1 to n using recursion

//my solution
// function print(n, start) {

//     if (start > n) return;
//     console.log(n - (n - start));
//     print(n, start + 1);
// }

// let start = 1;
// let n = 10;

// print(n, start)


//Correct solution 

let n = 10;

function print (x) {
    if(x > n) return;

    console.log(x);

    print(++x);
}

print(1);