var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module506 = require('./506'),
  module507 = require('./507'),
  module511 = require('./511'),
  module598 = require('./598');

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

var P = module17.NativeModules.RNFirebase,
  O = 'RNFirebaseUtils';
exports.MODULE_NAME = O;
var A = 'utils';
exports.NAMESPACE = A;

var b = (function (t) {
  module9.default(h, t);

  var module17 = h,
    module511 = p(),
    b = function () {
      var t,
        l = module13.default(module17);

      if (module511) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, s);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function h(t) {
    module7.default(this, h);
    return b.call(this, t, {
      moduleName: O,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: A,
    });
  }

  module8.default(h, [
    {
      key: 'checkPlayServicesAvailability',
      value: function () {
        if (!module507.isIOS) {
          var t = this.playServicesAvailability.status;
          if (!this.playServicesAvailability.isAvailable)
            if (module506.default.OPTIONS.promptOnMissingPlayServices && this.playServicesAvailability.isUserResolvableError) this.promptForPlayServices();
            else {
              var l = module506.default.STRINGS.ERROR_PLAY_SERVICES(t);

              if (module506.default.OPTIONS.errorOnMissingPlayServices) {
                if (2 !== t) throw new Error(l);
                console.warn(l);
              } else console.warn(l);
            }
        }
      },
    },
    {
      key: 'getPlayServicesStatus',
      value: function () {
        return module507.isIOS ? Promise.resolve(null) : P.getPlayServicesStatus();
      },
    },
    {
      key: 'promptForPlayServices',
      value: function () {
        return module507.isIOS ? null : P.promptForPlayServices();
      },
    },
    {
      key: 'resolutionForPlayServices',
      value: function () {
        return module507.isIOS ? null : P.resolutionForPlayServices();
      },
    },
    {
      key: 'makePlayServicesAvailable',
      value: function () {
        return module507.isIOS ? null : P.makePlayServicesAvailable();
      },
    },
    {
      key: 'database',
      get: function () {
        return module598.default;
      },
    },
    {
      key: 'logLevel',
      set: function (t) {
        module506.default.OPTIONS.logLevel = t;
      },
    },
    {
      key: 'playServicesAvailability',
      get: function () {
        return (
          P.playServicesAvailability || {
            isAvailable: true,
            status: 0,
          }
        );
      },
    },
    {
      key: 'errorOnMissingPlayServices',
      set: function (t) {
        module506.default.OPTIONS.errorOnMissingPlayServices = t;
      },
    },
    {
      key: 'promptOnMissingPlayServices',
      set: function (t) {
        module506.default.OPTIONS.promptOnMissingPlayServices = t;
      },
    },
  ]);
  return h;
})(module511.default);

exports.default = b;
exports.statics = {};
