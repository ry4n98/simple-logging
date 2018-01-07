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

function info() {
  return INFO_TEXT + timestamp() + SPACE;
}

function warn() {
  return WARN_TEXT + timestamp() + SPACE;
}

function crit() {
  return CRIT_TEXT + timestamp() + SPACE;
}

function debug() {
  return DEBUG_TEXT + timestamp() + SPACE;
}

module.exports = {
  info: info,
  warn: warn,
  crit: crit,
  debug, debug
}
