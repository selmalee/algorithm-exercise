// 题目描述：
// 给定单向链表的头指针head和一个节点指针p，定义一个函数在O(1)时间删除该节点

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteNode(pHead, pToBeDeleted)
{
  if (!pToBeDeleted) {
    throw new Error('pToBeDeleted is null')
  }
  if (!pHead) {
    return null
  }
  let pNode = pHead
  if (pToBeDeleted.next) {
    // 如果要删除的节点有next属性，则把下一个节点的内容复制到要删除的节点，再把下一个节点删除
    const pNext = pToBeDeleted.next
    pToBeDeleted.val = pNext.val
    pToBeDeleted.next = pNext.next
  } else if (pNode.next === null && pNode.val === pToBeDeleted.val) {
    // 如果只有一个节点且pHead就是要删除的节点就直接置为null
    pHead = null
  } else {
    // 如果要删除的节点位于尾部（没有next），就只能顺序查找
    while(pNode.next.val !== pToBeDeleted.val) {
      pNode = pNode.next
      if (pNode === null) {
        throw new Error('pToBeDeleted does not exist')
      }
    }
    pNode.next = null
  }
  return pHead
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
// console.dir(deleteNode(list, list.next.next),{depth:null})
