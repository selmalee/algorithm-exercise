/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true
  }
  // 如果左子树与右子树互为镜像，则root为对称二叉树
  return isMirror(root.left, root.right)
};

// 判断r1与r2是否镜像
var isMirror = (r1, r2) => {
  // 叶子节点
  if (!r1 && !r2) {
    return true
  }
  // 值不相等
  if (!r1 || !r2) {
    return false
  }
  // 递归，r1的左节点等于r2的右节点，r2的左节点等于r1的右节点
  return (r1.val === r2.val) && isMirror(r1.left, r2.right) && isMirror(r2.left, r1.right)
}
// @lc code=end

