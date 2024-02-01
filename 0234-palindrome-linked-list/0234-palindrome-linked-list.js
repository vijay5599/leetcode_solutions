/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head 
    let stack = []
    while(curr){
        stack.push(curr.val)
        curr = curr.next
    }
    
    return stack.join("") == stack.reverse().join("");
    
    // let temp = head 
    // while(curr){
    //     if(temp.val !== stack.pop()){
    //         return false
    //     }
    // }
    // return true
    
};