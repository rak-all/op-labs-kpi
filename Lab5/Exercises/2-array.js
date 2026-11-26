'use strict';

const array = () => {
  const items = [];
  const data = (i) => items[i];
  data.push = (value) => {
    items.push(value);
  };
  data.pop = () => items.pop();
  return data;
};

module.exports = { array };
