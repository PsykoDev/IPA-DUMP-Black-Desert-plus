exports.createAnimatedCond = function (t, n, o) {
  return new p(module1030.adapt(t), module1030.adapt(n), undefined === o ? undefined : module1030.adapt(o));
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module210 = require('./210'),
  module1030 = require('./1030'),
  module1031 = require('./1031'),
  module1032 = require('./1032');

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

var p = (function (t) {
  module9.default(k, t);

  var module1030 = k,
    p = _(),
    y = function () {
      var t,
        n = module13.default(module1030);

      if (p) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function k(t, o, u) {
    var c;
    module7.default(this, k);
    module210.default(t instanceof module1032.default, 'Reanimated: Animated.cond node first argument should be of type AnimatedNode but got ' + t);
    module210.default(o instanceof module1032.default, 'Reanimated: Animated.cond node second argument should be of type AnimatedNode but got ' + o);
    module210.default(
      u instanceof module1032.default || undefined === u,
      'Reanimated: Animated.cond node third argument should be of type AnimatedNode or should be undefined but got ' + u
    );
    (c = y.call(
      this,
      {
        type: 'cond',
        cond: t,
        ifBlock: o,
        elseBlock: u,
      },
      [t, o, u]
    ))._condition = t;
    c._ifBlock = o;
    c._elseBlock = u;
    return c;
  }

  module8.default(k, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedCond, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return module1031.val(this._condition) ? module1031.val(this._ifBlock) : undefined !== this._elseBlock ? module1031.val(this._elseBlock) : undefined;
      },
    },
  ]);
  return k;
})(module1032.default);
