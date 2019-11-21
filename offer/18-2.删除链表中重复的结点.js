// 题目描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
  if (!pHead) {
    return null
  }
  let pNode = pHead
  let preNode = null // 记录上一个节点
  while(pNode !== null) {
    let pNext = pNode.next
    if (pNext && pNext.val === pNode.val) {
      // 如果与下一个节点的值相同，一直找出所有相同的节点并删除
      while (pNext && pNext.val === pNode.val) {
        pNext = pNext.next
      }
      // 最后删除当前节点
      if (preNode) {
        preNode.next = pNext
      } else {
        pHead = pNext // 如果是头结点，没有上一个节点
      }
      pNode = pNext
    } else {
      // 如果与下一个节点的值不同，记录上一个节点为当前节点并进入下一个节点
      preNode = pNode
      pNode = pNext
    }
  }
  return pHead
}

// console.dir(deleteDuplication({
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 3,
//       next: {
//         val: 3,
//         next: {
//           val: 4,
//           next: {
//             val: 4,
//             next: {
//               val: 5,
//               next: null
//             }
//           }
//         }
//       }
//     }
//   }
// }),{depth:null})
