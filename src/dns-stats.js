const { NotImplementedError } = require('../lib');

function getDNSStats(domains) {
  if (!Array.isArray(domains)) return {};

  const stats = {}; // обычный объект, не Object.create(null)

  for (const domain of domains) {
    if (typeof domain !== 'string' || domain.length === 0) continue;

    const parts = domain.split('.').reverse();
    const keyParts = [];
    for (const p of parts) {
      keyParts.push(p);
      const key = '.' + keyParts.join('.');
      stats[key] = (stats[key] || 0) + 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};
