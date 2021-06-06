exports.default = function (n) {
  var t = new module1034.default(0),
    o = new module1034.default();
  return f(n, t, o);
};

var module1028 = require('./1028'),
  module1034 = require('./1034'),
  f = module1028.proc(function (n, u, f) {
    return module1028.block([module1028.set(u, module1028.cond(module1028.defined(f), module1028.sub(n, f), 0)), module1028.set(f, n), u]);
  });
