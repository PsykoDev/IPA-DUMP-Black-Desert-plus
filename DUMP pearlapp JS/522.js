var module7 = require('./7'),
  module510 = require('./510'),
  o = (function () {
    function t(u, f) {
      module7.default(this, t);
      this._auth = u;
      this._verificationId = f;
    }

    module8.default(t, [
      {
        key: 'confirm',
        value: function (t) {
          var n = this;
          return module510
            .getNativeModule(this._auth)
            ._confirmVerificationCode(t)
            .then(function (t) {
              return n._auth._setUser(t);
            });
        },
      },
      {
        key: 'verificationId',
        get: function () {
          return this._verificationId;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
