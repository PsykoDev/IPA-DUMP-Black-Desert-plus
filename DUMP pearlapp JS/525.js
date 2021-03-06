var module7 = require('./7'),
  o = (function () {
    function t() {
      throw (module7.default(this, t), new Error('`new EmailAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module8.default(t, null, [
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'password',
          };
        },
      },
      {
        key: 'credentialWithLink',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'emailLink',
          };
        },
      },
      {
        key: 'EMAIL_LINK_SIGN_IN_METHOD',
        get: function () {
          return 'emailLink';
        },
      },
      {
        key: 'EMAIL_PASSWORD_SIGN_IN_METHOD',
        get: function () {
          return 'password';
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'password';
        },
      },
    ]);
    return t;
  })();

exports.default = o;
