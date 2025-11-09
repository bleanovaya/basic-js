const { NotImplementedError } = require('../lib');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    let maxDepth = 0;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const d = this.calculateDepth(item);
        if (d > maxDepth) maxDepth = d;
      }
    }

    return maxDepth + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
