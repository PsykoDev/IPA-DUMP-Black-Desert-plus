exports.default = function (t, o) {
  var s = o.inputRange,
    c = o.outputRange,
    E = o.extrapolate,
    A = undefined === E ? h.EXTEND : E,
    C = o.extrapolateLeft,
    R = o.extrapolateRight;
  v('inputRange', s);
  T('inputRange', s);
  v('outputRange', c);
  T('outputRange', c);
  p('inputRange', s);
  module210.default(s.length === c.length, 'inputRange and outputRange must be the same length.');
  var N = C || A,
    b = R || A,
    D = f(t, s, c);
  if (!(N === h.EXTEND))
    N === h.CLAMP
      ? (D = module1029.createAnimatedCond(module1047.lessThan(t, s[0]), c[0], D))
      : N === h.IDENTITY && (D = module1029.createAnimatedCond(module1047.lessThan(t, s[0]), t, D));
  if (!(b === h.EXTEND))
    b === h.CLAMP
      ? (D = module1029.createAnimatedCond(module1047.greaterThan(t, s[s.length - 1]), c[c.length - 1], D))
      : b === h.IDENTITY && (D = module1029.createAnimatedCond(module1047.greaterThan(t, s[s.length - 1]), t, D));
  return D;
};

var module1047 = require('./1047'),
  module210 = require('./210'),
  module1032 = require('./1032'),
  module1029 = require('./1029'),
  module1049 = require('./1049').createAnimatedFunction(function (t, u, o, s, c) {
    var f = module1047.divide(module1047.sub(t, u), module1047.sub(o, u)),
      h = module1047.add(s, module1047.multiply(f, module1047.sub(c, s)));
    return module1029.createAnimatedCond(module1047.eq(u, o), module1029.createAnimatedCond(module1047.lessOrEq(t, u), s, c), h);
  });

function c(t, n, u, o) {
  var l = n[o],
    c = n[o + 1],
    f = u[o],
    h = u[o + 1];
  return module1049(t, l, c, f, h);
}

function f(t, u, o) {
  var s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0;
  return u.length - s == 2 ? c(t, u, o, s) : module1029.createAnimatedCond(module1047.lessThan(t, u[s + 1]), c(t, u, o, s), f(t, u, o, s + 1));
}

var h = {
  EXTEND: 'extend',
  CLAMP: 'clamp',
  IDENTITY: 'identity',
};

function p(t, n) {
  for (var l = 1; l < n.length; ++l)
    n[l] instanceof module1032.default || n[l - 1] instanceof module1032.default || module210.default(n[l] >= n[l - 1], '%s must be monotonically non-decreasing. (%s)', t, n);
}

function v(t, n) {
  module210.default(n.length >= 2, '%s must have at least 2 elements. (%s)', t, n);
}

function T(t, n) {
  for (var l = 0; l < n.length; l++) n[l] instanceof module1032.default || module210.default(Number.isFinite(n[l]), '%s cannot include %s. (%s)', t, n[l], n);
}

exports.Extrapolate = h;
