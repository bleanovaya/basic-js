const { NotImplementedError } = require('../lib');

function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const hours = turns / turnsSpeed;
  const seconds = Math.floor(hours * 3600);
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
