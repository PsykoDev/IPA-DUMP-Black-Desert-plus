var module7 = require('./7'),
  u = (function () {
    function t() {
      throw (module7.default(this, t), new Error('`new GoogleAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module8.default(t, null, [
      {
        key: 'credential',
        value: function (t, o) {
          return {
            token: t,
            secret: o,
            providerId: 'google.com',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'google.com';
        },
      },
    ]);
    return t;
  })();

exports.default = u;
