// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：
// 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let pHead = head; // 要翻转的链表的头
  let pNextHead = head; // 当前节点
  let newHead = head; // 结果链表的头
  for (let i = 0; i < k; i++) {
    // 不足k个，不需要反转
    if (!pNextHead) {
      return head;
    }
    pNextHead = pNextHead.next;
  }
  if (k > 1) {
    // 反转k个元素
    newHead = reverse(pHead, pNextHead);
    // 递归，并连接下一个反转链表
    pHead.next = reverseKGroup(pNextHead, k);
  }
  return newHead;
};

/**
 * @param {ListNode} head 要翻转的链表头
 * @param {ListNode} pNextHead 下一个要翻转的链表头
 * @return {*} 
 */
var reverse = function(head, pNextHead) {
  let pNode = head;
  let pPre = null;
  while(pNode !== pNextHead) {
    const pNext = pNode.next;
    pNode.next = pPre;
    pPre = pNode;
    pNode = pNext;
  }
  // console.log('reverse', pPre)
  return pPre;
}

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: null
            }
          }
        }
      }
    }
  }
}
console.dir(reverseKGroup(list, 1),{depth:null});