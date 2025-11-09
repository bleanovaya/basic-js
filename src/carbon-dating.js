const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const value = parseFloat(sampleActivity);
  if (!isFinite(value) || value <= 0 || value >= MODERN_ACTIVITY) return false;

  const k = Math.log(2) / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / value) / k;
  return Math.ceil(age);
}

module.exports = {
  dateSample
};

