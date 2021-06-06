var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module570 = require('./570'),
  module505 = require('./505'),
  module509 = require('./509'),
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

var E = ['links_link_received'],
  D = 'RNFirebaseLinks';
exports.MODULE_NAME = D;
var S = 'links';
exports.NAMESPACE = S;

var M = (function (t) {
  module9.default(_, t);

  var module511 = _,
    M = p(),
    N = function () {
      var t,
        n = module13.default(module511);

      if (M) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function _(t) {
    var module8;
    module7.default(this, _);
    module8 = N.call(this, t, {
      events: E,
      moduleName: D,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: S,
    });
    module505.SharedEventEmitter.addListener('links_link_received', function (t) {
      module505.SharedEventEmitter.emit('onLink', t);
    });
    if ('ios' === module17.Platform.OS) module510.getNativeModule(module12.default(module8)).jsInitialised();
    return module8;
  }

  module8.default(_, [
    {
      key: 'createDynamicLink',
      value: function (t) {
        if (!(t instanceof module570.default)) return Promise.reject(new Error("Links:createDynamicLink expects a 'DynamicLink' but got type " + typeof t));

        try {
          return module510.getNativeModule(this).createDynamicLink(t.build());
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'createShortDynamicLink',
      value: function (t, n) {
        if (!(t instanceof module570.default)) return Promise.reject(new Error("Links:createShortDynamicLink expects a 'DynamicLink' but got type " + typeof t));

        try {
          return module510.getNativeModule(this).createShortDynamicLink(t.build(), n);
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'getInitialLink',
      value: function () {
        return module510.getNativeModule(this).getInitialLink();
      },
    },
    {
      key: 'onLink',
      value: function (t) {
        var n = this;
        module509.getLogger(this).info('Creating onLink listener');
        module505.SharedEventEmitter.addListener('onLink', t);
        return function () {
          module509.getLogger(n).info('Removing onLink listener');
          module505.SharedEventEmitter.removeListener('onLink', t);
        };
      },
    },
  ]);
  return _;
})(module511.default);

exports.default = M;
var N = {
  DynamicLink: module570.default,
};
exports.statics = N;
