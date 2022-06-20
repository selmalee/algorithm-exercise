/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!(intervals && intervals.length)) {
    return intervals;
  }
  const sorted = [...intervals];
  sorted.sort((a, b) => a[0] - b[0]);
  let results = [];
  let interval = sorted[0];
  for (let i = 1, len = sorted.length; i < len; i++) {
    const item = sorted[i];
    if (item[0] <= interval[1]) {
      // 重叠
      interval[1] = Math.max(item[1], interval[1]);
    } else {
      // 不重叠
      results.push(interval); // push上一个区间
      interval = item;
    }
  }
  results.push(interval); // push最后一个区间
  return results;
};


// @lc code=end

