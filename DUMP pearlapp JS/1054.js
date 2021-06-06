exports.createAnimatedConcat = function (...args) {
  return new h(args.map(module1030.adapt));
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module210 = require('./210'),
  module1030 = require('./1030'),
  module1032 = require('./1032'),
  module1031 = require('./1031');

function v() {
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
  module9.default(R, t);

  var module1030 = R,
    h = v(),
    _ = function () {
      var t,
        n = module13.default(module1030);

      if (h) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function R(t) {
    var u;
    module7.default(this, R);
    module210.default(
      t.every(function (t) {
        return t instanceof module1032.default || 'number' == typeof t || 'string' == typeof t;
      }),
      'Reanimated: Animated.concat node arguments should be of type AnimatedNode or String or Number. One or more of them are not of that type. Node: ' + t
    );
    (u = _.call(
      this,
      {
        type: 'concat',
        input: t,
      },
      t
    ))._input = t;
    return u;
  }

  module8.default(R, [
    {
      key: '__onEvaluate',
      value: function () {
        return this._input.reduce(function (t, n) {
          return t + module1031.val(n);
        }, '');
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'AnimatedConcat, id: ' + this.__nodeID;
      },
    },
  ]);
  return R;
})(module1032.default);
