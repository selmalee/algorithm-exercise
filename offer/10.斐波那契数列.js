// 题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// n<=39

// 方案一：递归来实现。会有很多重复的计算，且重复的个数随着n的增大而增多。有严重的效率问题和调用栈溢出的可能性。
// function Fibonacci(n)
// {
//   if (n < 2) {
//     return n
//   }
//   return Fibonacci(n - 1) + Fibonacci(n - 2)
// }

// 方案二：避免重复计算，把已经得到的数列中间想保存起来，从下往上计算，时间复杂度是O(n)
function Fibonacci(n)
{
  let count = [0, 1]
  if (n < 2) {
    return count[n]
  }
  for (let i = 2; i < n + 1; i++) {
    count[i] = count[i - 1] + count[i - 2]
  }
  return count[n]
}

// 方案三：空间复杂度更低的写法
// function Fibonacci(n) {
//   if(n <= 1) {
//     return n
//   } else {
//     let f0 = 0, f1 = 1
//     for(let i = 2; i <= n; i++) {
//       f2 = f0 + f1
//       f0 = f1
//       f1 = f2
//     }
//     return f2
//   }
// }

