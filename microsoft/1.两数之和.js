/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};
  let result = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (hash[target - nums[i]] !== undefined) {
      result = [i, hash[target - nums[i]]];
      break;
    }
    hash[nums[i]] = i;
  }
  return result;
};
// @lc code=end

