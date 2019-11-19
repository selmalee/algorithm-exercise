// 题目描述
// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

/**
 * 思路与矩阵中的路径相近
 * @param {*} threshold 即题目中的k
 * @param {*} rows
 * @param {*} cols
 */
function movingCount(threshold, rows, cols)
{
  if (threshold < 0 || !rows || !cols) {
    return 0
  }
  let visitedMatrix = new Array(rows * cols) // 存储矩阵中的点是否被访问过
  const count = movingCountCore(threshold, rows, cols, 0, 0, visitedMatrix) // 从(0,0)开始计算
  return count
}

function movingCountCore(threshold, rows, cols, row, col, visitedMatrix) {
  let count = 0
  const matrixId = row * cols + col
  // 位数之和小于等于k且之前未访问过
  if (row >= 0 && row < rows && col >= 0 && col < cols && getDigitSum(row) + getDigitSum(col) <= threshold && !visitedMatrix[matrixId]) {
    visitedMatrix[matrixId] = true // 记录已访问
    count = 1 +
    movingCountCore(threshold, rows, cols, row, col - 1, visitedMatrix) +
    movingCountCore(threshold, rows, cols, row, col + 1, visitedMatrix) +
    movingCountCore(threshold, rows, cols, row - 1, col, visitedMatrix) +
    movingCountCore(threshold, rows, cols, row + 1, col, visitedMatrix)
    // 向左，向右，向上，向下移动并计算
  }
  return count
}

/**
 * 求位数之和
 * @param {*} number
 * @returns
 */
function getDigitSum(number) {
  let sum = 0
  while (number > 0) {
    sum += number % 10
    number = Math.floor(number / 10)
  }
  return sum
}

movingCount(2, 3, 3)