const { NotImplementedError } = require('../lib');
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return 0;

  const countMap = (s) => {
    const m = Object.create(null);
    for (const ch of s) {
      m[ch] = (m[ch] || 0) + 1;
    }
    return m;
  };

  const m1 = countMap(s1);
  const m2 = countMap(s2);

  let common = 0;
  for (const ch in m1) {
    if (Object.prototype.hasOwnProperty.call(m2, ch)) {
      common += Math.min(m1[ch], m2[ch]);
    }
  }

  return common;
}

module.exports = {
  getCommonCharacterCount
};
