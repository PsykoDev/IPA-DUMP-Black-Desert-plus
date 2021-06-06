exports.default = function (n, f, c) {
  var p = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1;
  if ('web' === module17.Platform.OS) return module1028.concat('rgba(', n, ',', f, ',', c, ',', p, ')');
  p = p instanceof module1032.default ? module1028.round(module1028.multiply(p, 255)) : Math.round(255 * p);
  return l(n, f, c, p);
};

var module17 = require('./17'),
  module1028 = require('./1028'),
  module1032 = require('./1032'),
  l = module1028.proc(function (n, o, l, f) {
    var c = module1028.add(module1028.multiply(f, 16777216), module1028.multiply(module1028.round(n), 65536), module1028.multiply(module1028.round(o), 256), module1028.round(l));
    return 'android' === module17.Platform.OS ? module1028.cond(module1028.lessThan(c, 2147483648), c, module1028.sub(c, 2 ** 32)) : c;
  });
