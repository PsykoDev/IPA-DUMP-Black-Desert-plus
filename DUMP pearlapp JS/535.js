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

var y = 'RNFirebaseCrashlytics';
exports.MODULE_NAME = y;
var v = 'crashlytics';
exports.NAMESPACE = v;

var h = (function (t) {
  module9.default(w, t);

  var module511 = w,
    h = p(),
    E = function () {
      var t,
        o = module13.default(module511);

      if (h) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function w(t) {
    module7.default(this, w);
    return E.call(this, t, {
      moduleName: y,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: v,
    });
  }

  module8.default(w, [
    {
      key: 'crash',
      value: function () {
        module510.getNativeModule(this).crash();
      },
    },
    {
      key: 'log',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).log(t);
      },
    },
    {
      key: 'recordError',
      value: function (t, o) {
        if ('number' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).recordError(t, o);
      },
    },
    {
      key: 'recordCustomError',
      value: function (t, o, n) {
        if (undefined === n) {
          if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
          module510.getNativeModule(this).recordCustomError(t, o, []);
        } else {
          if ('string' != typeof t || 'string' != typeof o || !Array.isArray(n)) throw new Error('Invalid parameter type!');
          var l = true;
          if (
            (n.forEach(function (t) {
              if (!Object.prototype.hasOwnProperty.call(t, 'fileName')) l = false;
            }),
            !l)
          )
            throw new Error('Missing required argument fileName!');
          module510.getNativeModule(this).recordCustomError(t, o, n);
        }
      },
    },
    {
      key: 'setBoolValue',
      value: function (t, o) {
        if ('string' != typeof t || 'boolean' != typeof o) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).setBoolValue(t, o);
      },
    },
    {
      key: 'setFloatValue',
      value: function (t, o) {
        if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).setFloatValue(t, o);
      },
    },
    {
      key: 'setIntValue',
      value: function (t, o) {
        if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).setIntValue(t, o);
      },
    },
    {
      key: 'setStringValue',
      value: function (t, o) {
        if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).setStringValue(t, o);
      },
    },
    {
      key: 'setUserIdentifier',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).setUserIdentifier(t);
      },
    },
    {
      key: 'setUserName',
      value: function (t) {
        if ('string' == typeof t) return module510.getNativeModule(this).setUserName(t);
        throw new Error('Invalid parameter type!');
      },
    },
    {
      key: 'setUserEmail',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module510.getNativeModule(this).setUserEmail(t);
      },
    },
    {
      key: 'enableCrashlyticsCollection',
      value: function () {
        module510.getNativeModule(this).enableCrashlyticsCollection();
      },
    },
  ]);
  return w;
})(module511.default);

exports.default = h;
exports.statics = {};
