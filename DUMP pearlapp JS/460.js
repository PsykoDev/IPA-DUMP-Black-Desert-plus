var module26 = require('@babel/runtime/helpers/slicedToArray'),
  module461 = require('./461'),
  module443 = require('./443'),
  module440 = require('./440');

function f(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = s(t)) || (n && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var u = 0;
      return function () {
        return u >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[u++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function s(t, n) {
  if (t) {
    if ('string' == typeof t) return h(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? h(t, n) : undefined;
  }
}

function h(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

function p(t, n) {
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

function v(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(o), true).forEach(function (n) {
        P(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function P(t, n, o) {
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

var module463 = require('./463'),
  b = function (t, n, o) {
    return n.slice(1).reduce(function (t, n, u) {
      var c = o[u];
      if (!c || c.asterisk) return t;
      var l,
        f = c.name;
      if (n)
        try {
          l = decodeURIComponent(n);
        } catch (t) {}
      t[f] = l || n;
      return t;
    }, v({}, t));
  };

exports.getParamsFromPath = b;

var O = function (t, n) {
    return t[
      n.findIndex(function (t) {
        return t.asterisk;
      }) + 1
    ];
  },
  j = function (t, n) {
    if (Array.isArray(n)) {
      if (1 === n.length) return n[0];

      for (var o, u = f(n); !(o = u()).done; ) {
        var c = o.value;
        if (t.startsWith(c)) return c;
      }

      return null;
    }

    return n;
  };

exports.urlToPathAndParams = function (t, n) {
  var u = t.match(/^(.*)\?(.*)$/) || [null, t, {}],
    c = module26.default(u, 3),
    l = c[1],
    f = c[2],
    s = module463.parse(f),
    h = j(l, n) || '://',
    p = l.split(h)[1];
  if (undefined === p) p = l;
  if ('/' === p) p = '';
  if ('/' === p[p.length - 1]) p = p.slice(0, -1);
  return {
    path: p,
    params: s,
  };
};

exports.createPathParser = function (t, n, s) {
  var h,
    p = s.paths,
    P = undefined === p ? {} : p,
    y = s.disableRouteNamePaths,
    j = {};
  Object.keys(t).forEach(function (t) {
    var o;
    if (undefined === (o = undefined !== P[t] ? P[t] : n[t].path)) o = y ? null : t;
    module440.default(null === o || 'string' == typeof o, 'Route path for '.concat(t, ' must be specified as a string, or null.'));
    var c = null !== o,
      f = [],
      s = c ? module461.default(o, f) : null,
      h = [],
      p = '' === o || !c,
      v = module461.default(p ? '*' : ''.concat(o, '/*'), h);
    j[t] = {
      exactRe: s,
      exactReKeys: f,
      extendedPathRe: v,
      extendedPathReKeys: h,
      isWildcard: p,
      toPath:
        null === o
          ? function () {
              return '';
            }
          : module461.compile(o),
    };
  });
  h = Object.entries(j);
  return {
    getActionForPathAndParams: function () {
      for (
        var n, u = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '', l = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}, s = f(h);
        !(n = s()).done;

      ) {
        var p = n.value,
          v = module26.default(p, 2),
          P = v[0],
          y = v[1],
          j = y.exactRe,
          A = y.exactReKeys,
          x = y.extendedPathRe,
          R = y.extendedPathReKeys,
          w = t[P],
          S = j && j.exec(u);

        if (S && S.length) {
          var F = x && x.exec(u),
            K = null;

          if (F && w) {
            var k = O(F, R);
            K = w.getActionForPathAndParams(k, l);
          }

          return module443.navigate({
            routeName: P,
            params: b(l, S, A),
            action: K,
          });
        }
      }

      for (var E, I = f(h); !(E = I()).done; ) {
        var D = E.value,
          N = module26.default(D, 2),
          _ = N[0],
          T = N[1],
          C = T.extendedPathRe,
          M = T.extendedPathReKeys,
          U = t[_],
          W = C && C.exec(u);

        if (W && W.length) {
          var $ = O(W, M),
            q = null;
          if ((U && (q = U.getActionForPathAndParams($, l)), !q)) continue;
          return module443.navigate({
            routeName: _,
            params: b(l, W, M),
            action: q,
          });
        }
      }

      return null;
    },
    getPathAndParamsForRoute: function (n) {
      var o = n.routeName,
        u = n.params,
        c = t[o],
        l = j[o],
        f = l.toPath,
        s = l.exactReKeys,
        h = f(u),
        p = {};

      if (
        (u &&
          Object.keys(u)
            .filter(function (t) {
              return !s.find(function (n) {
                return n.name === t;
              });
            })
            .forEach(function (t) {
              p[t] = u[t];
            }),
        c)
      ) {
        var P = c.getPathAndParamsForState(n);
        return {
          path: h ? ''.concat(h, '/').concat(P.path) : P.path,
          params: P.params ? v({}, p, {}, P.params) : p,
        };
      }

      return {
        path: h,
        params: p,
      };
    },
  };
};
