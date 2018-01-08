# simple-logging v1.2.3
[![Total Downloads](https://img.shields.io/npm/dt/simple-logging.svg)](https://www.npmjs.com/package/simple-logging)

A simple Node.js logging module with no dependencies.

## Installation
Using npm:
```shell
$ npm install --save simple-logging
```

In Node.js:
```js
const l = require('simple-logging');

l.info("Some information.")
l.warn("Somethings not quite right, but continuing anyways.")
l.crit("Something critical has occurred, getting outta here!\n")

var object = {surprise: "\u0042\u004f\u004f\u0021"}
l.debug("I wonder what is inside my object...")
l.debug(object.surprise)
```

Console output:
```shell
$ node example.js
[INFO][1:12:17 PM] Some information.
[WARN][1:12:17 PM] Somethings not quite right, but continuing anyways.
[CRIT][1:12:17 PM] Something critical has occurred, getting outta here!

[DEBUG][1:12:17 PM] I wonder what is inside my object...
[DEBUG][1:12:17 PM] BOO!
```

## Why simple-logging?

simple-logging is a lightweight module with 0 dependencies, allowing you to easily log different levels of information with a timestamp. simple-logging is great for:

* Logging server events
* Debugging
* Console applications
