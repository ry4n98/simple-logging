const l = require('../simple-logging.js');

console.log(l.info() + 'Some information!');
console.log(l.warn() + 'Something isn\'t quite right but continuing anyways');
console.log(l.crit() + 'Something critical has occurred, i\'m outta here!');
