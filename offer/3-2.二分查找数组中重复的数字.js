// 题目描述
// 在一个长度为n的数组里的所有数字都在0到n-2的范围内，所以数组中至少有一个数字是重复的。请找出数组中任意一个重复的数字

function duplicate(numbers) {
  if (!numbers || numbers.length === 0 ||numbers.filter(item => item < 0 || item > numbers.length - 1).length > 0) {
    return false
  }

  // 不修改原数组的前提下，利用二分查找的思想，查找start~end之间数字出现的次数是否等于end-start+1。时间复杂度O(nlogn)，空间复杂度O(1)
  let start = 0
  let end = numbers.length - 2 
  while(start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (countRage(numbers, start, mid) > mid - start + 1) {
      if (start === end) {
        return numbers[start]
      }
      end = mid
    } else {
      start = mid + 1
    }
  }
  return -1
}

function countRage(arr, start, end) {
  let count = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] >= start && arr[i] <= end) {
      count++
    }
  }
  return count
}

console.log(duplicate([0,1,4,1,1,5,6,6], []))
