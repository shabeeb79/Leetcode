/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0]
    let maxsum = nums[0]
    for(i=1;i<nums.length;i++){
         sum =Math.max(nums[i],sum+nums[i])
          maxsum = Math.max(maxsum,sum)   
            }
      return maxsum
           
            
        }
       
    
    
    

