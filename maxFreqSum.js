var maxFreqSum = function(s) {
  const vowel = "aeiou";
  let maxcount = 0;
  let maxcountt = 0;





  for (let i = 0; i < s.length; i++) {
    let count = 0;
    let chararacter = s.charAt(i);
    if(vowel.includes(s.charAt(i))){
      continue;
    }
    for (let j = 0; j < s.length; j++) {
      if (s.charAt(j) === chararacter) {
        count++;
      }
    }

    if (maxcount < count) maxcount = count;
  }

 

    for (let a = 0; a < vowel.length; a++) {
      let countt = 0;
      let chararacterr = vowel.charAt(a);

      for (let b = 0; b < s.length; b++) {
        if (s.charAt(b) === chararacterr) countt++;
      }

      if (maxcountt < countt) maxcountt = countt;
    }
  

  return maxcount + maxcountt;
};

console.log(maxFreqSum("ukux"));  
