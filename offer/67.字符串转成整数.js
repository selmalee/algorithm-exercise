// 题目描述
// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
// 输入描述:
// 输入一个字符串,包括数字字母符号,可以为空
// 输出描述:
// 如果是合法的数值表达则返回该数字，否则返回0
// 示例1
// 输入
// +2147483647
// 1a33
// 输出
// 2147483647
// 0

// 第一个字符可以是+,-或者数字，其他字符必须为数字。如果是数字，利用str[i] - '0'转为数字；否则返回0。
// 考虑溢出，如果在范围-2^31~2^31-1外，报错，返回0
// 考虑空字符串，考虑只有一个字符且字符为+,-，返回0
function StrToInt(str) {
  if (!str) {
    return 0
  }
  const start = (str[0] === '+' || str[0] === '-') ? 1 : 0 // 考虑第一位是+或-
  let res = 0 // 结果
  for (let i = start, len = str.length; i < len; i++) {
    if (!(str[i] >= 0 && str[i] <= 9)) {
      return 0 // 不合法字符
    }
    res = (res << 1) + (res << 3) + (str[i] & 0xf) // 同res = res * 10 + (str[i] - '0')。位运算更快，10(10) = 1010(2)，因此左移1位+左移3位。0xf为15(16)，等于1111(2)。& 0xf即转为数字。
  }
  // 处理负数情况
  if (str[0] === '-') {
    res *= -1
  }
  // 检查有没有溢出
  return (res >= 2147483648 || res < -2147483648) ? 0 : res
}

// console.log(StrToInt('+123'))
// console.log(StrToInt('-123'))
// console.log(StrToInt('123'))
// console.log(StrToInt('21474836489'))
// console.log(StrToInt('='))
// console.log(StrToInt('1a2s'))
// console.log(StrToInt('+'))
