var module868 = require('./868');

module.exports = function (_) {
  var n = this.__data__,
    o = module868(n, _);
  return o < 0 ? undefined : n[o][1];
};
