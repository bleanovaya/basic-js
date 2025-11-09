const { NotImplementedError } = require('../lib');
function minesweeper(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = new Array(rows);

  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols).fill(0);
    for (let j = 0; j < cols; j++) {
      let count = 0;
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (di === 0 && dj === 0) continue;
          const ni = i + di;
          const nj = j + dj;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && matrix[ni][nj]) {
            count++;
          }
        }
      }
      result[i][j] = count;
    }
  }

  return result;
}
module.exports = {
  minesweeper
};
