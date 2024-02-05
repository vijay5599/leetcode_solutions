/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length-1
     let j = t.length-1
     let backS = 0
     let backT = 0
     
     while (true){
         while(i>=0 && (backS > 0 || s[i] === '#')){
             backS+= s[i] ==='#' ? 1 : -1
             i--
         }
         
         while(j>=0 && (backT > 0 || t[j] === '#')){
             backT+= t[j] ==='#' ? 1 : -1
             j--
         }
         if(i >=0 && j>= 0 && s[i] === t[j]){
             i--
             j--
         }else{
             break
         }
     }
    return i===-1 && j===-1
};