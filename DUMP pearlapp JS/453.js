var module440 = require('./440'),
  module454 = require('./454'),
  module455 = require('./455'),
  module443 = require('./443'),
  module457 = require('./457'),
  module458 = require('./458'),
  module459 = require('./459'),
  module460 = require('./460');

function h(t, n) {
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

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(Object(o), true).forEach(function (n) {
        x(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      h(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function x(t, n, o) {
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

var P = function () {
  return {};
};

exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  module459.default(t);
  var h = n.order || Object.keys(t),
    x = n.getCustomActionCreators || P,
    b = n.initialRouteParams,
    A = n.initialRouteName || h[0],
    k = n.backBehavior || 'none',
    N = !n.hasOwnProperty('resetOnBlur') || n.resetOnBlur,
    j = h.indexOf(A);
  if (-1 === j)
    throw new Error(
      "Invalid initialRouteName '".concat(A, "'.") +
        'Should be one of '.concat(
          h
            .map(function (t) {
              return '"'.concat(t, '"');
            })
            .join(', ')
        )
    );
  var w = {};

  function S(n, o) {
    var u = t[n];
    return u && u.params ? O({}, u.params, {}, o) : o;
  }

  h.forEach(function (n) {
    w[n] = null;
    var o = module454.default(t, n);
    if (o.router) w[n] = o.router;
  });
  var F = module460.createPathParser(w, t, n),
    C = F.getPathAndParamsForRoute,
    K = F.getActionForPathAndParams;

  function T(t) {
    var n = S(t, t === A ? b : undefined),
      o = w[t];

    if (o) {
      var u = module443.init();
      return O({}, o.getStateForAction(u), {
        key: t,
        routeName: t,
        params: n,
      });
    }

    return {
      key: t,
      routeName: t,
      params: n,
    };
  }

  function E(t, n, u) {
    var f = u;

    if (n && u && n.index !== u.index && N) {
      var s = n.routes[n.index].routeName,
        l = module34.default(u.routes);
      l[n.index] = T(s);
      f = O({}, u, {
        routes: l,
      });
    }

    return (function (n, u) {
      if ('history' !== k || (n && u && u.index === n.index)) return u;
      var f = n ? n.routeKeyHistory : [];

      if (t.type === module443.NAVIGATE) {
        f = module34.default(f);
        var s = u.routes[u.index].key;
        (f = f.filter(function (t) {
          return t !== s;
        })).push(s);
      } else t.type === module443.BACK && (f = module34.default(f)).pop();

      return O({}, u, {
        routeKeyHistory: f,
      });
    })(n, f);
  }

  function R() {
    var t = h.map(T),
      n = {
        routes: t,
        index: j,
      };

    if ('history' === k) {
      var o = t[j].key;
      n.routeKeyHistory = [o];
    }

    return n;
  }

  return {
    childRouters: w,
    getActionCreators: function (t, n) {
      return x(t, n);
    },
    getStateForAction: function (t, n) {
      var u = n ? O({}, n) : n,
        f = n || R(),
        s = f.index;

      if (t.type === module443.INIT) {
        var y = t.params;
        if (y)
          f.routes = f.routes.map(function (t) {
            return O({}, t, {
              params: O({}, t.params, {}, y, {}, t.routeName === A ? b : null),
            });
          });
      }

      if (t.type === module457.JUMP_TO && (null == t.key || t.key === f.key)) {
        var v = t.params,
          x = f.routes.findIndex(function (n) {
            return n.routeName === t.routeName;
          });
        if (-1 === x)
          throw new Error(
            "There is no route named '".concat(t.routeName, "' in the navigator with the key '").concat(t.key, "'.\n") +
              'Must be one of: '.concat(
                f.routes
                  .map(function (t) {
                    return "'".concat(t.routeName, "'");
                  })
                  .join(',')
              )
          );
        return E(
          t,
          u,
          O({}, f, {
            routes: v
              ? f.routes.map(function (t, n) {
                  return n === x
                    ? O({}, t, {
                        params: O({}, t.params, {}, v),
                      })
                    : t;
                })
              : f.routes,
            index: x,
          })
        );
      }

      var P = f.routes[f.index],
        N = w[h[f.index]];

      if (N) {
        var S = N.getStateForAction(t, P);
        if (!S && n) return null;

        if (S && S !== P) {
          var F = module34.default(f.routes);
          F[f.index] = S;
          return E(
            t,
            u,
            O({}, f, {
              routes: F,
            })
          );
        }
      }

      var C = null == t.key || t.key === P.key;
      if (t.type === module443.BACK)
        if (C && 'initialRoute' === k) s = j;
        else if (C && 'order' === k) s = 0 ** (s - 1);
        else if (C && 'history' === k && f.routeKeyHistory.length > 1) {
          var K = f.routeKeyHistory[f.routeKeyHistory.length - 2];
          s = h.indexOf(K);
        }
      var T = false;

      if (
        t.type === module443.NAVIGATE &&
        (T = !!h.find(function (n, o) {
          return n === t.routeName && ((s = o), true);
        }))
      ) {
        var _ = f.routes[s],
          B = w[t.routeName],
          H = _;

        if (t.action && B) {
          var I = B.getStateForAction(t.action, _);
          if (I) H = I;
        }

        if (
          (t.params &&
            (H = O({}, H, {
              params: O({}, H.params || {}, {}, t.params),
            })),
          H !== _)
        ) {
          var M = module34.default(f.routes);
          M[s] = H;
          var D = O({}, f, {
            routes: M,
            index: s,
          });
          return E(t, u, D);
        }

        if (H === _ && f.index === s && u) return null;
      }

      if (t.type === module443.SET_PARAMS) {
        var G = t.key,
          V = f.routes.find(function (t) {
            return t.key === G;
          });

        if (V) {
          var J = O({}, V.params, {}, t.params),
            U = module34.default(f.routes);
          U[f.routes.indexOf(V)] = O({}, V, {
            params: J,
          });
          return E(
            t,
            u,
            O({}, f, {
              routes: U,
            })
          );
        }
      }

      if (s !== f.index)
        return E(
          t,
          u,
          O({}, f, {
            index: s,
          })
        );
      if (T && !n) return f;
      if (T) return O({}, f);

      if ((t.type !== module443.BACK && t.type !== module458.POP && t.type !== module458.POP_TO_TOP) || (t.type === module443.BACK && null != t.key)) {
        var q = f.index,
          z = f.routes;
        if (
          (h.find(function (n, u) {
            var f = w[n];
            if (u === q) return false;
            var s = z[u];
            if (f) s = f.getStateForAction(t, s);
            if (s) return s !== z[u] && (((z = module34.default(z))[u] = s), (q = u), true);
            else {
              q = u;
              return true;
            }
          }),
          t.preserveFocus && (q = f.index),
          q !== f.index || z !== f.routes)
        )
          return E(
            t,
            u,
            O({}, f, {
              index: q,
              routes: z,
            })
          );
      }

      return f;
    },
    getComponentForState: function (n) {
      var o = n.routes[n.index].routeName;
      module440.default(o, 'There is no route defined for index '.concat(n.index, '. Check that\n        that you passed in a navigation state with a valid tab/screen index.'));
      var s = w[o];
      return s ? s.getComponentForState(n.routes[n.index]) : module454.default(t, o);
    },
    getComponentForRouteName: function (n) {
      return module454.default(t, n);
    },
    getPathAndParamsForState: function (t) {
      var n = t.routes[t.index];
      return C(n);
    },
    getActionForPathAndParams: function (t, n) {
      return K(t, n);
    },
    getScreenOptions: module455.default(t, n.defaultNavigationOptions),
  };
};
