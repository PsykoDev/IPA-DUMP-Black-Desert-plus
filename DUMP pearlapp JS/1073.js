var module1028 = require('./1028'),
  module1057 = require('./1057'),
  n = 5;

function l(l, c, s) {
  var u = module1028.cond(c.time, c.time, l),
    v = module1028.sub(l, u),
    f = module1028.pow(s.deceleration, v),
    p = module1028.divide(module1028.multiply(s.deceleration, module1028.sub(1, f)), module1028.sub(1, s.deceleration)),
    y = module1028.divide(c.velocity, 1e3),
    b = module1028.multiply(y, f, 1e3),
    h = module1028.add(c.position, module1028.multiply(y, p));
  return module1028.block([
    module1028.set(c.position, h),
    module1028.set(c.velocity, b),
    module1028.set(c.time, l),
    module1028.cond(module1028.lessThan(module1057.abs(b), n), module1028.set(c.finished, 1)),
  ]);
}

var c = module1028.proc(function (t, o, n, c, s, u) {
  return l(
    t,
    {
      time: o,
      velocity: n,
      position: c,
      finished: s,
    },
    {
      deceleration: u,
    }
  );
});

exports.default = function (t, o, n) {
  var l = o.time,
    s = o.velocity,
    u = o.position,
    v = o.finished,
    f = n.deceleration;
  return c(t, l, s, u, v, f);
};
