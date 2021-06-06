var module963 = require('./963'),
  module971 = require('./971'),
  module972 = require('./972'),
  module974 = require('./974');

module.exports = function (o, c) {
  c = module963(c, o);
  return null == (o = module972(o, c)) || delete o[module974(module971(c))];
};
