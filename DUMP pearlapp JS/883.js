var n,
  module884 = require('./884'),
  o = (n = /[^.]+$/.exec((module884 && module884.keys && module884.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + n : '';

module.exports = function (n) {
  return !!o && o in n;
};
