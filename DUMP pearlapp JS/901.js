var module897 = require('./897');

module.exports = function (t, n) {
  var h = module897(this, t),
    o = h.size;
  h.set(t, n);
  this.size += h.size == o ? 0 : 1;
  return this;
};
