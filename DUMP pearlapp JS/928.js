var module882 = require('./882'),
  module922 = require('./922'),
  module929 = require('./929'),
  c = Object.prototype.hasOwnProperty;

module.exports = function (u) {
  if (!module882(u)) return module929(u);
  var p = module922(u),
    f = [];

  for (var s in u) ('constructor' != s || (!p && c.call(u, s))) && f.push(s);

  return f;
};
