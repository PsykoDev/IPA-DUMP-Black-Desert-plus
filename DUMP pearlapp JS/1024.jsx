var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module667 = require('./667');

function y() {
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

function h() {
  return (h =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var l = arguments[n];

        for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n) {
  if (null == t) return {};
  var l,
    o,
    c = O(t, n);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (o = 0; o < u.length; o++) {
      l = u[o];
      if (!(n.indexOf(l) >= 0)) Object.prototype.propertyIsEnumerable.call(t, l) && (c[l] = t[l]);
    }
  }

  return c;
}

function O(t, n) {
  if (null == t) return {};
  var l,
    o,
    c = {},
    u = Object.keys(t);

  for (o = 0; o < u.length; o++) {
    l = u[o];
    if (!(n.indexOf(l) >= 0)) c[l] = t[l];
  }

  return c;
}

var S = (function (t) {
  module9.default(E, t);

  var n = E,
    O = y(),
    S = function () {
      var t,
        l = module13.default(n);

      if (O) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function E() {
    module7.default(this, E);
    return S.apply(this, arguments);
  }

  module8.default(E, [
    {
      key: 'render',
      value: function () {
        if ((null === module667.screensEnabled || undefined === module667.screensEnabled ? undefined : module667.screensEnabled()) && 'web' !== module17.Platform.OS) {
          var t = this.props,
            n = t.isVisible,
            l = b(t, ['isVisible']);
          return <module667.Screen />;
        }

        var o = this.props,
          c = o.isVisible,
          u = o.children,
          f = o.style,
          y = b(o, ['isVisible', 'children', 'style']);
        return (
          <module17.View>
            <module17.View style={c ? w.attached : w.detached}>{u}</module17.View>
          </module17.View>
        );
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = S;
var w = module17.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  attached: {
    flex: 1,
  },
  detached: {
    flex: 1,
    top: 3e4,
  },
});
