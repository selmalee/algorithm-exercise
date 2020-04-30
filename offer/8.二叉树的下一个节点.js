// 题目描述
// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
// 中序遍历 左-根-右

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
  if (!pNode) {
    return null
  }
  let nextNode = null
  // 如果存在右子树，看它的右结点是否还有左结点，如果有，往下寻找右结点的左结点，直到找到最后一个左结点，该左结点就是下一个结点；否则就是该右结点
  if (pNode.right) {
    nextNode = pNode.right
    while (nextNode.left) {
      nextNode = nextNode.left
    }
  // 如果不存在右子树，则往上寻找父节点
  } else {
    nextNode = pNode.next
    if (nextNode && nextNode.right == pNode) {
      // 如果该父节点是某节点的右结点则一直往上寻找
      while (nextNode.next && nextNode.next.right == nextNode) {
        nextNode = nextNode.next
      }
      // 如果该父节点没有父节点，则下一个节点为null
      if (!nextNode.next) {
        nextNode = null
      // 如果该父节点是某节点的左结点，则下一个节点就是该父节点的根结点
      } else {
        nextNode = nextNode.next
      }
    }
  }
  return nextNode
}
