'use strict';

const sum = (...args) => {
  let r = 0;
  if (args.length === 0) return r;
  let i = 0;
  do {
    r += args[i];
    i++;
  } while (i < args.length);
  return r;
};

module.exports = { sum };
