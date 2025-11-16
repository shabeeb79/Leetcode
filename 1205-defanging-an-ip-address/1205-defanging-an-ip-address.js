/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let val = address.replaceAll(".","[.]")
    return val
};