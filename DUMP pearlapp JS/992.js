var module903 = require('./903'),
  module963 = require('./963'),
  module915 = require('./915'),
  module882 = require('./882'),
  module974 = require('./974');

module.exports = function (u, l, c, _) {
  if (!module882(u)) return u;

  for (var h = -1, p = (l = module963(l, u)).length, s = p - 1, x = u; null != x && ++h < p; ) {
    var b = module974(l[h]),
      j = c;

    if (h != s) {
      var k = x[b];
      if (undefined === (j = _ ? _(k, b, x) : undefined)) j = module882(k) ? k : module915(l[h + 1]) ? [] : {};
    }

    module903(x, b, j);
    x = x[b];
  }

  return u;
};
