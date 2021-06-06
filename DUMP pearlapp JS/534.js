var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module509 = require('./509'),
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

var V = 'RNFirebaseRemoteConfig';
exports.MODULE_NAME = V;
var p = 'config';
exports.NAMESPACE = p;

var M = (function (t) {
  module9.default(b, t);

  var module511 = b,
    M = h(),
    y = function () {
      var t,
        u = module13.default(module511);

      if (M) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function b(t) {
    var n;
    module7.default(this, b);
    (n = y.call(this, t, {
      moduleName: V,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: p,
    }))._developerModeEnabled = false;
    return n;
  }

  module8.default(b, [
    {
      key: '_nativeValueToJS',
      value: function (t) {
        return {
          source: t.source,
          val: function () {
            return null === t.boolValue || ('true' !== t.stringValue && 'false' !== t.stringValue && null !== t.stringValue)
              ? null === t.numberValue || undefined === t.numberValue || (null != t.stringValue && '' !== t.stringValue && t.numberValue.toString() !== t.stringValue)
                ? t.dataValue === t.stringValue || (null != t.stringValue && '' !== t.stringValue)
                  ? t.stringValue
                  : t.dataValue
                : t.numberValue
              : t.boolValue;
          },
        };
      },
    },
    {
      key: 'enableDeveloperMode',
      value: function () {
        if (!this._developerModeEnabled) {
          module509.getLogger(this).debug('Enabled developer mode');
          module510.getNativeModule(this).enableDeveloperMode();
          this._developerModeEnabled = true;
        }
      },
    },
    {
      key: 'fetch',
      value: function (t) {
        if (undefined !== t) {
          module509.getLogger(this).debug('Fetching remote config data with expiration ' + t.toString());
          return module510.getNativeModule(this).fetchWithExpirationDuration(t);
        } else {
          module509.getLogger(this).debug('Fetching remote config data');
          return module510.getNativeModule(this).fetch();
        }
      },
    },
    {
      key: 'activateFetched',
      value: function () {
        module509.getLogger(this).debug('Activating remote config');
        return module510.getNativeModule(this).activateFetched();
      },
    },
    {
      key: 'getValue',
      value: function (t) {
        return module510
          .getNativeModule(this)
          .getValue(t || '')
          .then(this._nativeValueToJS);
      },
    },
    {
      key: 'getValues',
      value: function (t) {
        var u = this;
        return module510
          .getNativeModule(this)
          .getValues(t || [])
          .then(function (n) {
            for (var l = {}, o = 0, s = t.length; o < s; o++) l[t[o]] = u._nativeValueToJS(n[o]);

            return l;
          });
      },
    },
    {
      key: 'getKeysByPrefix',
      value: function (t) {
        return module510.getNativeModule(this).getKeysByPrefix(t);
      },
    },
    {
      key: 'setDefaults',
      value: function (t) {
        module510.getNativeModule(this).setDefaults(t);
      },
    },
    {
      key: 'setDefaultsFromResource',
      value: function (t) {
        module510.getNativeModule(this).setDefaultsFromResource(t);
      },
    },
  ]);
  return b;
})(module511.default);

exports.default = M;
exports.statics = {};
