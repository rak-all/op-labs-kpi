'use strict';

{
  function inc(n) {
    return n + 1;
  }

  const a = 5;
  const b = inc(a);
  console.log('Part 1:');
  console.dir({ a, b });
}

console.log();

{
  function inc(num) {
    num.n += 1;
  }

  const obj = { n: 5 };
  console.log('Part 2:');
  console.dir(obj);
  inc(obj);
  console.dir(obj);
}
