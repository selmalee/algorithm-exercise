// 题目描述
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 与跳台阶的思路一样
// n = 1时，一种方法；n = 2时，两种方法；n > 2时，如果第一个竖着放，则与n-1的方法数相同，如果横着放，则与n - 2的方法数相同，即f(n) = f(n - 1) + f(n - 2) 与斐波那契数列一致

function rectCover(number)
{
  let count = [0, 1, 2]
  if (number < 3) {
    return count[number]
  }
  for (let i = 3; i < number + 1; i++) {
    count[i] = count[i - 1] + count[i - 2]
  }
  return count[number]
}