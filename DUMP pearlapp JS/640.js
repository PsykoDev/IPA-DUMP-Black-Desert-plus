exports.default = l;

var regeneratorRuntime = require('regenerator-runtime'),
  module641 = require('./641'),
  module644 = require('./644'),
  module718 = require('./718'),
  o = regeneratorRuntime.default.mark(l);

function l() {
  return regeneratorRuntime.default.wrap(function (t) {
    for (;;)
      switch ((t.prev = t.next)) {
        case 0:
          t.next = 2;
          return module641.all([module644.watchAccount(), module718.watchService()]);

        case 2:
        case 'end':
          return t.stop();
      }
  }, o);
}
