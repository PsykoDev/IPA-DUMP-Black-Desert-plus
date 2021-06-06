var module880 = require('./880'),
  module886 = require('./886');

module.exports = function (t, u) {
  var v = module886(t, u);
  return module880(v) ? v : undefined;
};
