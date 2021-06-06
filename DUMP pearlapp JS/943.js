var module944 = require('./944'),
  module878 = require('./878'),
  module945 = require('./945'),
  module946 = require('./946'),
  module947 = require('./947'),
  module853 = require('./853'),
  module885 = require('./885'),
  u = module885(module944),
  w = module885(module878),
  f = module885(module945),
  p = module885(module946),
  v = module885(module947),
  M = module853;

if (
  (module944 && '[object DataView]' != M(new module944(new ArrayBuffer(1)))) ||
  (module878 && '[object Map]' != M(new module878())) ||
  (module945 && '[object Promise]' != M(module945.resolve())) ||
  (module946 && '[object Set]' != M(new module946())) ||
  (module947 && '[object WeakMap]' != M(new module947()))
)
  M = function (t) {
    var c = module853(t),
      o = '[object Object]' == c ? t.constructor : undefined,
      n = o ? module885(o) : '';
    if (n)
      switch (n) {
        case u:
          return '[object DataView]';

        case w:
          return '[object Map]';

        case f:
          return '[object Promise]';

        case p:
          return '[object Set]';

        case v:
          return '[object WeakMap]';
      }
    return c;
  };
module.exports = M;
