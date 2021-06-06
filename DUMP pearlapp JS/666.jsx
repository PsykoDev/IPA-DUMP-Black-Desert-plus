var c,
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

function v() {
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
        var c = arguments[n];

        for (var o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
      }

      return t;
    }).apply(this, arguments);
}

function h(t, n) {
  if (null == t) return {};
  var c,
    o,
    l = O(t, n);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (o = 0; o < u.length; o++) {
      c = u[o];
      if (!(n.indexOf(c) >= 0)) Object.prototype.propertyIsEnumerable.call(t, c) && (l[c] = t[c]);
    }
  }

  return l;
}

function O(t, n) {
  if (null == t) return {};
  var c,
    o,
    l = {},
    u = Object.keys(t);

  for (o = 0; o < u.length; o++) {
    c = u[o];
    if (!(n.indexOf(c) >= 0)) l[c] = t[c];
  }

  return l;
}

try {
  c = require('./667');
} catch (e) {}

var S = (function (t) {
    module9.default(S, t);

    var n = S,
      c = v(),
      O = function () {
        var t,
          o = module13.default(n);

        if (c) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function S() {
      module7.default(this, S);
      return O.apply(this, arguments);
    }

    module8.default(S, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.active,
            c = t.style,
            o = h(t, ['active', 'style']);
          return <module17.View />;
        },
      },
    ]);
    return S;
  })(React.Component),
  E = module17.Animated.createAnimatedComponent(S);

exports.MaybeScreenContainer = function (t) {
  var n = t.enabled,
    o = h(t, ['enabled']);
  return n && 'web' !== module17.Platform.OS && c && c.screensEnabled() ? <c.ScreenContainer /> : <module17.View />;
};

exports.MaybeScreen = function (t) {
  var n = t.enabled,
    o = t.active,
    l = h(t, ['enabled', 'active']);
  return n && 'web' === module17.Platform.OS ? <E /> : n && c && c.screensEnabled() ? <c.Screen /> : <module17.View />;
};
