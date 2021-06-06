exports.createAnimatedStartClock = function (t) {
  return new k(t);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module1037 = require('./1037'),
  module1038 = require('./1038'),
  module210 = require('./210');

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

var k = (function (t) {
  module9.default(p, t);

  var module1032 = p,
    k = h(),
    _ = function () {
      var t,
        n = module13.default(module1032);

      if (k) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function p(t) {
    var c;
    module7.default(this, p);
    module210.default(
      t instanceof module1037.default || t instanceof module1038.AnimatedParam,
      'Reanimated: Animated.startClock argument should be of type AnimatedClock but got ' + t
    );
    (c = _.call(this, {
      type: 'clockStart',
      clock: t,
    }))._clockNode = t;
    return c;
  }

  module8.default(p, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedStartClock, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this._clockNode.start();

        return 0;
      },
    },
  ]);
  return p;
})(module1032.default);
