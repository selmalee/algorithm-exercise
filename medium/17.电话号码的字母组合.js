/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 大问题由小问题组成，动态规划思想。在上一个结果的基础上加上下一个字符
var letterCombinations = function(digits) {
  const hash = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let lastRes = [] // 　上一个结果
  for (let i = 0, len = digits.length; i < len; i++) {
    const str = hash[digits[i]]
    let currentRes = [] // 当前结果
    // 在上一个结果的基础上加上下一个字符
    for (let j = 0, lenStr = str.length; j < lenStr; j++) {
      const itemArr = i === 0 ? [str[j]] : lastRes.map(item => item + str[j])
      currentRes = currentRes.concat(itemArr)
    }
    lastRes = currentRes // 记录上一个结果
  }
  return lastRes
};

// @lc code=end
