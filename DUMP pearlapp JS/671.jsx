exports.default = function (t) {
  var u = t.children,
    o = f(t, ['children']);
  if (c && n) return <n>{u}</n>;
  return u;
};

var n,
  React = require('react'),
  module17 = require('./17');

function f(t, n) {
  if (null == t) return {};
  var l,
    u,
    f = o(t, n);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);

    for (u = 0; u < c.length; u++) {
      l = c[u];
      if (!(n.indexOf(l) >= 0)) Object.prototype.propertyIsEnumerable.call(t, l) && (f[l] = t[l]);
    }
  }

  return f;
}

function o(t, n) {
  if (null == t) return {};
  var l,
    u,
    f = {},
    o = Object.keys(t);

  for (u = 0; u < o.length; u++) {
    l = o[u];
    if (!(n.indexOf(l) >= 0)) f[l] = t[l];
  }

  return f;
}

try {
  n = require('./672').default;
} catch (e) {}

var c = null != module17.UIManager.getViewManagerConfig('RNCMaskedView');
