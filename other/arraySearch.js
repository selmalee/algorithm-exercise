// 对于未排序数组，使用自组织数据，并通过简单的顺序查找快速找到元素
function seqSearch(arr, data) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      if (i > 0) {
        swap(arr[i], arr[i - 1]) // 查找到的元素向前移动一位，逐渐将经常查找的元素移到最前
        return i - 1
      }
      return i
    }
  }
  return -1
}

// 对于有序的数据，二分查找算法比顺序查找算法更高效
function binSearch(arr, data) {
  const upperBound = arr.length - 1
  const lowerBound = 0
  while(lowerBound <= upperBound) {
    const mid = Math.floor((lowerCound + upperBound) / 2)
    if (data > arr[mid]) {
      lowerBound = mid + 1
    } else if (data < arr[mid]) {
      upperBound = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

// 交换函数
function swap (a, b) {
  let temp = b
  b = a
  a = temp
}
