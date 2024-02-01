/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // If the input is a single-digit number
    if (n < 10) {
        // Check if it is either 1 or 7 (happy numbers)
        if (n === 1 || n === 7) {
            return true;
        }
        // If not 1 or 7, it's not a happy number
        return false;
    }
    // For numbers with more than one digit
    let total = 0;
    // Process each digit in the number
    while (n > 0) {
        // Extract the last digit
        let digit = n % 10;
        // Add the square of the digit to the total
        total += digit ** 2;
        // Remove the last digit from the number
        n -= digit;
        // Move to the next digit by dividing the number by 10
        n /= 10;
    }
    // If the total becomes 1, the number is a happy number
    if (total === 1) {
        return true;
    }
    // Recursively check the happiness of the calculated total
    return isHappy(total);
};