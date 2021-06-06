var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module592 = require('./592'),
  module593 = require('./593'),
  module511 = require('./511'),
  module510 = require('./510');

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

var v = 'RNFirebasePerformance';
exports.MODULE_NAME = v;
var w = 'perf';
exports.NAMESPACE = w;

var y = {
    CONNECT: true,
    DELETE: true,
    GET: true,
    HEAD: true,
    OPTIONS: true,
    PATCH: true,
    POST: true,
    PUT: true,
    TRACE: true,
  },
  M = (function (t) {
    module9.default(P, t);

    var module511 = P,
      M = h(),
      b = function () {
        var t,
          n = module13.default(module511);

        if (M) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function P(t) {
      module7.default(this, P);
      return b.call(this, t, {
        moduleName: v,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: w,
      });
    }

    module8.default(P, [
      {
        key: 'setPerformanceCollectionEnabled',
        value: function (t) {
          if ('boolean' != typeof t) throw new Error('firebase.perf().setPerformanceCollectionEnabled() requires a boolean value');
          return module510.getNativeModule(this).setPerformanceCollectionEnabled(t);
        },
      },
      {
        key: 'newTrace',
        value: function (t) {
          if ('string' != typeof t) throw new Error('firebase.perf().newTrace() requires a string value');
          return new module592.default(this, t);
        },
      },
      {
        key: 'newHttpMetric',
        value: function (t, n) {
          if ('string' != typeof t || 'string' != typeof n) throw new Error('firebase.perf().newHttpMetric() requires url and httpMethod string values');
          if (!y[n]) throw new Error('firebase.perf().newHttpMetric() httpMethod should be one of ' + Object.keys(y).join(', '));
          return new module593.default(this, t, n);
        },
      },
    ]);
    return P;
  })(module511.default);

exports.default = M;
exports.statics = {};
