const { NotImplementedError } = require('../lib');

function countCats(matrix) {
  if (!Array.isArray(matrix)) return 0;

  let count = 0;
  for (const row of matrix) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) {
      if (cell === '^^') count++;
    }
  }
  return count;
}

module.exports = {
  countCats
};
