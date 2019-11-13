// 题目描述
// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 方案一：后进先出，想到用栈实现。可以依次存到数组中，再逐个pop()存到新数组中
// 方案二：而递归本质上是栈结构，所以想到用递归实现。但这个方案有可能导致函数调用栈溢出。鲁棒性不够好。
function printListFromTailToHead(head)
{
  let arrayList = []
  if (head) {
    if (head.next) {
      arrayList = arrayList.concat(printListFromTailToHead(head.next))
    }
    arrayList = arrayList.concat([head.val])
  }
  return arrayList
}
