// 题目描述
// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。时间复杂度为O(n)。

function FindGreatestSumOfSubArray(array) {
  if (!array || array.length === 0) {
    return 0
  }
  if (array.length === 1) {
    return array[0]
  }
  let count = 0
  let max = array[0] // 最大值
  for (let i = 0, len = array.length; i < len; i++) {
    // 如果和小于等于0，则当前值可能为最大值，从当前值开始重新计算
    if (count <= 0) {
      count = array[i]
    } else {
      count += array[i]
    }
    // 保存和的最大值
    if (count > max) {
      max = count
    }
  }
  return max
}
