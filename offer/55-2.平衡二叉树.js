// 题目描述
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 任何一个节点的左右子树的深度相差小于等于1，则为平衡二叉树
// 方案一：最直接的做法，自上而下遍历（前序遍历），计算每个节点的左右子树的深度。但有大量重复计算。
// function IsBalanced_Solution(pRoot) {
//   if (!pRoot) {
//     return true
//   }
//   const leftDepth = TreeDepth(pRoot.left)
//   const rightDepth = TreeDepth(pRoot.right)
//   if (Math.abs(leftDepth - rightDepth) <= 1) {
//     return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
//   } else {
//     return false
//   }
// }

// function TreeDepth(pRoot) {
//   if (!pRoot) {
//     return 0
//   }
//   const leftDepth = TreeDepth(pRoot.left)
//   const rightDepth = TreeDepth(pRoot.right)
//   return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1
// }

// 方案二：采用自下而上遍历（后序遍历），时间复杂度更优。
function IsBalanced_Solution(pRoot) {
  if (!pRoot) {
    return true
  }
  return TreeDepth(pRoot) !== false
}
// 在计算深度的同时就能判断深度
function TreeDepth(pRoot) {
  if (!pRoot) {
    return 0
  }
  const leftDepth = TreeDepth(pRoot.left)
  const rightDepth = TreeDepth(pRoot.right)
  // 只要有一个节点不是平衡二叉树，则不是平衡二叉树
  if (leftDepth === false || rightDepth === false || Math.abs(leftDepth - rightDepth) > 1) {
    return false
  }
  return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1
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

// console.log(IsBalanced_Solution(tree))
