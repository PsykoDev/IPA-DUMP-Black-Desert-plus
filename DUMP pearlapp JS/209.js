var module210 = require('./210');

module.exports = function (t) {
  var o,
    s = {};

  for (o in ((t instanceof Object && !Array.isArray(t)) || module210(false), t)) t.hasOwnProperty(o) && (s[o] = o);

  return s;
};
