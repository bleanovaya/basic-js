const { NotImplementedError } = require('../lib');

function encodeLine(str) {
  if (typeof str !== 'string') return '';
  if (str.length === 0) return '';

  let result = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += (count > 1 ? String(count) : '') + str[i - 1];
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
