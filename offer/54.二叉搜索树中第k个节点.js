// 题目描述
// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

function KthNode(pRoot, k) {
  if (!pRoot || k < 1) {
    return null
  }
  let count = 0
  function core(pRoot, k) {
    let target = null
    if (pRoot.left) {
      target = core(pRoot.left, k)
    }
    count++
    if (count === k) {
      target = pRoot
    }
    if (target === null && pRoot.right) {
      target = core(pRoot.right, k)
    }
    return target
  }
  return core(pRoot, k)
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

// console.log(KthNode(tree, 3))
