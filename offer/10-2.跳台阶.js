// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

// 当n>2时，第一次跳有两种可能，一是跳1级，跳法数目就等于后面剩下的n-1级台阶的跳法数目，即f(n-1)；二是跳2级，跳法数目就等于后面剩下的n-2级台阶的跳法数目，即f(n-2)。所以f(n) = f(n - 1) + f(n - 2)，即斐波那契数列。
function jumpFloor(number)
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

// 变态跳台阶
// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// 设f(0) = 1
// 即f(n) = f(n - 1) + f(n - 2) + f(n - 3) + ... + f(0)
// 即f(n) = f(n - 1) + f(n - 1)
// 即f(n) = 2*f(n - 1)

function jumpFloorII(number)
{
    let count = [0, 1]
    if (number < 2) {
      return count[number]
    }
    for (let i = 2; i < number + 1; i++) {
      count[i] = 2 * count[i - 1]
    }
    return count[number]
}
