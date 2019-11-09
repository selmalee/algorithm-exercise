/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  let result = strs[0]
  for (let i = 0, len = strs.length; i < len; i++) {
    if (result === '') {
      break
    }
    for (let j = 0; j < result.length; j++) {
      if (result[j] !== strs[i][j]) {
        result = result.substring(0, j)
        break
      }
    }
  }
  return result
};

