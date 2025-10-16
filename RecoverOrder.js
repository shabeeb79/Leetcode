var recoverOrder = function(order, friends) {
    let neww =[]
    for(i=0;i<order.length;i++){
        if(friends.includes(order[i])){
          neww.push(order[i])
        }
    }
    return neww
};
console.log(recoverOrder([1,4,5,3,2],[2,5]));
