require('./565');

var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module505 = require('./505'),
  module511 = require('./511'),
  module545 = require('./545'),
  module551 = require('./551'),
  module547 = require('./547'),
  module558 = require('./558'),
  module560 = require('./560'),
  module556 = require('./556'),
  module561 = require('./561'),
  module563 = require('./563'),
  module564 = require('./564'),
  module562 = require('./562'),
  module507 = require('./507'),
  module510 = require('./510');

function M() {
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

var D = ['firestore_transaction_event', 'firestore_document_sync_event', 'firestore_collection_sync_event'],
  F = ['debug', 'error', 'silent'],
  j = 'RNFirebaseFirestore';
exports.MODULE_NAME = j;
var B = 'firestore';
exports.NAMESPACE = B;

var I = (function (t) {
  module9.default(y, t);

  var module17 = y,
    module511 = M(),
    b = function () {
      var t,
        n = module13.default(module17);

      if (module511) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function y(t) {
    var s;
    module7.default(this, y);
    (s = b.call(this, t, {
      events: D,
      moduleName: j,
      hasMultiAppSupport: true,
      hasCustomUrlSupport: false,
      namespace: B,
    }))._referencePath = new module561.default([]);
    s._transactionHandler = new module564.default(module12.default(s));
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(s), 'firestore_collection_sync_event'), s._onCollectionSyncEvent.bind(module12.default(s)));
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(s), 'firestore_document_sync_event'), s._onDocumentSyncEvent.bind(module12.default(s)));
    return s;
  }

  module8.default(y, [
    {
      key: 'batch',
      value: function () {
        return new module563.default(this);
      },
    },
    {
      key: 'collection',
      value: function (t) {
        var n = this._referencePath.child(t);

        if (!n.isCollection) throw new Error('Argument "collectionPath" must point to a collection.');
        return new module545.default(this, n);
      },
    },
    {
      key: 'disableNetwork',
      value: function () {
        return module510.getNativeModule(this).disableNetwork();
      },
    },
    {
      key: 'doc',
      value: function (t) {
        var n = this._referencePath.child(t);

        if (!n.isDocument) throw new Error('Argument "documentPath" must point to a document.');
        return new module551.default(this, n);
      },
    },
    {
      key: 'enableNetwork',
      value: function () {
        return module510.getNativeModule(this).enableNetwork();
      },
    },
    {
      key: 'runTransaction',
      value: function (t) {
        return this._transactionHandler._add(t);
      },
    },
    {
      key: 'settings',
      value: function (t) {
        if (!module507.isObject(t)) return Promise.reject(new Error('Firestore.settings failed: settings must be an object.'));
        if (module507.hop(t, 'host') && !module507.isString(t.host)) return Promise.reject(new Error('Firestore.settings failed: settings.host must be a string.'));
        if (module507.hop(t, 'persistence') && !module507.isBoolean(t.persistence))
          return Promise.reject(new Error('Firestore.settings failed: settings.persistence must be boolean.'));

        if (module507.hop(t, 'cacheSizeBytes')) {
          if (!module507.isNumber(t.cacheSizeBytes)) return Promise.reject(new Error('Firestore.settings failed: settings.cacheSizeBytes must be number.'));
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            return Promise.reject(new Error('Firestore.settings failed: settings.cacheSizeBytes must be set to 1048576 at least bytes.'));
        }

        return module507.hop(t, 'ssl') && !module507.isBoolean(t.ssl)
          ? Promise.reject(new Error('Firestore.settings failed: settings.ssl must be boolean.'))
          : module507.hop(t, 'timestampsInSnapshots') && !module507.isBoolean(t.timestampsInSnapshots)
          ? Promise.reject(new Error('Firestore.settings failed: settings.timestampsInSnapshots must be boolean.'))
          : module510.getNativeModule(this).settings(t);
      },
    },
    {
      key: 'enablePersistence',
      value: function () {
        console.warn('Due to restrictions in the native SDK, persistence must be configured in firebase.firestore().settings()');
        return Promise.resolve();
      },
    },
    {
      key: '_onCollectionSyncEvent',
      value: function (t) {
        if (t.error) module505.SharedEventEmitter.emit(module505.getAppEventName(this, 'onQuerySnapshotError:' + t.listenerId), t);
        else module505.SharedEventEmitter.emit(module505.getAppEventName(this, 'onQuerySnapshot:' + t.listenerId), t.querySnapshot);
      },
    },
    {
      key: '_onDocumentSyncEvent',
      value: function (t) {
        if (t.error) module505.SharedEventEmitter.emit(module505.getAppEventName(this, 'onDocumentSnapshotError:' + t.listenerId), t);
        else module505.SharedEventEmitter.emit(module505.getAppEventName(this, 'onDocumentSnapshot:' + t.listenerId), t.documentSnapshot);
      },
    },
  ]);
  return y;
})(module511.default);

exports.default = I;
var C = {
  Blob: module556.default,
  FieldPath: module547.default,
  FieldValue: module558.default,
  GeoPoint: module560.default,
  Timestamp: module562.default,
  CACHE_SIZE_UNLIMITED: -1,
  enableLogging: function (t) {
    console.warn('firebase.firestore.enableLogging is deprecated, use firebase.firestore().setLogLevel instead.');
    this.setLogLevel(t ? 'debug' : 'silent');
  },
  setLogLevel: function (t) {
    if (-1 === F.indexOf(t)) throw new Error('Argument `logLevel` must be one of: `debug`, `error`, `silent`');
    if (module17.NativeModules[j]) module17.NativeModules[j].setLogLevel(t);
  },
};
exports.statics = C;
