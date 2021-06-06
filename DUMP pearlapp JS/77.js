require('./58');

var module6 = require('./6'),
  module78 = require('./78'),
  module25 = require('./25'),
  module79 = require('./79'),
  module42 = require('./42'),
  s = {},
  l = new Set(),
  v = {},
  C = false;

function w() {
  if (!C) {
    v = module78.default.getConstants();
    C = true;
  }

  return v;
}

var M = module6.default({}, module78.default, {
  getConstants: function () {
    return w();
  },
  getViewManagerConfig: function (n) {
    if (undefined === s[n] && module78.default.getConstantsForViewManager)
      try {
        s[n] = module78.default.getConstantsForViewManager(n);
      } catch (t) {
        s[n] = null;
      }
    var t = s[n];
    if (t) return t;
    if (!globals.nativeCallSyncHook) return t;

    if (module78.default.lazilyLoadView && !l.has(n)) {
      var f = module78.default.lazilyLoadView(n);
      l.add(n);

      if (f.viewConfig) {
        w()[n] = f.viewConfig;
        y(n);
      }
    }

    return s[n];
  },
});

function y(n) {
  var t = w()[n];
  s[n] = t;

  if (t.Manager) {
    module42(t, 'Constants', {
      get: function () {
        var n = module25[t.Manager],
          o = {};
        if (n)
          Object.keys(n).forEach(function (t) {
            var f = n[t];
            if ('function' != typeof f) o[t] = f;
          });
        return o;
      },
    });
    module42(t, 'Commands', {
      get: function () {
        var n = module25[t.Manager],
          o = {},
          u = 0;
        if (n)
          Object.keys(n).forEach(function (t) {
            if ('function' == typeof n[t]) o[t] = u++;
          });
        return o;
      },
    });
  }
}

module78.default.getViewManagerConfig = M.getViewManagerConfig;
Object.keys(w()).forEach(function (n) {
  y(n);
});
if (!globals.nativeCallSyncHook)
  Object.keys(w()).forEach(function (n) {
    if (!module79.includes(n)) {
      if (!s[n]) s[n] = w()[n];
      module42(module78.default, n, {
        get: function () {
          console.warn(
            "Accessing view manager configs directly off UIManager via UIManager['" + n + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + n + "') instead."
          );
          return M.getViewManagerConfig(n);
        },
      });
    }
  });
module.exports = M;
