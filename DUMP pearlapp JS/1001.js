var module887 = require('./887'),
  module1002 = require('./1002'),
  module1003 = require('./1003');

function n(o) {
  var p = -1,
    n = null == o ? 0 : o.length;

  for (this.__data__ = new module887(); ++p < n; ) this.add(o[p]);
}

n.prototype.add = n.prototype.push = module1002;
n.prototype.has = module1003;
module.exports = n;
