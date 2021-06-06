exports.createAnimatedBlock = function (t) {
  return k(t);
};

exports.adapt = k;

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module210 = require('./210'),
  module1031 = require('./1031'),
  module1032 = require('./1032'),
  module1034 = require('./1034');

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

var h = (function (t) {
  module9.default(k, t);

  var module1034 = k,
    h = _(),
    p = function () {
      var t,
        n = module13.default(module1034);

      if (h) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function k(t) {
    var u;
    module7.default(this, k);
    module210.default(
      t.every(function (t) {
        return t instanceof module1032.default;
      }),
      'Reanimated: Animated.block node argument should be an array with elements of type AnimatedNode. One or more of them are not AnimatedNodes'
    );
    (u = p.call(
      this,
      {
        type: 'block',
        block: t,
      },
      t
    ))._array = t;
    return u;
  }

  module8.default(k, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedBlock, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t;

        this._array.forEach(function (n) {
          t = module1031.val(n);
        });

        return t;
      },
    },
  ]);
  return k;
})(module1032.default);

function p(t) {
  if ('object' == typeof t && t.__isProxy) {
    if (!t.__val) t.__val = new module1034.default(0);
    return t.__val;
  } else return t instanceof module1032.default ? t : module1034.default.valueForConstant(t);
}

function k(t) {
  return Array.isArray(t)
    ? new h(
        t.map(function (t) {
          return k(t);
        })
      )
    : p(t);
}
