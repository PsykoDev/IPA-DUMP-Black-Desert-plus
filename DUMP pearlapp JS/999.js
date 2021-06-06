var module864 = require('./864'),
  module1000 = require('./1000'),
  module1006 = require('./1006'),
  module1009 = require('./1009'),
  module943 = require('./943'),
  module859 = require('./859'),
  module913 = require('./913'),
  module916 = require('./916'),
  l = 1,
  v = '[object Arguments]',
  w = '[object Array]',
  b = '[object Object]',
  j = Object.prototype.hasOwnProperty;

module.exports = function (s, y, O, A, h, x) {
  var P = module859(s),
    k = module859(y),
    q = P ? w : module943(s),
    z = k ? w : module943(y),
    B = (q = q == v ? b : q) == b,
    C = (z = z == v ? b : z) == b,
    D = q == z;

  if (D && module913(s)) {
    if (!module913(y)) return false;
    P = true;
    B = false;
  }

  if (D && !B) {
    if (!x) x = new module864();
    return P || module916(s) ? module1000(s, y, O, A, h, x) : module1006(s, y, q, O, A, h, x);
  }

  if (!(O & l)) {
    var E = B && j.call(s, '__wrapped__'),
      F = C && j.call(y, '__wrapped__');

    if (E || F) {
      var G = E ? s.value() : s,
        H = F ? y.value() : y;
      if (!x) x = new module864();
      return h(G, H, O, A, x);
    }
  }

  return !!D && (x || (x = new module864()), module1009(s, y, O, A, h, x));
};
