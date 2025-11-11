var findGCD = function(nums) {
  let num = 0 
  small = Math.min(...nums)
  big = Math.max(...nums)
  for(i=1;i<=big;i++){
     if(small % i === 0 && big % i === 0 ){
         num = i
      }
  }
  return num
};