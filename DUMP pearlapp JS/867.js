var module868 = require('./868'),
  n = Array.prototype.splice;

module.exports = function (o) {
  var p = this.__data__,
    _ = module868(p, o);

  return !(_ < 0 || (_ == p.length - 1 ? p.pop() : n.call(p, _, 1), --this.size, 0));
};
