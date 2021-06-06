var module445 = require('./445'),
  module442 = require('./442'),
  module446 = require('./446'),
  module447 = require('./447');

function s(t, n) {
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
      s(Object(o), true).forEach(function (n) {
        l(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      s(Object(o)).forEach(function (n) {
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

var p = function (t) {
  return function (n, o) {
    var u = t.params;
    return u && n in u ? u[n] : o;
  };
};

var v = function t(s, l, v) {
  var b = module446.default(s),
    y = s.state.routes.find(function (t) {
      return t.key === l;
    });
  if (!y) return null;
  if (b[l] && b[l].state === y) return b[l];
  var O = module445.default(s.router, y.routeName),
    P = y.routes && 'number' == typeof y.index ? y.routes[y.index] : null,
    j = f({}, s.actions, {}, s.router.getActionCreators(y, s.state.key), {}, O ? O.getActionCreators(P, y.key) : {}, {}, module442.default(y)),
    h = {};
  Object.keys(j).forEach(function (t) {
    h[t] = function () {
      var n = j[t].apply(undefined, arguments);
      return s.dispatch(n);
    };
  });
  var w = true,
    k = v();

  if ((k && (w = 0 === k.state.routes.indexOf(y)), b[l] && b[l].isFirstRouteInParent() === w)) {
    b[l] = f({}, b[l], {}, h, {
      state: y,
      router: O,
      actions: j,
      getParam: p(y),
    });
    return b[l];
  }

  var x = module447.default(l),
    C = x.addListener,
    D = x.emit;
  b[l] = f({}, h, {
    state: y,
    router: O,
    actions: j,
    getParam: p(y),
    getChildNavigation: function (n) {
      return t(b[l], n, function () {
        var t = v();
        return t && t.getChildNavigation(l);
      });
    },
    isFocused: function () {
      var t = v();
      if (!t) return false;
      var n = t.state,
        o = n.routes,
        u = n.index;
      return !!t.isFocused() && o[u].key === l;
    },
    isFirstRouteInParent: function () {
      return w;
    },
    dispatch: s.dispatch,
    getScreenProps: s.getScreenProps,
    dangerouslyGetParent: v,
    addListener: C,
    emit: D,
  });
  return b[l];
};

exports.default = v;
