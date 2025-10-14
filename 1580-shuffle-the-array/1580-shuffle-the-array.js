/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = []
    for(i=0;i<nums.length;i++){
        arr.push(nums[i],nums[n+i])
    }
    return arr.slice(0,nums.length)
};