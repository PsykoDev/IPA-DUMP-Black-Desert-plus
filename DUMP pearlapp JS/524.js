var module7 = require('./7'),
  module510 = require('./510'),
  module507 = require('./507'),
  l = (function () {
    function t(n) {
      module7.default(this, t);
      this._auth = n;
      this._appVerificationDisabledForTesting = false;
    }

    module8.default(t, [
      {
        key: 'setAutoRetrievedSmsCodeForPhoneNumber',
        value: function (t, o) {
          return module507.isAndroid ? module510.getNativeModule(this._auth).setAutoRetrievedSmsCodeForPhoneNumber(t, o) : Promise.resolve(null);
        },
      },
      {
        key: 'appVerificationDisabledForTesting',
        get: function () {
          return this._appVerificationDisabledForTesting;
        },
        set: function (t) {
          if (module507.isIOS) {
            this._appVerificationDisabledForTesting = t;
            module510.getNativeModule(this._auth).setAppVerificationDisabledForTesting(t);
          }
        },
      },
    ]);
    return t;
  })();

exports.default = l;
