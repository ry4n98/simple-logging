# simple-logging v1.0.7

## Installation
Using npm:
```shell
$ npm install --save simple-logging
```

In Node.js:
```js
const l = require('simple-logging');

console.log(l.info() + "Some information.");
console.log(l.warn() + "Somethings not quite right, but continuing anyways.");
console.log(l.crit() + "Something critical has occurred, getting outta here!");
```

Console output:
```shell
$ node example.js
[INFO][12:34:53 PM] Some information.
[WARN][12:34:53 PM] Somethings not quite right, but continuing anyways.
[CRIT][12:34:53 PM] Something critical has occurred, getting outta here!
```
