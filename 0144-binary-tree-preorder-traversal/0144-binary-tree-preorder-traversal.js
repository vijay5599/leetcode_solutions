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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = []
    var traversal = function(node){
        if(!node) return
        result.push(node.val)
        traversal(node.left)
        traversal(node.right)
    }
    traversal(root)
    return result
};