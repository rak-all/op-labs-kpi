'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

function fn() {
  // Пояснення:
  // const забороняє перепризначення посилання, а зміну полів дозволяє
  // let дозволяє і те, і інше
  const obj1 = { name: '' };
  let obj2 = { name: '' };

  obj1.name = '1';
  obj2.name = '2';

  const otherObj =  { name: '3' };

  obj2 = otherObj;
}

module.exports = { fn };
