var minOperations = function(boxes) {
     const n = boxes.length;
    const answer = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {        // target box
        for (let j = 0; j < n; j++) {    // check every box
            if (boxes[j] === '1') {      // if there is a ball at box j
                answer[i] += Math.abs(i - j); // distance to target box i
            }
        }
    }

    return answer;
 
   
};
console.log(

minOperations("110"))