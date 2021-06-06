var module965 = require('./965');

module.exports = function (t) {
  if ('string' == typeof t || module965(t)) return t;
  var f = t + '';
  return '0' == f && 1 / t == -1 / 0 ? '-0' : f;
};
