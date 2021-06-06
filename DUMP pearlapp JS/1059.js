exports.default = function (n) {
  var t = new module1034.default(0);
  return f(n, t);
};

var module1028 = require('./1028'),
  module1034 = require('./1034'),
  f = module1028.proc(function (n, u) {
    return module1028.set(u, module1028.add(u, n));
  });
