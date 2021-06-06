exports.default = function (n, u, s) {
  var f = module1028.cond(u.time, u.time, n),
    l = module1028.add(u.frameTime, module1028.sub(n, f)),
    c = s.easing(module1028.divide(l, s.duration)),
    p = s.easing(module1028.divide(u.frameTime, s.duration));
  return o(n, u.time, u.frameTime, u.position, u.finished, s.toValue, s.duration, c, p, l);
};

var module1028 = require('./1028'),
  o = module1028.proc(function (o, n, u, s, f, l, c, p, v, b) {
    var T = {
        time: n,
        finished: f,
        frameTime: u,
        position: s,
      },
      V = {
        duration: c,
        toValue: l,
      },
      _ = module1028.sub(V.toValue, T.position),
      h = module1028.divide(_, module1028.sub(1, v)),
      y = module1028.sub(V.toValue, h),
      O = module1028.add(y, module1028.multiply(h, p));

    return module1028.block([
      module1028.cond(module1028.greaterOrEq(b, V.duration), [module1028.set(T.position, V.toValue), module1028.set(T.finished, 1)], module1028.set(T.position, O)),
      module1028.set(T.frameTime, b),
      module1028.set(T.time, o),
    ]);
  });
