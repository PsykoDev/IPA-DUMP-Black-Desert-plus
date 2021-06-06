var module13 = require('./13'),
  module10 = require('./10'),
  module99 = require('./99'),
  module100 = require('./100');

function c(f) {
  var p = 'function' == typeof Map ? new Map() : undefined;

  module.exports = c = function (c) {
    if (null === c || !module99(c)) return c;
    if ('function' != typeof c) throw new TypeError('Super expression must either be null or a function');

    if (undefined !== p) {
      if (p.has(c)) return p.get(c);
      p.set(c, f);
    }

    function f() {
      return module100(c, arguments, module13(this).constructor);
    }

    f.prototype = Object.create(c.prototype, {
      constructor: {
        value: f,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return module10(f, c);
  };

  return c(f);
}

module.exports = c;
