function t(o) {
  return (t =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(o);
}

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function n(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      o(u, true).forEach(function (o) {
        c(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      o(u).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(u, o));
      });
  }

  return t;
}

function c(t, o, n) {
  if (o in t)
    Object.defineProperty(t, o, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[o] = n;
  return t;
}

exports.__esModule = true;

exports.default = function (o, c, u, f) {
  f.debug;
  var b = n({}, u);
  if (o && 'object' === t(o))
    Object.keys(o).forEach(function (t) {
      if ('_persist' !== t && c[t] === u[t]) b[t] = o[t];
    });
  return b;
};
