// leetcode 27

var removeDuplicates = function(nums) {
    
    let x = 0;
    
    //while solution
    
    // let i = 0;
    // while(i<nums.length) {
    //     if(nums[i] > nums[x]){
    //         x += 1;
    //         nums[x] = nums[i];
    //     }
    //     i++;
    // }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[x]){
            x += 1;
            nums[x] = nums[i];
        }        
    }

    return x+1;
};

let nums = [0,0,1,1,1,2,2,3,3,4];

let k = removeDuplicates(nums);

console.log(k);