/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    
    for(let i = 0; i < nums1.length; i++){
        let max = -1
        for(let j = 0; j < nums2.length; j++){
            let index = j;
            if(nums1[i] === nums2[j]){ // Found element in nums2 that matches current element in nums1
                while(index !== nums2.length){ // Iterate through remaining elements in nums2 to find next greater element
                    if(nums2[index] > nums1[i]){
                        max = nums2[index]; // Update max if we find a greater element
                        break;
                    }
                    index++;
                }
            }
            
        }
        ans.push(max);
    }
     return ans
};