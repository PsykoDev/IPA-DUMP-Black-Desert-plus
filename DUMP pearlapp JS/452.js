var module448 = require('./448'),
  module453 = require('./453'),
  module467 = require('./467');

var n = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    v = module453.default(t, n);
  return module448.default(module467.default, v, n);
};

exports.default = n;
