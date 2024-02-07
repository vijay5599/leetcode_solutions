/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
//     if(!(root1 && root2)) return null
//     var v1 = root1 ? root1.val : 0;
//     var v2 = root2 ? root2.val : 0;
//     let root = new TreeNode(v1+v2)
    
//     root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
//     root.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);
    
//     return root;
    if (!root1 && !root2) return null; // both roots are null, nothing to merge
    if (!root1) return root2; // if root1 is null, return root2
    if (!root2) return root1; // if root2 is null, return root1
    
    // both roots exist, calculate the sum of their values
    var v1 = root1.val || 0;
    var v2 = root2.val || 0;
    let root = new TreeNode(v1 + v2);

    // recursively merge the left and right subtrees
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);
    
    return root;
};