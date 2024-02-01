/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0
    let absVal = Math.abs(x)
    while(absVal > 0){
        reversed = reversed * 10 + absVal % 10
        absVal = Math.floor(absVal/10)
    }
    if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) {
        return 0;
    }
   return x > 0 ? reversed : -reversed;
};
