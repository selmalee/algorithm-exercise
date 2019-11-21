// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array) {
  if (!array ||array.length === 0) {
    return array
  }
  let j = 0
  for (let i = 0, len = array.length; i < len; i++) {
    // 指针j向后移动，直到遇到偶数
    // 如果指针i指向奇数且两个指针不重叠，i指向的奇数往前移动到j指向的位置（保持偶数之间的相对位置），j向后移动一个元素
    if (isOld(array[i])) {
      let k = i
      while (k > j) {
        const temp = array[k]
        array[k] = array[k - 1]
        array[k - 1] = temp
        k--
      }
      j++
    }
  }
  return array
}

// 不保持奇数和奇数，偶数和偶数之间的相对位置的方案：
// function reOrderArray(array) {
//   if (!array ||array.length === 0) {
//     return array
//   }
//   let begin = 0
//   let end = array.length - 1
//   while(begin < end) {
//     // 指针begin向后移动，直到遇到偶数
//     while(begin < end && isOld(array[begin])) {
//       begin++
//     }
//     // 指针end向前移动，直到遇到奇数
//     while(begin < end && !isOld(array[end])) {
//       end--
//     }
//     // 交换两个指针指向的元素，进入下一个循环
//     if (begin < end) {
//       const temp = array[begin]
//       array[begin] = array[end]
//       array[end] = temp
//     }
//   }
//   return array
// }

// 是否奇数
function isOld(num) {
  return (num & 1) === 1
}

// console.log(reOrderArray([1,2,3,4,5,6,7]))
