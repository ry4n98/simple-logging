# simple-logging v1.0.1

## Installation
Using npm:
```shell
$ npm install --save simple-logging
```

In Node.js:
```js
var l = require('simple-logging');

console.log(l.info() + 'Some information!');
console.log(l.warn() + 'Something isn\'t quite right but continuing anyways');
console.log(l.crit() + 'Something critical has occurred, i\'m outta here!');
```

Console output:
```shell
$ node example.js
[INFO][12:31:35 PM] Some information!
[WARN][12:31:35 PM] Something isn\'t quite right but continuing anyways
[CRIT][12:31:35 PM] Something critical has occurred, i\'m outta here!
```
