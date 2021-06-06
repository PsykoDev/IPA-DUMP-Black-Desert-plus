var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module537 = require('./537'),
  module543 = require('./543'),
  module511 = require('./511'),
  module510 = require('./510'),
  module502 = require('./502');

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var N = ['database_transaction_event'],
  y = 'RNFirebaseDatabase';
exports.MODULE_NAME = y;
var R = 'database';
exports.NAMESPACE = R;

var O = (function (t) {
  module9.default(T, t);

  var module17 = T,
    module511 = h(),
    O = function () {
      var t,
        n = module13.default(module17);

      if (module511) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function T(t, s) {
    var f, o, module13;
    module7.default(this, T);

    if ('string' == typeof t) {
      o = module502.default.app();
      module13 = t;
    } else {
      o = t;
      module13 = s || o.options.databaseURL;
    }

    module13 = module13.endsWith('/') ? module13 : module13 + '/';
    (f = O.call(
      this,
      o,
      {
        events: N,
        moduleName: y,
        hasMultiAppSupport: true,
        hasCustomUrlSupport: true,
        namespace: R,
      },
      module13
    ))._serverTimeOffset = 0;
    f._databaseURL = module13;
    f._transactionHandler = new module543.default(module12.default(f));
    if (o.options.persistence) module510.getNativeModule(module12.default(f)).setPersistence(o.options.persistence);
    setTimeout(function () {
      f._offsetRef = f.ref('.info/serverTimeOffset');

      f._offsetRef.on('value', function (t) {
        f._serverTimeOffset = t.val() || f._serverTimeOffset;
      });
    }, 1);
    return f;
  }

  module8.default(T, [
    {
      key: 'getServerTime',
      value: function () {
        return new Date(Date.now() + this._serverTimeOffset);
      },
    },
    {
      key: 'goOnline',
      value: function () {
        module510.getNativeModule(this).goOnline();
      },
    },
    {
      key: 'goOffline',
      value: function () {
        module510.getNativeModule(this).goOffline();
      },
    },
    {
      key: 'ref',
      value: function (t) {
        return new module537.default(this, t);
      },
    },
    {
      key: 'databaseUrl',
      get: function () {
        return this._databaseURL;
      },
    },
  ]);
  return T;
})(module511.default);

exports.default = O;
var T = {
  ServerValue: module17.NativeModules.RNFirebaseDatabase
    ? {
        TIMESTAMP: module17.NativeModules.RNFirebaseDatabase.serverValueTimestamp || {
          '.sv': 'timestamp',
        },
      }
    : {},
  enableLogging: function (t) {
    if (module17.NativeModules[y]) module17.NativeModules[y].enableLogging(t);
  },
};
exports.statics = T;
