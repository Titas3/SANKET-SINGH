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
 * @return {TreeNode}
 */
/* 
 let sumUptilNow = 0;
 function revin(root) {
     if(root == null) return;
     revin(root.right);
     root.val += sumUptilNow;
     sumUptilNow = root.val;
     revin(root.left);
 }
 
 var bstToGst = function(root) {
     sumUptilNow = 0;
     revin(root);
     return root;
 };
 */
 //leetcode

 var bstToGst = function(root) {
    let last = 0;
    const dfs = function (node) {
        if(node === null) return;
        dfs(node.right);
        node.val += last;
        last = node.val;
        dfs(node.left);
    }
    
    dfs(root);
    return root;
};