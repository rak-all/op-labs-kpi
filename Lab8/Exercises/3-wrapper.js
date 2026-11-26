'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const expected = types[i].name.toLowerCase();
    const actual = typeof args[i];
    if (actual !== expected) {
      throw new TypeError(`Expected ${expected} received ${actual}`);
    }
  }
  const result = fn(...args);
  const expected = types[types.length - 1].name.toLowerCase();
  const actual = typeof result;
  if (actual !== expected) {
    throw new TypeError(`Expected ${expected} received ${actual}`);
  }
  return result;
};

module.exports = { contract };
