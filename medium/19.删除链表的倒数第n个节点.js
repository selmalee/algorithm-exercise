/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || n < 1) {
    throw new Error('param error')
  }
  // 一趟扫描，用两个指针，一个指针指向当前节点；另一个指针为当前节点+n。
  let current = head // 当前节点
  let currentN = head // 当前节点+n
  let count = 0
  while(count < n) {
    if (!currentN) {
      throw new Error('the node does not exist')
    }
    currentN = currentN.next
    count++
  }
  // 如果当前节点+n已经到了链表末尾的下一个节点，当前节点就是倒数第n个节点。即删除头节点。
  if (!currentN) {
    return head.next
  }
  // 最后当前节点+n指向链表末尾，当前节点的下一个节点则为倒数第n个节点。
  while(currentN) {
    currentN = currentN.next
    if (!currentN) {
      // 删除倒数第n个节点
      current.next = current.next.next
      return head
    } else {
      current = current.next
    }
  }
};
// @lc code=end

