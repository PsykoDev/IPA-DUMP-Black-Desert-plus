var module205 = require('./205'),
  o = module205.twoArgumentPooler;

function n(t, o) {
  this.width = t;
  this.height = o;
}

n.prototype.destructor = function () {
  this.width = null;
  this.height = null;
};

n.getPooledFromElement = function (t) {
  return n.getPooled(t.offsetWidth, t.offsetHeight);
};

module205.addPoolingTo(n, o);
module.exports = n;
