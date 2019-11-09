/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 利用归并排序的思想
  let list = new ListNode(null)
  let tmpList = list // 浅拷贝，tmpList和list都指向根结点
  while(l1 && l2) {
    if (l1.val < l2.val) {
      tmpList.next = l1
      l1 = l1.next
    } else {
      tmpList.next = l2
      l2 = l2.next
    }
    tmpList = tmpList.next // 浅拷贝下一个节点，tmpList增加属性即下一个节点增加属性
  }
  tmpList.next = l1 || l2 // l1 或者 l2 剩下的直接赋值给下一个节点
  return list.next
}
// @lc code=end

