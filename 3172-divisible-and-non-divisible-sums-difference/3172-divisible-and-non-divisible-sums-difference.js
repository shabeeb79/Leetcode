/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisble = 0
    let nonDivisible = 0
    for(i=1;i<=n;i++){
        if(i%m === 0){
            divisble +=i
            
        }else{
          nonDivisible += i
        }
    }
    return nonDivisible-divisble
};