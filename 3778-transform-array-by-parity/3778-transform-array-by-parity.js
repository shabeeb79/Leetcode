/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
        let neww =[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            neww.push(0)
        }else{
            neww.push(1)
        }
    }
    return neww.sort((a,b)=>a-b)
};