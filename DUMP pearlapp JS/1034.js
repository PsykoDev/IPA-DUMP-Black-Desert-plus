var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module1031 = require('./1031'),
  module1033 = require('./1033');

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

function p(t) {
  return null === t || undefined === t || 'string' == typeof t ? t : Number(t);
}

var y = new Map();

function k() {
  if (0 === y.size)
    [0, -1, 1, -2, 2].forEach(function (t) {
      return y.set(t, new V(t, true));
    });
}

var V = (function (t) {
  module9.default(R, t);

  var module1032 = R,
    V = v(),
    A = function () {
      var t,
        n = module13.default(module1032);

      if (V) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function R(t) {
    var u,
      o = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    module7.default(this, R);
    (u = A.call(this, {
      type: 'value',
      value: p(t),
    }))._startingValue = u._value = t;
    u._animation = null;
    u._constant = o;
    return u;
  }

  module8.default(R, null, [
    {
      key: 'valueForConstant',
      value: function (t) {
        k();
        return y.get(t) || new R(t, true);
      },
    },
  ]);
  module8.default(R, [
    {
      key: '__detach',
      value: function () {
        var t = this;
        if (!this._constant)
          module1033.default.getValue
            ? module1033.default.getValue(this.__nodeID, function (n) {
                return (t.__nodeConfig.value = n);
              })
            : (this.__nodeConfig.value = this.__getValue());

        this.__detachAnimation(this._animation);

        module49.default(module13.default(R.prototype), '__detach', this).call(this);
      },
    },
    {
      key: '__detachAnimation',
      value: function (t) {
        if (t) t.__detach();
        if (this._animation === t) this._animation = null;
      },
    },
    {
      key: '__attachAnimation',
      value: function (t) {
        this.__detachAnimation(this._animation);

        this._animation = t;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        if (this.__inputNodes && this.__inputNodes.length) this.__inputNodes.forEach(module1031.val);
        return this._value;
      },
    },
    {
      key: 'setValue',
      value: function (t) {
        this.__detachAnimation(this._animation);

        this._updateValue(t);
      },
    },
    {
      key: '_updateValue',
      value: function (t) {
        this._value = t;

        this.__forceUpdateCache(t);
      },
    },
  ]);
  return R;
})(module1032.default);

exports.default = V;
