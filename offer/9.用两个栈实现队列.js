// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 操作两个“先进后出”的栈来实现一个“先进先出”的队列
let stack1 = []
let stack2 = []
// 插入到stack1中
function push(node)
{
  stack1.push(node)
}
function pop()
{
  // 如果为空，从stack1中逐个弹出并压到stack2中
  if (stack2.length === 0) {
    // 如果stack1也为空，则队列为空
    if (stack1.length === 0) {
      throw new Error('the queue is empty')
    }
    while(stack1.length > 0) {
      stack2.push(stack1.shift())
    }
  }
  // 从stack2弹出并返回
  const head = stack2.shift()
  return head
}