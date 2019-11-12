// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target, array)
{
  // 从左下角开始查找，比target大的一定在array[row][col]的右方，比target小的一定在array[row][col]的上方
  let col = 0
  let row = array.length - 1
  const colLen = array[0].length
  while(col < colLen && row >= 0) {
    if (target > array[row][col]) {
      col++
    } else if (target < array[row][col]) {
      row--
    } else {
      return true
    }
  }
  return false
}