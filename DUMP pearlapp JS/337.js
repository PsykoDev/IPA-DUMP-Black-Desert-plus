var module26 = require('@babel/runtime/helpers/slicedToArray'),
  module7 = require('./7'),
  module338 = require('./338'),
  module339 = require('./339');

function s(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = f(t)) || (n && t && 'number' == typeof t.length)) {
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

function f(t, n) {
  if (t) {
    if ('string' == typeof t) return y(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? y(t, n) : undefined;
  }
}

function y(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var module48 = require('./48'),
  module154 = require('./154');

function p() {
  x.addFileSource('react_hierarchy.txt', function () {
    return require('./340')();
  });
}

var x = (function () {
  function t() {
    module7.default(this, t);
  }

  module8.default(t, null, [
    {
      key: '_maybeInit',
      value: function () {
        if (!t._subscription) {
          t._subscription = module48.addListener('collectBugExtraData', t.collectExtraData, null);
          p();
        }

        if (!t._redboxSubscription) t._redboxSubscription = module48.addListener('collectRedBoxExtraData', t.collectExtraData, null);
      },
    },
    {
      key: 'addSource',
      value: function (n, o) {
        return this._addSource(n, o, t._extraSources);
      },
    },
    {
      key: 'addFileSource',
      value: function (n, o) {
        return this._addSource(n, o, t._fileSources);
      },
    },
    {
      key: '_addSource',
      value: function (n, o, u) {
        t._maybeInit();

        if (u.has(n)) console.warn("BugReporting.add* called multiple times for same key '" + n + "'");
        u.set(n, o);
        return {
          remove: function () {
            u.delete(n);
          },
        };
      },
    },
    {
      key: 'collectExtraData',
      value: function () {
        for (var o, u = {}, f = s(t._extraSources); !(o = f()).done; ) {
          var y = o.value,
            b = module26.default(y, 2),
            p = b[0],
            x = b[1];
          u[p] = x();
        }

        for (var S, _ = {}, h = s(t._fileSources); !(S = h()).done; ) {
          var D = S.value,
            E = module26.default(D, 2),
            k = E[0],
            w = E[1];
          _[k] = w();
        }

        module154('BugReporting extraData:', u);
        if (null != module338.default && null != module338.default.setExtraData) module338.default.setExtraData(u, _);
        if (null != module339.default && null != module339.default.setExtraData) module339.default.setExtraData(u, 'From BugReporting.js');
        return {
          extras: u,
          files: _,
        };
      },
    },
  ]);
  return t;
})();

x._extraSources = new Map();
x._fileSources = new Map();
x._subscription = null;
x._redboxSubscription = null;
module.exports = x;
