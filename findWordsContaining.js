var findWordsContaining = function(words, x) {
    let arr =[]
    for(i=0;i<words.length;i++){
       if(words[i].includes(x)){
        arr.push(i)
       }  
    }
        return arr
};
console.log(

findWordsContaining(["abc","bcd","aaaa","cbc"], "z"))