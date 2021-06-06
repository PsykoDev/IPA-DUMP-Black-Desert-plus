var module854 = require('./854'),
  module951 = require('./951'),
  module869 = require('./869'),
  module1000 = require('./1000'),
  module1007 = require('./1007'),
  module1008 = require('./1008'),
  f = 1,
  u = 2,
  j = '[object Boolean]',
  y = '[object Date]',
  l = '[object Error]',
  v = '[object Map]',
  h = '[object Number]',
  p = '[object RegExp]',
  w = '[object Set]',
  L = '[object String]',
  O = '[object Symbol]',
  S = '[object ArrayBuffer]',
  x = '[object DataView]',
  z = module854 ? module854.prototype : undefined,
  B = z ? z.valueOf : undefined;

module.exports = function (t, z, D, E, _, A, M) {
  switch (D) {
    case x:
      if (t.byteLength != z.byteLength || t.byteOffset != z.byteOffset) return false;
      t = t.buffer;
      z = z.buffer;

    case S:
      return !(t.byteLength != z.byteLength || !A(new module951(t), new module951(z)));

    case j:
    case y:
    case h:
      return module869(+t, +z);

    case l:
      return t.name == z.name && t.message == z.message;

    case p:
    case L:
      return t == z + '';

    case v:
      var N = module1007;

    case w:
      var R = E & f;
      if ((N || (N = module1008), t.size != z.size && !R)) return false;
      var V = M.get(t);
      if (V) return V == z;
      E |= u;
      M.set(t, z);
      var k = module1000(N(t), N(z), E, _, A, M);
      M.delete(t);
      return k;

    case O:
      if (B) return B.call(t) == B.call(z);
  }

  return false;
};
