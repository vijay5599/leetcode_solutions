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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let result = 1
    inorder(root)
    function inorder(root){
        if(!root){
            return 0
        }
        let l = inorder(root.left)
        let r = inorder(root.right)
        result = Math.max(result, l+r+1)
        return Math.max(l, r)+1
    }
    return result-1
    
};