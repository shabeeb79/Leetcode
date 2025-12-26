/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    A = Math.abs(z-x)
    B = Math.abs(z-y)
    if(A === B){
        return 0
    }else if(A < B){
        return 1
    }else{
        return 2
    }
};