var module45 = require('./45');

module.exports = module45;
var t = h(true),
  o = h(false),
  f = h(null),
  u = h(undefined),
  c = h(0),
  l = h('');

function h(t) {
  var o = new module45(module45._61);
  o._65 = 1;
  o._55 = t;
  return o;
}

module45.resolve = function (v) {
  if (v instanceof module45) return v;
  if (null === v) return f;
  if (undefined === v) return u;
  if (true === v) return t;
  if (false === v) return o;
  if (0 === v) return c;
  if ('' === v) return l;
  if ('object' == typeof v || 'function' == typeof v)
    try {
      var p = v.then;
      if ('function' == typeof p) return new module45(p.bind(v));
    } catch (t) {
      return new module45(function (n, o) {
        o(t);
      });
    }
  return h(v);
};

module45.all = function (t) {
  var o = Array.prototype.slice.call(t);
  return new module45(function (t, f) {
    if (0 === o.length) return t([]);
    var u = o.length;

    function c(l, h) {
      if (h && ('object' == typeof h || 'function' == typeof h)) {
        if (h instanceof module45 && h.then === module45.prototype.then) {
          for (; 3 === h._65; ) h = h._55;

          if (1 === h._65) return c(l, h._55);
          else {
            if (2 === h._65) f(h._55);
            return void h.then(function (n) {
              c(l, n);
            }, f);
          }
        }

        var v = h.then;
        if ('function' == typeof v)
          return void new module45(v.bind(h)).then(function (n) {
            c(l, n);
          }, f);
      }

      o[l] = h;
      if (0 == --u) t(o);
    }

    for (var l = 0; l < o.length; l++) c(l, o[l]);
  });
};

module45.reject = function (t) {
  return new module45(function (n, o) {
    o(t);
  });
};

module45.race = function (t) {
  return new module45(function (o, f) {
    t.forEach(function (t) {
      module45.resolve(t).then(o, f);
    });
  });
};

module45.prototype.catch = function (n) {
  return this.then(null, n);
};
