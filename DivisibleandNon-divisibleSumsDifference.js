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
console.log(
 differenceOfSums(5,1))