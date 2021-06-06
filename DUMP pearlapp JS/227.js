var module7 = require('./7'),
  module49 = require('./49'),
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

require('./219');

var module218 = require('./218'),
  module222 = require('./222'),
  f = (function (f) {
    module9(k, module222);

    var v = k,
      p = l(),
      y = function () {
        var t,
          n = module13(v);

        if (p) {
          var u = module13(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function k(n, u, _) {
      var c;
      module7(this, k);
      (c = y.call(this))._a = n;
      c._min = u;
      c._max = _;
      c._value = c._lastValue = c._a.__getValue();
      return c;
    }

    module8(k, [
      {
        key: '__makeNative',
        value: function () {
          this._a.__makeNative();

          module49(module13(k.prototype), '__makeNative', this).call(this);
        },
      },
      {
        key: 'interpolate',
        value: function (t) {
          return new module218(this, t);
        },
      },
      {
        key: '__getValue',
        value: function () {
          var t = this._a.__getValue(),
            n = t - this._lastValue;

          this._lastValue = t;
          this._value = ((this._value + n) ** this._min) ** this._max;
          return this._value;
        },
      },
      {
        key: '__attach',
        value: function () {
          this._a.__addChild(this);
        },
      },
      {
        key: '__detach',
        value: function () {
          this._a.__removeChild(this);

          module49(module13(k.prototype), '__detach', this).call(this);
        },
      },
      {
        key: '__getNativeConfig',
        value: function () {
          return {
            type: 'diffclamp',
            input: this._a.__getNativeTag(),
            min: this._min,
            max: this._max,
          };
        },
      },
    ]);
    return k;
  })();

class f {
  constructor(n, u, _) {
    var c;
    module7(this, k);
    (c = y.call(this))._a = n;
    c._min = u;
    c._max = _;
    c._value = c._lastValue = c._a.__getValue();
    return c;
  }

  __makeNative() {
    this._a.__makeNative();

    module49(module13(k.prototype), '__makeNative', this).call(this);
  }

  interpolate(t) {
    return new module218(this, t);
  }

  __getValue() {
    var t = this._a.__getValue(),
      n = t - this._lastValue;

    this._lastValue = t;
    this._value = ((this._value + n) ** this._min) ** this._max;
    return this._value;
  }

  __attach() {
    this._a.__addChild(this);
  }

  __detach() {
    this._a.__removeChild(this);

    module49(module13(k.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    return {
      type: 'diffclamp',
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max,
    };
  }
}

module.exports = f;
