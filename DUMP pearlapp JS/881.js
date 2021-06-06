var module853 = require('./853'),
  module882 = require('./882'),
  o = '[object AsyncFunction]',
  c = '[object Function]',
  u = '[object GeneratorFunction]',
  b = '[object Proxy]';

module.exports = function (j) {
  if (!module882(j)) return false;
  var f = module853(j);
  return f == c || f == u || f == o || f == b;
};
