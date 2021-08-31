// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

var exchange = function(nums) {
  if (!nums || (nums && nums.length === 0)) {
      return nums;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] & 1 === 1) {
      // 如果是奇数，则下一个
      left++;
    } else {
      // 如果是偶数，与right交换位置
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      right--
    }
  }
  return nums;
};

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
