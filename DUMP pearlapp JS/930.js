var module855 = require('./855'),
  t = 'object' == typeof exports && exports && !exports.nodeType && exports,
  n = t && 'object' == typeof module && module && !module.nodeType && module,
  c = n && n.exports === t ? module855.Buffer : undefined,
  f = c ? c.allocUnsafe : undefined;

module.exports = function (o, t) {
  if (t) return o.slice();
  var n = o.length,
    c = f ? f(n) : new o.constructor(n);
  o.copy(c);
  return c;
};
