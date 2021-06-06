var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module661 = require('./661'),
  module437 = require('./437'),
  module663 = require('./663'),
  module665 = require('./665'),
  module698 = require('./698'),
  module699 = require('./699'),
  module703 = require('./703');

function O() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

function T() {
  return (T =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u]);
      }

      return t;
    }).apply(this, arguments);
}

function P(t, n) {
  if (null == t) return {};
  var o,
    u,
    s = w(t, n);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);

    for (u = 0; u < l.length; u++) {
      o = l[u];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (s[o] = t[o]);
    }
  }

  return s;
}

function w(t, n) {
  if (null == t) return {};
  var o,
    u,
    s = {},
    l = Object.keys(t);

  for (u = 0; u < l.length; u++) {
    o = l[u];
    if (!(n.indexOf(o) >= 0)) s[o] = t[o];
  }

  return s;
}

function C(t, n, o) {
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

var j = null !== module663.GestureHandlerRootView && undefined !== module663.GestureHandlerRootView ? module663.GestureHandlerRootView : module17.View,
  x = (function (t, ...args) {
    module9.default(x, t);

    var n = x,
      module663 = O(),
      w = function () {
        var t,
          o = module13.default(n);

        if (module663) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function x() {
      var t;
      module7.default(this, x);
      t = w.call(this, ...args);
      C(module12.default(t), 'state', {
        routes: [],
        previousRoutes: [],
        previousDescriptors: {},
        openingRouteKeys: [],
        closingRouteKeys: [],
        replacingRouteKeys: [],
        descriptors: {},
      });
      C(module12.default(t), 'getGesturesEnabled', function (n) {
        var o = n.route,
          u = t.state.descriptors[o.key];

        if (u) {
          var s = u.options,
            l = s.gestureEnabled;
          return false !== s.animationEnabled && (undefined !== l ? l : 'android' !== module17.Platform.OS);
        }

        return false;
      });
      C(module12.default(t), 'getPreviousRoute', function (n) {
        var o = n.route,
          u = t.state,
          s = u.closingRouteKeys,
          l = u.replacingRouteKeys,
          c = t.state.routes.filter(function (t) {
            return t.key === o.key || (!s.includes(t.key) && !l.includes(t.key));
          });
        return c[
          c.findIndex(function (t) {
            return t.key === o.key;
          }) - 1
        ];
      });
      C(module12.default(t), 'renderScene', function (n) {
        var o = n.route,
          u = t.state.descriptors[o.key] || t.props.descriptors[o.key];
        if (!u) return null;
        var s = u.navigation,
          l = u.getComponent();
        return <module437.SceneView screenProps={t.props.screenProps} navigation={s} component={l} />;
      });
      C(module12.default(t), 'renderHeader', function (t) {
        return <module699.default />;
      });
      C(module12.default(t), 'handleTransitionComplete', function () {
        var n = t.props,
          o = n.state,
          u = n.navigation;
        if (o.isTransitioning)
          u.dispatch(
            module437.StackActions.completeTransition({
              key: u.state.key,
              toChildKey: o.routes[o.index].key,
            })
          );
      });
      C(module12.default(t), 'handleOpenRoute', function (n) {
        var o = n.route,
          u = t.props,
          s = u.state,
          l = u.navigation;
        t.handleTransitionComplete();
        if (
          t.state.replacingRouteKeys.every(function (t) {
            return t !== o.key;
          }) &&
          !s.routes.some(function (t) {
            return t.key === o.key;
          })
        )
          l.dispatch(module437.NavigationActions.navigate(o));
        else
          t.setState(function (t) {
            return {
              routes: t.replacingRouteKeys.length
                ? t.routes.filter(function (n) {
                    return !t.replacingRouteKeys.includes(n.key);
                  })
                : t.routes,
              openingRouteKeys: t.openingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              closingRouteKeys: t.closingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              replacingRouteKeys: [],
            };
          });
      });
      C(module12.default(t), 'handleCloseRoute', function (n) {
        var o = n.route,
          u = t.props,
          s = u.state,
          l = u.navigation;
        if (
          s.routes.some(function (t) {
            return t.key === o.key;
          })
        )
          l.dispatch(
            module437.StackActions.pop({
              key: o.key,
              prune: false,
            })
          );
        else {
          t.handleTransitionComplete();
          t.setState(function (t) {
            return {
              routes: t.routes.filter(function (t) {
                return t.key !== o.key;
              }),
              openingRouteKeys: t.openingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              closingRouteKeys: t.closingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
            };
          });
        }
      });
      C(module12.default(t), 'handleTransitionStart', function (n, o) {
        var u,
          s,
          l = n.route,
          c = t.props.descriptors[l.key] || t.state.descriptors[l.key];
        if (!(null === c || undefined === c || null === (u = (s = c.options).onTransitionStart) || undefined === u))
          u.call(s, {
            closing: o,
          });
      });
      C(module12.default(t), 'handleTransitionEnd', function (n, o) {
        var u,
          s,
          l = n.route,
          c = t.props.descriptors[l.key] || t.state.descriptors[l.key];
        if (!(null === c || undefined === c || null === (u = (s = c.options).onTransitionEnd) || undefined === u))
          u.call(s, {
            closing: o,
          });
      });
      return t;
    }

    module8.default(
      x,
      [
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              o = n.state,
              u = n.keyboardHandlingEnabled,
              s = n.mode,
              l = undefined === s ? 'card' : s,
              c = P(n, ['state', 'navigation', 'keyboardHandlingEnabled', 'mode']),
              f = this.state,
              p = f.routes,
              R = f.descriptors,
              h = f.openingRouteKeys,
              E = f.closingRouteKeys,
              O = 'card' === l && 'ios' === module17.Platform.OS ? 'float' : 'screen';
            return (
              <React.Fragment>
                <j style={D.container}>
                  <module703.default>
                    <module661.SafeAreaConsumer>
                      {function (n) {
                        return (
                          <module698.default enabled={false !== u}>
                            {function (u) {
                              return <module665.default />;
                            }}
                          </module698.default>
                        );
                      }}
                    </module661.SafeAreaConsumer>
                  </module703.default>
                </j>
              </React.Fragment>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            if (
              (t.state.routes === n.previousRoutes ||
                ((p = t.state.routes.map(function (t) {
                  return t.key;
                })),
                (y = n.previousRoutes.map(function (t) {
                  return t.key;
                })),
                p.length === y.length &&
                  p.every(function (t, n) {
                    return t === y[n];
                  }))) &&
              n.routes.length
            ) {
              var u = n.routes,
                s = n.previousRoutes,
                l = t.descriptors,
                c = n.previousDescriptors;

              if (
                (t.descriptors !== n.previousDescriptors &&
                  ((l = n.routes.reduce(function (o, u) {
                    o[u.key] = t.descriptors[u.key] || n.descriptors[u.key];
                    return o;
                  }, {})),
                  (c = t.descriptors)),
                t.state.routes !== n.previousRoutes)
              ) {
                var f = t.state.routes.reduce(function (t, n) {
                  t[n.key] = n;
                  return t;
                }, {});
                u = n.routes.map(function (t) {
                  return f[t.key] || t;
                });
                s = t.state.routes;
              }

              return {
                routes: u,
                previousRoutes: s,
                descriptors: l,
                previousDescriptors: c,
              };
            }

            var p,
              y,
              v,
              k,
              R = t.state.index < t.state.routes.length - 1 ? t.state.routes.slice(0, t.state.index + 1) : t.state.routes,
              h = n.openingRouteKeys,
              K = n.closingRouteKeys,
              b = n.replacingRouteKeys,
              E = n.previousRoutes,
              S = E[E.length - 1],
              O = R[R.length - 1],
              T = function (o) {
                var u = t.descriptors[o] || n.descriptors[o];
                return !u || false !== u.options.animationEnabled;
              };

            if (S && S.key !== O.key)
              E.some(function (t) {
                return t.key === O.key;
              })
                ? R.some(function (t) {
                    return t.key === S.key;
                  }) ||
                  (T(S.key) &&
                    !K.includes(S.key) &&
                    ((K = [].concat(module34.default(K), [S.key])),
                    (h = h.filter(function (t) {
                      return t !== S.key;
                    })),
                    (b = b.filter(function (t) {
                      return t !== S.key;
                    })),
                    (R = [].concat(module34.default(R), [S]))))
                : T(O.key) &&
                  !h.includes(O.key) &&
                  ((h = [].concat(module34.default(h), [O.key])),
                  (K = K.filter(function (t) {
                    return t !== O.key;
                  })),
                  (b = b.filter(function (t) {
                    return t !== O.key;
                  })),
                  R.some(function (t) {
                    return t.key === S.key;
                  }) ||
                    ((h = h.filter(function (t) {
                      return t !== S.key;
                    })),
                    'pop' === ((v = O.key), null !== (k = (t.descriptors[v] || n.descriptors[v]).options.animationTypeForReplace) && undefined !== k ? k : 'push')
                      ? ((K = [].concat(module34.default(K), [S.key])),
                        (h = h.filter(function (t) {
                          return t !== O.key;
                        })),
                        (R = [].concat(module34.default(R), [S])))
                      : ((b = [].concat(module34.default(b), [S.key])),
                        (K = K.filter(function (t) {
                          return t !== S.key;
                        })),
                        (R = R.slice()).splice(R.length - 1, 0, S))));
            else if (b.length || K.length) {
              var P;
              (P = R = R.slice()).splice.apply(
                P,
                [R.length - 1, 0].concat(
                  module34.default(
                    n.routes.filter(function (t) {
                      var n = t.key;
                      return !!T(n) && (b.includes(n) || K.includes(n));
                    })
                  )
                )
              );
            }
            if (!R.length) throw new Error('There should always be at least one route in the navigation state.');
            var w = R.reduce(function (o, u) {
              o[u.key] = t.descriptors[u.key] || n.descriptors[u.key];
              return o;
            }, {});
            return {
              routes: R,
              previousRoutes: t.state.routes,
              previousDescriptors: t.descriptors,
              openingRouteKeys: h,
              closingRouteKeys: K,
              replacingRouteKeys: b,
              descriptors: w,
            };
          },
        },
      ]
    );
    return x;
  })(React.Component);

exports.default = x;
var D = module17.StyleSheet.create({
  container: {
    flex: 1,
  },
});
