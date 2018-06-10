
// 从小到大排序

// 冒泡排序
// 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
// 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。
// 时间复杂度O(n^2) 稳定
function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0, stop = len - 1 - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1])
      }
    }
  }

  return arr
}

// 选择排序
// 与冒泡排序类似，也是依次对相邻的数进行两两比较。不同之处在于，它不是每比较一次就调换位置，而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变。
// 时间复杂度O(n^2) 稳定
function selectSort(arr) {
  let min
  for (let i = 0, len = arr.length; i < len; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr[i], arr[min])
  }

  return arr
}

// 插入排序
// 将数组分成“已排序”和“未排序”两部分，一开始的时候，“已排序”的部分只有一个元素，然后将它后面一个元素从“未排序”部分插入“已排序”部分，从而“已排序”部分增加一个元素，“未排序”部分减少一个元素。以此类推，完成全部排序。
// 时间复杂度O(n^2) 稳定
function insertSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    const val = arr[i]
    for (let j = i - 1; j > -1 && arr[j] > val; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = val
  }
  return arr
}

// 合并排序
// 它的基本思想是，将两个已经排序的数组合并，要比从头开始排序所有元素来得快。因此，可以将数组拆开，分成n个只有一个元素的数组，然后不断地两两合并，直到全部排序完成
// 时间复杂度 O(nlog2n) 不稳定

// 左右数组合并方法
function merge(left, right) {
  let il = 0, ir = 0, result = []
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir))
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  // 递归，直到数组长度为1
  const sortArr = merge(mergeSort(left), mergeSort(right))
  // 原地排序 不多占用空间
  arr.splice(0, arr.length, ...sortArr)

  return arr
}

// 快速排序
// 先确定一个“支点”（pivot），将所有小于“支点”的值都放在该点的左侧，大于“支点”的值都放在该点的右侧，然后对左右两侧不断重复这个过程，直到所有排序完成。
// V8的sort方法就使用快速排序和插入排序的结合
// 时间复杂度 O(nlog2n) 不稳定
function partition(arr, i, j) {
  const pivot = arr[Math.floor((i + j) / 2)] // 支点
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(arr[i], arr[j])
      i++
      j--
    }
  }
  return i
}
function quickSort(arr, left, right) {
  if (arr.length == 1) {
    return arr
  }
  left = left == undefined ? 0 : left
  right = right == undefined ? arr.length - 1 : right
  const p = partition(arr, left, right)
  if (left < p - 1) {
    quickSort(arr, left, p - 1)
  }
  if (right > p) {
    quickSort(arr, p, right)
  }
}

function swap (a, b) {
  let temp = b
  b = a
  a = temp
}
