// 题目描述
// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function ReverseList(pHead) {
  // 调整一个节点i的next指针，得先知道上一个节点，并先把i.next保存起来，以防止链表断开
  let pPrev = null // 上一个节点（尾节点指向null）
  let pNode = pHead // 当前节点
  let pReverseHead = null // 反转链表之后的表头
  while(pNode !== null) {
    const pNext = pNode.next // 原表中的下一个节点
    if (pNext === null) {
      pReverseHead = pNode
    }
    pNode.next = pPrev // 指向上一个节点
    pPrev = pNode
    pNode = pNext
  }
  return pReverseHead
}


// const list = {
//   val: 1,
//   next: {
//     val: 2,
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
// }
// console.dir(ReverseList(list),{depth:null})
