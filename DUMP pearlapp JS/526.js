var module7 = require('./7'),
  u = (function () {
    function n() {
      throw (module7.default(this, n), new Error('`new PhoneAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module8.default(n, null, [
      {
        key: 'credential',
        value: function (n, t) {
          return {
            token: n,
            secret: t,
            providerId: 'phone',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'phone';
        },
      },
    ]);
    return n;
  })();

exports.default = u;
