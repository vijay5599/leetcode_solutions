/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var inOrder = function(root){
    if(!root) return []
    const left = inOrder(root.left)
    const right = inOrder(root.right)
    return [...left, root.val, ...right]
}
var isValidBST = function(root) {
    const arr = inOrder(root)
    for(let i = 1; i < arr.length; i++){
        if(arr[i]<=arr[i-1]) return false
    }
    return true 
};