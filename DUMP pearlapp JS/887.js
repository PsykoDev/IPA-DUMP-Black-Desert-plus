var module888 = require('./888'),
  module896 = require('./896'),
  module899 = require('./899'),
  module900 = require('./900'),
  module901 = require('./901');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module888;
s.prototype.delete = module896;
s.prototype.get = module899;
s.prototype.has = module900;
s.prototype.set = module901;
module.exports = s;
