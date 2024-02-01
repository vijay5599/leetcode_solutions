/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let minPrice = arr[0]
    let maxProfit = 0
    for(let i=1; i< arr.length; i++){
        if(arr[i] < minPrice){
            minPrice = arr[i]
        }else if(arr[i] - minPrice > maxProfit){
            maxProfit = arr[i] - minPrice 
        }
    }
    return maxProfit
};