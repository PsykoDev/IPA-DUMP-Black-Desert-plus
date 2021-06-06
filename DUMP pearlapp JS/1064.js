exports.default = function (u, o) {
  u = module1030.adapt(u);
  o = module1030.adapt(o);
  return module1028.cond(module1028.lessThan(u, o), o, u);
};

var module1028 = require('./1028'),
  module1030 = require('./1030');
