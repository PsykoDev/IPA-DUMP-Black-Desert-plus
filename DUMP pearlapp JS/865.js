var module866 = require('./866'),
  module867 = require('./867'),
  module870 = require('./870'),
  module871 = require('./871'),
  module872 = require('./872');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module866;
s.prototype.delete = module867;
s.prototype.get = module870;
s.prototype.has = module871;
s.prototype.set = module872;
module.exports = s;
