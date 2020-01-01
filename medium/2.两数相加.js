/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode() // 结果链表
  let node = res // 当前节点
  let count = 0 // 记录进位数
  // 逆序，从头节点开始相加
  while(l1 || l2) {
    // l1,l2当前节点相加
    const num = (Number(l1 && l1.val) || 0) + (Number(l2 && l2.val) || 0)
    // 处理进位，赋值给结果链表当前节点
    if (count + num > 9) {
      node.val = count + num - 10
      count = 1
    } else {
      node.val = count + num
      count = 0
    }
    // l1,l2进入下一个节点
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    // 结果链表进入下一个节点
    if (l1 || l2) {
      node.next = new ListNode()
      node = node.next
    }
  }
  // 最后一位进位
  if (count > 0) {
    node.next = new ListNode(count)
  }
  // 返回链表（逆序）
  return res
};

// const l1 = new ListNode(1)
// l1.next = new ListNode(8)
// const l2 = new ListNode(0)
// // l2.next = new ListNode(2)
// console.log(addTwoNumbers(l1, l2))
// @lc code=end

