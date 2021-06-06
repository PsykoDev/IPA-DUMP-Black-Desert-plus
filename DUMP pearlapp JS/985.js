var module986 = require('./986'),
  module905 = require('./905'),
  module987 = require('./987'),
  o = module905
    ? function (u, o) {
        return module905(u, 'toString', {
          configurable: true,
          enumerable: false,
          value: module986(o),
          writable: true,
        });
      }
    : module987;

module.exports = o;
