# roundom
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Round an array, conserving both sum and individual expected value.

### Usage
Install the library with `npm install roundom`

```javascript
import roundom from 'roundom';

console.log(roundom([1, 0.9, -1.9]);      // <- [0, 1, -2] (90%) or [0, 0, -1] (10%)
console.log(roundom([1, 0.9, -1.9], 0.1); // <- [0, 1, -2] (100%) given fixed seed
```

[downloads-image]: https://img.shields.io/npm/dm/roundom.svg

[npm-url]: https://npmjs.org/package/roundom
[npm-image]: https://img.shields.io/npm/v/roundom.svg
