var missingNumber = function(nums) {
    let sortNums = nums.sort((a,b) => a - b );

    for(let i=0; i<sortNums.length; i++) {
        if(sortNums[i] != i){
            return i;
        }
    }
    return nums.length;
};

// my solution not the optimise one because i have used sort which has a complexity of O(n log n).

//below is the optimise solution which has a complexity of O(n)

var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n*(n+1))/2;
    let sumOfNums = 0;

    for(let i=0; i<nums.length; i++) {
        sumOfNums += nums[i];
    }

    return sum-sumOfNums;
};

//nums = [3,0,1]
// output = 2