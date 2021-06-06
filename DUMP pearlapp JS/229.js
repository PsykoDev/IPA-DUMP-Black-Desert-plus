var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function _() {
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
      y = _(),
      p = function () {
        var t,
          u = module13(v);

        if (y) {
          var n = module13(this).constructor;
          t = Reflect.construct(u, arguments, n);
        } else t = u.apply(this, arguments);

        return module11(this, t);
      };

    function k(u, n) {
      var o;
      module7(this, k);
      (o = p.call(this))._a = u;
      o._modulus = n;
      return o;
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
        key: '__getValue',
        value: function () {
          return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus;
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
            type: 'modulus',
            input: this._a.__getNativeTag(),
            modulus: this._modulus,
          };
        },
      },
    ]);
    return k;
  })();

class f {
  constructor(u, n) {
    var o;
    module7(this, k);
    (o = p.call(this))._a = u;
    o._modulus = n;
    return o;
  }

  __makeNative() {
    this._a.__makeNative();

    module49(module13(k.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus;
  }

  interpolate(t) {
    return new module218(this, t);
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
      type: 'modulus',
      input: this._a.__getNativeTag(),
      modulus: this._modulus,
    };
  }
}

module.exports = f;
