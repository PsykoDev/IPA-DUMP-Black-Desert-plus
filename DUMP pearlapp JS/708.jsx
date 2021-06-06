exports.default = function (t) {
  var n = t.navigation,
    p = t.descriptors,
    O = t.navigationConfig,
    y = b(t, ['navigation', 'descriptors', 'navigationConfig']),
    v = Object.keys(p).reduce(function (t, n) {
      var o = module710.default(O, module709.default(p[n].options));
      t[n] = s({}, p[n], {
        options: o,
      });
      return t;
    }, {});
  return <module660.default />;
};

var React = require('react'),
  module709 = require('./709'),
  module710 = require('./710'),
  module660 = require('./660');

function l() {
  return (l =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
      }

      return t;
    }).apply(this, arguments);
}

function p(t, n) {
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

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(o), true).forEach(function (n) {
        O(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function O(t, n, o) {
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

function b(t, n) {
  if (null == t) return {};
  var o,
    c,
    u = y(t, n);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);

    for (c = 0; c < f.length; c++) {
      o = f[c];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (u[o] = t[o]);
    }
  }

  return u;
}

function y(t, n) {
  if (null == t) return {};
  var o,
    c,
    u = {},
    f = Object.keys(t);

  for (c = 0; c < f.length; c++) {
    o = f[c];
    if (!(n.indexOf(o) >= 0)) u[o] = t[o];
  }

  return u;
}
