const { NotImplementedError } = require('../lib');

function sortByHeight(arr) {
  if (!Array.isArray(arr)) return [];

  const heights = arr.filter(v => v !== -1).sort((a, b) => a - b);
  let idx = 0;
  return arr.map(v => (v === -1 ? -1 : heights[idx++]));
}

module.exports = {
  sortByHeight
};
