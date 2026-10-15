'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

function rangeOdd(start, end) {
  const output = [];

  if (start % 2 === 0) {
    start++;
  }

  for (let i = start; i < end + 1; i += 2) {
    output.push(i);
  }

  return output;
}

module.exports = { rangeOdd };
