var t,
  module420 = (t = require('./420')) && 'object' == typeof t && 'default' in t ? t.default : t,
  o = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  u = {
    INIT: '@@redux/INIT' + o(),
    REPLACE: '@@redux/REPLACE' + o(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + o();
    },
  };

function c(t) {
  if ('object' != typeof t || null === t) return false;

  for (var n = t; null !== Object.getPrototypeOf(n); ) n = Object.getPrototypeOf(n);

  return Object.getPrototypeOf(t) === n;
}

function f(t, n) {
  var o = n && n.type;
  return (
    'Given ' +
    ((o && 'action "' + String(o) + '"') || 'an action') +
    ', reducer "' +
    t +
    '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
  );
}

function s(t) {
  Object.keys(t).forEach(function (n) {
    var o = t[n];
    if (
      undefined ===
      o(undefined, {
        type: u.INIT,
      })
    )
      throw new Error(
        'Reducer "' +
          n +
          '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
      );
    if (
      undefined ===
      o(undefined, {
        type: u.PROBE_UNKNOWN_ACTION(),
      })
    )
      throw new Error(
        'Reducer "' +
          n +
          '" returned undefined when probed with a random type. Don\'t try to handle ' +
          u.INIT +
          ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
      );
  });
}

function l(t, n) {
  return function () {
    return n(t.apply(this, arguments));
  };
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

function h(t, n) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) o.push.apply(o, Object.getOwnPropertySymbols(t));
  if (n)
    o = o.filter(function (n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    });
  return o;
}

function y(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(o, true).forEach(function (n) {
        p(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      h(o).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function b() {
  return 0 === args.length
    ? function (t) {
        return t;
      }
    : 1 === args.length
    ? args[0]
    : args.reduce(function (t, n) {
        return function () {
          return t(n.apply(undefined, arguments));
        };
      });
}

exports.__DO_NOT_USE__ActionTypes = u;

exports.applyMiddleware = function (...args) {
  return function (t) {
    return function () {
      var o = t.apply(undefined, arguments),
        u = function () {
          throw new Error('Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.');
        },
        c = {
          getState: o.getState,
          dispatch: function () {
            return u.apply(undefined, arguments);
          },
        },
        f = args.map(function (t) {
          return t(c);
        });

      return y({}, o, {
        dispatch: (u = b.apply(undefined, f)(o.dispatch)),
      });
    };
  };
};

exports.bindActionCreators = function (t, n) {
  if ('function' == typeof t) return l(t, n);
  if ('object' != typeof t || null === t)
    throw new Error(
      'bindActionCreators expected an object or a function, instead received ' +
        (null === t ? 'null' : typeof t) +
        '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
    );
  var o = {};

  for (var u in t) {
    var c = t[u];
    if ('function' == typeof c) o[u] = l(c, n);
  }

  return o;
};

exports.combineReducers = function (t) {
  for (var n = Object.keys(t), o = {}, u = 0; u < n.length; u++) {
    var c = n[u];
    if ('function' == typeof t[c]) o[c] = t[c];
  }

  var l,
    p = Object.keys(o);

  try {
    s(o);
  } catch (t) {
    l = t;
  }

  return function (t, n) {
    if ((undefined === t && (t = {}), l)) throw l;

    for (var u = false, c = {}, s = 0; s < p.length; s++) {
      var h = p[s],
        y = o[h],
        b = t[h],
        w = y(b, n);

      if (undefined === w) {
        var v = f(h, n);
        throw new Error(v);
      }

      c[h] = w;
      u = u || w !== b;
    }

    return (u = u || p.length !== Object.keys(t).length) ? c : t;
  };
};

exports.compose = b;

exports.createStore = function t(o, f, s) {
  var l;
  if (('function' == typeof f && 'function' == typeof s) || ('function' == typeof s && 'function' == typeof arguments[3]))
    throw new Error('It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.');

  if (('function' == typeof f && undefined === s && ((s = f), (f = undefined)), undefined !== s)) {
    if ('function' != typeof s) throw new Error('Expected the enhancer to be a function.');
    return s(t)(o, f);
  }

  if ('function' != typeof o) throw new Error('Expected the reducer to be a function.');
  var p = o,
    h = f,
    y = [],
    b = y,
    w = false;

  function v() {
    if (b === y) b = y.slice();
  }

  function O() {
    if (w)
      throw new Error(
        'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
      );
    return h;
  }

  function E(t) {
    if ('function' != typeof t) throw new Error('Expected the listener to be a function.');
    if (w)
      throw new Error(
        'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
      );
    var n = true;
    v();
    b.push(t);
    return function () {
      if (n) {
        if (w)
          throw new Error(
            'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
          );
        n = false;
        v();
        var o = b.indexOf(t);
        b.splice(o, 1);
        y = null;
      }
    };
  }

  function j(t) {
    if (!c(t)) throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
    if (undefined === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    if (w) throw new Error('Reducers may not dispatch actions.');

    try {
      w = true;
      h = p(h, t);
    } finally {
      w = false;
    }

    for (var n = (y = b), o = 0; o < n.length; o++) n[o]();

    return t;
  }

  j({
    type: u.INIT,
  });

  (l = {
    dispatch: j,
    subscribe: E,
    getState: O,
    replaceReducer: function (t) {
      if ('function' != typeof t) throw new Error('Expected the nextReducer to be a function.');
      p = t;
      j({
        type: u.REPLACE,
      });
    },
  })[module420] = function () {
    var t,
      o = E;

    (t = {
      subscribe: function (t) {
        if ('object' != typeof t || null === t) throw new TypeError('Expected the observer to be an object.');

        function n() {
          if (t.next) t.next(O());
        }

        n();
        return {
          unsubscribe: o(n),
        };
      },
    })[module420] = function () {
      return this;
    };

    return t;
  };

  return l;
};
