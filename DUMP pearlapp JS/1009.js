var module940 = require('./940'),
  n = 1,
  o = Object.prototype.hasOwnProperty;

module.exports = function (c, f, u, s, v, l) {
  var p = u & n,
    y = module940(c),
    h = y.length;
  if (h != module940(f).length && !p) return false;

  for (var b = h; b--; ) {
    var O = y[b];
    if (!(p ? O in f : o.call(f, O))) return false;
  }

  var _ = l.get(c);

  if (_ && l.get(f)) return _ == f;
  var j = true;
  l.set(c, f);
  l.set(f, c);

  for (var k = p; ++b < h; ) {
    var w = c[(O = y[b])],
      x = f[O];
    if (s) var P = p ? s(x, w, O, f, c, l) : s(w, x, O, c, f, l);

    if (!(undefined === P ? w === x || v(w, x, u, s, l) : P)) {
      j = false;
      break;
    }

    if (!k) k = 'constructor' == O;
  }

  if (j && !k) {
    var q = c.constructor,
      z = f.constructor;
    if (q != z && 'constructor' in c && 'constructor' in f && !('function' == typeof q && q instanceof q && 'function' == typeof z && z instanceof z)) j = false;
  }

  l.delete(c);
  l.delete(f);
  return j;
};
