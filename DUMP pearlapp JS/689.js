var module690 = require('./690'),
  module692 = require('./692'),
  t = {};

function c(n) {
  var o = function (o) {
    if (undefined === o || null === o) return o;
    else {
      if (arguments.length > 1) o = Array.prototype.slice.call(arguments);
      return n(o);
    }
  };

  if ('conversion' in n) o.conversion = n.conversion;
  return o;
}

function l(n) {
  var o = function (o) {
    if (undefined === o || null === o) return o;
    if (arguments.length > 1) o = Array.prototype.slice.call(arguments);
    var t = n(o);
    if ('object' == typeof t) for (var c = t.length, l = 0; l < c; l++) t[l] = Math.round(t[l]);
    return t;
  };

  if ('conversion' in n) o.conversion = n.conversion;
  return o;
}

Object.keys(module690).forEach(function (u) {
  t[u] = {};
  Object.defineProperty(t[u], 'channels', {
    value: module690[u].channels,
  });
  Object.defineProperty(t[u], 'labels', {
    value: module690[u].labels,
  });
  var v = module692(u);
  Object.keys(v).forEach(function (n) {
    var o = v[n];
    t[u][n] = l(o);
    t[u][n].raw = c(o);
  });
});
module.exports = t;
