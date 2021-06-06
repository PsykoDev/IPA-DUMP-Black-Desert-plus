var module26 = require('@babel/runtime/helpers/slicedToArray'),
  React = require('react'),
  module17 = require('./17');

function f() {
  return (f =
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
    u = y(t, n);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);

    for (l = 0; l < f.length; l++) {
      o = f[l];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (u[o] = t[o]);
    }
  }

  return u;
}

function y(t, n) {
  if (null == t) return {};
  var o,
    l,
    u = {},
    f = Object.keys(t);

  for (l = 0; l < f.length; l++) {
    o = f[l];
    if (!(n.indexOf(o) >= 0)) u[o] = t[o];
  }

  return u;
}

var h = React.forwardRef(function (t, n) {
  var y = t.enabled,
    h = t.layout,
    p = t.style,
    v = c(t, ['enabled', 'layout', 'style']),
    s = React.useState(false),
    O = module26.default(s, 2),
    w = O[0],
    j = O[1];
  React.useEffect(
    function () {
      if ('undefined' != typeof document && document.body) {
        var t = document.body.clientWidth,
          n = document.body.clientHeight;
        j(t === h.width && n === h.height);
      }
    },
    [h.height, h.width]
  );
  return <module17.View />;
});
exports.default = h;
var b = module17.StyleSheet.create({
  page: {
    minHeight: '100%',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
  },
});
