function t(t, n) {
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

function n(n) {
  for (var c = 1; c < arguments.length; c++) {
    var u = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      t(Object(u), true).forEach(function (t) {
        o(n, t, u[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(u));
    else
      t(Object(u)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(u, t));
      });
  }

  return n;
}

function o(t, n, o) {
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

exports.JUMP_TO = 'Navigation/JUMP_TO';

exports.jumpTo = function (t) {
  return n(
    {
      type: 'Navigation/JUMP_TO',
      preserveFocus: true,
    },
    t
  );
};
