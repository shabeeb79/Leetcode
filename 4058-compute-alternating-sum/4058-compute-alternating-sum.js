/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let val = 0
    for(i=0;i<nums.length;i++){
        if(i%2==0){
            val +=nums[i]
        }else if(nums[1]===0){
            return nums.join("")
        }
        else{
            val -=nums[i]
        }
    }
    return val
}