var module854 = require('./854'),
  module857 = require('./857'),
  module858 = require('./858'),
  c = '[object Null]',
  u = '[object Undefined]',
  l = module854 ? module854.toStringTag : undefined;

module.exports = function (n) {
  if (null == n) return undefined === n ? u : c;
  else return l && l in Object(n) ? module857(n) : module858(n);
};
