/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let parenthesisMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
    for(let char of s){
        if(char === '{' || char === "[" || char === '('){
            stack.push(char)
        }else if(char === '}' || char === "]" || char === ')'){
            const top = stack.pop()
            if(top !== parenthesisMap[char]){
                return false
            }
        }
    }
    return stack.length === 0
};