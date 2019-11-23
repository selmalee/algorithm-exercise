// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

// 每一圈都以左上角为起点(start,start)，初始值为(0,0)，分四步打印每一圈。
function printMatrix(matrix) {
  if (!matrix) {
    return []
  }
  const rows = matrix.length
  const columns = matrix[0].length
  if (!rows || !columns) {
    return []
  }
  let result = []
  let start = 0 // 每一圈都以左上角为起点(start,start)，既是初始行数也是初始列数
  while(columns > start * 2 && rows > start * 2) {
    let endX = columns - 1 - start // 终止列号
    let endY = rows - 1 - start // 终止行号
    // 从左到右
    for (let i = start; i <= endX; i++) {
      result.push(matrix[start][i])
    }
    // 从上到下
    if (endY <= start) {
      return result
    }
    for (let i = start + 1; i <= endY; i++) {
      result.push(matrix[i][endX])
    }
    // 从右到左
    if (endX <= start) { // 实际上还需要endY <= start 但上面已经判断过了
      return result
    }
    for (let i = endX - 1; i >= start; i--) {
      result.push(matrix[endY][i])
    }
    // 从下到上
    if (endY <= start -1) { // 实际上还需要endX <= start 但上面已经判断过了
      return result
    }
    for (let i = endY - 1; i >= start + 1; i--) {
      result.push(matrix[i][start])
    }
    start++
  }
  // console.log(result)
  return result
}

// printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
// printMatrix([[1],[2],[3],[4],[5]])
