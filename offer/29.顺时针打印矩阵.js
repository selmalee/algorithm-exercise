// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  let rowMin = 0, rowMax = rows - 1
  let colMin = 0, colMax = cols - 1
  let row = 0, col = 0
  let result = [matrix[row][col]]
  for (let i = 0, len = Math.ceil(rows / 2); i < len; i++) {
    // 从左到右
    while (row === rowMin) {
      if (col < colMax) {
        col++
        result.push(matrix[row][col])
      } else {
        rowMin++
      }
    }
    if (rowMin > rowMax) {
      break
    }
    // 从上到下
    while (col === colMax) {
      if (row < rowMax) {
        row++
        result.push(matrix[row][col])
      } else {
        colMax--
      }
    }
    if (colMax < colMin) {
      break
    }
    // 从右到左
    while (row === rowMax) {
      if (col > colMin) {
        col--
        result.push(matrix[row][col])
      } else {
        rowMax--
      }
    }
    if (rowMax < rowMin) {
      break
    }
    // 从下到上
    while (col === colMin) {
      if (row > rowMin) {
        row--
        result.push(matrix[row][col])
      } else {
        colMin++
      }
    }
    if (colMin > colMax) {
      break
    }
  }
  // console.log(result)
  return result
}

// printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
// printMatrix([[1],[2],[3],[4],[5]])
