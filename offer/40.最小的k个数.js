// 题目描述
// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

// 方案一：用快速排序中的partition来解决。即找到第k个数的索引，这样在第k个数的左边的数就是最小的k个数。输出结果没有排序。 相当于快速排序，只是找到第k个数就停止，时间复杂度O(nLogn) 
function GetLeastNumbers_Solution(input, k) {
  if (!input || k < 0) {
    throw new Error('invalid input')
  }
  if (k > input.length || k === 0) {
    return []
  }
  let start = 0
  let end = input.length - 1
  let p = 0
  while (p !== k - 1) {
    p = partition(input, start, end)
    // 如果p比k - 1大，则k - 1就在p的左边；如果比k - 1小，则k - 1在p的右边
    if (p > k - 1) {
      end = p - 1
    } else if (p < k - 1) {
      start = p + 1
    }
  }
  // console.log(input.slice(0, k))
  return input.slice(0, k)
}

// 返回已排序的索引。比该索引元素的值小的放在它的左边，比它大的放在它的右边
function partition(array, start, end) {
  if (start === end) {
    return start
  }
  const pivot = array[start] // 或者随机数或中间数
  let p = start
  for (let i = start + 1; i <= end; i++) {
    // 如果比它小，互换位置，p指针指向下一个
    if (array[i] < pivot) {
      p++
      if (p !== i) {
        swap(array, p, i)
      }
    }
  }
  swap(array, start, p)
  return p
}

// 交换位置
function swap(array, a, b) {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

// 方案二：直接快速排序，比方案一慢。时间复杂度O(nLogn) 
// function GetLeastNumbers_Solution(input, k) {
//   if (!input || k < 0) {
//     throw new Error('invalid input')
//   }
//   if (k > input.length || k === 0) {
//     return []
//   }
//   let start = 0
//   let end = input.length - 1
//   quickSort(input, start, end)
//   // console.log(input.slice(0, k))
//   return input.slice(0, k)
// }

// function quickSort(array, start, end) {
//   if (start === end) {
//     return
//   }
//   let p = 0
//   p = partition(array, start, end)
//   if (p > start) {
//     quickSort(array, start, p - 1)
//   }
//   if (p < end) {
//     quickSort(array, p + 1, end)
//   }
// }


// 方案三：用最大堆保存这k个数，每次只和堆顶比，如果比堆顶小，删除堆顶，新数入堆。时间复杂度O(nlogk)。但是js中需要手动构建最大堆。

GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 4)
