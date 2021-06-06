var module1028 = require('./1028'),
  t = module1028.proc(function (t) {
    return module1028.cond(module1028.lessThan(t, 0), module1028.multiply(-1, t), t);
  });

exports.default = t;
