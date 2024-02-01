/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const index = nums[i] % len;
        nums[index] += len;
    }
    for (let i = 0; i < len; i++) {
        if (Math.floor(nums[i] /len) >= 2) return i;
    }
    
};