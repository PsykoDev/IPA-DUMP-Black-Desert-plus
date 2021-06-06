var n,
  module58 = require('./58'),
  module207 = require('./207');

function v() {}

if (module58.isTV) {
  var u = new module207(),
    f = new Set();
  u.enable(this, function (t, o) {
    if (o && 'menu' === o.eventType) {
      for (var v = true, u = Array.from(f.values()).reverse(), s = 0; s < u.length; ++s)
        if (u[s]()) {
          v = false;
          break;
        }

      if (v) n.exitApp();
    }
  });
  n = {
    exitApp: v,
    addEventListener: function (t, o) {
      f.add(o);
      return {
        remove: function () {
          return n.removeEventListener(t, o);
        },
      };
    },
    removeEventListener: function (n, t) {
      f.delete(t);
    },
  };
} else
  n = {
    exitApp: v,
    addEventListener: function (n, t) {
      return {
        remove: v,
      };
    },
    removeEventListener: function (n, t) {},
  };

module.exports = n;
