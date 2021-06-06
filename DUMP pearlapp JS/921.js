var module922 = require('./922'),
  module923 = require('./923'),
  o = Object.prototype.hasOwnProperty;

module.exports = function (c) {
  if (!module922(c)) return module923(c);
  var u = [];

  for (var p in Object(c)) o.call(c, p) && 'constructor' != p && u.push(p);

  return u;
};
