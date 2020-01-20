/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 计算Math.max((j - i) * Math.min(ai, aj))
// 方案一：暴力法，时间复杂度：O(n^2)
// var maxArea = function(height) {
//   let max = 0
//   if (!height) {
//     return max
//   }
//   const len = height.length
//   if (len < 2) {
//     return max
//   }
//   for (let i = 0; i < len; i++) {
//     for (let j = 1; j < len; j++) {
//       const area = (j - i) * Math.min(height[i], height[j])
//       if (area > max) {
//         max = area
//       }
//     }
//   }
//   return max
// };

// 方案二：考虑到最大值时，i与j不会重合（除非最大值是0），且高度相同时i与j相距越远，面积越大，不妨分别作为头尾指针。另外，当距离缩小时，只有高度越高，面积才有可能越大，因此每次循环中比较ai与aj，如果ai较小则i++，否则j--。时间复杂度：O(n)
var maxArea = function(height) {
  let max = 0
  if (!height) {
    return max
  }
  const len = height.length
  if (len < 2) {
    return max
  }
  let i = 0, j = len - 1
  while(i < j) {
    const area = (j - i) * Math.min(height[i], height[j])
    if (area > max) {
      max = area
    }
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return max
};
// @lc code=end

