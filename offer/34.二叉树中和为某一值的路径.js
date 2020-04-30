// 题目描述
// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 从根结点出发，深度遍历，不难想到用前序遍历二叉树。遍历过程中把节点添加到路径中，直到到达叶子结点，判断是否符合要求，回到父节点前从路径中删除当前节点，再继续访问下一个节点。路径要与递归调用状态一致，而递归调用到本质就是出栈和压栈到过程，因此不难想到用栈来存储路径。
function FindPath(root, expectNumber) {
  if (!root || isNaN(expectNumber)) {
    return []
  }
  let stack = [] // 存储路径
  let result = [] // 存储路径数组
  let sum = 0 // 计算路径之和
  FindPathCore(root, expectNumber, stack, sum, result)
  // console.log(result)
  return result
}

// 递归函数
function FindPathCore(root, expectNumber, stack, sum, result) {
  // 前序遍历二叉树 根-左-右
  stack.push(root.val)
  sum += root.val // 计算路径之和
  if (root.left) {
    FindPathCore(root.left, expectNumber, stack, sum, result)
  }
  if (root.right) {
    FindPathCore(root.right, expectNumber, stack, sum, result)
  }
  // 到达叶子结点，判断路径之和是否等于expectNumber
  if (root.left === null && root.right === null && sum === expectNumber) {
    result.push(stack.concat([]))
  }
  stack.pop() // 回到父节点前，出栈当前节点（因为数组是引用数据类型，回到父节点时stack已被改变）
}

// function TreeNode(x) {
//   this.val = x;
//   this.left = null;
//   this.right = null;
// }
// let tree = new TreeNode(10)
// tree.left = new TreeNode(5)
// tree.right = new TreeNode(12)
// tree.left.left = new TreeNode(4)
// tree.left.right = new TreeNode(7)
// FindPath(tree, 22)
