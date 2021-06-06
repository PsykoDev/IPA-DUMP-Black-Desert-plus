var module1028 = require('./1028'),
  module1057 = require('./1057'),
  module1034 = require('./1034'),
  n = 64;

function u(t, u, p) {
  var y = module1028.cond(u.time, u.time, t),
    v = module1057.min(module1028.sub(t, y), n),
    c = p.damping,
    h = p.mass,
    f = p.stiffness,
    b = module1028.multiply(-1, u.velocity),
    T = module1028.sub(p.toValue, u.position),
    V = module1028.divide(c, module1028.multiply(2, module1028.sqrt(module1028.multiply(f, h)))),
    q = module1028.sqrt(module1028.divide(f, h)),
    P = module1028.multiply(q, module1028.sqrt(module1028.sub(1, module1028.multiply(V, V)))),
    _ = module1028.divide(v, 1e3),
    C = module1028.sin(module1028.multiply(P, _)),
    D = module1028.cos(module1028.multiply(P, _)),
    S = module1028.exp(module1028.multiply(-1, V, q, _)),
    x = module1028.multiply(S, module1028.add(module1028.multiply(C, module1028.divide(module1028.add(b, module1028.multiply(V, q, T)), P)), module1028.multiply(T, D))),
    j = module1028.sub(p.toValue, x),
    k = module1028.sub(
      module1028.multiply(V, q, x),
      module1028.multiply(S, module1028.sub(module1028.multiply(D, module1028.add(b, module1028.multiply(V, q, T))), module1028.multiply(P, T, C)))
    ),
    w = module1028.exp(module1028.multiply(-1, q, _)),
    M = module1028.sub(p.toValue, module1028.multiply(w, module1028.add(T, module1028.multiply(module1028.add(b, module1028.multiply(q, T)), _)))),
    O = module1028.multiply(w, module1028.add(module1028.multiply(b, module1028.sub(module1028.multiply(_, q), 1)), module1028.multiply(_, T, q, q))),
    z = u.prevPosition ? u.prevPosition : new module1034.default(0),
    A = module1028.cond(
      module1028.and(p.overshootClamping, module1028.neq(p.stiffness, 0)),
      module1028.cond(module1028.lessThan(z, p.toValue), module1028.greaterThan(u.position, p.toValue), module1028.lessThan(u.position, p.toValue))
    ),
    B = module1028.lessThan(module1057.abs(u.velocity), p.restSpeedThreshold),
    E = module1028.or(module1028.eq(p.stiffness, 0), module1028.lessThan(module1057.abs(module1028.sub(p.toValue, u.position)), p.restDisplacementThreshold));

  return module1028.block([
    module1028.set(z, u.position),
    module1028.cond(module1028.lessThan(V, 1), [module1028.set(u.position, j), module1028.set(u.velocity, k)], [module1028.set(u.position, M), module1028.set(u.velocity, O)]),
    module1028.set(u.time, t),
    module1028.cond(module1028.or(A, module1028.and(B, E)), [
      module1028.cond(module1028.neq(p.stiffness, 0), [module1028.set(u.velocity, 0), module1028.set(u.position, p.toValue)]),
      module1028.set(u.finished, 1),
    ]),
  ]);
}

var p = module1028.proc(function (t, s, l, o, n, p, y, v, c, h, f, b, T) {
  return u(
    T,
    {
      finished: t,
      velocity: s,
      position: l,
      time: o,
      prevPosition: n,
    },
    {
      toValue: p,
      damping: y,
      mass: v,
      stiffness: c,
      overshootClamping: h,
      restDisplacementThreshold: b,
      restSpeedThreshold: f,
    }
  );
});

exports.default = function (t, s, l) {
  var o = s.finished,
    n = s.velocity,
    u = s.position,
    y = s.time,
    v = s.prevPosition,
    c = l.toValue,
    h = l.damping,
    f = l.mass,
    b = l.stiffness,
    T = l.overshootClamping,
    V = l.restDisplacementThreshold,
    q = l.restSpeedThreshold;
  return p(o, n, u, y, v, c, h, f, b, T, q, V, t);
};
