var module869 = require('./869');

module.exports = function (t, f) {
  for (var o = t.length; o--; ) if (module869(t[o][0], f)) return o;

  return -1;
};
