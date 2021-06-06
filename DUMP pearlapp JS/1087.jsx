var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

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
        var o = arguments[n];

        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n) {
  if (null == t) return {};
  var o,
    l,
    u = v(t, n);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);

    for (l = 0; l < c.length; l++) {
      o = c[l];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (u[o] = t[o]);
    }
  }

  return u;
}

function v(t, n) {
  if (null == t) return {};
  var o,
    l,
    u = {},
    c = Object.keys(t);

  for (l = 0; l < c.length; l++) {
    o = c[l];
    if (!(n.indexOf(o) >= 0)) u[o] = t[o];
  }

  return u;
}

var O,
  P,
  j,
  R = (function (t) {
    module9.default(P, t);

    var n = P,
      v = y(),
      O = function () {
        var t,
          o = module13.default(n);

        if (v) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function P() {
      module7.default(this, P);
      return O.apply(this, arguments);
    }

    module8.default(P, [
      {
        key: 'render',
        value: function () {
          if ('android' === module17.Platform.OS && module17.Platform.Version >= 21) {
            var t = this.props,
              n = t.style,
              o = b(t, ['style']);
            return (
              <module17.TouchableNativeFeedback>
                <module17.View style={n}>{React.Children.only(this.props.children)}</module17.View>
              </module17.TouchableNativeFeedback>
            );
          }

          return <module17.TouchableOpacity>{this.props.children}</module17.TouchableOpacity>;
        },
      },
    ]);
    return P;
  })(React.Component);

exports.default = R;
j = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
};
if ((P = 'defaultProps') in (O = R))
  Object.defineProperty(O, P, {
    value: j,
    enumerable: true,
    configurable: true,
    writable: true,
  });
else O[P] = j;
