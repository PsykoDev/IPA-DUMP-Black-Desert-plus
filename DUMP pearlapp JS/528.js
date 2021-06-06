var module7 = require('./7'),
  o = (function () {
    function t() {
      throw (module7.default(this, t), new Error('`new GithubAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module8.default(t, null, [
      {
        key: 'credential',
        value: function (t) {
          return {
            token: t,
            secret: '',
            providerId: 'github.com',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'github.com';
        },
      },
    ]);
    return t;
  })();

exports.default = o;
