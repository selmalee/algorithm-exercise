// 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

// 保证base和exponent不同时为0

// 需要考虑base等于0且exponent小于0或等于0的情况；exponent等于0的情况；exponent小于0的情况。
// function Power(base, exponent) {
//   if (base === 0 && exponent <= 0) {
//     throw new Error('invalid input')
//   }
//   if (exponent === 0) {
//     return 1
//   }
//   let result = 1
//   const absExponent = exponent < 0 ? -exponent : exponent // 指数小于0的情况
//   for (let i = 1; i <= absExponent; i++) {
//     result *= base
//   }
//   result = exponent < 0 ? 1 / result : result
//   return result
// }

// 优化方案
function Power(base, exponent) {
  if (base === 0 && exponent <= 0) {
    throw new Error('invalid input')
  }
  if (exponent === 0) {
    return 1
  }
  let result = 1
  const absExponent = exponent < 0 ? -exponent : exponent
  result = PowerWithUnsignedExponent(base, absExponent)
  result = exponent < 0 ? 1 / result : result
  return result
}

// 如果n为偶数，a^n=a^(n/2)*a^(n/2)；如果n为奇数，a^n=a^((n-1)/2)*a^((n-1)/2)*a。利用递归方法，即先求a^(Math.floor(n/2))，即a^(n >> 1)；再平方；再判断是否奇数，如果是奇数再乘以a
function PowerWithUnsignedExponent(base, exponent) {
  if (exponent === 0) {
    return 1
  }
  if (exponent === 1) {
    return base
  }
  let result = PowerWithUnsignedExponent(base, (exponent >> 1)) // 用右移运算符代替，位运算的效率比乘除法效率高得多
  result *= result // 平方
  // 如果是奇数再乘以base
  if (exponent & 1 === 1) { // 位运算的效率比求余运算效率更高
    result *= base
  }
  return result
}

// console.log(Power(2, 3))