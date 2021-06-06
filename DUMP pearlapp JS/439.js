var module440 = require('./440');

function u(n, t) {
  var u = Object.keys(n);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    if (t)
      o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function o(n) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    if (t % 2)
      u(Object(o), true).forEach(function (t) {
        c(n, t, o[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(o));
    else
      u(Object(o)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
      });
  }

  return n;
}

function c(n, t, u) {
  if (t in n)
    Object.defineProperty(n, t, {
      value: u,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else n[t] = u;
  return n;
}

var f = {
    get: function (n, t) {
      return (
        n.routes.find(function (n) {
          return n.key === t;
        }) || null
      );
    },
    indexOf: function (n, t) {
      return n.routes.findIndex(function (n) {
        return n.key === t;
      });
    },
    has: function (n, t) {
      return !!n.routes.some(function (n) {
        return n.key === t;
      });
    },
    push: function (n, u) {
      module440.default(-1 === f.indexOf(n, u.key), 'should not push route with duplicated key %s', u.key);
      var c = n.routes.slice();
      c.push(u);
      return o({}, n, {
        index: c.length - 1,
        routes: c,
      });
    },
    pop: function (n) {
      if (n.index <= 0) return n;
      var t = n.routes.slice(0, -1);
      return o({}, n, {
        index: t.length - 1,
        routes: t,
      });
    },
    jumpToIndex: function (n, u) {
      if (u === n.index) return n;
      else {
        module440.default(!!n.routes[u], 'invalid index %s to jump to', u);
        return o({}, n, {
          index: u,
        });
      }
    },
    jumpTo: function (n, t) {
      var u = f.indexOf(n, t);
      return f.jumpToIndex(n, u);
    },
    back: function (n) {
      var t = n.index - 1;
      return n.routes[t] ? f.jumpToIndex(n, t) : n;
    },
    forward: function (n) {
      var t = n.index + 1;
      return n.routes[t] ? f.jumpToIndex(n, t) : n;
    },
    replaceAndPrune: function (n, t, u) {
      var c = f.indexOf(n, t),
        s = f.replaceAtIndex(n, c, u);
      return o({}, s, {
        routes: s.routes.slice(0, c + 1),
      });
    },
    replaceAt: function (n, t, u) {
      var o = arguments.length > 3 && undefined !== arguments[3] && arguments[3],
        c = f.indexOf(n, t),
        s = o ? n.index : c,
        l = f.replaceAtIndex(n, c, u);
      l.index = s;
      return l;
    },
    replaceAtIndex: function (n, u, c) {
      if ((module440.default(!!n.routes[u], 'invalid index %s for replacing route %s', u, c.key), n.routes[u] === c && u === n.index)) return n;
      var f = n.routes.slice();
      f[u] = c;
      return o({}, n, {
        index: u,
        routes: f,
      });
    },
    reset: function (n, u, c) {
      module440.default(u.length && Array.isArray(u), 'invalid routes to replace');
      var f = undefined === c ? u.length - 1 : c;

      if (n.routes.length === u.length && n.index === f) {
        if (
          n.routes.every(function (n, t) {
            return u[t] === n;
          })
        )
          return n;
      }

      module440.default(!!u[f], 'invalid index %s to reset', f);
      return o({}, n, {
        index: f,
        routes: u,
      });
    },
  },
  s = f;
exports.default = s;
