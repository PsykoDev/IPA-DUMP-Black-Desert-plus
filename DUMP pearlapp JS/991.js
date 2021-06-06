var module973 = require('./973'),
  module992 = require('./992'),
  module963 = require('./963');

module.exports = function (f, u, v) {
  for (var c = -1, _ = u.length, h = {}; ++c < _; ) {
    var l = u[c],
      p = module973(f, l);
    if (v(p, l)) module992(h, module963(l, f), p);
  }

  return h;
};
