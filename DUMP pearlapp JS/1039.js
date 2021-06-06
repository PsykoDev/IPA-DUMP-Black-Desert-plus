exports.createAnimatedStopClock = function (t) {
  return new h(t);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module1037 = require('./1037'),
  module1038 = require('./1038'),
  module210 = require('./210');

function y() {
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

var h = (function (t) {
  module9.default(_, t);

  var module1032 = _,
    h = y(),
    k = function () {
      var t,
        n = module13.default(module1032);

      if (h) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function _(t) {
    var o;
    module7.default(this, _);
    module210.default(
      t instanceof module1037.default || t instanceof module1038.AnimatedParam,
      'Reanimated: Animated.stopClock argument should be of type AnimatedClock but got ' + t
    );
    (o = k.call(this, {
      type: 'clockStop',
      clock: t,
    }))._clockNode = t;
    return o;
  }

  module8.default(_, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedStopClock, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this._clockNode.stop();

        return 0;
      },
    },
  ]);
  return _;
})(module1032.default);
