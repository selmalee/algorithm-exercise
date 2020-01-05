/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) {
    return s
  }
  let resArr = new Array(numRows).fill('') // 用数组表示，每一行用字符串表示
  let isDown = true // true为向下，false为向上
  let id = 0 // 数组索引
  for (let i = 0, len = s.length; i < len; i++) {
    resArr[id] += s[i]
    // 向下索引（行数）递增，向上递减
    if (isDown) {
      id++
    } else {
      id--
    }
    // 到数组的末尾或第一个时，改变方向
    if (id === numRows - 1 || id === 0) {
      isDown = !isDown
    }
  }
  // 输出结果
  return resArr.join('')
};
// @lc code=end

