/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.length === 0) {
    return NaN
  }
  let sum = 0
  let maxSum = nums[0]
  // 如果前面的元素和为负数，相加比当前元素小，因此去掉前面的元素
  for (let i = 0, len = nums.length; i < len; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
};
// @lc code=end

