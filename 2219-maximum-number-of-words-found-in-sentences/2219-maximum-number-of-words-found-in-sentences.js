/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
      let maxWords = 0;
    
    for (let i = 0; i < sentences.length; i++) {
       
        let wordCount = sentences[i].split(" ").length;
          
        maxWords = Math.max(maxWords, wordCount);
    }
    
    return maxWords;
};
