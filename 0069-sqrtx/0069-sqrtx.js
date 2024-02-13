/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // for(let i = 1; i<x; i++){
    //     if(i**2 >= x){
    //         return i -1
    //     }
    // }
    
    let l = 0;
    let r = x
    while(l<=r){
        let m = l + Math.floor((r-l)/2)
        if(m ** 2 > x){
            r = m -1
        }else if(m ** 2 < x){
            l = m + 1
            res = m
        }else{
            return m
        }
    }
    return res
};