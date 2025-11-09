const { NotImplementedError } = require('../lib');

function isMAC48Address(n) {
  if (typeof n !== 'string') return false;
  const macRegex = /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/;
  return macRegex.test(n);
}

module.exports = {
  isMAC48Address
};