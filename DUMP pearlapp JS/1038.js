exports.createAnimatedParam = function () {
  return new k();
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module210 = require('./210'),
  module1032 = require('./1032'),
  module1037 = require('./1037'),
  module1031 = require('./1031');

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

var k = (function (t) {
  module9.default(C, t);

  var n = C,
    k = y(),
    _ = function () {
      var t,
        o = module13.default(n);

      if (k) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function C() {
    var t;
    module7.default(this, C);
    (t = _.call(
      this,
      {
        type: 'param',
      },
      []
    )).argsStack = [];

    t.__attach();

    return t;
  }

  module8.default(C, [
    {
      key: 'beginContext',
      value: function (t, n) {
        this._prevCallID = n;
        this.argsStack.push(t);
      },
    },
    {
      key: 'endContext',
      value: function () {
        this.argsStack.pop();
      },
    },
    {
      key: '_getTopNode',
      value: function () {
        if (0 === this.argsStack.length) throw new Error('param: Invocation failed because argsStack is empty');
        return this.argsStack[this.argsStack.length - 1];
      },
    },
    {
      key: 'setValue',
      value: function (t) {
        var n = this._getTopNode();

        if (!n.setValue) throw new Error('param: setValue(' + t + ") failed because the top element has no known method for updating it's current value.");
        var o = module1032.getCallID();
        module1032.setCallID(this._prevCallID);
        n.setValue(t);
        module1032.setCallID(o);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = module1032.getCallID();
        module1032.setCallID(this._prevCallID);

        var n = this._getTopNode(),
          o = module1031.val(n);

        module1032.setCallID(t);
        return o;
      },
    },
    {
      key: 'start',
      value: function () {
        var t = this._getTopNode();

        module210.default(t instanceof module1037.default || t instanceof C, 'param: top node should be of type AnimatedClock but got ' + t);
        t.start();
      },
    },
    {
      key: 'stop',
      value: function () {
        var t = this._getTopNode();

        module210.default(t instanceof module1037.default || t instanceof C, 'param: top node should be of type AnimatedClock but got ' + t);
        t.stop();
      },
    },
    {
      key: 'isRunning',
      value: function () {
        var t = this._getTopNode();

        if (t instanceof C) return t.isRunning();
        else {
          module210.default(t instanceof module1037.default, 'param: top node should be of type AnimatedClock but got ' + t);
          return t.isStarted();
        }
      },
    },
  ]);
  return C;
})(module1032.default);

exports.AnimatedParam = k;
