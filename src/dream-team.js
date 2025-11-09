const { NotImplementedError } = require('../lib');
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const initials = members
    .filter(m => typeof m === 'string')
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => s[0].toUpperCase());

  if (initials.length === 0) return false;

  return initials.sort().join('');
}

module.exports = {
  createDreamTeam
};
