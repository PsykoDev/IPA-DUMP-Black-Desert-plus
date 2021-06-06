var module7 = require('./7'),
  module510 = require('./510'),
  module507 = require('./507'),
  f = (function () {
    function t(o) {
      module7.default(this, t);
      this._messaging = o;
    }

    module8.default(t, [
      {
        key: 'getAPNSToken',
        value: function () {
          return module507.isIOS ? module510.getNativeModule(this._messaging).getAPNSToken() : null;
        },
      },
      {
        key: 'registerForRemoteNotifications',
        value: function () {
          if (module507.isIOS) return module510.getNativeModule(this._messaging).registerForRemoteNotifications();
        },
      },
    ]);
    return t;
  })();

exports.default = f;
