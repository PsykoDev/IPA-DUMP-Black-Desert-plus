var module437 = require('./437'),
  module1018 = require('./1018');

function u(t, n) {
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

function c(t) {
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

function p(t, n, o) {
  if (t.hasOwnProperty(n) && undefined !== t[n]) return t;
  else {
    t[n] = o;
    return t;
  }
}

var O = function t(n) {
  return n.routes && 'number' == typeof n.index && n.routes[n.index] ? t(n.routes[n.index]) : n.key;
};

exports.default = function (t) {
  var u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  u = p((u = p((u = c({}, u)), 'resetOnBlur', !!u.unmountInactiveRoutes || !!u.resetOnBlur)), 'backBehavior', 'initialRoute');
  var f = module437.SwitchRouter(t, u);
  return c({}, f, {
    getActionCreators: function (t, n) {
      return c(
        {
          openDrawer: function () {
            return module1018.openDrawer({
              key: n,
            });
          },
          closeDrawer: function () {
            return module1018.closeDrawer({
              key: n,
            });
          },
          toggleDrawer: function () {
            return module1018.toggleDrawer({
              key: n,
            });
          },
        },
        f.getActionCreators(t, n)
      );
    },
    getStateForAction: function (t, u) {
      if (!u)
        return c({}, f.getStateForAction(t, undefined), {
          isDrawerOpen: false,
        });

      if (null == t.key || t.key === u.key) {
        if (t.type === module1018.CLOSE_DRAWER || (t.type === module437.NavigationActions.BACK && u.isDrawerOpen))
          return c({}, u, {
            isDrawerOpen: false,
          });
        if (t.type === module1018.OPEN_DRAWER)
          return c({}, u, {
            isDrawerOpen: true,
          });
        if (t.type === module1018.TOGGLE_DRAWER)
          return c({}, u, {
            isDrawerOpen: !u.isDrawerOpen,
          });
      }

      var p = f.getStateForAction(t, u);
      return null === p
        ? null
        : p !== u
        ? O(p) !== O(u) && u.isDrawerOpen
          ? c({}, p, {
              isDrawerOpen: false,
            })
          : p
        : u;
    },
  });
};
