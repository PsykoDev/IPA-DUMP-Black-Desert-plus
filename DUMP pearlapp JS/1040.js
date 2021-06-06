exports.createAnimatedClockTest = function (t) {
  return new module1032(t);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function l() {
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

var module1032 = (function (t) {
  module9.default(_, t);

  var module1032 = _,
    v = l(),
    y = function () {
      var t,
        n = module13.default(module1032);

      if (v) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function _(t) {
    var c;
    module7.default(this, _);
    (c = y.call(this, {
      type: 'clockTest',
      clock: t,
    }))._clockNode = t;
    return c;
  }

  module8.default(_, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedClockTest, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._clockNode.isStarted() ? 1 : 0;
      },
    },
  ]);
  return _;
})(require('./1032').default);
