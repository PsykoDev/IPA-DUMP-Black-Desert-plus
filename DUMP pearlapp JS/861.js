var module862 = require('./862'),
  module863 = require('./863'),
  module962 = require('./962'),
  module963 = require('./963'),
  module907 = require('./907'),
  module976 = require('./976'),
  module978 = require('./978'),
  module942 = require('./942'),
  h = module978(function (v, h) {
    var _ = {};
    if (null == v) return _;
    var p = false;
    h = module862(h, function (n) {
      module862 = module963(module862, v);
      if (!p) p = module862.length > 1;
      return module862;
    });
    module907(v, module942(v), _);
    if (p) _ = module863(_, 7, module976);

    for (var s = h.length; s--; ) module962(_, h[s]);

    return _;
  });

module.exports = h;
