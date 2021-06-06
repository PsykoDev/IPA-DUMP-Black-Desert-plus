var module7 = require('./7'),
  o = (function () {
    function t() {
      throw (module7.default(this, t), new Error('`new OAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module8.default(t, null, [
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'oauth',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'oauth';
        },
      },
    ]);
    return t;
  })();

exports.default = o;
