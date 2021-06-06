var module938 = require('./938'),
  module939 = require('./939'),
  module933 = require('./933'),
  module935 = require('./935'),
  f = Object.getOwnPropertySymbols
    ? function (c) {
        for (var f = []; c; ) {
          module938(f, module933(c));
          c = module939(c);
        }

        return f;
      }
    : module935;

module.exports = f;
