var module443 = require('./443'),
  module458 = require('./458'),
  module455 = require('./455'),
  module454 = require('./454'),
  module439 = require('./439'),
  module459 = require('./459'),
  module440 = require('./440'),
  module472 = require('./472'),
  module460 = require('./460');

function N(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = b(t)) || (n && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var u = 0;
      return function () {
        return u >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[u++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function b(t, n) {
  if (t) {
    if ('string' == typeof t) return A(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? A(t, n) : undefined;
  }
}

function A(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

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

function P(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(Object(o), true).forEach(function (n) {
        S(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      h(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function S(t, n, o) {
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

function O(t) {
  return t.type === module443.NAVIGATE || t.type === module458.PUSH;
}

var T = function () {
  return {};
};

function x(t) {
  return t.type === module458.RESET && null === t.key;
}

exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  module459.default(t);
  var b = {},
    A = Object.keys(t);
  A.forEach(function (n) {
    var o = t[n],
      u = o && o.screen ? o.screen : o;
    if (u && u.router) b[n] = u.router;
    else b[n] = null;
  });
  var h = n.initialRouteParams,
    S = n.getCustomActionCreators || T,
    j = n.initialRouteName || A[0],
    F = b[j];

  function R(o) {
    var s = {},
      c = b[o.routeName];

    if (O(o) && undefined !== c) {
      var f = {};

      if (null !== c) {
        var l =
          o.action ||
          module443.init({
            params: o.params,
          });
        f = c.getStateForAction(l);
      }

      return {
        key: 'StackRouterRoot',
        isTransitioning: false,
        index: 0,
        routes: [
          P(
            {
              params: o.params,
            },
            f,
            {
              key: o.key || module472.generateKey(),
              routeName: o.routeName,
            }
          ),
        ],
      };
    }

    if (F)
      s = F.getStateForAction(
        module443.navigate({
          routeName: j,
          params: h,
        })
      );
    var p = (t[j].params || s.params || o.params || h) && P({}, t[j].params || {}, {}, s.params || {}, {}, o.params || {}, {}, h || {}),
      y = n.initialRouteKey;
    return {
      key: 'StackRouterRoot',
      isTransitioning: false,
      index: 0,
      routes: [
        (s = P(
          {},
          s,
          {},
          p
            ? {
                params: p,
              }
            : {},
          {
            routeName: j,
            key: o.key || y || module472.generateKey(),
          }
        )),
      ],
    };
  }

  function E(n, o) {
    var u = t[n];
    return u && u.params ? P({}, u.params, {}, o.params) : o.params;
  }

  var w = module460.createPathParser(b, t, n),
    C = w.getPathAndParamsForRoute,
    K = w.getActionForPathAndParams;
  return {
    childRouters: b,
    getComponentForState: function (n) {
      var o = n.routes[n.index],
        u = o.routeName;
      return b[u] ? b[u].getComponentForState(o) : module454.default(t, u);
    },
    getComponentForRouteName: function (n) {
      return module454.default(t, n);
    },
    getActionCreators: function (t, n) {
      return P({}, S(t, n), {
        pop: function (t, n) {
          return module458.pop(
            P(
              {
                n: t,
              },
              n
            )
          );
        },
        popToTop: function (t) {
          return module458.popToTop(t);
        },
        push: function (t, n, o) {
          return module458.push({
            routeName: t,
            params: n,
            action: o,
          });
        },
        replace: function (n, o, u, c) {
          if ('string' == typeof n)
            return module458.replace({
              routeName: n,
              params: o,
              action: u,
              key: t.key,
              newKey: c,
            });
          else {
            module440.default('object' == typeof n, 'Must replaceWith an object or a string');
            module440.default(null == o, 'Params must not be provided to .replace() when specifying an object');
            module440.default(null == u, 'Child action must not be provided to .replace() when specifying an object');
            module440.default(null == c, 'Child action must not be provided to .replace() when specifying an object');
            return module458.replace(n);
          }
        },
        reset: function (t, o) {
          return module458.reset({
            actions: t,
            index: null == o ? t.length - 1 : o,
            key: n,
          });
        },
        dismiss: function () {
          return module443.back({
            key: n,
          });
        },
      });
    },
    getStateForAction: function (t, n) {
      if (!n) return R(t);
      var c,
        f = n.routes[n.index];

      if (x(t) || t.type === module443.NAVIGATE) {
        if (t.type === module443.NAVIGATE)
          for (var p, k = N(n.routes.slice().reverse()); !(p = k()).done; ) {
            var A = p.value,
              h = b[A.routeName],
              S = t.routeName === A.routeName && t.action ? t.action : t;

            if (h) {
              var T = h.getStateForAction(S, A);

              if (null === T || T !== A) {
                var j = module439.default.replaceAndPrune(n, T ? T.key : A.key, T || A);
                return P({}, j, {
                  isTransitioning: n.index !== j.index ? true !== t.immediate : n.isTransitioning,
                });
              }
            }
          }
      } else {
        var F = b[f.routeName];

        if (F) {
          var w = F.getStateForAction(t, f);
          if (null !== w && w !== f) return module439.default.replaceAt(n, f.key, w, t.type === module443.SET_PARAMS);
        }
      }

      if (O(t) && undefined !== b[t.routeName]) {
        var C,
          K = b[t.routeName];
        module440.default(t.type !== module458.PUSH || null == t.key, 'StackRouter does not support key on the push action');
        var I = n.routes.findIndex(function (n) {
          return t.key ? n.key === t.key : n.routeName === t.routeName;
        });

        if (t.type !== module458.PUSH && -1 !== I) {
          if (n.index === I && !t.params) return null;

          var _ = n.routes.slice(0, I + 1);

          if (t.params) {
            var M = n.routes[I];
            _[I] = P({}, M, {
              params: P({}, M.params, {}, t.params),
            });
          }

          return P({}, n, {
            isTransitioning: n.index !== I ? true !== t.immediate : n.isTransitioning,
            index: I,
            routes: _,
          });
        }

        if (K) {
          var D =
            t.action ||
            module443.init({
              params: E(t.routeName, t),
            });
          C = P(
            {
              params: E(t.routeName, t),
            },
            K.getStateForAction(D),
            {
              routeName: t.routeName,
              key: t.key || module472.generateKey(),
            }
          );
        } else
          C = {
            params: E(t.routeName, t),
            routeName: t.routeName,
            key: t.key || module472.generateKey(),
          };

        return P({}, module439.default.push(n, C), {
          isTransitioning: true !== t.immediate,
        });
      }

      if (t.type === module458.PUSH && undefined === b[t.routeName]) return n;
      if (O(t))
        for (var U = Object.keys(b), H = 0; H < U.length; H++) {
          var G = U[H],
            V = b[G];

          if (V) {
            var L = V.getStateForAction(module443.init()),
              W = V.getStateForAction(t, L),
              B = null;

            if ((null === W ? (B = L) : W !== L && (B = W), B)) {
              var $ = P({}, B, {
                routeName: G,
                key: t.key || module472.generateKey(),
              });
              return P({}, module439.default.push(n, $), {
                isTransitioning: true !== t.immediate,
              });
            }
          }
        }
      if (t.type === module458.POP_TO_TOP)
        return t.key && n.key !== t.key
          ? n
          : n.index > 0
          ? P({}, n, {
              isTransitioning: true !== t.immediate,
              index: 0,
              routes: [n.routes[0]],
            })
          : n;

      if (
        t.type === module458.REPLACE &&
        -1 !==
          (c =
            undefined === t.key && n.routes.length
              ? n.routes.length - 1
              : n.routes.findIndex(function (n) {
                  return n.key === t.key;
                }))
      ) {
        var q = b[t.routeName],
          z = {};

        if (q) {
          var J =
            t.action ||
            module443.init({
              params: E(t.routeName, t),
            });
          z = q.getStateForAction(J);
        }

        var Q = module34.default(n.routes);
        Q[c] = P(
          {
            params: E(t.routeName, t),
          },
          z,
          {
            routeName: t.routeName,
            key: t.newKey || module472.generateKey(),
          }
        );
        return P({}, n, {
          routes: Q,
        });
      }

      if (t.type === module458.COMPLETE_TRANSITION && (null == t.key || t.key === n.key) && t.toChildKey === n.routes[n.index].key && n.isTransitioning)
        return P({}, n, {
          isTransitioning: false,
        });

      if (t.type === module443.SET_PARAMS) {
        var X = t.key,
          Y = n.routes.find(function (t) {
            return t.key === X;
          });

        if (Y) {
          var Z = P({}, Y.params, {}, t.params),
            ee = module34.default(n.routes);
          ee[n.routes.indexOf(Y)] = P({}, Y, {
            params: Z,
          });
          return P({}, n, {
            routes: ee,
          });
        }
      }

      if (t.type === module458.RESET)
        return null != t.key && t.key !== n.key
          ? n
          : P({}, n, {
              routes: t.actions.map(function (t) {
                var n = b[t.routeName],
                  o = {};

                if (n) {
                  var s =
                    t.action ||
                    module443.init({
                      params: E(t.routeName, t),
                    });
                  o = n.getStateForAction(s);
                }

                return P(
                  {
                    params: E(t.routeName, t),
                  },
                  o,
                  {
                    routeName: t.routeName,
                    key: t.key || module472.generateKey(),
                  }
                );
              }),
              index: t.index,
            });

      if (t.type === module443.BACK || t.type === module458.POP) {
        var te = t.key,
          re = t.n,
          ne = t.immediate,
          ae = t.prune;

        if (t.type === module458.POP && false === ae && te) {
          var oe = n.routes.findIndex(function (t) {
            return t.key === te;
          });

          if (oe > 0) {
            var ie = (oe - (null !== re && undefined !== re ? re : 1) + 1) ** 1,
              ue = n.routes.slice(0, ie).concat(n.routes.slice(oe + 1));
            if (ue.length)
              return P({}, n, {
                routes: ue,
                index: ue.length - 1,
                isTransitioning: true !== ne,
              });
          }
        } else {
          var se = n.index;
          if (t.type === module458.POP && null != re) se = 1 ** (n.index - re + 1);
          else if (te) {
            var ce = n.routes.find(function (t) {
              return t.key === te;
            });
            se = n.routes.indexOf(ce);
          }
          if (se > 0)
            return P({}, n, {
              routes: n.routes.slice(0, se),
              index: se - 1,
              isTransitioning: true !== ne,
            });
        }
      }

      for (var fe, le = t.key ? module439.default.indexOf(n, t.key) : -1, pe = N(n.routes.slice().reverse()); !(fe = pe()).done; ) {
        var ye = fe.value;

        if (ye.key !== f.key && !(le >= 0 && ye.key !== t.key)) {
          var me = b[ye.routeName];

          if (me) {
            var de = me.getStateForAction(t, ye);
            if (null === de) return n;
            if (de && de !== ye) return module439.default.replaceAt(n, ye.key, de, t.preserveFocus || t.type.includes('DRAWER'));
          }
        }
      }

      return n;
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
