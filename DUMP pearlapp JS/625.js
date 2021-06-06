exports.__esModule = true;

exports.default = function (n, s) {
  (s || {}).debug;
  return function (s, o) {
    if (!s) return Promise.resolve(undefined);
    var u = s._persist && undefined !== s._persist.version ? s._persist.version : module617.DEFAULT_VERSION;
    if (u === o) return Promise.resolve(s);
    if (u > o) return Promise.resolve(s);
    var c = Object.keys(n)
      .map(function (t) {
        return parseInt(t);
      })
      .filter(function (t) {
        return o >= t && t > u;
      })
      .sort(function (t, n) {
        return t - n;
      });

    try {
      var f = c.reduce(function (t, s) {
        return n[s](t);
      }, s);
      return Promise.resolve(f);
    } catch (t) {
      return Promise.reject(t);
    }
  };
};

var module617 = require('./617');
