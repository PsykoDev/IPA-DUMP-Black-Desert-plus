exports.__esModule = true;

exports.default = function (f, c) {
  var l = undefined !== f.version ? f.version : module617.DEFAULT_VERSION,
    v = undefined === f.stateReconciler ? module618.default : f.stateReconciler,
    O = f.getStoredState || module620.default,
    h = undefined !== f.timeout ? f.timeout : b,
    _ = null,
    P = false,
    j = true,
    w = function (t) {
      if (t._persist.rehydrated && _ && !j) _.update(t);
      return t;
    };

  return function (n, u) {
    var b = n || {},
      E = b._persist,
      S = y(b, ['_persist']),
      k = S;

    if (u.type === module617.PERSIST) {
      var R = false,
        T = function (t, n) {
          if (!R) {
            u.rehydrate(f.key, t, n);
            R = true;
          }
        };

      if (
        (h &&
          setTimeout(function () {
            if (!R) T(undefined, new Error('redux-persist: persist timed out for persist key "'.concat(f.key, '"')));
          }, h),
        (j = false),
        _ || (_ = module619.default(f)),
        E)
      )
        return p({}, c(k, u), {
          _persist: E,
        });
      if ('function' != typeof u.rehydrate || 'function' != typeof u.register)
        throw new Error(
          'redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.'
        );
      u.register(f.key);
      O(f).then(
        function (t) {
          var n =
            f.migrate ||
            function (t, n) {
              return Promise.resolve(t);
            };

          n(t, l).then(
            function (t) {
              T(t);
            },
            function (t) {
              T(undefined, t);
            }
          );
        },
        function (t) {
          T(undefined, t);
        }
      );
      return p({}, c(k, u), {
        _persist: {
          version: l,
          rehydrated: false,
        },
      });
    }

    if (u.type === module617.PURGE) {
      P = true;
      u.result(module621.default(f));
      return p({}, c(k, u), {
        _persist: E,
      });
    }

    if (u.type === module617.FLUSH) {
      u.result(_ && _.flush());
      return p({}, c(k, u), {
        _persist: E,
      });
    }

    if (u.type === module617.PAUSE) j = true;
    else if (u.type === module617.REHYDRATE) {
      if (P)
        return p({}, k, {
          _persist: p({}, E, {
            rehydrated: true,
          }),
        });

      if (u.key === f.key) {
        var D = c(k, u),
          x = u.payload,
          I = false !== v && undefined !== x ? v(x, n, D, f) : D,
          U = p({}, I, {
            _persist: p({}, E, {
              rehydrated: true,
            }),
          });
        return w(U);
      }
    }
    if (!E) return c(n, u);
    var A = c(k, u);
    return A === k
      ? n
      : w(
          p({}, A, {
            _persist: E,
          })
        );
  };
};

var module617 = require('./617'),
  module618 = require('./618'),
  module619 = require('./619'),
  module620 = require('./620'),
  module621 = require('./621');

function c(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function p(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      c(o, true).forEach(function (n) {
        l(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      c(o).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function l(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

function y(t, n) {
  if (null == t) return {};
  var o,
    u,
    s = v(t, n);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);

    for (u = 0; u < f.length; u++) {
      o = f[u];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (s[o] = t[o]);
    }
  }

  return s;
}

function v(t, n) {
  if (null == t) return {};
  var o,
    u,
    s = {},
    f = Object.keys(t);

  for (u = 0; u < f.length; u++) {
    o = f[u];
    if (!(n.indexOf(o) >= 0)) s[o] = t[o];
  }

  return s;
}

var b = 5e3;
