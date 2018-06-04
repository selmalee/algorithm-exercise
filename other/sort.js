// 冒泡排序
// 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
// 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。
function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0, stop = len - 1 - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        temp = arr[j + 1]
      }
    }
  }

  return arr
}

// 选择排序
