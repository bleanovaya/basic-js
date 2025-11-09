const { NotImplementedError } = require('../lib');
function getEmailDomain(email) {
  if (typeof email !== 'string') return '';
  const atIndex = email.lastIndexOf('@');
  if (atIndex === -1 || atIndex === email.length - 1) return '';
  return email.slice(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
