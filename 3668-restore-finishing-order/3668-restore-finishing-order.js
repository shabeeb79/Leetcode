/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
       let neww =[]
    for(i=0;i<order.length;i++){
        if(friends.includes(order[i])){
          neww.push(order[i])
        }
    }
    return neww
};