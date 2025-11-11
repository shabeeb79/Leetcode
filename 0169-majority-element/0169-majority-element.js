var majorityElement = function(nums) {
    let count = {}
    let max = 0
    let mamm = null
       for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1
    }
    for(let key in count){
        if(max < count[key]){
            max = count[key]
            mamm=key
        }
    }
      
       
  
  return Number(mamm)
   
}