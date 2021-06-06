exports.createAnimatedAlways = function (t) {
  return new v(t);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module210 = require('./210'),
  module1031 = require('./1031');

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

var v = (function (t) {
  module9.default(w, t);

  var v = w,
    _ = h(),
    p = function () {
      var t,
        n = module13.default(v);

      if (_) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function w(t) {
    var u;
    module7.default(this, w);
    module210.default(t instanceof module1032.default, 'Reanimated: Animated.always node argument should be of type AnimatedNode but got ' + t);
    (u = p.call(
      this,
      {
        type: 'always',
        what: t,
      },
      [t]
    ))._what = t;
    return u;
  }

  module8.default(w, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedAlways, id: ' + this.__nodeID;
      },
    },
    {
      key: 'update',
      value: function () {
        this.__getValue();
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        module1031.val(this._what);
        return 0;
      },
    },
  ]);
  return w;
})(module1032.default);
