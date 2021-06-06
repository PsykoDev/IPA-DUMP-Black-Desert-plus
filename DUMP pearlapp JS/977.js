var module853 = require('./853'),
  module939 = require('./939'),
  module860 = require('./860'),
  c = '[object Object]',
  u = Function.prototype,
  l = Object.prototype,
  f = u.toString,
  p = l.hasOwnProperty,
  s = f.call(Object);

module.exports = function (u) {
  if (!module860(u) || module853(u) != c) return false;
  var l = module939(u);
  if (null === l) return true;
  var b = p.call(l, 'constructor') && l.constructor;
  return 'function' == typeof b && b instanceof b && f.call(b) == s;
};
