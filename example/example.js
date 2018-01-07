const l = require('../simple-logging');

l.info("Some information.")
l.warn("Somethings not quite right, but continuing anyways.")
l.crit("Something critical has occurred, getting outta here!\n")

var object = {surprise: "\u0042\u004f\u004f\u0021"}
l.debug("I wonder what is inside my object...")
l.debug(object.surprise)
