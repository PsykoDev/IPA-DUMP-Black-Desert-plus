var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module511 = require('./511'),
  module510 = require('./510');

function p() {
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

var v = 'iid';
exports.NAMESPACE = v;
var h = 'RNFirebaseInstanceId';
exports.MODULE_NAME = h;

var M = (function (t) {
  module9.default(N, t);

  var module511 = N,
    M = p(),
    y = function () {
      var t,
        n = module13.default(module511);

      if (M) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function N(t) {
    module7.default(this, N);
    return y.call(this, t, {
      hasCustomUrlSupport: false,
      moduleName: h,
      hasMultiAppSupport: false,
      namespace: v,
    });
  }

  module8.default(N, [
    {
      key: 'get',
      value: function () {
        return module510.getNativeModule(this).get();
      },
    },
    {
      key: 'delete',
      value: function () {
        return module510.getNativeModule(this).delete();
      },
    },
    {
      key: 'getToken',
      value: function (t, n) {
        return module510.getNativeModule(this).getToken(t || this.app.options.messagingSenderId, n || '*');
      },
    },
    {
      key: 'deleteToken',
      value: function (t, n) {
        return module510.getNativeModule(this).deleteToken(t || this.app.options.messagingSenderId, n || '*');
      },
    },
  ]);
  return N;
})(module511.default);

exports.default = M;
exports.statics = {};
