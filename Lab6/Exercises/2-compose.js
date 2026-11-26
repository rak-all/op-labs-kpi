'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
    } catch (error) {
      result = undefined;
      for (const handler of handlers) handler(error);
    }
    return result;
  };
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return composed;
};

module.exports = { compose };
