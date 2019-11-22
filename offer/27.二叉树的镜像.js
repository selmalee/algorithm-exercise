// 题目描述
// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 输入描述:
// 二叉树的镜像定义：源二叉树 
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11
//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  if (!root) {
    return
  }
  if (!root.left && !root.right) {
    return
  }
  // 交换左子树和右子树
  const temp = root.left
  root.left = root.right
  root.right = temp
  // 不断递归，直到叶子节点
  if (root.left) {
    Mirror(root.left)
  }
  if (root.right) {
    Mirror(root.right)
  }
  return root
}
