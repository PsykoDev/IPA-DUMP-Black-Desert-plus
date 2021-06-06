exports.default = function (t, n, f) {
  var l = new module1034.default();
  return c(t, n, f, l);
};

var module1028 = require('./1028'),
  module1034 = require('./1034'),
  module1063 = require('./1063'),
  module1064 = require('./1064'),
  module1061 = require('./1061'),
  c = module1028.proc(function (t, u, c, v) {
    return module1028.set(v, module1063.default(module1064.default(module1028.add(module1028.cond(module1028.defined(v), v, t), module1061.default(t)), u), c));
  });
