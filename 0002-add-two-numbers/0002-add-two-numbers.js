/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        // Calculate sum of current digits and carry
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        // Update carry for the next calculation
        carry = Math.floor(sum / 10);

        // Create a new ListNode with the current digit
        current.next = new ListNode(sum % 10);

        // Move the current pointer to the next node
        current = current.next;

        // Move to the next nodes in l1 and l2 if available
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
};