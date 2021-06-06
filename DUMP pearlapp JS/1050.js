exports.createAnimatedCallFunc = function (t, n, u) {
  return new C(
    t,
    n.map(function (t) {
      return module1030.adapt(t);
    }),
    u
  );
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module1030 = require('./1030'),
  module1031 = require('./1031'),
  module210 = require('./210');

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

var C = (function (t) {
  module9.default(D, t);

  var n = D,
    module1030 = y(),
    C = function () {
      var t,
        u = module13.default(n);

      if (module1030) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, l);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function D(t, n, o) {
    var f;
    module7.default(this, D);
    module210.default(t instanceof module1032.default, "Reanimated: AnimatedCallFunc 'what' argument should be of type AnimatedNode but got " + t);
    module210.default(
      n.every(function (t) {
        return t instanceof module1032.default;
      }),
      "Reanimated: every AnimatedCallFunc 'args' argument should be of type AnimatedNode but got " + n
    );
    module210.default(
      o.every(function (t) {
        return t instanceof module1032.default;
      }),
      "Reanimated: every AnimatedCallFunc 'params' argument should be of type AnimatedNode but got " + o
    );
    (f = C.call(
      this,
      {
        type: 'callfunc',
        what: t,
        args: n,
        params: o,
      },
      module34.default(n)
    ))._what = t;
    f._args = n;
    f._params = o;
    return f;
  }

  module8.default(D, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedCallFunc, id: ' + this.__nodeID;
      },
    },
    {
      key: 'beginContext',
      value: function () {
        var t = this;
        this._previousCallID = module1032.getCallID();
        module1032.setCallID(module1032.getCallID() + '/' + this.__nodeID);

        this._params.forEach(function (n, u) {
          n.beginContext(t._args[u], t._previousCallID);
        });
      },
    },
    {
      key: 'endContext',
      value: function () {
        this._params.forEach(function (t, n) {
          t.endContext();
        });

        module1032.setCallID(this._previousCallID);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this.beginContext();
        var t = module1031.val(this._what);
        this.endContext();
        return t;
      },
    },
  ]);
  return D;
})(module1032.default);
