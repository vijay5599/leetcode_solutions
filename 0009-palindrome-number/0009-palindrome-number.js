// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(n) {
//     let rev = 0;
//     let x = n
//     while(x > 0){
//         let ld = x % 10;
//         rev = rev * 10 + ld;
//         x = Math.floor(x / 10)
//     }
//     if(rev === n){
//         return true
//     }else{
//         return false
//     }
// };
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let reverse = 0
  let num = x
  while(x>0){
      reverse = reverse * 10 + x%10
      x = Math.floor(x/10)
  }
 if(num===reverse){
     return true
 }else{
     return false
 }
};