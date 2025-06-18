//leetcode 344

var reverseString = function(s) {
    let start = 0;
    let end = s.length-1;

    while (end > start){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start++;
        end--;
    }
};

let s = ["h","e","l","l","o"];

let result = reverseString(s);

console.log(result);