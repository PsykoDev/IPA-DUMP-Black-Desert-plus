var module17 = require('./17'),
  module505 = require('./505'),
  module506 = require('./506'),
  p = {},
  s = function (t, u) {
    for (
      var o = {},
        l = Object.keys(t),
        p = function (p, s) {
          var v = l[p];
          if ('function' == typeof t[v])
            o[v] = function (...args) {
              return t[v](...module34.default(u));
            };
          else o[v] = t[v];
        },
        s = 0,
        v = l.length;
      s < v;
      s++
    )
      p(s);

    return o;
  },
  v = function (t) {
    return (t._customUrlOrRegion || t.app.name) + ':' + t.namespace;
  };

exports.getNativeModule = function (t) {
  return p[v(t)];
};

exports.initialiseNativeModule = function (t, n, c) {
  var f = n.moduleName,
    M = n.hasMultiAppSupport,
    h = n.hasCustomUrlSupport,
    N = n.hasRegionsSupport,
    S = n.namespace,
    _ = module17.NativeModules[f],
    R = v(t);
  if (!_ && 'utils' !== S) throw new Error(module506.default.STRINGS.ERROR_MISSING_MODULE(S, f));
  var y = [];
  if (M) y.push(t.app.name);
  if (h || N) y.push(c);
  if (y.length) p[R] = s(_, y);
  else p[R] = _;
  module505.initialiseNativeModuleEventEmitter(t, n);
  return p[R];
};
