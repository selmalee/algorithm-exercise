// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层序遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let res = [];
  let layerRes = [];
  let queue = [root];
  let isOrderLeft = true; // 遍历的顺序，从左到右或从右到左
  while (queue.length !== 0) {
    const queueLen = queue.length;
    // 遍历每一层，并存储到layerRes
    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      const action = isOrderLeft ? 'push' : 'unshift';
      layerRes[action](node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    // 一层遍历结束，更改遍历顺序
    res.push(layerRes);
    layerRes = [];
    isOrderLeft = !isOrderLeft;
  }
  return res;
};