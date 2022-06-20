/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度：O(|s|)，其中 |s| 是字符串 s 的长度。
 * 空间复杂度：O(1)。
 */
var isPalindrome = function(s) {
  const len = s && s.length;
  if (len < 2) {
    return true;
  }
  let i = 0;
  let j = len - 1;
  while(i < j) {
    if (!/[0-9a-zA-Z]/.test(s[i])) {
      i++;
      continue;
    }
    if (!/[0-9a-zA-Z]/.test(s[j])) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

