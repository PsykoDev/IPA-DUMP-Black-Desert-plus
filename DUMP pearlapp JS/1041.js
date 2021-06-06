exports.createAnimatedDebug = function (t, n) {
  return n;
};

require('@babel/runtime/helpers/slicedToArray');

require('./1030');

require('./1042');

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module210 = require('./210'),
  module1031 = require('./1031'),
  module1032 = require('./1032');

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

!(function (t) {
  module9.default(b, t);

  var h = b,
    _ = y(),
    p = function () {
      var t,
        n = module13.default(h);

      if (_) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function b(t, u) {
    var o;
    module7.default(this, b);
    module210.default('string' == typeof t, 'Reanimated: Animated.debug node first argument should be of type string but got ' + t);
    module210.default(u instanceof module1032.default, 'Reanimated: Animated.debug node second argument should be of type AnimatedNode but got ' + u);
    (o = p.call(
      this,
      {
        type: 'debug',
        message: t,
        value: u,
      },
      [u]
    ))._message = t;
    o._value = u;
    return o;
  }

  module8.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedDebug, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = module1031.val(this._value);
        console.log(this._message, t);
        return t;
      },
    },
  ]);
})(module1032.default);
