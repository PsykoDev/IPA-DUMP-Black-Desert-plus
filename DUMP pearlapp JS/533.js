var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module511 = require('./511'),
  module510 = require('./510'),
  module507 = require('./507');

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

var h = /^[a-zA-Z0-9_]+$/,
  y = [
    'app_clear_data',
    'app_uninstall',
    'app_update',
    'error',
    'first_open',
    'in_app_purchase',
    'notification_dismiss',
    'notification_foreground',
    'notification_open',
    'notification_receive',
    'os_update',
    'session_start',
    'user_engagement',
  ],
  E = 'RNFirebaseAnalytics';
exports.MODULE_NAME = E;
var _ = 'analytics';
exports.NAMESPACE = _;

var M = (function (t) {
  module9.default(S, t);

  var module511 = S,
    M = p(),
    w = function () {
      var t,
        n = module13.default(module511);

      if (M) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function S(t) {
    module7.default(this, S);
    return w.call(this, t, {
      moduleName: E,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: _,
    });
  }

  module8.default(S, [
    {
      key: 'logEvent',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        if (!module507.isString(t)) throw new Error("analytics.logEvent(): First argument 'name' is required and must be a string value.");
        if (undefined !== n && !module507.isObject(n)) throw new Error("analytics.logEvent(): Second optional argument 'params' must be an object if provided.");
        if (y.includes(t)) throw new Error("analytics.logEvent(): event name '" + t + "' is a reserved event name and can not be used.");
        if (!h.test(t)) throw new Error("analytics.logEvent(): Event name '" + t + "' is invalid. Names should contain 1 to 32 alphanumeric characters or underscores.");
        if (n && Object.keys(n).length > 25) throw new Error('analytics.logEvent(): Maximum number of parameters exceeded (25).');
        module510.getNativeModule(this).logEvent(t, n);
      },
    },
    {
      key: 'setAnalyticsCollectionEnabled',
      value: function (t) {
        module510.getNativeModule(this).setAnalyticsCollectionEnabled(t);
      },
    },
    {
      key: 'setCurrentScreen',
      value: function (t, n) {
        module510.getNativeModule(this).setCurrentScreen(t, n);
      },
    },
    {
      key: 'setMinimumSessionDuration',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1e4;
        module510.getNativeModule(this).setMinimumSessionDuration(t);
      },
    },
    {
      key: 'setSessionTimeoutDuration',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 18e5;
        module510.getNativeModule(this).setSessionTimeoutDuration(t);
      },
    },
    {
      key: 'setUserId',
      value: function (t) {
        if (null !== t && !module507.isString(t)) throw new Error('analytics.setUserId(): The supplied userId must be a string value or null.');
        module510.getNativeModule(this).setUserId(t);
      },
    },
    {
      key: 'setUserProperty',
      value: function (t, n) {
        if (null !== n && !module507.isString(n)) throw new Error('analytics.setUserProperty(): The supplied property must be a string value or null.');
        module510.getNativeModule(this).setUserProperty(t, n);
      },
    },
    {
      key: 'setUserProperties',
      value: function (t) {
        var n = this;
        Object.keys(t).forEach(function (s) {
          var o = t[s];
          if (null !== o && !module507.isString(o)) throw new Error("analytics.setUserProperties(): The property with name '" + s + "' must be a string value or null.");
          module510.getNativeModule(n).setUserProperty(s, t[s]);
        });
      },
    },
  ]);
  return S;
})(module511.default);

exports.default = M;
exports.statics = {};
