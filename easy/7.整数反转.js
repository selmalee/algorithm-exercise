/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (isNaN(x)) {
    return 0
  }
  const absNum = x < 0 ? Math.abs(x) : x
  let resNum = Number(absNum.toString().split('').reverse().join(''))
  resNum = x < 0 ? -resNum : resNum
  return (resNum < -2147483648 || resNum > 2147483647) ? 0 : resNum
};
// @lc code=end

