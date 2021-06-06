var module963 = require('./963'),
  module911 = require('./911'),
  module859 = require('./859'),
  module915 = require('./915'),
  module918 = require('./918'),
  module974 = require('./974');

module.exports = function (v, c, h) {
  for (var _ = -1, b = (c = module963(c, v)).length, k = false; ++_ < b; ) {
    var p = module974(c[_]);
    if (!(k = null != v && h(v, p))) break;
    v = v[p];
  }

  return k || ++_ != b ? k : !!(b = null == v ? 0 : v.length) && module918(b) && module915(p, b) && (module859(v) || module911(v));
};
