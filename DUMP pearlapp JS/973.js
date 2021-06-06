var module963 = require('./963'),
  module974 = require('./974');

module.exports = function (t, u) {
  for (var f = 0, l = (u = module963(u, t)).length; null != t && f < l; ) t = t[module974(u[f++])];

  return f && f == l ? t : undefined;
};
