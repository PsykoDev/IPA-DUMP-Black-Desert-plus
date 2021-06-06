var module938 = require('./938'),
  module981 = require('./981');

module.exports = function o(f, u, v, c, h) {
  var l = -1,
    _ = f.length;

  for (v || (v = module981), h || (h = []); ++l < _; ) {
    var p = f[l];
    if (u > 0 && v(p)) u > 1 ? o(p, u - 1, v, c, h) : module938(h, p);
    else if (!c) h[h.length] = p;
  }

  return h;
};
