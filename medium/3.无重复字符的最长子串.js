/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let subS = '' // 不重复子串。考虑到子串是连续的，且可使用indexOf来检查是否有重复字符，因此用字符串来存储
  let maxCount = 0 // 最长不重复子串长度
  if (!s) {
    return maxCount
  }
  // 遍历，计算连续子串
  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i];
    const id = subS.indexOf(item);
    if (id === -1) {
      // 计算最长连续子串长度
      subS += item;
      maxCount = subS.length > maxCount ? subS.length : maxCount
    } else {
      // 如果有重复的字符，回溯到重复的字符首次出现的索引+1，重新计算
      subS = subS.substring(id + 1);
      subS += item;
    }
  }
  return maxCount
};
// @lc code=end

