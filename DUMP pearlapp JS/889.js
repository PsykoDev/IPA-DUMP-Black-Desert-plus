var module890 = require('./890'),
  module892 = require('./892'),
  module893 = require('./893'),
  module894 = require('./894'),
  module895 = require('./895');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module890;
s.prototype.delete = module892;
s.prototype.get = module893;
s.prototype.has = module894;
s.prototype.set = module895;
module.exports = s;
