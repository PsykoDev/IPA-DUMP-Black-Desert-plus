var module865 = require('./865'),
  module873 = require('./873'),
  module874 = require('./874'),
  module875 = require('./875'),
  module876 = require('./876'),
  module877 = require('./877');

function y(o) {
  var p = (this.__data__ = new module865(o));
  this.size = p.size;
}

y.prototype.clear = module873;
y.prototype.delete = module874;
y.prototype.get = module875;
y.prototype.has = module876;
y.prototype.set = module877;
module.exports = y;
