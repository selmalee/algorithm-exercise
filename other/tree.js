// 中序遍历
function midWalkTree(node) {
  let array = []
  if (node.left) {
    array = array.concat(midWalkTree(node.left))
  }
  array.push(node.val)
  if (node.right) {
    array = array.concat(midWalkTree(node.right))
  }
  return array
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
