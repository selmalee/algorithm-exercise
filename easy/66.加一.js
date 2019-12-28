/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!digits || digits.length === 0) {
    return ''
  }
  const len = digits.length
  for (let i = len - 1; i > -1; i--) {
    if (digits[i] === 9) {
      // 模拟进位
      digits[i] = 0
      // 如果是最高位，那么要在前面补一
      if (i === 0) {
        digits.unshift(1)
      }
    } else {
      // 直接加一
      digits[i] += 1
      break
    }
  }
  return digits
};
// @lc code=end

