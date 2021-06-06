var module247 = require('./247'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module666 = require('./666'),
  module669 = require('./669'),
  module682 = require('./682'),
  module659 = require('./659'),
  module657 = require('./657'),
  module654 = require('./654'),
  module695 = require('./695');

function I() {
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

function P() {
  return (P =
    Object.assign ||
    function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var n = arguments[o];

        for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
      }

      return t;
    }).apply(this, arguments);
}

function w(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (o)
      s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, s);
  }

  return n;
}

function E(t) {
  for (var o = 1; o < arguments.length; o++) {
    var n = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      w(Object(n), true).forEach(function (o) {
        H(t, o, n[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      w(Object(n)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
      });
  }

  return t;
}

function H(t, o, n) {
  if (o in t)
    Object.defineProperty(t, o, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[o] = n;
  return t;
}

var C = Object.freeze({
    options: {},
  }),
  j = function (t, o, n, s, u) {
    return t.reduce(function (t, l) {
      var c = (n[l.key] || {}).options,
        p = undefined === c ? {} : c,
        h = module17.StyleSheet.flatten(p.headerStyle || {}).height,
        y = undefined === h ? u[l.key] : h,
        v = E({}, o, {}, p.safeAreaInsets),
        b = p.headerStatusBarHeight,
        k = undefined === b ? v.top : b;
      t[l.key] = 'number' == typeof y ? y : module669.getDefaultHeaderHeight(s, k);
      return t;
    }, {});
  },
  x = function (t, o, n) {
    var s = ((null === n || undefined === n ? undefined : n.options) || {}).gestureDirection,
      u = undefined === s ? ('modal' === t ? module659.ModalTransition.gestureDirection : module659.DefaultTransition.gestureDirection) : s;
    return module695.default(o, u);
  },
  A = function (t, o, n, s) {
    var u = x(
      t,
      {
        width: 1 ** n.width,
        height: 1 ** n.height,
      },
      s
    );
    return u > 0
      ? o.interpolate({
          inputRange: [0, u],
          outputRange: [1, 0],
        })
      : o.interpolate({
          inputRange: [u, 0],
          outputRange: [0, 1],
        });
  },
  T = (function (t) {
    module9.default(w, t);

    var o = w,
      module669 = I(),
      D = function () {
        var t,
          n = module13.default(o);

        if (module669) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function w(t) {
      var o;
      module7.default(this, w);
      o = D.call(this, t);
      H(module12.default(o), 'handleLayout', function (t) {
        var n = t.nativeEvent.layout,
          s = n.height,
          u = n.width,
          l = {
            width: u,
            height: s,
          };
        o.setState(function (t, o) {
          return s === t.layout.height && u === t.layout.width
            ? null
            : {
                layout: l,
                headerHeights: j(o.routes, o.insets, t.descriptors, l, {}),
              };
        });
      });
      H(module12.default(o), 'handleHeaderLayout', function (t) {
        var s = t.route,
          u = t.height;
        o.setState(function (t) {
          var o = t.headerHeights;
          return o[s.key] === u
            ? null
            : {
                headerHeights: E({}, o, module247.default({}, s.key, u)),
              };
        });
      });
      H(module12.default(o), 'getFocusedRoute', function () {
        var t = o.props.state;
        return t.routes[t.index];
      });
      var l = module17.Dimensions.get('window'),
        c = l.height,
        p = undefined === c ? 0 : c,
        h = l.width,
        y = undefined === h ? 0 : h;
      o.state = {
        routes: [],
        scenes: [],
        gestures: {},
        layout: {
          height: p,
          width: y,
        },
        descriptors: o.props.descriptors,
        headerHeights: {},
      };
      return o;
    }

    module8.default(w, null, [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, o) {
          if (t.routes === o.routes && t.descriptors === o.descriptors) return null;
          var n = t.routes.reduce(function (n, s) {
            var u = t.descriptors[s.key],
              l = ((null === u || undefined === u ? undefined : u.options) || {}).animationEnabled;
            n[s.key] = o.gestures[s.key] || new module17.Animated.Value(t.openingRouteKeys.includes(s.key) && false !== l ? x(t.mode, o.layout, u) : 0);
            return n;
          }, {});
          return {
            routes: t.routes,
            scenes: t.routes.map(function (s, u, l) {
              var c = l[u - 1],
                p = l[u + 1],
                h = o.scenes[u],
                y = n[s.key],
                f = c ? n[c.key] : undefined,
                v = p ? n[p.key] : undefined,
                S = t.descriptors[s.key] || o.descriptors[s.key] || (h ? h.descriptor : C),
                b = t.descriptors[null === p || undefined === p ? undefined : p.key] || o.descriptors[null === p || undefined === p ? undefined : p.key],
                k = t.descriptors[null === c || undefined === c ? undefined : c.key] || o.descriptors[null === c || undefined === c ? undefined : c.key],
                O = {
                  route: s,
                  descriptor: S,
                  progress: {
                    current: A(t.mode, y, o.layout, S),
                    next: v ? A(t.mode, v, o.layout, b) : undefined,
                    previous: f ? A(t.mode, f, o.layout, k) : undefined,
                  },
                  __memo: [s, o.layout, S, b, k, y, v, f],
                };
              return h &&
                O.__memo.every(function (t, o) {
                  return h.__memo[o] === t;
                })
                ? h
                : O;
            }),
            gestures: n,
            descriptors: t.descriptors,
            headerHeights: j(t.routes, t.insets, o.descriptors, o.layout, o.headerHeights),
          };
        },
      },
    ]);
    module8.default(w, [
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            n = o.mode,
            s = o.insets,
            u = o.descriptors,
            l = o.state,
            c = o.routes,
            p = o.closingRouteKeys,
            h = o.onOpenRoute,
            S = o.onCloseRoute,
            D = o.getPreviousRoute,
            I = o.getGesturesEnabled,
            w = o.renderHeader,
            H = o.renderScene,
            C = o.headerMode,
            j = o.onTransitionStart,
            x = o.onTransitionEnd,
            A = o.onPageChangeStart,
            T = o.onPageChangeConfirm,
            M = o.onPageChangeCancel,
            F = this.state,
            L = F.scenes,
            N = F.layout,
            V = F.gestures,
            B = F.headerHeights,
            K = l.routes[l.index],
            z = u[K.key],
            G = z ? z.options : {},
            q = 'modal' === n ? module659.ModalTransition : module659.DefaultTransition;
          if ('screen' === C)
            q = E({}, q, {
              headerStyleInterpolator: module657.forNoAnimation,
            });
          var J = G.safeAreaInsets || {},
            Q = J.top,
            U = undefined === Q ? s.top : Q,
            W = J.right,
            X = undefined === W ? s.right : W,
            Y = J.bottom,
            Z = undefined === Y ? s.bottom : Y,
            $ = J.left,
            ee = undefined === $ ? s.left : $,
            te = 'ios' !== module17.Platform.OS && 'modal' !== n;
          return (
            <React.Fragment>
              <module666.MaybeScreenContainer enabled={te} style={_.container} onLayout={this.handleLayout}>
                {c.map(function (o, u, l) {
                  var c = K.key === o.key,
                    k = V[o.key],
                    O = L[u],
                    E = O.progress.next
                      ? O.progress.next.interpolate({
                          inputRange: [0, 0.99, 1],
                          outputRange: [1, 1, 0],
                          extrapolate: 'clamp',
                        })
                      : 1,
                    _ = O.descriptor ? O.descriptor.options : {},
                    F = _.safeAreaInsets,
                    z = _.headerShown,
                    G = _.headerTransparent,
                    J = _.cardShadowEnabled,
                    Q = _.cardOverlayEnabled,
                    U = _.cardOverlay,
                    W = _.cardStyle,
                    X = _.animationEnabled,
                    Y = _.gestureResponseDistance,
                    Z = _.gestureVelocityImpact,
                    $ = _.gestureDirection,
                    ee = undefined === $ ? q.gestureDirection : $,
                    re = _.transitionSpec,
                    oe = undefined === re ? q.transitionSpec : re,
                    ne = _.cardStyleInterpolator,
                    ae = undefined === ne ? (false === X ? module654.forNoAnimation : q.cardStyleInterpolator) : ne,
                    ie = _.headerStyleInterpolator,
                    se = {
                      gestureDirection: ee,
                      transitionSpec: oe,
                      cardStyleInterpolator: ae,
                      headerStyleInterpolator: undefined === ie ? q.headerStyleInterpolator : ie,
                    };

                  if (u !== l.length - 1) {
                    var ue = L[u + 1];

                    if (ue) {
                      var de = ue.descriptor ? ue.descriptor.options : {},
                        le = de.animationEnabled,
                        ce = de.gestureDirection,
                        pe = undefined === ce ? q.gestureDirection : ce,
                        he = de.transitionSpec,
                        ye = undefined === he ? q.transitionSpec : he,
                        fe = de.cardStyleInterpolator,
                        ge = undefined === fe ? (false === le ? module654.forNoAnimation : q.cardStyleInterpolator) : fe,
                        ve = de.headerStyleInterpolator;
                      se = {
                        gestureDirection: pe,
                        transitionSpec: ye,
                        cardStyleInterpolator: ge,
                        headerStyleInterpolator: undefined === ve ? q.headerStyleInterpolator : ve,
                      };
                    }
                  }

                  var me = F || {},
                    Se = me.top,
                    be = undefined === Se ? s.top : Se,
                    ke = me.right,
                    Oe = undefined === ke ? s.right : ke,
                    Re = me.bottom,
                    De = undefined === Re ? s.bottom : Re,
                    Ie = me.left,
                    Pe = undefined === Ie ? s.left : Ie,
                    we = D({
                      route: O.route,
                    }),
                    Ee = L[u - 1];
                  if (we)
                    for (var He = u - 1; He >= 0; He--) {
                      var Ce = L[He];

                      if (Ce && Ce.route.key === we.key) {
                        Ee = Ce;
                        break;
                      }
                    }
                  return (
                    <module666.MaybeScreen key={o.key} style={module17.StyleSheet.absoluteFill} enabled={te} active={E} pointerEvents="box-none">
                      <module682.default />
                    </module666.MaybeScreen>
                  );
                })}
              </module666.MaybeScreenContainer>
              {'float' === C
                ? w({
                    mode: 'float',
                    layout: N,
                    insets: {
                      top: U,
                      right: X,
                      bottom: Z,
                      left: ee,
                    },
                    scenes: L,
                    getPreviousRoute: D,
                    getFocusedRoute: this.getFocusedRoute,
                    onContentHeightChange: this.handleHeaderLayout,
                    gestureDirection: undefined !== G.gestureDirection ? G.gestureDirection : q.gestureDirection,
                    styleInterpolator: undefined !== G.headerStyleInterpolator ? G.headerStyleInterpolator : q.headerStyleInterpolator,
                    style: _.floating,
                  })
                : null}
            </React.Fragment>
          );
        },
      },
    ]);
    return w;
  })(React.Component);

exports.default = T;

var _ = module17.StyleSheet.create({
  container: {
    flex: 1,
  },
  floating: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
