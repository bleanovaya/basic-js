const { NotImplementedError } = require('../lib');

function getSumOfDigits(n) {
  if (typeof n !== 'number' || !isFinite(n)) return NaN;

  let num = Math.abs(Math.trunc(n));

  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }

  return num;
}

module.exports = {
  getSumOfDigits
};
