var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module595 = require('./595'),
  module505 = require('./505'),
  module509 = require('./509'),
  module507 = require('./507'),
  module511 = require('./511'),
  module510 = require('./510');

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

var A = module17.NativeModules.RNFirebaseStorage,
  N = ['storage_event', 'storage_error'],
  p = 'RNFirebaseStorage';
exports.MODULE_NAME = p;
var C = 'storage';
exports.NAMESPACE = C;

var D = (function (t) {
  module9.default(A, t);

  var module17 = A,
    module507 = S(),
    c = function () {
      var t,
        n = module13.default(module17);

      if (module507) {
        var E = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, E);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function A(t) {
    var module8;
    module7.default(this, A);
    module8 = c.call(this, t, {
      events: N,
      moduleName: p,
      hasMultiAppSupport: true,
      hasCustomUrlSupport: false,
      namespace: C,
    });
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(module8), 'storage_event'), module8._handleStorageEvent.bind(module12.default(module8)));
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(module8), 'storage_error'), module8._handleStorageEvent.bind(module12.default(module8)));
    return module8;
  }

  module8.default(A, [
    {
      key: 'ref',
      value: function (t) {
        return new module595.default(this, t);
      },
    },
    {
      key: 'refFromURL',
      value: function (t) {
        return new module595.default(this, 'url::' + t);
      },
    },
    {
      key: 'setMaxOperationRetryTime',
      value: function (t) {
        module510.getNativeModule(this).setMaxOperationRetryTime(t);
      },
    },
    {
      key: 'setMaxUploadRetryTime',
      value: function (t) {
        module510.getNativeModule(this).setMaxUploadRetryTime(t);
      },
    },
    {
      key: 'setMaxDownloadRetryTime',
      value: function (t) {
        module510.getNativeModule(this).setMaxDownloadRetryTime(t);
      },
    },
    {
      key: '_getSubEventName',
      value: function (t, n) {
        return module505.getAppEventName(this, t + '-' + n);
      },
    },
    {
      key: '_handleStorageEvent',
      value: function (t) {
        var n = t.path,
          E = t.eventName,
          u = t.body || {};
        module509.getLogger(this).debug('_handleStorageEvent: ', n, E, u);
        module505.SharedEventEmitter.emit(this._getSubEventName(n, E), u);
      },
    },
    {
      key: '_handleStorageError',
      value: function (t) {
        var n = t.path,
          E = t.eventName,
          u = t.body || {};
        module509.getLogger(this).debug('_handleStorageError ->', t);
        module505.SharedEventEmitter.emit(this._getSubEventName(n, E), u);
      },
    },
    {
      key: '_addListener',
      value: function (t, n, E) {
        module505.SharedEventEmitter.addListener(this._getSubEventName(t, n), E);
      },
    },
    {
      key: '_removeListener',
      value: function (t, n, E) {
        module505.SharedEventEmitter.removeListener(this._getSubEventName(t, n), E);
      },
    },
  ]);
  return A;
})(module511.default);

exports.default = D;
var L = {
  TaskEvent: {
    STATE_CHANGED: 'state_changed',
  },
  TaskState: {
    RUNNING: 'running',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELLED: 'cancelled',
    ERROR: 'error',
  },
  Native: A
    ? {
        MAIN_BUNDLE_PATH: module507.stripTrailingSlash(A.MAIN_BUNDLE_PATH),
        CACHES_DIRECTORY_PATH: module507.stripTrailingSlash(A.CACHES_DIRECTORY_PATH),
        DOCUMENT_DIRECTORY_PATH: module507.stripTrailingSlash(A.DOCUMENT_DIRECTORY_PATH),
        EXTERNAL_DIRECTORY_PATH: module507.stripTrailingSlash(A.EXTERNAL_DIRECTORY_PATH),
        EXTERNAL_STORAGE_DIRECTORY_PATH: module507.stripTrailingSlash(A.EXTERNAL_STORAGE_DIRECTORY_PATH),
        TEMP_DIRECTORY_PATH: module507.stripTrailingSlash(A.TEMP_DIRECTORY_PATH),
        LIBRARY_DIRECTORY_PATH: module507.stripTrailingSlash(A.LIBRARY_DIRECTORY_PATH),
        FILETYPE_REGULAR: module507.stripTrailingSlash(A.FILETYPE_REGULAR),
        FILETYPE_DIRECTORY: module507.stripTrailingSlash(A.FILETYPE_DIRECTORY),
      }
    : {},
};
exports.statics = L;
