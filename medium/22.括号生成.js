/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
// 方法一：暴力法。先列出所有可能性（2^2n个），再判断是否合法。用递归方法列出可能性，因为本身是二叉树。
// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function(n) {
//   if (n < 1) {
//     return []
//   }
//   // 列出所有可能性
//   const L = '('
//   let list = []
//   // 可以确定第一个是左括号
//   generateParenthesisCore(list, L, n)
//   console.log(list)
//   // 判断是否合法
//   let res = []
//   for (let i = 0, len = list.length; i < len; i++) {
//     if (isCorrect(list[i], L)) {
//       res.push(list[i])
//     }
//   }
//   return res
// };

// var generateParenthesisCore = function(res, str, n) {
//   if (str.length === n * 2) {
//     res.push(str)
//     return
//   }
//   const L = '('
//   const R = ')'
//   generateParenthesisCore(res, str + L, n)
//   generateParenthesisCore(res, str + R, n)
// }

// var isCorrect = function(str, L) {
//   let stack = []
//   // 用栈存储，如果是左括号则入栈，如果是右括号则检查斩顶是否左括号。
//   for (let j = 0, len = str.length; j < len; j++) {
//     if (str[j] === L) {
//       stack.push(L)
//     } else if (stack.pop() === L) {
//       continue
//     } else {
//       return false
//     }
//   }
//   // 最后检查栈内是否空。
//   if (stack.length === 0) {
//     return true
//   }
// }

// 方法二：回溯法。递归过程中，只有合法时才加入。
// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function(n) {
//   if (n < 1) {
//     return []
//   }
//   // 可以确定第一个是左括号
//   const L = '('
//   let res = []
//   generateParenthesisCore(res, L, 1, 0, n)
//   return res
// };

// var generateParenthesisCore = function(res, str, lCnt, rCnt, n) {
//   if (str.length === n * 2) {
//     res.push(str)
//     return
//   }
//   const L = '('
//   const R = ')'
//   // 左括号数量需要小于n，右括号数量需要小于左括号数量
//   if (lCnt < n) {
//     generateParenthesisCore(res, str + L, lCnt + 1, rCnt, n)
//   }
//   if (rCnt < lCnt) {
//     generateParenthesisCore(res, str + R, lCnt, rCnt + 1, n)
//   }
// }

// 方法三：动态规划
// n对合法括号可以通过以下形式构造 f(n) = '(' + f(p) + ')' + f(q)，即"(" + 【i=p时所有括号的排列组合】 + ")" + 【i=q时所有括号的排列组合】。
// 其中 p + q = n - 1，且 p q 均为非负整数。事实上，当上述 p 从 0 取到 n-1，q 从 n-1 取到 0 后，所有情况就遍历完了。
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n < 1) {
    return ['']
  }
  let res = []
  // 每一对括号，左括号索引+右括号索引=n-1
  for (let i = 0; i < n; i++) {
    const left = generateParenthesis(i)
    for (let j = 0, leftLen = left.length; j < leftLen; j++) {
      const right = generateParenthesis(n - 1 - i)
      for (let k = 0, rightLen = right.length; k < rightLen; k++) {
        res.push('(' + left[j] + ')' + right[k])
      }
    }
  }
  // console.log(res)
  return res
};
// generateParenthesis(3)
// @lc code=end

