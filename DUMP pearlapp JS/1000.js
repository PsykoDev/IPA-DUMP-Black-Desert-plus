var module1001 = require('./1001'),
  module1004 = require('./1004'),
  module1005 = require('./1005'),
  u = 1,
  o = 2;

module.exports = function (v, l, s, c, b, h) {
  var k = s & u,
    p = v.length,
    _ = l.length;
  if (p != _ && !(k && _ > p)) return false;
  var w = h.get(v);
  if (w && h.get(l)) return w == l;
  var x = -1,
    j = true,
    q = s & o ? new module1001() : undefined;

  for (h.set(v, l), h.set(l, v); ++x < p; ) {
    var y = v[x],
      z = l[x];
    if (c) var A = k ? c(z, y, x, l, v, h) : c(y, z, x, v, l, h);

    if (undefined !== A) {
      if (A) continue;
      j = false;
      break;
    }

    if (q) {
      if (
        !module1004(l, function (t, n) {
          if (!module1005(q, n) && (y === t || b(y, t, s, c, h))) return q.push(n);
        })
      ) {
        j = false;
        break;
      }
    } else if (y !== z && !b(y, z, s, c, h)) {
      j = false;
      break;
    }
  }

  h.delete(v);
  h.delete(l);
  return j;
};
