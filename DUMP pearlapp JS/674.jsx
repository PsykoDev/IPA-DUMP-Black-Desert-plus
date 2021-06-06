var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module675 = require('./675');

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

function y() {
  return (y =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
      }

      return t;
    }).apply(this, arguments);
}

function v(t, n) {
  if (null == t) return {};
  var o,
    l,
    u = O(t, n);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);

    for (l = 0; l < c.length; l++) {
      o = c[l];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (u[o] = t[o]);
    }
  }

  return u;
}

function O(t, n) {
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

var P,
  j,
  k,
  w = (function (t) {
    module9.default(j, t);

    var n = j,
      O = h(),
      P = function () {
        var t,
          o = module13.default(n);

        if (O) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function j() {
      module7.default(this, j);
      return P.apply(this, arguments);
    }

    module8.default(j, [
      {
        key: 'render',
        value: function () {
          if ('android' === module17.Platform.OS && module17.Platform.Version >= 21) {
            var t = this.props,
              n = t.style,
              o = t.pressColor,
              l = t.borderless,
              u = t.children,
              c = v(t, ['style', 'pressColor', 'borderless', 'children']);
            return (
              <module17.TouchableNativeFeedback>
                <module17.View style={n}>
                  <u />
                </module17.View>
              </module17.TouchableNativeFeedback>
            );
          }

          return 'ios' === module17.Platform.OS ? (
            <module675.default>{this.props.children}</module675.default>
          ) : (
            <module17.TouchableOpacity>{this.props.children}</module17.TouchableOpacity>
          );
        },
      },
    ]);
    return j;
  })(React.Component);

exports.TouchableItem = w;
k = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
};
if ((j = 'defaultProps') in (P = w))
  Object.defineProperty(P, j, {
    value: k,
    enumerable: true,
    configurable: true,
    writable: true,
  });
else P[j] = k;
