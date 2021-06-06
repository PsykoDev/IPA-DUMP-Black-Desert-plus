var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module438 = require('./438');

function h(t) {
  var n = v();
  return function () {
    var o,
      u = module13.default(t);

    if (n) {
      var l = module13.default(this).constructor;
      o = Reflect.construct(u, arguments, l);
    } else o = u.apply(this, arguments);

    return module11.default(this, o);
  };
}

function v() {
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

function b(t, n) {
  if (null == t) return {};
  var o,
    u,
    l = x(t, n);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);

    for (u = 0; u < c.length; u++) {
      o = c[u];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (l[o] = t[o]);
    }
  }

  return l;
}

function x(t, n) {
  if (null == t) return {};
  var o,
    u,
    l = {},
    c = Object.keys(t);

  for (u = 0; u < c.length; u++) {
    o = c[u];
    if (!(n.indexOf(o) >= 0)) l[o] = t[o];
  }

  return l;
}

function O() {
  return (O =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u]);
      }

      return t;
    }).apply(this, arguments);
}

function T(t, n, o) {
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

var C = (function (t) {
  module9.default(c, t);
  var n = h(c);

  function c() {
    module7.default(this, c);
    return n.apply(this, arguments);
  }

  module8.default(c, [
    {
      key: 'render',
      value: function () {
        return <module17.Text />;
      },
    },
  ]);
  return c;
})(React.Component);

T(C, 'contextType', module438.ThemeContext);

var j = (function (t) {
  module9.default(c, t);
  var n = h(c);

  function c() {
    module7.default(this, c);
    return n.apply(this, arguments);
  }

  module8.default(c, [
    {
      key: 'render',
      value: function () {
        return <module17.TextInput />;
      },
    },
  ]);
  return c;
})(React.Component);

T(j, 'contextType', module438.ThemeContext);

var S = (function (t) {
  module9.default(c, t);
  var n = h(c);

  function c() {
    module7.default(this, c);
    return n.apply(this, arguments);
  }

  module8.default(c, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.barStyle,
          o = b(t, ['barStyle']);
        return <module17.StatusBar />;
      },
    },
  ]);
  return c;
})(React.Component);

T(S, 'contextType', module438.ThemeContext);
var k = {
  Text: C,
  StatusBar: S,
  TextInput: j,
};
exports.default = k;
