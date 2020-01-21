/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let hash = {}
  let hashMid = {}
  const len = nums.length
  let res = []
  nums = nums.sort()
  console.log(nums)
  for (let i = 0; i < len; i++) {
    const num1 = nums[i]
    for (let j = i + 1; j < len; j++) {
      const num2 = nums[j]
      if (hash[num1 + num2] !== undefined) {
        if (hashMid[num1] !== hash[num1 + num2]) {
          res.push([hash[num1 + num2], num1, num2])
        }
        hashMid[num1] = hash[num1 + num2]
      }
    }
    hash[-num1] = num1
  }
  return res
};
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))
// @lc code=end

