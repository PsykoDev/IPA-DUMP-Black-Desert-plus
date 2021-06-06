var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module511 = require('./511'),
  module507 = require('./507'),
  module510 = require('./510'),
  module502 = require('./502'),
  module567 = require('./567');

function A() {
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

var v = 'functions';
exports.NAMESPACE = v;
var D = 'RNFirebaseFunctions';

function _(t) {
  if (module507.isObject(t) && t.__error) {
    var n = t.code,
      u = t.message,
      o = t.details;
    return Promise.reject(new module567.default(O.HttpsErrorCode[n] || O.HttpsErrorCode.UNKNOWN, u, o));
  }

  return Promise.resolve(t);
}

exports.MODULE_NAME = D;

var h = (function (t) {
  module9.default(h, t);

  var module511 = h,
    module507 = A(),
    p = function () {
      var t,
        n = module13.default(module511);

      if (module507) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h(t, u) {
    module7.default(this, h);
    var o = t,
      s = u || 'us-central1';

    if ('string' == typeof o) {
      s = o;
      o = module502.default.app();
    }

    return p.call(
      this,
      o,
      {
        hasMultiAppSupport: true,
        hasCustomUrlSupport: false,
        hasRegionsSupport: true,
        namespace: v,
        moduleName: D,
      },
      s
    );
  }

  module8.default(h, [
    {
      key: 'httpsCallable',
      value: function (t) {
        var n = this;
        return function (u) {
          return module510
            .getNativeModule(n)
            .httpsCallable(t, {
              data: u,
            })
            .then(_);
        };
      },
    },
    {
      key: 'useFunctionsEmulator',
      value: function (t) {
        return module510.getNativeModule(this).useFunctionsEmulator(t);
      },
    },
  ]);
  return h;
})(module511.default);

exports.default = h;
var O = {
  HttpsErrorCode: {
    OK: 'ok',
    CANCELLED: 'cancelled',
    UNKNOWN: 'unknown',
    INVALID_ARGUMENT: 'invalid-argument',
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    NOT_FOUND: 'not-found',
    ALREADY_EXISTS: 'already-exists',
    PERMISSION_DENIED: 'permission-denied',
    UNAUTHENTICATED: 'unauthenticated',
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    FAILED_PRECONDITION: 'failed-precondition',
    ABORTED: 'aborted',
    OUT_OF_RANGE: 'out-of-range',
    UNIMPLEMENTED: 'unimplemented',
    INTERNAL: 'internal',
    UNAVAILABLE: 'unavailable',
    DATA_LOSS: 'data-loss',
  },
};
exports.statics = O;
