/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count = {}
    let arr = []
    let n = nums.length
    
    for(i=0;i<nums.length;i++){
        count[nums[i]]=(count[nums[i]] || 0)+1
    }
    for(let key in count){
      if(n/3 < count[key]){
          arr.push(Number(key))
          
      }
    }
    return arr
};