// 题目描述
// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 树的深度就等于它的(左子树深度+1)和(右子树深度+1)的最大值
function TreeDepth(pRoot) {
  if(!pRoot) {
    return 0
  }
  const leftLength = TreeDepth(pRoot.left)
  const rightLength = TreeDepth(pRoot.right)
  return leftLength > rightLength ? leftLength + 1 : rightLength + 1
}

// function TreeNode(x) {
//   this.val = x;
//   this.left = null;
//   this.right = null;
// }
// let tree = new TreeNode(5)
// tree.left = new TreeNode(3)
// tree.right = new TreeNode(7)
// tree.left.left = new TreeNode(2)
// tree.left.right = new TreeNode(4)
// tree.right.left = new TreeNode(6)
// tree.right.right = new TreeNode(8)
// console.log(tree)

// console.log(TreeDepth(tree))
