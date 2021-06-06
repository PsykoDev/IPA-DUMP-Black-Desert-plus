exports.default = function (t) {
  var c = t.children;
  return (
    <module661.SafeAreaConsumer>
      {function (t) {
        return t ? c : <module661.SafeAreaProvider initialSafeAreaInsets={l}>{c}</module661.SafeAreaProvider>;
      }}
    </module661.SafeAreaConsumer>
  );
};

var React = require('react'),
  module661 = require('./661'),
  module655 = require('./655');

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

var l = (function (t) {
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
    top: module655.getStatusBarHeight(true),
    bottom: module655.getBottomSpace(),
    right: 0,
    left: 0,
  },
  module661.initialWindowSafeAreaInsets
);
