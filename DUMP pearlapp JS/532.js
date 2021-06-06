var module7 = require('./7'),
  u = (function () {
    function t() {
      throw (module7.default(this, t), new Error('`new AppleAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module8.default(t, null, [
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'apple.com',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'apple.com';
        },
      },
    ]);
    return t;
  })();

exports.default = u;
