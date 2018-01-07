const l = require('../simple-logging');

console.log(l.info() + "Some information.");
console.log(l.warn() + "Somethings not quite right, but continuing anyways.");
console.log(l.crit() + "Something critical has occurred, getting outta here!");
