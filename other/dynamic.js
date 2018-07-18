// 斐波那契数列
// 递归 执行效率很低，太多值在递归调用中被重新计算
function recurFib(n) {
  if (n < 2) {
    return n
  } else {
    return recurFib(n - 1) + recurFib(n - 2)
  }
}

// 动态规划
function dynFib(n) {
  if (n < 3) {
    const fib = n < 2 ? n : 1
    return fib
  } else {
    const val = new Array(n + 1)
    val[1] = 1
    val[2] = 1
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2]
    }
    return val[n]
  }
}
