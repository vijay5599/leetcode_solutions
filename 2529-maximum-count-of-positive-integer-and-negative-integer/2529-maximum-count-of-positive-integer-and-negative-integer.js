/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(arr){
    return Math.max(upperBound(arr), lowerBound(arr))
}
function upperBound(arr){
    let low = 0, high = arr.length-1
    while(low < high){
        let mid = Math.ceil((low+high)/2)
        if(arr[mid] < 0) low = mid;
        else high = mid -1
    }
    return arr[0] >= 0 ? 0 : low+1
}

function lowerBound(arr){
    let low = 0, high = arr.length-1
    while(low < high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] > 0) high = mid;
        else low = mid +1
    }
    return arr[arr.length-1] <= 0 ? 0 : arr.length - low
}