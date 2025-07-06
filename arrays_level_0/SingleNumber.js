/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] = ++hash[nums[i]];
        } else {
            hash[nums[i]] = 1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
};

// approach is with hashmap which has a time complexity of O(n) and space complexity of O(n)

//below approach is Bitwise XOR approach which has time complexity of O(n) and space complexity none.
//read about Bitwise XOR
//it uses a symbol "^"

let xor = 0;

for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i]; //it uses a symbol "^"
}
return xor;

// nums=[4,1,2,1,2]
// output=4