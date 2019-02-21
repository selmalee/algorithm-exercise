/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.23%)
 * Total Accepted:    36.4K
 * Total Submissions: 150.1K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
function checkReverse(s, i, j) {
  if (j - i === 1) {
    return true
  }
  while(j - i > 0) {
    if (s[++i] !== s[--j]) {
      return false
    }
  }
  return true
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) {
    return ''
  }
  const len = s.length
  let res = ''
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j >= 0; j--) {
      if (s[i] === s[j] && (j - i + 1) > res.length) {
        const isReverse = checkReverse(s, i, j)
        if (isReverse) {
          res = s.substring(i, j + 1)
        }
      }
    }
  }
  return res ? res : s[0]
};
