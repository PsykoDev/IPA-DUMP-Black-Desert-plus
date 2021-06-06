exports.getInset = E;

exports.getStatusBarHeight = function (t) {
  return H(t);
};

var module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module488 = require('./488'),
  module489 = require('./489');

function _(t) {
  var n = L();
  return function () {
    var o,
      u = module13.default(t);

    if (n) {
      var s = module13.default(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);

    return module11.default(this, o);
  };
}

function L() {
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

((module17.Platform.constants || {}).reactNativeVersion || {}).minor;

var S = function () {
    var t = module17.Dimensions.get('window'),
      n = t.width,
      o = t.height;
    return 0 === n && 0 === o
      ? module17.Dimensions.get('screen')
      : {
          width: n,
          height: o,
        };
  },
  R = S(),
  B = R.height,
  b = R.width,
  I =
    'web' !== module17.Platform.OS &&
    (('ios' === module17.Platform.OS && ((812 === B && 375 === b) || (375 === B && 812 === b))) || (896 === B && 414 === b) || (414 === B && 896 === b)),
  M = 'ios' === module17.Platform.OS && ((1194 === B && 834 === b) || (834 === B && 1194 === b) || (1024 === B && 1366 === b) || (1366 === B && 1024 === b)),
  T = !('ios' !== module17.Platform.OS || I || (B > b && b < 768) || (b > B && B < 768)),
  x = null,
  k = null,
  H = function (t) {
    return null !== x
      ? x
      : 'android' === module17.Platform.OS
      ? globals.Expo
        ? globals.Expo.Constants.statusBarHeight
        : 0
      : I
      ? t
        ? 0
        : 44
      : M
      ? 24
      : T
      ? k
        ? 0
        : 20
      : t || k
      ? 0
      : 20;
  },
  P = function (t) {
    if (!t.includes('%')) return 0;
    var n = parseFloat(t) / 100;
    return isNaN(n) ? 0 : n;
  },
  A = (function (t, ...args) {
    module9.default(c, t);

    var n = _(c);

    function c() {
      var t;
      module7.default(this, c);
      (t = n.call(this, ...args)).state = {
        touchesTop: true,
        touchesBottom: true,
        touchesLeft: true,
        touchesRight: true,
        orientation: null,
        viewWidth: 0,
        viewHeight: 0,
      };

      t._handleLayout = function (n) {
        if (t.props.onLayout) t.props.onLayout(n);

        t._updateMeasurements();
      };

      t._updateMeasurements = function () {
        if (t._isMounted && t.view) {
          var n = t.props.isLandscape,
            o = t.state.orientation,
            u = n ? 'landscape' : 'portrait';

          if (!o || o !== u) {
            var s = S(),
              p = s.width,
              f = s.height;
            ('function' == typeof t.view.measureInWindow ? t.view : t.view.getNode()).measureInWindow(function (n, o, s, c) {
              if (t.view) {
                var l = o,
                  h = n;
                if (l >= f) l %= f;
                else if (l < 0) l = (l % f) + f;
                if (h >= p) h %= p;
                else if (h < 0) h = (h % p) + p;

                var v = 0 === l,
                  y = l + c >= f,
                  w = 0 === h,
                  _ = h + s >= p;

                t.setState({
                  touchesTop: v,
                  touchesBottom: y,
                  touchesLeft: w,
                  touchesRight: _,
                  orientation: u,
                  viewWidth: s,
                  viewHeight: c,
                });
              }
            });
          }
        }
      };

      t._getSafeAreaStyle = function () {
        var n = t.state,
          o = n.touchesTop,
          s = n.touchesBottom,
          p = n.touchesLeft,
          f = n.touchesRight,
          c = t.props,
          l = c.forceInset,
          h = t._getViewStyles(),
          v = h.paddingTop,
          y = h.paddingBottom,
          w = h.paddingLeft,
          _ = h.paddingRight,
          L = h.viewStyle,
          S = module6.default({}, L, {
            paddingTop: o ? t._getInset('top') : 0,
            paddingBottom: s ? t._getInset('bottom') : 0,
            paddingLeft: p ? t._getInset('left') : 0,
            paddingRight: f ? t._getInset('right') : 0,
          });

        if (l)
          Object.keys(l).forEach(function (n) {
            var o = l[n];

            switch (('always' === o && (o = t._getInset(n)), 'never' === o && (o = 0), n)) {
              case 'horizontal':
                S.paddingLeft = o;
                S.paddingRight = o;
                break;

              case 'vertical':
                S.paddingTop = o;
                S.paddingBottom = o;
                break;

              case 'left':
              case 'right':
              case 'top':
              case 'bottom':
                var u = 'padding' + n[0].toUpperCase() + n.slice(1);
                S[u] = o;
            }
          });
        if (S.height && 'number' == typeof S.height) S.height += S.paddingTop + S.paddingBottom;
        if (S.width && 'number' == typeof S.width) S.width += S.paddingLeft + S.paddingRight;
        S.paddingTop = S.paddingTop ** v;
        S.paddingBottom = S.paddingBottom ** y;
        S.paddingLeft = S.paddingLeft ** w;
        S.paddingRight = S.paddingRight ** _;
        return S;
      };

      t._getViewStyles = function () {
        var n = t.state.viewWidth,
          u = module17.StyleSheet.flatten(t.props.style || {}),
          s = u.padding,
          p = undefined === s ? 0 : s,
          f = u.paddingVertical,
          c = undefined === f ? p : f,
          l = u.paddingHorizontal,
          h = undefined === l ? p : l,
          y = u.paddingTop,
          w = undefined === y ? c : y,
          _ = u.paddingBottom,
          L = undefined === _ ? c : _,
          S = u.paddingLeft,
          R = undefined === S ? h : S,
          B = u.paddingRight,
          b = undefined === B ? h : B,
          I = module56.default(u, ['padding', 'paddingVertical', 'paddingHorizontal', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight']);
        if ('number' != typeof w) w = P(w) * n;
        if ('number' != typeof L) L = P(L) * n;
        if ('number' != typeof R) R = P(R) * n;
        if ('number' != typeof b) b = P(b) * n;
        return {
          paddingTop: w,
          paddingBottom: L,
          paddingLeft: R,
          paddingRight: b,
          viewStyle: I,
        };
      };

      t._getInset = function (n) {
        return E(n, t.props.isLandscape);
      };

      return t;
    }

    module8.default(c, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this._isMounted = true;
          module17.InteractionManager.runAfterInteractions(function () {
            t._updateMeasurements();
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._isMounted = false;
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this._updateMeasurements();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            s = module56.default(n, ['forceInset', 'isLandscape', 'style']),
            p = this._getSafeAreaStyle();

          return React.default.createElement(
            module17.Animated.View,
            module6.default(
              {
                ref: function (n) {
                  return (t.view = n);
                },
                pointerEvents: 'box-none',
              },
              s,
              {
                onLayout: this._handleLayout,
                style: p,
              }
            )
          );
        },
      },
    ]);
    return c;
  })(React.Component);

function E(t, n) {
  switch (t) {
    case 'horizontal':
    case 'right':
    case 'left':
      return n && I ? 44 : 0;

    case 'vertical':
    case 'top':
      return H(n);

    case 'bottom':
      if (I) return n ? 24 : 34;
      else return M ? 20 : 0;
  }
}

A.setStatusBarHeight = function (t) {
  x = t;
};

A.setStatusBarHidden = function (t) {
  k = t;
};

var O = module489.default(A),
  D = O;
exports.default = D;

exports.withSafeArea = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  return function (n) {
    var o = (function (o) {
      module9.default(c, o);

      var u = _(c);

      function c() {
        module7.default(this, c);
        return u.apply(this, arguments);
      }

      module8.default(c, [
        {
          key: 'render',
          value: function () {
            return React.default.createElement(
              O,
              {
                style: {
                  flex: 1,
                },
                forceInset: t,
              },
              React.default.createElement(n, this.props)
            );
          },
        },
      ]);
      return c;
    })(React.Component);

    return module488.default(o, n);
  };
};
