// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
// 前序遍历：根->左->右
// 中序遍历：左->根->右

function reConstructBinaryTree(pre, vin)
{
  if (pre.length === 0) {
    return null
  }
  const root = pre[0] // 前序遍历的第一个节点为根节点
  if (pre.length > 1) {
    const vinRootId = vin.indexOf(root)
    if (vinRootId === -1) { // 鲁棒性
      throw new Error('invalid input')
    }
    const vinLeftTree = vin.slice(0, vinRootId) // 中序左子树，中序中根节点左边的是左子树
    const vinRightTree = vin.slice(vinRootId + 1) // 中序右子树，中序中根节点右边的是右子树
    pre.shift()
    const preLeftTree = pre.slice(0, vinLeftTree.length) // 前序左子树
    const preRightTree = pre.slice(vinLeftTree.length) // 前序右子树
    // 递归，返回节点
    return {
      val: root,
      left: reConstructBinaryTree(preLeftTree, vinLeftTree),
      right: reConstructBinaryTree(preRightTree, vinRightTree)
    }
  } else {
    return {
      val: root,
      left: null,
      right: null
    }
  }
}
