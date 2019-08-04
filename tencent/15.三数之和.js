/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  nums.sort()
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return
  }
  
  return result
};

