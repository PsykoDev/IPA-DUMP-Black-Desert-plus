var module7 = require('./7'),
  module507 = require('./507'),
  module510 = require('./510'),
  c = (function () {
    function t(u) {
      module7.default(this, t);
      this.ref = u;
      this.path = u.path;
      this._database = u._database;
    }

    module8.default(t, [
      {
        key: 'set',
        value: function (t) {
          return module510.getNativeModule(this._database).onDisconnectSet(this.path, {
            type: module507.typeOf(t),
            value: t,
          });
        },
      },
      {
        key: 'update',
        value: function (t) {
          return module510.getNativeModule(this._database).onDisconnectUpdate(this.path, t);
        },
      },
      {
        key: 'remove',
        value: function () {
          return module510.getNativeModule(this._database).onDisconnectRemove(this.path);
        },
      },
      {
        key: 'cancel',
        value: function () {
          return module510.getNativeModule(this._database).onDisconnectCancel(this.path);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
