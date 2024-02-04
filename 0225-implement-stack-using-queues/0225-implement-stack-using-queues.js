
var MyStack = function() {
    this.s1 = []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let len = this.s1.length-1
    for(let i = 0; i < len; i++){
        let n = this.s1.shift()
        this.s1.push(n)
    }
    return this.s1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let len = this.s1.length-1
    return this.s1[len]
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.s1.length === 0
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */