var n,
  regeneratorRuntime = require('regenerator-runtime'),
  module609 = require('./609'),
  module648 = require('./648');

exports.RemoteConfigManager = n;

(function (t) {
  var n = {};

  function l(t) {
    try {
      for (var o = t.split('/'), c = n[o[0]], l = 0; l < o.length; l++) {
        if (0 != l) c = c[o[l]];
      }

      return c;
    } catch (n) {
      return void module648.Logger.error(arguments.callee.name, t);
    }
  }

  t.fetchConfig = function (t) {
    var n,
      l,
      f,
      s,
      p = arguments;
    return regeneratorRuntime.default.async(
      function (v) {
        for (;;)
          switch ((v.prev = v.next)) {
            case 0:
              n = 'https://s1.playblackdesert.com/pearlapp/Static/serverlist/{configKey}.txt';
              v.prev = 1;
              module648.Logger.info(p.callee.name, n.replace('{configKey}', t));
              v.next = 5;
              return regeneratorRuntime.default.awrap(
                module609.timeoutFetch(n.replace('{configKey}', t), {
                  headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                  },
                })
              );

            case 5:
              l = v.sent;
              v.next = 8;
              return regeneratorRuntime.default.awrap(l.text());

            case 8:
              f = v.sent;
              s = JSON.parse(f);
              return v.abrupt('return', s);

            case 13:
              v.prev = 13;
              v.t0 = v.catch(1);
              module648.Logger.warning(p.callee.name, v.t0);
              return v.abrupt('return', undefined);

            case 17:
            case 'end':
              return v.stop();
          }
      },
      null,
      null,
      [[1, 13]],
      Promise
    );
  };

  t.getConfig = l;

  t.setConfig = function (t, o) {
    n[t] = o;
  };

  t.isValidConfigValue = function (t) {
    var n = l(t);
    return undefined != n && 0 != n.length;
  };
})(n || (exports.RemoteConfigManager = n = {}));
