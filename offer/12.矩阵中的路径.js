// 题目描述
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

/**
 * 
 * @param {*} matrix 一维数组，如['b','c','c','e','d']
 * @param {*} rows
 * @param {*} cols
 * @param {*} path
 * @returns
 */
function hasPath(matrix, rows, cols, path)
{
  if (!matrix || !rows || !cols || !path) {
    return false
  }
  let visitedMatrix = new Array(rows * cols) // 存储矩阵中的点是否被访问过
  let pathId = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (hasPathCore(matrix, rows, cols, i, j, path, pathId, visitedMatrix)) {
        return true
      }
    }
  }
  return false
}

function hasPathCore(matrix, rows, cols, row, col, path, pathId, visitedMatrix) {
  if (pathId === path.length) {
    return true
  }
  let hasPath = false
  // 找到路径中的字符且之前未访问过
  const matrixId = row * cols + col
  if (row >= 0 && row < rows && col >= 0 && col <cols && matrix[matrixId] === path[pathId] && !visitedMatrix[matrixId]) {
    pathId++
    visitedMatrix[matrixId] = true
    // 向左，向右，向上，向下移动，找路径中的下一个字符
    hasPath = hasPathCore(matrix, rows, cols, row, col - 1, path, pathId, visitedMatrix) ||
    hasPathCore(matrix, rows, cols, row, col + 1, path, pathId, visitedMatrix) ||
    hasPathCore(matrix, rows, cols, row - 1, col, path, pathId, visitedMatrix) ||
    hasPathCore(matrix, rows, cols, row + 1, col, path, pathId, visitedMatrix)
    // 如果该路径不对，则回溯
    if (!hasPath) {
      pathId--
      visitedMatrix[matrixId] = false
    }
  }
  return hasPath
}
