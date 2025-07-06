/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let count = 0;
    let maxCount = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== 1) {
            count = 0;
        } else {
            count++;
            if(count > maxCount) {
                maxCount = count;
            }
        }
    }
    return maxCount;
    
};


// nums = [1,0,1,1,0,1]

// output= 2