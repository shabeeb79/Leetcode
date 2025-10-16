var minimumSum = function(num) {
   let newone = String(num).split("").map(Number)
    let sorted = newone.sort((a,b)=>a-b)
    let num1=[]
    let num2=[]
     sorted.filter((a,i)=>i%2?num1.push(a):num2.push(a))
    num1 = Number(num1.join(''))
    num2 = Number(num2.join(''))
    return num1+num2
      
};
console.log(

minimumSum(4009))