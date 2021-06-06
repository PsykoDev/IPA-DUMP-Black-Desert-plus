var module859 = require('./859'),
  module965 = require('./965'),
  o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  u = /^\w*$/;

module.exports = function (l, b) {
  if (module859(l)) return false;
  var f = typeof l;
  return !('number' != f && 'symbol' != f && 'boolean' != f && null != l && !module965(l)) || u.test(l) || !o.test(l) || (null != b && l in Object(b));
};
