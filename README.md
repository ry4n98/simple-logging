# simple-logging v1.1.0
A simple Node.js logging module with no dependencies.

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
console.log(l.crit() + "Something critical has occurred, getting outta here!\n");
console.log(l.debug() + "I really cannot figure out why this is not working");
```

Console output:
```shell
$ node example.js
[INFO][12:51:38 PM] Some information.
[WARN][12:51:38 PM] Somethings not quite right, but continuing anyways.
[CRIT][12:51:38 PM] Something critical has occurred, getting outta here!

[DEBUG][12:51:38 PM] I really cannot figure out why this is not working
```

## Why simple-logging?

simple-logging is a lightweight module with 0 dependencies, allowing you to easily log different levels of information with a timestamp. simple-logging is great for:

* Logging server events
* Debugging
* Console applications
