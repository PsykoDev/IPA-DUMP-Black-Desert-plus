exports.__esModule = true;

exports.default = function (o) {
  var l,
    u = o.blacklist || null,
    c = o.whitelist || null,
    f = o.transforms || [],
    s = o.throttle || 0,
    h = ''.concat(undefined !== o.keyPrefix ? o.keyPrefix : module617.KEY_PREFIX).concat(o.key),
    v = o.storage;
  l =
    false === o.serialize
      ? function (t) {
          return t;
        }
      : 'function' == typeof o.serialize
      ? o.serialize
      : n;
  var y = o.writeFailHandler || null,
    O = {},
    k = {},
    x = [],
    p = null,
    _ = null;

  function E() {
    if (0 === x.length) {
      if (p) clearInterval(p);
      return void (p = null);
    }

    var t = x.shift(),
      n = f.reduce(function (n, o) {
        return o.in(n, t, O);
      }, O[t]);
    if (undefined !== n)
      try {
        k[t] = l(n);
      } catch (t) {
        console.error('redux-persist/createPersistoid: error serializing state', t);
      }
    else delete k[t];
    if (0 === x.length) P();
  }

  function P() {
    Object.keys(k).forEach(function (t) {
      if (undefined === O[t]) delete k[t];
    });
    _ = v.setItem(h, l(k)).catch(z);
  }

  function b(t) {
    return (!c || -1 !== c.indexOf(t) || '_persist' === t) && (!u || -1 === u.indexOf(t));
  }

  function z(t) {
    if (y) y(t);
  }

  return {
    update: function (t) {
      Object.keys(t).forEach(function (n) {
        if (b(n) && O[n] !== t[n] && -1 === x.indexOf(n)) x.push(n);
      });
      Object.keys(O).forEach(function (n) {
        if (undefined === t[n] && b(n) && -1 === x.indexOf(n) && undefined !== O[n]) x.push(n);
      });
      if (null === p) p = setInterval(E, s);
      O = t;
    },
    flush: function () {
      for (; 0 !== x.length; ) E();

      return _ || Promise.resolve();
    },
  };
};

var module617 = require('./617');

function n(t) {
  return JSON.stringify(t);
}
