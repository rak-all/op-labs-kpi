'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {
  let key = '';
  const symbolsCount = possible.length;

  for (let i = 0; i < length; i++) {
    key += possible[Math.floor(Math.random() * symbolsCount)];
  }

  return key;
};

module.exports = { generateKey };
