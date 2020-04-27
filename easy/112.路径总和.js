/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 方案一：递归思路（深度遍历）
// /**
//  * @param {TreeNode} root
//  * @param {number} sum
//  * @return {boolean}
//  */
// var hasPathSum = function(root, sum) {
//   if (!root) {
//     return false
//   }
//   if (sum === root.val && !root.left && !root.right) {
//     return true
//   }
//   return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
// };

// 方案二：迭代。路径问题大多用队列存储（广度遍历）
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }
  let stack = [{node: root, sum: sum - root.val}]
  while (stack.length > 0) {
    const item = stack.pop()
    const currentNode = item.node
    const currentSum = item.sum
    if (!currentNode) {
      return false
    }
    // sum - 叶子节点 - ... - 根节点 = 0
    if (currentSum === 0 && !currentNode.left && !currentNode.right) {
      return true
    }
    if (currentNode.left) {
      stack.push({
        node: currentNode.left,
        sum: currentSum - currentNode.left.val
      })
    }
    if (currentNode.right) {
      stack.push({
        node: currentNode.right,
        sum: currentSum - currentNode.right.val
      })
    }
  }
  return false
};
// @lc code=end

