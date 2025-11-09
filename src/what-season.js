const { NotImplementedError } = require('../lib');

function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  try {
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
    if (!(date instanceof Date)) throw new Error();
    if (Object.getOwnPropertyNames(date).length > 0) throw new Error();
    const time = date.getTime();
    if (typeof time !== 'number' || Number.isNaN(time)) throw new Error();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
}

module.exports = {
  getSeason
};
