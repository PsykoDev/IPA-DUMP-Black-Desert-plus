var module864 = require('./864'),
  module902 = require('./902'),
  module903 = require('./903'),
  module906 = require('./906'),
  module926 = require('./926'),
  module930 = require('./930'),
  module931 = require('./931'),
  module932 = require('./932'),
  module936 = require('./936'),
  module940 = require('./940'),
  module942 = require('./942'),
  module943 = require('./943'),
  module948 = require('./948'),
  module949 = require('./949'),
  module956 = require('./956'),
  module859 = require('./859'),
  module913 = require('./913'),
  module958 = require('./958'),
  module882 = require('./882'),
  module960 = require('./960'),
  module908 = require('./908'),
  w = 1,
  x = 2,
  B = 4,
  D = '[object Arguments]',
  M = '[object Function]',
  _ = '[object GeneratorFunction]',
  C = '[object Object]',
  G = {};

G[D] =
  G['[object Array]'] =
  G['[object ArrayBuffer]'] =
  G['[object DataView]'] =
  G['[object Boolean]'] =
  G['[object Date]'] =
  G['[object Float32Array]'] =
  G['[object Float64Array]'] =
  G['[object Int8Array]'] =
  G['[object Int16Array]'] =
  G['[object Int32Array]'] =
  G['[object Map]'] =
  G['[object Number]'] =
  G[C] =
  G['[object RegExp]'] =
  G['[object Set]'] =
  G['[object String]'] =
  G['[object Symbol]'] =
  G['[object Uint8Array]'] =
  G['[object Uint8ClampedArray]'] =
  G['[object Uint16Array]'] =
  G['[object Uint32Array]'] =
    true;
G['[object Error]'] = G[M] = G['[object WeakMap]'] = false;

module.exports = function N(O, R, V, W, q, z) {
  var H,
    J = R & w,
    K = R & x,
    L = R & B;
  if ((V && (H = q ? V(O, W, q, z) : V(O)), undefined !== H)) return H;
  if (!module882(O)) return O;
  var P = module859(O);

  if (P) {
    if (((H = module948(O)), !J)) return module931(O, H);
  } else {
    var Q = module943(O),
      T = Q == M || Q == _;
    if (module913(O)) return module930(O, J);

    if (Q == C || Q == D || (T && !q)) {
      if (((H = K || T ? {} : module956(O)), !J)) return K ? module936(O, module926(H, O)) : module932(O, module906(H, O));
    } else {
      if (!G[Q]) return q ? O : {};
      H = module949(O, Q, J);
    }
  }

  if (!z) z = new module864();
  var X = z.get(O);
  if (X) return X;
  z.set(O, H);
  if (module960(O))
    O.forEach(function (t) {
      H.add(N(t, R, V, t, O, z));
    });
  else if (module958(O))
    O.forEach(function (t, o) {
      H.set(o, N(t, R, V, o, O, z));
    });
  var Y = L ? (K ? module942 : module940) : K ? keysIn : module908,
    Z = P ? undefined : Y(O);
  module902(Z || O, function (t, o) {
    if (Z) t = O[(o = t)];
    module903(H, o, N(t, R, V, o, O, z));
  });
  return H;
};
