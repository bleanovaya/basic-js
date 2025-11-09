const { NotImplementedError } = require('../lib');

function deleteDigit(n) {
  if (typeof n !== 'number' || !isFinite(n)) return NaN;

  const isNegative = n < 0;
  const s = Math.abs(n).toString();

  let max = -Infinity;
  for (let i = 0; i < s.length; i++) {
    const candidateStr = s.slice(0, i) + s.slice(i + 1);
    const candidateNum = Number(candidateStr === '' ? '0' : candidateStr);
    const value = isNegative ? -candidateNum : candidateNum;
    if (value > max) max = value;
  }

  return max;
}

module.exports = {
  deleteDigit
};

