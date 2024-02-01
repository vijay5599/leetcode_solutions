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

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur && cur.next){
        while(cur.next && cur.val === cur.next.val){
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return head;
 
};