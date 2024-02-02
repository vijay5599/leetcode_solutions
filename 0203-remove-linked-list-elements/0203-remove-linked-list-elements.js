/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val==val)
        {
            head=head.next 
        }    
    if(head==null) return head
    
    let current=head.next
    let prev=head
    while (current != null) {
        if (current.val== val) {
            prev.next = current.next;
            current=current.next
        } else {
            prev = current;
            current = current.next;
         }
    }
    return head;
};