/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
       let neww = []
    for(i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            neww.unshift(nums[i])
        }else{
            neww.push(nums[i])
        }
    }
    return neww
};