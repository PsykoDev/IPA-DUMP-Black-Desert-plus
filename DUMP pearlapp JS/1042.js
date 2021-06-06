exports.createAnimatedCall = function (t, n) {
  return new k(t, n);
};

var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module210 = require('./210'),
  module1043 = require('./1043'),
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

var p = new Map();

function R(t) {
  var n = p.get(t.id);
  if (n) n._callback(t.args);
}

var k = (function (t) {
  module9.default(D, t);

  var k = D,
    A = y(),
    b = function () {
      var t,
        n = module13.default(k);

      if (A) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function D(t, l) {
    var u;
    module7.default(this, D);
    module210.default(
      t.every(function (t) {
        return t instanceof module1032.default;
      }),
      'Reanimated: Animated.call node args should be an array with elements of type AnimatedNode. One or more of them are not AnimatedNodes'
    );
    (u = b.call(
      this,
      {
        type: 'call',
        input: t,
      },
      t
    ))._callback = l;
    u._args = t;
    return u;
  }

  module8.default(D, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedCall, id: ' + this.__nodeID;
      },
    },
    {
      key: '__attach',
      value: function () {
        module49.default(module13.default(D.prototype), '__attach', this).call(this);
        p.set(this.__nodeID, this);
        if (1 === p.size) module1043.default.addListener('onReanimatedCall', R);
      },
    },
    {
      key: '__detach',
      value: function () {
        p.delete(this.__nodeID);
        if (0 === p.size) module1043.default.removeAllListeners('onReanimatedCall');
        module49.default(module13.default(D.prototype), '__detach', this).call(this);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this._callback(this._args.map(module1031.val));

        return 0;
      },
    },
  ]);
  return D;
})(module1032.default);
