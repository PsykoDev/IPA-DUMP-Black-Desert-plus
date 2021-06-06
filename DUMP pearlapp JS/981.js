var module854 = require('./854'),
  module911 = require('./911'),
  module859 = require('./859'),
  c = module854 ? module854.isConcatSpreadable : undefined;

module.exports = function (n) {
  return module859(n) || module911(n) || !!(c && n && n[c]);
};
