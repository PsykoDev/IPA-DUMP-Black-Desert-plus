exports.__esModule = true;
exports.impureFinalPropsSelectorFactory = o;
exports.pureFinalPropsSelectorFactory = p;

exports.default = function (n, u) {
  var s = u.initMapStateToProps,
    c = u.initMapDispatchToProps,
    P = u.initMergeProps,
    l = module57.default(u, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
    f = s(n, l),
    M = c(n, l),
    O = P(n, l);
  return (l.pure ? p : o)(f, M, O, n, l);
};

var module57 = require('./57');

require('./429');

function o(n, t, o, p) {
  return function (u, s) {
    return o(n(u, s), t(p, s), s);
  };
}

function p(n, t, o, p, u) {
  var s,
    c,
    P,
    l,
    f,
    M = u.areStatesEqual,
    O = u.areOwnPropsEqual,
    S = u.areStatePropsEqual,
    v = false;

  function w(u, v) {
    var w,
      F,
      T = !O(v, c),
      _ = !M(u, s);

    s = u;
    c = v;

    if (T && _) {
      P = n(s, c);
      if (t.dependsOnOwnProps) l = t(p, c);
      f = o(P, l, c);
      return f;
    } else if (T) {
      if (n.dependsOnOwnProps) P = n(s, c);
      if (t.dependsOnOwnProps) l = t(p, c);
      f = o(P, l, c);
      return f;
    } else if (_) {
      w = n(s, c);
      F = !S(w, P);
      P = w;
      if (F) f = o(P, l, c);
      return f;
    } else return f;
  }

  return function (u, M) {
    if (v) return w(u, M);
    else {
      P = n((s = u), (c = M));
      l = t(p, c);
      f = o(P, l, c);
      v = true;
      return f;
    }
  };
}
