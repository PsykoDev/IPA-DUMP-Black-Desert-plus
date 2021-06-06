var module904 = require('./904'),
  module869 = require('./869'),
  n = Object.prototype.hasOwnProperty;

module.exports = function (c, p, v) {
  var f = c[p];
  if (!(n.call(c, p) && module869(f, v) && (undefined !== v || p in c))) module904(c, p, v);
};
