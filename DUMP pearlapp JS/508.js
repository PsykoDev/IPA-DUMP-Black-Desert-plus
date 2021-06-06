var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module505 = require('./505'),
  module509 = require('./509'),
  module510 = require('./510'),
  module511 = require('./511'),
  module512 = require('./512'),
  module514 = require('./514'),
  module513 = require('./513'),
  module515 = require('./515'),
  module516 = require('./516'),
  module519 = require('./519'),
  module518 = require('./518');

function R() {
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

var S = ['interstitial_event', 'rewarded_video_event'],
  z = 'RNFirebaseAdMob';
exports.MODULE_NAME = z;
var L = 'admob';
exports.NAMESPACE = L;

var k = (function (t) {
  module9.default(b, t);

  var n = b,
    module511 = R(),
    M = function () {
      var t,
        u = module13.default(n);

      if (module511) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, l);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function b(t) {
    var n;
    module7.default(this, b);
    (n = M.call(this, t, {
      events: S,
      moduleName: z,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: L,
    }))._initialized = false;
    n._appId = null;
    module505.SharedEventEmitter.addListener('interstitial_event', n._onInterstitialEvent.bind(module12.default(n)));
    module505.SharedEventEmitter.addListener('rewarded_video_event', n._onRewardedVideoEvent.bind(module12.default(n)));
    return n;
  }

  module8.default(b, [
    {
      key: '_onInterstitialEvent',
      value: function (t) {
        var n = 'interstitial_' + t.adUnit;
        module505.SharedEventEmitter.listeners(n).length;
        module505.SharedEventEmitter.emit(n, t);
      },
    },
    {
      key: '_onRewardedVideoEvent',
      value: function (t) {
        var n = 'rewarded_video_' + t.adUnit;
        module505.SharedEventEmitter.listeners(n).length;
        module505.SharedEventEmitter.emit(n, t);
      },
    },
    {
      key: 'initialize',
      value: function (t) {
        if (this._initialized) module509.getLogger(this).warn('AdMob has already been initialized!');
        else {
          this._initialized = true;
          this._appId = t;
          module510.getNativeModule(this).initialize(t);
        }
      },
    },
    {
      key: 'openDebugMenu',
      value: function () {
        if (this._initialized) {
          module509.getLogger(this).info('Opening debug menu');
          module510.getNativeModule(this).openDebugMenu(this._appId);
        } else module509.getLogger(this).warn('AdMob needs to be initialized before opening the dev menu!');
      },
    },
    {
      key: 'interstitial',
      value: function (t) {
        return new module512.default(this, t);
      },
    },
    {
      key: 'rewarded',
      value: function (t) {
        return new module514.default(this, t);
      },
    },
  ]);
  return b;
})(module511.default);

exports.default = k;
var D = {
  Banner: module516.default,
  NativeExpress: module519.default,
  AdRequest: module513.default,
  VideoOptions: module515.default,
  EventTypes: module518.default,
  RewardedVideoEventTypes: module518.RewardedVideoEventTypes,
  NativeExpressEventTypes: module518.NativeExpressEventTypes,
};
exports.statics = D;
