// 深度优先遍历
// 前序遍历 根-左-右
// （中序：左-根-右；后序：左-右-根）
var dfs = function (treeNode) {
  let res = []
  if (!treeNode) {
    return res
  }
  res.push(treeNode.val)
  // 遍历左子树直到叶子节点
  res = res.concat(dfs(treeNode.left))
  // 遍历右子树直到叶子节点
  res = res.concat(dfs(treeNode.right))
  return res
}

// 广度优先遍历
var bfs = function (treeNode) {
  let queue = [treeNode] // 接下来要遍历的节点
  let res = []
  while(queue.length !== 0) {
    var node = queue.shift() // 当前节点
    res.push(node.val)
    // 把左节点和右节点放到队列中等待遍历
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return res
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
// console.log(tree)

// console.log(midWalkTree(tree))

// 红黑树是一个效率很高且稳定的数据结构，插入和删除操作的时间复杂度都是logn。红黑树通过规则确保从根节点到叶节点的最长路径的长度不超过最短路径的两倍。
// 红黑树的性质：

// 1. 每一个节点或者着红色，或者着黑色
// 2. 根是黑色
// 3. 如果一个节点是红色的，那么它的子节点必须是黑色
// 4. 从一个节点到一个Null节点（树叶）的每一条简单路径必须包含相同数目的黑色节点