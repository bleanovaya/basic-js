const { NotImplementedError } = require('../lib');

function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return 0;

  const cols = matrix[0].length;
  const haunted = new Array(cols).fill(false);
  let sum = 0;

  for (const row of matrix) {
    for (let j = 0; j < cols; j++) {
      if (haunted[j]) continue;
      const val = row[j];
      if (val === 0) {
        haunted[j] = true;
        continue;
      }
      sum += val;
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
