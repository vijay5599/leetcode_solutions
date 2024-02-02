/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head
    let prev_p = null
    let next_p = null
    while(curr){
        next_p = curr.next
        curr.next = prev_p
        prev_p = curr
        curr = next_p
    }
    return prev_p
};