const { NotImplementedError } = require('../lib');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _validateArgs(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
  }

  _transform(message, key, encrypt = true) {
    this._validateArgs(message, key);

    const A_CODE = 'A'.charCodeAt(0);
    const letters = message.toUpperCase();
    const k = key.toUpperCase();

    let res = '';
    let keyIndex = 0;

    for (let i = 0; i < letters.length; i++) {
      const ch = letters[i];
      const code = ch.charCodeAt(0);

      if (code >= A_CODE && code <= A_CODE + 25) {
        const keyChar = k[keyIndex % k.length];
        const keyShift = keyChar.charCodeAt(0) - A_CODE;

        if (encrypt) {
          const enc = (code - A_CODE + keyShift) % 26;
          res += String.fromCharCode(A_CODE + enc);
        } else {
          const dec = (code - A_CODE - keyShift + 26) % 26;
          res += String.fromCharCode(A_CODE + dec);
        }

        keyIndex++;
      } else {
        res += ch;
      }
    }

    if (!this.direct) {
      res = res.split('').reverse().join('');
    }

    return res;
  }

  encrypt(message, key) {
    return this._transform(message, key, true);
  }

  decrypt(message, key) {
    return this._transform(message, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
