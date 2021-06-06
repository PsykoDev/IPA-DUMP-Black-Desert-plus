var module917 = require('./917'),
  module919 = require('./919'),
  module920 = require('./920'),
  s = module920 && module920.isTypedArray,
  t = s ? module919(s) : module917;

module.exports = t;
