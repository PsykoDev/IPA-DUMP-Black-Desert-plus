var module854 = require('./854'),
  module862 = require('./862'),
  module859 = require('./859'),
  module965 = require('./965'),
  u = module854 ? module854.prototype : undefined,
  p = u ? u.toString : undefined;

module.exports = function t(u) {
  if ('string' == typeof u) return u;
  if (module859(u)) return module862(u, t) + '';
  if (module965(u)) return p ? p.call(u) : '';
  var v = u + '';
  return '0' == v && 1 / u == -1 / 0 ? '-0' : v;
};
