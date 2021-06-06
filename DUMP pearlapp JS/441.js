exports.default = function (t, c, l, s, p, b) {
  var O = t.getActionCreators(c, null),
    y = {
      actions: O,
      router: t,
      state: c,
      dispatch: l,
      getScreenProps: p,
      getChildNavigation: function (t) {
        return module444.default(y, t, b);
      },
      isFocused: function (t) {
        var n = b().state,
          o = n.routes,
          u = n.index;
        return null == t || o[u].key === t;
      },
      addListener: function (t, n) {
        if ('action' !== t)
          return {
            remove: function () {},
          };
        else {
          s.add(n);
          return {
            remove: function () {
              s.delete(n);
            },
          };
        }
      },
      dangerouslyGetParent: function () {
        return null;
      },
      isFirstRouteInParent: function () {
        return true;
      },
      _childrenNavigation: module446.default(b()),
    },
    j = f({}, module442.default(y.state), {}, O);
  Object.keys(j).forEach(function (t) {
    y[t] = function () {
      return y.dispatch(j[t].apply(j, arguments));
    };
  });
  return y;
};

var module442 = require('./442'),
  module444 = require('./444'),
  module446 = require('./446');

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
