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
  // 方案一
  // let arrayList = [];
  // while (head) {
  //   arrayList.unshift(head.val);
  //   head = head.next;
  // }
  // 方案二
  let arrayList = []
  if (head) {
    if (head.next) {
      arrayList = arrayList.concat(printListFromTailToHead(head.next))
    }
    arrayList.push(head.val)
  }
  return arrayList
}

function ListNode(x){
  this.val = x;
  this.next = null;
}
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);
node1.next.next.next = new ListNode(4);
console.log(printListFromTailToHead(node1))
