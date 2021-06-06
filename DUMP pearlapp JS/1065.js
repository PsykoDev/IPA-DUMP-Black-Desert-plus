exports.default = function (n, t) {
  var c = new module1034.default();
  return u(n, t, c);
};

var module1028 = require('./1028'),
  module1034 = require('./1034'),
  u = module1028.proc(function (n, o, u) {
    return module1028.block([module1028.cond(module1028.not(module1028.defined(u)), module1028.set(u, n)), module1028.cond(module1028.neq(n, u), [module1028.set(u, n), o])]);
  });
