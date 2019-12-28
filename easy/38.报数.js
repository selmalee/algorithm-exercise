/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 方案二： 只有1有可能重复，利用正则匹配
var countAndSay = function(n) {
  let str = '1'
  for(let i = 2; i<=n; i++) {
    str = str.replace(/(\d)\1*/g, item => {
      return `${item.length}${item[0]}`
    })
  }
  return str
}
// 方案一：递归
// var countAndSay = function(n) {
//   if (n === 1) {
//     return '1'
//   }
//   const str = countAndSay(n - 1)
//   let count = 1
//   let numId = 0
//   let resultStr = ''
//   const len = str.length
//   if (len > 1) {
//     for (let i = 1, len = str.length; i < len; i++) {
//       if (str[i] === str[i - 1]) {
//         count++
//       } else {
//         resultStr += count.toString() + str[numId].toString()
//         count = 1
//         numId = i
//       }
//     }
//   }
//   resultStr += count.toString() + str[numId].toString()
//   return resultStr
// };
// @lc code=end

