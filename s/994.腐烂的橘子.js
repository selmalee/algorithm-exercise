/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rows = grid.length;
  if (!rows) {
    return -1;
  }
  const cols = grid[0].length;
  let queue = []; // BFS，腐烂橘子队列
  let freshCount = 0; // 新鲜橘子
  for (let i = 0; i < rows; i++) {
    for (let j = 0 ; j < cols; j++) {
      const item = grid[i][j];
      if (item === 2) {
        // 腐烂橘子
        queue.push([i, j]);
      } else if (item === 1) {
        // 新鲜橘子
        freshCount++;
      }
    }
  }
  if (!freshCount) {
    return 0;
  }
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 上，下，左，右
  let time = 0; // 分钟数
  while(queue.length && freshCount) {
    time++;
    const len = queue.length;
    for (let l = 0; l < len; l++) {
      const [i, j] = queue.shift();
      dirs.forEach(dir => {
        const di = i + dir[0];
        const dj = j + dir[1];
        if (di >= 0 && di < rows && dj >= 0 && dj < cols && grid[di][dj] === 1) {
          grid[di][dj] = 2;
          queue.push([di, dj]);
        }
      });
      // // 上
      // if (i > 0 && grid[i - 1][j] == 1) {
      //   grid[i - 1][j] = 2;
      //   queue.push([i - 1, j]);
      // }
      // // 下
      // if (i < rows - 1 && grid[i + 1][j] == 1) {
      //   grid[i + 1][j] = 2;
      //   queue.push([i + 1, j]);
      // }
      // // 左
      // if (j > 0 && grid[i][j - 1] == 1) {
      //   grid[i][j - 1] = 2;
      //   queue.push([i, j - 1]);
      // }
      // // 右
      // if (j < cols - 1 && grid[i][j + 1] == 1) {
      //   grid[i][j + 1] = 2;
      //   queue.push([i, j + 1]);
      // }
    }
    freshCount -= queue.length;
  }
  return freshCount === 0 ? time : -1;
};
// @lc code=end

