var mostWordsFound = function(sentences) {
    let maxWords = 0;
    
    for (let i = 0; i < sentences.length; i++) {
       
        let wordCount = sentences[i].split(" ").length;
          
        maxWords = Math.max(maxWords, wordCount);
    }
    
    return maxWords;
};
console.log(mostWordsFound(["please wait", "continue to sdds fight", "continue to win"]));
