// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

// 方案一：时间复杂度O(n)
var minNumberInRotateArray = function(numbers) {
  for (var i = 1, len = numbers.length; i < len; i++) {
      if (numbers[i] < numbers[i - 1]) {
          return numbers[i];
      }
  }
  return numbers[0];
};

// 方案二：利用二分查找的思路，O(log2n)
var minNumberInRotateArray = function(numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while(low < high){
    const pivot = Math.floor((low + high) / 2)
    if(numbers[pivot] < numbers[high]){
      high = pivot;
    } else if (numbers[pivot] > numbers[high]){
      low = pivot + 1;
    } else {
      high -= 1;
    }
  }
  return numbers[low];
};

// minNumberInRotateArray([3,4,5,1,2])