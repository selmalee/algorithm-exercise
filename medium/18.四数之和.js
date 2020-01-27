/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 按“两数之和”和“三数之和”思路，增加一个指针
var fourSum = function(nums, target) {
  let res = []
  if (!nums || nums.length < 4) {
    return res
  }
  const len = nums.length
  // 升序排序
  nums = nums.sort((a, b) => a - b)
  // console.log(nums)
  for (let k = 0; k < len - 3; k++) {
    const num0 = nums[k]
    // 去重
    if (num0 === nums[k - 1]) {
      continue
    }
    // 三数之和思路
    for (let i = k + 1; i < len - 2; i++) {
      const num1 = nums[i]
      // 去重
      if (i - 1 > k && num1 === nums[i - 1]) {
        continue
      }
      // 用两个指针分别指向首尾
      let l = i + 1
      let r = len - 1
      while (l < r) {
        const num2 = nums[l]
        const num3 = nums[r]
        // console.log(num0, num1, num2, num3)
        const sum = num0 + num1 + num2 + num3
        if (sum === target) {
          // 目标数组
          res.push([num0, num1, num2, num3])
          l++
          r--
          // 去重
          while(nums[l] === nums[l - 1]) {
            l++
          }
          while(nums[r] === nums[r + 1]) {
            r--
          }
        } else if (sum < target) {
          l++
          // // 去重
          // while(nums[l] === nums[l - 1]) {
          //   l++
          // }
        } else {
          r--
          // // 去重
          // while(nums[r] === nums[r + 1]) {
          //   r--
          // }
        }
      }
    }
  }
  // console.log(res)
  return res
};

// fourSum([1,0,-1,0,-2,2], 0)
// @lc code=end

