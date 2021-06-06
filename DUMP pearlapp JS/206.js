var module205 = require('./205'),
  o = module205.twoArgumentPooler;

function n(t, o) {
  this.left = t;
  this.top = o;
}

n.prototype.destructor = function () {
  this.left = null;
  this.top = null;
};

module205.addPoolingTo(n, o);
module.exports = n;
