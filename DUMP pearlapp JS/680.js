exports.default = function (t) {
  var n = t.style,
    u = s(t, ['style']),
    f = module676.default().colors;
  return React.createElement(
    module17.Animated.View,
    b(
      {
        style: [
          y.container,
          {
            backgroundColor: f.card,
            borderBottomColor: f.border,
            shadowColor: f.border,
          },
          n,
        ],
      },
      u
    )
  );
};

var React = require('react'),
  module17 = require('./17'),
  module676 = require('./676');

function u(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function f(t, n, o) {
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

function b() {
  return (b =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
      }

      return t;
    }).apply(this, arguments);
}

function s(t, n) {
  if (null == t) return {};
  var o,
    c,
    l = O(t, n);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (c = 0; c < u.length; c++) {
      o = u[c];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (l[o] = t[o]);
    }
  }

  return l;
}

function O(t, n) {
  if (null == t) return {};
  var o,
    c,
    l = {},
    u = Object.keys(t);

  for (c = 0; c < u.length; c++) {
    o = u[c];
    if (!(n.indexOf(o) >= 0)) l[o] = t[o];
  }

  return l;
}

var y = module17.StyleSheet.create({
  container: (function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      if (n % 2)
        u(Object(o), true).forEach(function (n) {
          f(t, n, o[n]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
      else
        u(Object(o)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
        });
    }

    return t;
  })(
    {
      flex: 1,
    },
    module17.Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: module17.StyleSheet.hairlineWidth,
        },
      },
      default: {
        borderBottomWidth: module17.StyleSheet.hairlineWidth,
      },
    })
  ),
});
