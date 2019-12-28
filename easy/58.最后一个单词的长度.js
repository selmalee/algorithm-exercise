/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) {
    return 0
  }
  const len = s.length
  let start = 0 // 最后一个字符串的开始索引
  let end = -1 // 最后一个字符串的结束索引
  for (let i = len - 1; i > -1; i--) {
    if (s[i] === ' ' && i < len - 1 && s[i + 1] !== ' ') {
      start = i + 1
      break
    } else if (s[i] !== ' ' && end === - 1) {
      end = i
    }
  }
  return end - start + 1
  // // 也可以用string.split(' ')转成数组，输出最后一个元素的长度
  // const arr = s.trim().split(' ')
  // return arr[arr.length - 1].length
};
// @lc code=end

