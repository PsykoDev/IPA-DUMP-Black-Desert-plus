var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function s() {
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
  module217 = require('./217'),
  module222 = require('./222'),
  v = (function (v) {
    module9(b, module222);

    var y = b,
      p = s(),
      k = function () {
        var t,
          n = module13(y);

        if (p) {
          var _ = module13(this).constructor;
          t = Reflect.construct(n, arguments, _);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function b(n, _) {
      var o;
      module7(this, b);
      (o = k.call(this))._a = 'number' == typeof n ? new module217(n) : n;
      o._b = 'number' == typeof _ ? new module217(_) : _;
      return o;
    }

    module8(b, [
      {
        key: '__makeNative',
        value: function () {
          this._a.__makeNative();

          this._b.__makeNative();

          module49(module13(b.prototype), '__makeNative', this).call(this);
        },
      },
      {
        key: '__getValue',
        value: function () {
          var t = this._a.__getValue(),
            n = this._b.__getValue();

          if (0 === n) console.error('Detected division by zero in AnimatedDivision');
          return t / n;
        },
      },
      {
        key: 'interpolate',
        value: function (t) {
          return new module218(this, t);
        },
      },
      {
        key: '__attach',
        value: function () {
          this._a.__addChild(this);

          this._b.__addChild(this);
        },
      },
      {
        key: '__detach',
        value: function () {
          this._a.__removeChild(this);

          this._b.__removeChild(this);

          module49(module13(b.prototype), '__detach', this).call(this);
        },
      },
      {
        key: '__getNativeConfig',
        value: function () {
          return {
            type: 'division',
            input: [this._a.__getNativeTag(), this._b.__getNativeTag()],
          };
        },
      },
    ]);
    return b;
  })();

class v {
  constructor(n, _) {
    var o;
    module7(this, b);
    (o = k.call(this))._a = 'number' == typeof n ? new module217(n) : n;
    o._b = 'number' == typeof _ ? new module217(_) : _;
    return o;
  }

  __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    module49(module13(b.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    var t = this._a.__getValue(),
      n = this._b.__getValue();

    if (0 === n) console.error('Detected division by zero in AnimatedDivision');
    return t / n;
  }

  interpolate(t) {
    return new module218(this, t);
  }

  __attach() {
    this._a.__addChild(this);

    this._b.__addChild(this);
  }

  __detach() {
    this._a.__removeChild(this);

    this._b.__removeChild(this);

    module49(module13(b.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    return {
      type: 'division',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()],
    };
  }
}

module.exports = v;
