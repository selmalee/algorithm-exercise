/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let count = 0
  let countI = 0
  let countX = 0
  let countC = 0
  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i]
    const num = map[item]
    // 记录I、X、C
    if (item === 'I') {
      countI += num
    } else if (item === 'X') {
      countX += num
    } else if (item === 'C') {
      countC += num
    }
    // 特殊逻辑
    if ((item === 'V' || item === 'X') && i > 0 && s[i - 1] === 'I') {
      count -= countI * 2
      console.log(countI, count)
    } else if ((item === 'L' || item === 'C') && i > 0 && s[i - 1] === 'X') {
      count -= countX * 2
    } else if ((item === 'D' || item === 'M') && i > 0 && s[i - 1] === 'C') {
      count -= countC * 2
    }
    count += num
  }
  return count
}
// @lc code=end

