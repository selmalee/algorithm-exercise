// 题目描述
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 例如 
// a b c e
// s f c s
// a d e e
// 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

// 深度遍历 + 回溯 + 剪枝
const exist = function(board, word) {
  const n = board.length;
  if (!n) {
    return false;
  }
  const m = board[0].length;
  if (!m) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;

  /**
   * 深度遍历
   * @param {*} i rowId
   * @param {*} j colId
   * @param {*} k wordId
   */
  function dfs(i, j, k) {
    // 越界重复 不相等
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] != word[k]) {
      return false;
    }
    // 最后一个元素满足，则返回true
    if (k === word.length - 1) {
      return true;
    }
    // 如果不是最后一个元素，接着看后面的元素，分别向右、左、上、下尝试查找
    board[i][j] = '\0'; // 标记已访问，避免重复访问
    const res = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
    // 回溯依次还原和返回
    board[i][j] = word[k];
    return res;
  }
};
