/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
    for(i=0;i<words.length;i++){
        let con=true
        for(j=0;j<words[i].length;j++){
          if(!allowed.includes(words[i][j])){
             con=false
             break;
          }
    }
      if(con)
         count++
    
    }
    
    return count
};