var module1028 = require('./1028'),
  n = module1028.proc(function (n) {
    return module1028.sub(1, module1028.round(module1028.sub(0.5, n)));
  });

exports.default = n;
