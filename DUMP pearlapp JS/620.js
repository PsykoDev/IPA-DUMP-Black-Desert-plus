exports.__esModule = true;

exports.default = function (u) {
  var c,
    o = u.transforms || [],
    f = ''.concat(undefined !== u.keyPrefix ? u.keyPrefix : module617.KEY_PREFIX).concat(u.key),
    s = u.storage;
  u.debug;
  c =
    false === u.deserialize
      ? function (t) {
          return t;
        }
      : 'function' == typeof u.deserialize
      ? u.deserialize
      : n;
  return s.getItem(f).then(function (t) {
    if (t)
      try {
        var n = {},
          u = c(t);
        Object.keys(u).forEach(function (t) {
          n[t] = o.reduceRight(function (n, c) {
            return c.out(n, t, u);
          }, c(u[t]));
        });
        return n;
      } catch (t) {
        throw t;
      }
  });
};

var module617 = require('./617');

function n(t) {
  return JSON.parse(t);
}
