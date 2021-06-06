exports.createAnimatedSet = function (t, n) {
  return new y(t, module1030.adapt(n));
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module210 = require('./210'),
  module1031 = require('./1031'),
  module1030 = require('./1030');

function _() {
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

var y = (function (t) {
  module9.default(b, t);

  var module1030 = b,
    y = _(),
    p = function () {
      var t,
        n = module13.default(module1030);

      if (y) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function b(t, u) {
    var module9;
    module7.default(this, b);
    module210.default(t instanceof module1032.default, 'Reanimated: Animated.set first argument should be of type AnimatedNode but got ' + t);
    module210.default(u instanceof module1032.default, 'Reanimated: Animated.set second argument should be of type AnimatedNode, String or Number but got ' + u);
    module9 = p.call(
      this,
      {
        type: 'set',
        what: t,
        value: u,
      },
      [u]
    );
    module210.default(!t._constant, 'Value to be set cannot be constant');
    module9._what = t;
    module9._value = u;
    return module9;
  }

  module8.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedSet, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = module1031.val(this._value);

        this._what.setValue(t);

        return t;
      },
    },
  ]);
  return b;
})(module1032.default);
