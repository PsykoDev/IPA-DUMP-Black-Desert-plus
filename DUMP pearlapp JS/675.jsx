var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module2 = require('./2');

function h() {
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

function b() {
  return (b =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
      }

      return t;
    }).apply(this, arguments);
}

function O(t, n) {
  if (null == t) return {};
  var o,
    l,
    c = S(t, n);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (l = 0; l < u.length; l++) {
      o = u[l];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (c[o] = t[o]);
    }
  }

  return c;
}

function S(t, n) {
  if (null == t) return {};
  var o,
    l,
    c = {},
    u = Object.keys(t);

  for (l = 0; l < u.length; l++) {
    o = u[l];
    if (!(n.indexOf(o) >= 0)) c[o] = t[o];
  }

  return c;
}

function P(t, n, o) {
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

var A = module17.Animated.createAnimatedComponent(module2.BaseButton),
  j = 'web' !== module17.Platform.OS,
  w = (function (t, ...args) {
    module9.default(w, t);

    var n = w,
      module2 = h(),
      S = function () {
        var t,
          o = module13.default(n);

        if (module2) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function w() {
      var t;
      module7.default(this, w);
      t = S.call(this, ...args);
      P(module12.default(t), 'opacity', new module17.Animated.Value(1));
      P(module12.default(t), 'handleActiveStateChange', function (n) {
        var o, l;
        if ('android' !== module17.Platform.OS)
          module17.Animated.spring(t.opacity, {
            stiffness: 1e3,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
            toValue: n ? t.props.activeOpacity : 1,
            useNativeDriver: j,
          }).start();
        if (!(null === (o = (l = t.props).onActiveStateChange) || undefined === o)) o.call(l, n);
      });
      return t;
    }

    module8.default(w, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.children,
            o = t.style,
            l = t.enabled,
            c = O(t, ['children', 'style', 'enabled']);
          return <A>{n}</A>;
        },
      },
    ]);
    return w;
  })(React.Component);

exports.default = w;
P(w, 'defaultProps', {
  activeOpacity: 0.3,
  borderless: true,
});
