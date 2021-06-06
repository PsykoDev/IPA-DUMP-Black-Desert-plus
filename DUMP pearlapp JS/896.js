var module897 = require('./897');

module.exports = function (n) {
  var s = module897(this, n).delete(n);
  this.size -= s ? 1 : 0;
  return s;
};
