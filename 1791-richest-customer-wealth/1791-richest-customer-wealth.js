/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    let value = 0
    let max =0
   for(i=0;i<accounts.length;i++){
    value= accounts[i].reduce((total,val)=>total+val,0)
     if(max < value){
       max = value
   }
   } 
 return max
   
}