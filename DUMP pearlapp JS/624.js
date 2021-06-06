exports.__esModule = true;

exports.default = function (o, c, s) {
  var u = s || false,
    p = module419.createStore(b, l, c && c.enhancer ? c.enhancer : undefined),
    y = function (t) {
      p.dispatch({
        type: module617.REGISTER,
        key: t,
      });
    },
    h = function (t, c, s) {
      var f = {
        type: module617.REHYDRATE,
        payload: c,
        err: s,
        key: t,
      };
      o.dispatch(f);
      p.dispatch(f);

      if (u && O.getState().bootstrapped) {
        u();
        u = false;
      }
    },
    O = f({}, p, {
      purge: function () {
        var t = [];
        o.dispatch({
          type: module617.PURGE,
          result: function (n) {
            t.push(n);
          },
        });
        return Promise.all(t);
      },
      flush: function () {
        var t = [];
        o.dispatch({
          type: module617.FLUSH,
          result: function (n) {
            t.push(n);
          },
        });
        return Promise.all(t);
      },
      pause: function () {
        o.dispatch({
          type: module617.PAUSE,
        });
      },
      persist: function () {
        o.dispatch({
          type: module617.PERSIST,
          register: y,
          rehydrate: h,
        });
      },
    });

  if (!(c && c.manualPersist)) O.persist();
  return O;
};

var module419 = require('./419'),
  module617 = require('./617');

function o(t) {
  return u(t) || s(t) || c();
}

function c() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function s(t) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
}

function u(t) {
  if (Array.isArray(t)) {
    for (var n = 0, o = new Array(t.length); n < t.length; n++) o[n] = t[n];

    return o;
  }
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

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(o, true).forEach(function (n) {
        y(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(o).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function y(t, n, o) {
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

var l = {
    registry: [],
    bootstrapped: false,
  },
  b = function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : l,
      c = arguments.length > 1 ? arguments[1] : undefined;

    switch (c.type) {
      case module617.REGISTER:
        return f({}, t, {
          registry: [].concat(o(t.registry), [c.key]),
        });

      case module617.REHYDRATE:
        var s = t.registry.indexOf(c.key),
          u = o(t.registry);
        u.splice(s, 1);
        return f({}, t, {
          registry: u,
          bootstrapped: 0 === u.length,
        });

      default:
        return t;
    }
  };
