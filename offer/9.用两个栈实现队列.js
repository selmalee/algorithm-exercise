// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 操作两个“先进后出”的栈来实现一个“先进先出”的队列
function Queue() {
  let stack1 = []
  let stack2 = []
  // 从尾部插入
  this.enqueue = function (node) {
    // 插入到stack1中
    stack1.push(node)
  }
  // 从头部抽出
  this.dequeue = function () {
    // 如果为空，从stack1中逐个弹出并压到stack2中
    if (stack2.length === 0) {
      // 如果stack1也为空，则队列为空
      if (stack1.length === 0) {
        throw new Error('the queue is empty')
      }
      while(stack1.length > 0) {
        stack2.push(stack1.pop())
      }
    }
    // 从stack2弹出并返回
    const head = stack2.pop()
    return head
  }
}

// const q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)
// q.enqueue(6)
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())

