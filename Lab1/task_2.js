'use strict';

const values = [true, 'hello', 5, 12, -200, false, false, 'word', undefined, undefined];

const dataTypesCount = {
  boolean: 0,
  string: 0,
  number: 0,
  undefined: 0,
};

function staticCount(values, dataTypes) {
  for (const value of values) {
    const type = typeof value;
    dataTypes[type]++;
  }
}
console.log('Part 1:');
staticCount(values, dataTypesCount);
console.dir(dataTypesCount);


console.log();


function dynamicCount(values) {
  const dataTypesCount = {};

  for (const value of values) {
    const type = typeof value;
    if (dataTypesCount[type] === undefined) {
      dataTypesCount[type] = 0;
    }
    dataTypesCount[type]++;
  }
  return dataTypesCount;
}

console.log('Part 2:');
console.dir(dynamicCount(values));
