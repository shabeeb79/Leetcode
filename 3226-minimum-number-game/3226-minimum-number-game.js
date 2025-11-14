var numberGame = function(nums) {
   let neww = nums.sort((a,b)=>a-b) 
   let arr = []
   for(i=0;i<neww.length;i+=2){
        arr.push(neww[i+1],neww[i])
   }
   return arr
};