/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (!nums || nums.length < 3) {
    return NaN
  }
  const len = nums.length
  let diff = target - (nums[0] + nums[1] + nums[len - 1])
  // 数组升序排序
  nums.sort((a, b) => a - b)
  // 遍历数组，nums[i]为第一个数
  for (let i = 0; i < len; i++) {
    let s = i + 1 // 第二个数指针
    let t = len - 1 // 第三个数指针
    while(s < t) {
      const sum = nums[i] + nums[s] + nums[t]
      if (sum === target) {
        return target
      } else if (sum > target) {
        t--
      } else {
        s++
      }
      // 记录最接近target的相差值
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum
      }
    }
  }
  return target - diff
};
// @lc code=end

