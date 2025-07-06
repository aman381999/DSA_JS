/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let curr = 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] == 0 && nums[curr] == 0) {
            continue;
        } else if ((nums[i] !== 0 && nums[curr] !== 0) || (nums[curr] !== 0 && nums[i] == 0)) {
            curr++;
            continue;
        } else {
            let temp = nums[i];
            nums[i] = nums[curr]
            nums[curr] = temp;
            curr++;
        }
    }
};

//nums = [0,1,0,3,12]
//output = [1,3,12,0,0]