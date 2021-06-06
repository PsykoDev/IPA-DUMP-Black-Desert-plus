exports.default = function (t) {
  var n = t,
    o = [];
  s.forEach(function (o) {
    if (o.check(t)) n = o.compat(n);
  });
  if (o.length)
    console.warn(
      "Deprecation in 'navigationOptions':\n".concat(
        o
          .map(function (t) {
            return "- '".concat(t.deprecated, "' will be removed in a future version. Use '").concat(t.updated, "' instead");
          })
          .join('\n')
      )
    );
  return n;
};

var module247 = require('./247');

function c(t, n) {
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

function u(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      c(Object(o), true).forEach(function (n) {
        l(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      c(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function l(t, n, o) {
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

function f(t, n) {
  if (null == t) return {};
  var o,
    c,
    u = p(t, n);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);

    for (c = 0; c < l.length; c++) {
      o = l[c];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (u[o] = t[o]);
    }
  }

  return u;
}

function p(t, n) {
  if (null == t) return {};
  var o,
    c,
    u = {},
    l = Object.keys(t);

  for (c = 0; c < l.length; c++) {
    o = l[c];
    if (!(n.indexOf(o) >= 0)) u[o] = t[o];
  }

  return u;
}

var s = [
  {
    check: function (t) {
      return 'object' == typeof t.headerForceInset;
    },
    deprecated: 'headerForceInset',
    updated: 'safeAreaInsets',
    compat: function (t) {
      var n = t.headerForceInset,
        o = f(t, ['headerForceInset']),
        c = {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        };

      switch (n) {
        case 'top':
          delete c.top;
          break;

        case 'bottom':
          delete c.bottom;
          break;

        case 'left':
          delete c.left;
          break;

        case 'right':
          delete c.right;
          break;

        case 'vertical':
          delete c.top;
          delete c.bottom;
          break;

        case 'horizontal':
          delete c.left;
          delete c.right;
          break;

        case 'always':
          c = undefined;
      }

      return u({}, o, {
        safeAreaInsets: c,
      });
    },
  },
  {
    check: function (t) {
      return undefined !== t.gesturesEnabled;
    },
    deprecated: 'gesturesEnabled',
    updated: 'gestureEnabled',
    compat: function (t) {
      var n = t.gesturesEnabled;
      return u({}, f(t, ['gesturesEnabled']), {
        gestureEnabled: n,
      });
    },
  },
  {
    check: function (t) {
      return null === t.header;
    },
    deprecated: 'header: null',
    updated: 'headerShown: false',
    compat: function (t) {
      t.header;
      return u({}, f(t, ['header']), {
        headerShown: false,
      });
    },
  },
  {
    check: function (t) {
      return null != t.header && 'function' != typeof t.header;
    },
    deprecated: 'header: <SomeElement />',
    updated: 'header: () => <SomeElement />',
    compat: function (t) {
      return u({}, t, {
        header: function () {
          return t.header;
        },
      });
    },
  },
  {
    check: function (t) {
      return undefined !== t.headerTitle && 'string' != typeof t.headerTitle && 'function' != typeof t.headerTitle;
    },
    deprecated: 'headerTitle: <SomeElement />',
    updated: 'headerTitle: () => <SomeElement />',
    compat: function (t) {
      return u({}, t, {
        headerTitle: function () {
          return t.headerTitle;
        },
      });
    },
  },
].concat(
  module34.default(
    ['headerLeft', 'headerRight', 'headerBackground', 'headerBackImage'].map(function (t) {
      return {
        check: function (n) {
          return undefined !== n[t] && 'function' != typeof n[t];
        },
        deprecated: ''.concat(t, ': <SomeElement />'),
        updated: ''.concat(t, ': () => <SomeElement />'),
        compat: function (o) {
          return u(
            {},
            o,
            module247.default({}, t, function () {
              return o[t];
            })
          );
        },
      };
    })
  )
);
