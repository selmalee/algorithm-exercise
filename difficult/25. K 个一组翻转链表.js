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
  let pNode = head;
  let pHead = head; // 要翻转的链表的头
  let i = 0;
  while (pNode) {
    const pNext = pNode.next;
    i++;
    // 翻转一段链表
    if (i === k) {
      reverse(pHead, pNode);
      pHead = pNext; // 设置下一段要翻转的链表的头
      pHead.next = pNode; // 连接上一段的尾
      i = 0;
    }
    pNode = pNode.next;
  }
  return head;
};

var reverse = function(head, tail) {
  let pPre = null;
  let pNode = head;
  while(pNode !== tail) {
    const pNext = pNode.next;
    pNode.next = pPre;
    pPre = pNode;
    pNode = pNext;
  }
  return head;
}

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    }
  }
}
console.dir(reverseKGroup(list),{depth:null});