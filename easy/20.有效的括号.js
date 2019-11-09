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
  if (s.length === 1 || (s.length > 1 && !(/[\)\]\}]/.test(s)))) {
    return false
  }
  let stack = []
  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]
    // 遇到左括号存储到栈中，遇到右括号就从栈中取值比对
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item)
    } else if (item === ')') {
      if (stack.pop() !== '(') {
        return false
      }
    } else if (item === ']') {
      if (stack.pop() !== '[') {
        return false
      }
    } else if (item === '}') {
      if (stack.pop() !== '{') {
        return false
      }
    }
  }
  // 如果栈中还有左括号则返回false
  if (stack.length > 0) {
    return false
  }
  return true
};
// @lc code=end

