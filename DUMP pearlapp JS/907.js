var module903 = require('./903'),
  module904 = require('./904');

module.exports = function (v, t, f, u) {
  var c = !f;
  if (!f) f = {};

  for (var _ = -1, h = t.length; ++_ < h; ) {
    var l = t[_],
      p = u ? u(f[l], v[l], l, f, v) : undefined;
    if (undefined === p) p = v[l];
    if (c) module904(f, l, p);
    else module903(f, l, p);
  }

  return f;
};
