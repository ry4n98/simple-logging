const INFO_TEXT = "[INFO]"
const WARN_TEXT = "[WARN]"
const CRIT_TEXT = "[CRIT]"
const DEBUG_TEXT = "[DEBUG]"
const SPACE = " "

function timestamp() {
  var d = new Date()
  var ts = d.toLocaleTimeString()
  ts = `[${ts}]`
  return ts
}

function info(data) {
  var log = INFO_TEXT + timestamp() + SPACE + data
  console.log(log);
}

function warn(data) {
  var log = WARN_TEXT + timestamp() + SPACE + data
  console.log(log);
}

function crit(data) {
  var log = CRIT_TEXT + timestamp() + SPACE + data
  console.log(log);
}

function debug(data) {
  var log = DEBUG_TEXT + timestamp() + SPACE + data
  console.log(log);
}

module.exports = {
  info: info,
  warn: warn,
  crit: crit,
  debug: debug
}
