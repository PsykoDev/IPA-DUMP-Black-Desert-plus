var module7 = require('./7'),
  l = (function () {
    function t(u) {
      module7.default(this, t);
      this._link = u;
    }

    module8.default(t, [
      {
        key: 'setForcedRedirectEnabled',
        value: function (t) {
          this._forcedRedirectEnabled = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            forcedRedirectEnabled: this._forcedRedirectEnabled,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = l;
