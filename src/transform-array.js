const { NotImplementedError } = require('../lib');

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];
  const skipped = new Set();
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (skipNext) {
      skipped.add(i);
      skipNext = false;
      continue;
    }

    switch (item) {
      case '--discard-next':
        if (i + 1 < arr.length) {
          skipNext = true;
        }
        break;

      case '--discard-prev':
        if (i - 1 >= 0 && !skipped.has(i - 1) && result.length > 0) {
          result.pop();
        }
        break;

      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (i - 1 >= 0 && !skipped.has(i - 1) && result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;

      default:
        result.push(item);
    }
  }

  return result;
}

module.exports = {
  transform
};
