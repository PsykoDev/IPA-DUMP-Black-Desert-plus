var module440 = require('./440'),
  module454 = require('./454'),
  module456 = require('./456');

function c(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      c(Object(o), true).forEach(function (n) {
        p(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      c(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function p(t, n, o) {
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

function O(t, n, o) {
  return 'function' == typeof t
    ? f(
        {},
        n,
        {},
        t(
          f({}, o, {
            navigationOptions: n,
          })
        )
      )
    : 'object' == typeof t
    ? f({}, n, {}, t)
    : n;
}

exports.default = function (t, c) {
  return function (f, p, b) {
    var l = f.state;
    module440.default(l.routeName && 'string' == typeof l.routeName, 'Cannot get config because the route does not have a routeName.');
    var s = module454.default(t, l.routeName),
      v = t[l.routeName],
      y = v === s ? null : v.navigationOptions,
      j = s.navigationOptions,
      P = {
        navigation: f,
        screenProps: p || {},
        theme: b,
      },
      h = O(c, {}, P);
    h = O(y, (h = O(j, h, P)), P);
    module456.default(h, l);
    return h;
  };
};
