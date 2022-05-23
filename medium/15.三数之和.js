/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方案一：哈希表+暴力查找 时间复杂度O(n^2)
// var threeSum = function(nums) {
//   let hash = {}
//   let hashMid = {}
//   const len = nums.length
//   let res = []
//   nums = nums.sort()
//   for (let i = 0; i < len; i++) {
//     const num1 = nums[i]
//     for (let j = i + 1; j < len; j++) {
//       const num2 = nums[j]
//       if (hash[num1 + num2] !== undefined) {
//         const num0 = hash[num1 + num2]
//         if (hashMid[num0] !== num1) {
//           res.push([num0, num1, num2])
//         }
//         hashMid[num0] = num1
//       }
//     }
//     hash[-num1] = num1
//   }
//   return res
// };

// 方案二：先排序，排序后遍历数字作为第一个数nums[i]，这时第二个数nums[s]肯定在nums[i]的右边，第三个数nums[t]肯定在nums[s]的右边，因此分别用两个指针s,t代替，分别指向i + 1 和 len - 1。
// 每次循环判断nums[i] + nums[s] + nums[t] === 0，如果小于0则s++；如果大于0则t--；如果等于0保存起来，s++，t--。
// 再考虑去重，即每次循环中nums[i] === nums[i - 1]的情况，以及nums[s] === nums[s + 1]和nums[t] === nums[t - 1]的情况。
var threeSum = function(nums) {
  let res = []
  // 鲁棒性
  if (!nums || nums.length < 3) {
    return res
  }
  const len = nums.length
  // 升序排序
  nums = nums.sort((a, b) => a - b)
  // 遍历数组，nums[i]作为第一个数
  for (let i = 0; i < len; i++) {
    let s = i + 1 // 第二个数指针
    let t = len - 1 // 第三个数指针
    // 如果第一个数>0，则提前结束循环
    if (nums[i] > 0) {
      break
    }
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    while(s < t) {
      const num1 = nums[i] // 第一个数
      const num2 = nums[s] // 第二个数
      const num3 = nums[t] // 第三个数
      const sum = num1 + num2 + num3 // 三数之和
      if (sum === 0) {
        // 等于0，目标数组
        res.push([num1, num2, num3])
        // 去重
        while (nums[s] === nums[s + 1]) {
          s++
        }
        while (nums[t] === nums[t - 1]) {
          t--
        }
        s++
        t--
      } else if (sum > 0) {
        t--
      } else {
        s++
      }
    }
  }
  return res
};
// @lc code=end

