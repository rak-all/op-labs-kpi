'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

function range(start, end) {
  const output = [];

  for (let i = start; i < end + 1; i++) {
    output.push(i);
  }

  return output;
}

module.exports = { range };
