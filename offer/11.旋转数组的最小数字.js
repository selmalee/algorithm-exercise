// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。


// 利用二分查找的思路
function minNumberInRotateArray(rotateArray)
{
  if (rotateArray.length === 0) {
    return 0
  }
  // 用两个指针分别指向数组的第一个元素和最后一个元素
  let i = 0, j = rotateArray.length - 1
  // 取中间元素，如果中间元素大于等于第一个元素，那么最小元素在中间元素的右边，反之，最小元素在中间元素的左边。
  while (i < j - 1 && rotateArray[i] >= rotateArray[j]) {
    const mid = Math.floor((i + j) / 2)
    // 特殊情况：如果rotateArray[mid],rotateArray[i],rotateArray[j]三个值都相同，则只能采取顺序查找的方法
    if (rotateArray[mid] === rotateArray[i] && rotateArray[i] === rotateArray[j]) {
      let min = i
      for (let k = i ;k < j; k++) {
        if (rotateArray[k] < rotateArray[min]) {
          min = k
        }
      }
      return rotateArray[min]
    }
    if (rotateArray[mid] >= rotateArray[i]) {
      i = mid
    } else if (rotateArray[mid] <= rotateArray[j]) {
      j = mid
    }
  }
  // 如此循环，直到两个指针指向两个相邻的元素，第二个指针就是最小元素。
  return rotateArray[j]
}

// minNumberInRotateArray([3,4,5,1,2])