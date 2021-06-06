var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module670 = require('./670'),
  module680 = require('./680'),
  module681 = require('./681');

function R() {
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

function v(t, o) {
  if (null == t) return {};
  var l,
    n,
    h = L(t, o);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (n = 0; n < u.length; n++) {
      l = u[n];
      if (!(o.indexOf(l) >= 0)) Object.prototype.propertyIsEnumerable.call(t, l) && (h[l] = t[l]);
    }
  }

  return h;
}

function L(t, o) {
  if (null == t) return {};
  var l,
    n,
    h = {},
    u = Object.keys(t);

  for (n = 0; n < u.length; n++) {
    l = u[n];
    if (!(o.indexOf(l) >= 0)) h[l] = t[l];
  }

  return h;
}

function w(t, o, l) {
  if (o in t)
    Object.defineProperty(t, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[o] = l;
  return t;
}

var C = function (t, o) {
  var l = t.width > t.height;
  return ('ios' === module17.Platform.OS ? (l && !module17.Platform.isPad ? 32 : 44) : 'android' === module17.Platform.OS ? 56 : 64) + o;
};

exports.getDefaultHeaderHeight = C;

var B = (function (t, ...args) {
  module9.default(T, t);

  var o = T,
    L = R(),
    B = function () {
      var t,
        l = module13.default(o);

      if (L) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function T() {
    var t;
    module7.default(this, T);
    t = B.call(this, ...args);
    w(module12.default(t), 'state', {});
    w(module12.default(t), 'handleTitleLayout', function (o) {
      var l = o.nativeEvent.layout,
        n = l.height,
        h = l.width;
      t.setState(function (t) {
        var o = t.titleLayout;
        return o && n === o.height && h === o.width
          ? null
          : {
              titleLayout: {
                height: n,
                width: h,
              },
            };
      });
    });
    w(module12.default(t), 'handleLeftLabelLayout', function (o) {
      var l = o.nativeEvent.layout,
        n = l.height,
        h = l.width,
        u = t.state.leftLabelLayout;
      if (!(u && n === u.height && h === u.width))
        t.setState({
          leftLabelLayout: {
            height: n,
            width: h,
          },
        });
    });
    w(
      module12.default(t),
      'getInterpolatedStyle',
      module681.default(function (t, o, l, n, h, u, s) {
        return t({
          current: {
            progress: l,
          },
          next: n && {
            progress: n,
          },
          layouts: {
            header: {
              height: s,
              width: o.width,
            },
            screen: o,
            title: h,
            leftLabel: u,
          },
        });
      })
    );
    return t;
  }

  module8.default(T, [
    {
      key: 'render',
      value: function () {
        v(Y, [
          'height',
          'minHeight',
          'maxHeight',
          'backgroundColor',
          'borderBottomColor',
          'borderBottomEndRadius',
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
          'borderBottomStartRadius',
          'borderBottomWidth',
          'borderColor',
          'borderEndColor',
          'borderEndWidth',
          'borderLeftColor',
          'borderLeftWidth',
          'borderRadius',
          'borderRightColor',
          'borderRightWidth',
          'borderStartColor',
          'borderStartWidth',
          'borderStyle',
          'borderTopColor',
          'borderTopEndRadius',
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderTopStartRadius',
          'borderTopWidth',
          'borderWidth',
          'boxShadow',
          'elevation',
          'shadowColor',
          'shadowOffset',
          'shadowOpacity',
          'shadowRadius',
          'opacity',
          'transform',
        ]);
        var t = this.props,
          o = t.scene,
          l = t.layout,
          n = t.insets,
          h = t.title,
          u = t.leftLabel,
          s = t.onGoBack,
          b = t.headerTitle,
          S = t.headerTitleAlign,
          R =
            undefined === S
              ? module17.Platform.select({
                  ios: 'center',
                  default: 'left',
                })
              : S,
          L = t.headerLeft,
          w =
            undefined === L
              ? s
                ? function (t) {
                    return <module670.default />;
                  }
                : undefined
              : L,
          B = t.headerTransparent,
          T = t.headerTintColor,
          W = t.headerBackground,
          x = t.headerRight,
          O = t.headerBackAccessibilityLabel,
          k = t.headerBackImage,
          A = t.headerBackTitle,
          H = t.headerBackTitleVisible,
          P = t.headerTruncatedBackTitle,
          j = t.headerPressColorAndroid,
          I = t.headerBackAllowFontScaling,
          V = t.headerTitleAllowFontScaling,
          F = t.headerTitleStyle,
          D = t.headerBackTitleStyle,
          _ = t.headerLeftContainerStyle,
          G = t.headerRightContainerStyle,
          z = t.headerTitleContainerStyle,
          M = t.headerStyle,
          q = t.headerStatusBarHeight,
          J = undefined === q ? n.top : q,
          K = t.styleInterpolator,
          N = this.state,
          Q = N.leftLabelLayout,
          U = N.titleLayout,
          X = C(l, J),
          Y = module17.StyleSheet.flatten(M || {}),
          Z = Y.height,
          $ = undefined === Z ? X : Z,
          ee = Y.minHeight,
          te = Y.maxHeight,
          re = Y.backgroundColor,
          oe = Y.borderBottomColor,
          ae = Y.borderBottomEndRadius,
          ie = Y.borderBottomLeftRadius,
          de = Y.borderBottomRightRadius,
          le = Y.borderBottomStartRadius,
          ne = Y.borderBottomWidth,
          he = Y.borderColor,
          ue = Y.borderEndColor,
          se = Y.borderEndWidth,
          be = Y.borderLeftColor,
          fe = Y.borderLeftWidth,
          ce = Y.borderRadius,
          ye = Y.borderRightColor,
          ge = Y.borderRightWidth,
          pe = Y.borderStartColor,
          me = Y.borderStartWidth,
          Se = Y.borderStyle,
          Re = Y.borderTopColor,
          ve = Y.borderTopEndRadius,
          Le = Y.borderTopLeftRadius,
          we = Y.borderTopRightRadius,
          Ce = Y.borderTopStartRadius,
          Be = Y.borderTopWidth,
          Ee = Y.borderWidth,
          Te = Y.boxShadow,
          We = Y.elevation,
          xe = Y.shadowColor,
          Oe = Y.shadowOffset,
          ke = Y.shadowOpacity,
          Ae = Y.shadowRadius,
          He = Y.opacity,
          Pe = Y.transform,
          je = {
            backgroundColor: re,
            borderBottomColor: oe,
            borderBottomEndRadius: ae,
            borderBottomLeftRadius: ie,
            borderBottomRightRadius: de,
            borderBottomStartRadius: le,
            borderBottomWidth: ne,
            borderColor: he,
            borderEndColor: ue,
            borderEndWidth: se,
            borderLeftColor: be,
            borderLeftWidth: fe,
            borderRadius: ce,
            borderRightColor: ye,
            borderRightWidth: ge,
            borderStartColor: pe,
            borderStartWidth: me,
            borderStyle: Se,
            borderTopColor: Re,
            borderTopEndRadius: ve,
            borderTopLeftRadius: Le,
            borderTopRightRadius: we,
            borderTopStartRadius: Ce,
            borderTopWidth: Be,
            borderWidth: Ee,
            boxShadow: Te,
            elevation: We,
            shadowColor: xe,
            shadowOffset: Oe,
            shadowOpacity: ke,
            shadowRadius: Ae,
            opacity: He,
            transform: Pe,
          };

        for (var Ie in je) undefined === je[Ie] && delete je[Ie];

        var Ve = this.getInterpolatedStyle(K, l, o.progress.current, o.progress.next, U, u ? Q : undefined, 'number' == typeof $ ? $ : X),
          Fe = Ve.titleStyle,
          De = Ve.leftButtonStyle,
          _e = Ve.leftLabelStyle,
          Ge = Ve.rightButtonStyle,
          ze = Ve.backgroundStyle,
          Me = w
            ? w({
                backImage: k,
                pressColorAndroid: j,
                allowFontScaling: I,
                onPress: s,
                labelVisible: H,
                label: undefined !== A ? A : u,
                truncatedLabel: P,
                labelStyle: [_e, D],
                onLabelLayout: this.handleLeftLabelLayout,
                screenLayout: l,
                titleLayout: U,
                tintColor: T,
                canGoBack: Boolean(s),
              })
            : null;
        return (
          <React.Fragment>
            {React.createElement(
              module17.Animated.View,
              {
                pointerEvents: 'none',
                style: [module17.StyleSheet.absoluteFill, ze],
              },
              W
                ? W({
                    style: je,
                  })
                : B
                ? null
                : React.createElement(module680.default, {
                    style: je,
                  })
            )}
            {React.createElement(
              module17.Animated.View,
              {
                pointerEvents: 'box-none',
                style: [
                  {
                    height: $,
                    minHeight: ee,
                    maxHeight: te,
                    opacity: He,
                    transform: Pe,
                  },
                ],
              },
              React.createElement(module17.View, {
                pointerEvents: 'none',
                style: {
                  height: J,
                },
              }),
              React.createElement(
                module17.View,
                {
                  pointerEvents: 'box-none',
                  style: E.content,
                },
                Me
                  ? React.createElement(
                      module17.Animated.View,
                      {
                        pointerEvents: 'box-none',
                        style: [
                          E.left,
                          {
                            left: n.left,
                          },
                          De,
                          _,
                        ],
                        accessibilityLabel: O,
                      },
                      Me
                    )
                  : null,
                React.createElement(
                  module17.Animated.View,
                  {
                    pointerEvents: 'box-none',
                    style: [
                      'left' === R
                        ? {
                            position: 'absolute',
                            left: Me ? 72 : 16,
                          }
                        : {
                            marginHorizontal: 18,
                          },
                      Fe,
                      z,
                    ],
                  },
                  b({
                    children: h,
                    onLayout: this.handleTitleLayout,
                    allowFontScaling: V,
                    tintColor: T,
                    style: F,
                  })
                ),
                x
                  ? React.createElement(
                      module17.Animated.View,
                      {
                        pointerEvents: 'box-none',
                        style: [
                          E.right,
                          {
                            right: n.right,
                          },
                          Ge,
                          G,
                        ],
                      },
                      x({
                        tintColor: T,
                      })
                    )
                  : null
              )
            )}
          </React.Fragment>
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = B;
var E = module17.StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
