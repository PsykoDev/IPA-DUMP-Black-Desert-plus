exports.default = function (t) {
  var n = t.tintColor,
    s = t.style,
    O = c(t, ['tintColor', 'style']),
    b = module676.default().colors;
  return React.createElement(
    module17.Animated.Text,
    u(
      {
        accessibilityRole: 'header',
        numberOfLines: 1,
      },
      O,
      {
        style: [
          y.title,
          {
            color: undefined === n ? b.text : n,
          },
          s,
        ],
      }
    )
  );
};

var React = require('react'),
  module17 = require('./17'),
  module676 = require('./676');

function u() {
  return (u =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
      }

      return t;
    }).apply(this, arguments);
}

function c(t, n) {
  if (null == t) return {};
  var o,
    l,
    f = s(t, n);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (l = 0; l < u.length; l++) {
      o = u[l];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (f[o] = t[o]);
    }
  }

  return f;
}

function s(t, n) {
  if (null == t) return {};
  var o,
    l,
    f = {},
    u = Object.keys(t);

  for (l = 0; l < u.length; l++) {
    o = u[l];
    if (!(n.indexOf(o) >= 0)) f[o] = t[o];
  }

  return f;
}

var y = module17.StyleSheet.create({
  title: module17.Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    default: {
      fontSize: 18,
      fontWeight: '500',
    },
  }),
});
