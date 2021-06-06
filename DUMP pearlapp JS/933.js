var module934 = require('./934'),
  module935 = require('./935'),
  o = Object.prototype.propertyIsEnumerable,
  c = Object.getOwnPropertySymbols,
  u = c
    ? function (n) {
        if (null == n) return [];
        else {
          n = Object(n);
          return module934(c(n), function (t) {
            return o.call(n, t);
          });
        }
      }
    : module935;

module.exports = u;
