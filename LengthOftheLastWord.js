var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ")
    let word =""
     for(i=0;i<words.length;i++){
       word =  words[words.length-1]
        
     }
    return word.length
};
console.log(lengthOfLastWord("luffy is still joyboy"));
