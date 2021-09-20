// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 快速排序的思路，降序排序，找到第k个最大的元素，就是找到id为k-1的支点
var findKthLargest = function(nums, k) {
  if (k < 1 || nums.length < k) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  let pId = partition(nums, left, right);
  while (pId !== k - 1) {
    if (pId > k - 1) {
      right = pId - 1;
    } else {
      left = pId + 1;
    }
    pId = partition(nums, left, right);
  }
  return nums[pId];
};

var partition = function(nums, left, right) {
  let pId = left; // 支点id
  let p = nums[left]; // 支点
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] > p) {
      pId++;
      if (pId !== i) {
        swap(nums, i, pId);
      }
    }
  }
  swap(nums, left, pId);
  // console.log('partition', nums, pId)
  return pId;
}

var swap = function(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
  // console.log('swap', nums[a], nums[b])
}

console.log(findKthLargest([3,2,1,5,6,4], 2))