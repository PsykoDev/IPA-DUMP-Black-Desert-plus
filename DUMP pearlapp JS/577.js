var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module505 = require('./505'),
  module506 = require('./506'),
  module509 = require('./509'),
  module511 = require('./511'),
  module510 = require('./510'),
  module507 = require('./507'),
  module578 = require('./578'),
  module579 = require('./579');

function S() {
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

var _ = ['messaging_message_received', 'messaging_token_refreshed'],
  p = 'RNFirebaseMessaging';
exports.MODULE_NAME = p;
var b = 'messaging';
exports.NAMESPACE = b;

var N = (function (t) {
  module9.default(L, t);

  var module511 = L,
    N = S(),
    P = function () {
      var t,
        n = module13.default(module511);

      if (N) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function L(t) {
    var s;
    module7.default(this, L);
    (s = P.call(this, t, {
      events: _,
      moduleName: p,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: b,
    }))._ios = new module578.default(module12.default(s));
    module505.SharedEventEmitter.addListener('messaging_message_received', function (t) {
      module505.SharedEventEmitter.emit('onMessage', new module579.default(t));
    });
    module505.SharedEventEmitter.addListener('messaging_token_refreshed', function (t) {
      module505.SharedEventEmitter.emit('onTokenRefresh', t);
    });
    if ('ios' === module17.Platform.OS) module510.getNativeModule(module12.default(s)).jsInitialised();
    return s;
  }

  module8.default(L, [
    {
      key: 'getToken',
      value: function () {
        return module510.getNativeModule(this).getToken();
      },
    },
    {
      key: 'deleteToken',
      value: function () {
        return module510.getNativeModule(this).deleteToken();
      },
    },
    {
      key: 'onMessage',
      value: function (t) {
        var n,
          s = this;
        if (module507.isFunction(t)) n = t;
        else {
          if (!module507.isObject(t) || !module507.isFunction(t.next))
            throw new Error('Messaging.onMessage failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module509.getLogger(this).info('Creating onMessage listener');
        module505.SharedEventEmitter.addListener('onMessage', n);
        return function () {
          module509.getLogger(s).info('Removing onMessage listener');
          module505.SharedEventEmitter.removeListener('onMessage', n);
        };
      },
    },
    {
      key: 'onTokenRefresh',
      value: function (t) {
        var n,
          s = this;
        if (module507.isFunction(t)) n = t;
        else {
          if (!module507.isObject(t) || !module507.isFunction(t.next))
            throw new Error('Messaging.onTokenRefresh failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module509.getLogger(this).info('Creating onTokenRefresh listener');
        module505.SharedEventEmitter.addListener('onTokenRefresh', n);
        return function () {
          module509.getLogger(s).info('Removing onTokenRefresh listener');
          module505.SharedEventEmitter.removeListener('onTokenRefresh', n);
        };
      },
    },
    {
      key: 'requestPermission',
      value: function () {
        return module510.getNativeModule(this).requestPermission();
      },
    },
    {
      key: 'hasPermission',
      value: function () {
        return module510.getNativeModule(this).hasPermission();
      },
    },
    {
      key: 'sendMessage',
      value: function (t) {
        if (!(t instanceof module579.default)) return Promise.reject(new Error("Messaging:sendMessage expects a 'RemoteMessage' but got type " + typeof t));

        try {
          return module510.getNativeModule(this).sendMessage(t.build());
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'subscribeToTopic',
      value: function (t) {
        return module510.getNativeModule(this).subscribeToTopic(t);
      },
    },
    {
      key: 'unsubscribeFromTopic',
      value: function (t) {
        return module510.getNativeModule(this).unsubscribeFromTopic(t);
      },
    },
    {
      key: 'setBackgroundMessageHandler',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('messaging', 'setBackgroundMessageHandler'));
      },
    },
    {
      key: 'useServiceWorker',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('messaging', 'useServiceWorker'));
      },
    },
    {
      key: 'ios',
      get: function () {
        return this._ios;
      },
    },
  ]);
  return L;
})(module511.default);

exports.default = N;
var P = {
  RemoteMessage: module579.default,
};
exports.statics = P;
