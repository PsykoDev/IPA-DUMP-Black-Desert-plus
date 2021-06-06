var module6 = require('./6'),
  module7 = require('./7'),
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

require('./217');

var module219 = require('./219'),
  module220 = require('./220'),
  f = module220.generateNewAnimationId,
  p = module220.shouldUseNativeDriver,
  y = (function (v) {
    module9(C, module219);

    var y = C,
      k = l(),
      N = function () {
        var t,
          n = module13(y);

        if (k) {
          var _ = module13(this).constructor;
          t = Reflect.construct(n, arguments, _);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function C(t, _, o, u, s) {
      var c;
      module7(this, C);
      (c = N.call(this))._value = t;
      c._parent = _;
      c._animationClass = o;
      c._animationConfig = u;
      c._useNativeDriver = p(u);
      c._callback = s;

      c.__attach();

      return c;
    }

    module8(C, [
      {
        key: '__makeNative',
        value: function () {
          this.__isNative = true;

          this._parent.__makeNative();

          module49(module13(C.prototype), '__makeNative', this).call(this);

          this._value.__makeNative();
        },
      },
      {
        key: '__getValue',
        value: function () {
          return this._parent.__getValue();
        },
      },
      {
        key: '__attach',
        value: function () {
          this._parent.__addChild(this);

          if (this._useNativeDriver) this.__makeNative();
        },
      },
      {
        key: '__detach',
        value: function () {
          this._parent.__removeChild(this);

          module49(module13(C.prototype), '__detach', this).call(this);
        },
      },
      {
        key: 'update',
        value: function () {
          this._value.animate(
            new this._animationClass(
              module6({}, this._animationConfig, {
                toValue: this._animationConfig.toValue.__getValue(),
              })
            ),
            this._callback
          );
        },
      },
      {
        key: '__getNativeConfig',
        value: function () {
          var n = new this._animationClass(
            module6({}, this._animationConfig, {
              toValue: undefined,
            })
          ).__getNativeAnimationConfig();

          return {
            type: 'tracking',
            animationId: f(),
            animationConfig: n,
            toValue: this._parent.__getNativeTag(),
            value: this._value.__getNativeTag(),
          };
        },
      },
    ]);
    return C;
  })();

class y {
  constructor(t, _, o, u, s) {
    var c;
    module7(this, C);
    (c = N.call(this))._value = t;
    c._parent = _;
    c._animationClass = o;
    c._animationConfig = u;
    c._useNativeDriver = p(u);
    c._callback = s;

    c.__attach();

    return c;
  }

  __makeNative() {
    this.__isNative = true;

    this._parent.__makeNative();

    module49(module13(C.prototype), '__makeNative', this).call(this);

    this._value.__makeNative();
  }

  __getValue() {
    return this._parent.__getValue();
  }

  __attach() {
    this._parent.__addChild(this);

    if (this._useNativeDriver) this.__makeNative();
  }

  __detach() {
    this._parent.__removeChild(this);

    module49(module13(C.prototype), '__detach', this).call(this);
  }

  update() {
    this._value.animate(
      new this._animationClass(
        module6({}, this._animationConfig, {
          toValue: this._animationConfig.toValue.__getValue(),
        })
      ),
      this._callback
    );
  }

  __getNativeConfig() {
    var n = new this._animationClass(
      module6({}, this._animationConfig, {
        toValue: undefined,
      })
    ).__getNativeAnimationConfig();

    return {
      type: 'tracking',
      animationId: f(),
      animationConfig: n,
      toValue: this._parent.__getNativeTag(),
      value: this._value.__getNativeTag(),
    };
  }
}

module.exports = y;
