/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 返回错误
  if (s.length === 1) {
    return false
  }
  const brackets = '({[]})'
  let stack = [] // 存储左括号的左brackets的id
  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]
    // 如果是不合法字符，则返回错误
    if (brackets.indexOf(item) === -1) {
      return false
    }
    // 遇到左括号把id存储到栈中，遇到右括号就从栈中取值相加，判断是否等于5（等差数列求和思想）
    const bracketsId = brackets.indexOf(item)
    if ('({['.indexOf(item) !== -1) {
      stack.push(bracketsId)
    } else if (bracketsId + stack.pop() !== 5) {
      return false
    }
  }
  // 如果栈中还有左括号则返回false
  return stack.length === 0
};

// @lc code=end

