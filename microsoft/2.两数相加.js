/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 由于输入的两个链表都是逆序存储数字的位数的，因此两个链表中同一位置的数字可以直接相加。我们同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。
 * 时间复杂度：O(max(m,n))，其中 m 和 n 分别为两个链表的长度。我们要遍历两个链表的全部位置，而处理每个位置只需要 O(1) 的时间。
 * 空间复杂度：O(1)。注意返回值不计入空间复杂度。
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let headPre = new ListNode(-1);
  let cur = headPre;
  let carry = 0;
  while(l1 || l2) {
    const sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry;
    cur.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    cur = cur.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return headPre.next;
};
// @lc code=end


// console.log(addTwoNumbers(new ListNode(2, new ListNode(1)), new ListNode(3)))