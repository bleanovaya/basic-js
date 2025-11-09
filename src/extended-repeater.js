const { NotImplementedError } = require('../lib');

function repeater(str, options = {}) {
  const main = String(str);

  const repeatTimes = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';

  const hasAddition = Object.prototype.hasOwnProperty.call(options, 'addition');
  const addition = hasAddition ? String(options.addition) : '';
  const additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let additionPart = '';
  if (hasAddition) {
    const additions = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additions.push(addition);
    }
    additionPart = additions.join(additionSeparator);
  }

  const items = [];
  for (let i = 0; i < repeatTimes; i++) {
    items.push(main + additionPart);
  }

  return items.join(separator);
}

module.exports = {
  repeater
};
