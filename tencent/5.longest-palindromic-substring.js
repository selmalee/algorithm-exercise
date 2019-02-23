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
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s
  }
  let max = 0, left = 0
  for (let i = 0, len = s.length; i < len; i++) {
    if(max + 1 > (len - i) * 2) {
      break
    }
    let l = i, r= i
    // 找到连续相同元素（中心），此时i为中心的最左端，r为中心的最右端
    while(r < len - 1 && s[l] === s[r + 1]) {
      r++
    }
    // 对比中心的左右
    while(l > 0 && r < len - 1 && s[l - 1] === s[r + 1]) {
      l--
      r++
    }
    // 检查是否最长子串
    if (r - l > max) {
      max = r - l
      left = l
    }
  }
  return s.substring(left, left + max + 1)
};

