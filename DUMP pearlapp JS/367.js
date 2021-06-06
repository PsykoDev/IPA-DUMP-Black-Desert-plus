var module6 = require('./6'),
  module368 = require('./368'),
  module48 = require('./48'),
  module18 = require('./18'),
  u = [],
  o = {
    _settings: module368.default && module368.default.getConstants().settings,
    get: function (t) {
      return this._settings[t];
    },
    set: function (t) {
      this._settings = module6.default(this._settings, t);
      module368.default.setValues(t);
    },
    watchKeys: function (t, s) {
      if ('string' == typeof t) t = [t];
      module18(Array.isArray(t), 'keys should be a string or array of strings');
      var n = u.length;
      u.push({
        keys: t,
        callback: s,
      });
      return n;
    },
    clearWatch: function (t) {
      if (t < u.length)
        u[t] = {
          keys: [],
          callback: null,
        };
    },
    _sendObservations: function (t) {
      var s = this;
      Object.keys(t).forEach(function (n) {
        var c = t[n],
          l = s._settings[n] !== c;
        s._settings[n] = c;
        if (l)
          u.forEach(function (t) {
            if (-1 !== t.keys.indexOf(n) && t.callback) t.callback();
          });
      });
    },
  };

module48.addListener('settingsUpdated', o._sendObservations.bind(o));
module.exports = o;
