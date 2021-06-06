var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function u() {
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

var module219 = require('./219'),
  module222 = require('./222'),
  module220 = require('./220'),
  l = (function (l) {
    module9(N, module222);

    var p = N,
      y = u(),
      k = function () {
        var t,
          n = module13(p);

        if (y) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function N(n) {
      var o;
      module7(this, N);
      (o = k.call(this))._transforms = n;
      return o;
    }

    module8(N, [
      {
        key: '__makeNative',
        value: function () {
          this._transforms.forEach(function (t) {
            for (var n in t) {
              var o = t[n];
              if (o instanceof module219) o.__makeNative();
            }
          });

          module49(module13(N.prototype), '__makeNative', this).call(this);
        },
      },
      {
        key: '__getValue',
        value: function () {
          return this._transforms.map(function (t) {
            var n = {};

            for (var o in t) {
              var f = t[o];
              n[o] = f instanceof module219 ? f.__getValue() : f;
            }

            return n;
          });
        },
      },
      {
        key: '__getAnimatedValue',
        value: function () {
          return this._transforms.map(function (t) {
            var n = {};

            for (var o in t) {
              var f = t[o];
              n[o] = f instanceof module219 ? f.__getAnimatedValue() : f;
            }

            return n;
          });
        },
      },
      {
        key: '__attach',
        value: function () {
          var t = this;

          this._transforms.forEach(function (n) {
            for (var o in n) {
              var f = n[o];
              if (f instanceof module219) f.__addChild(t);
            }
          });
        },
      },
      {
        key: '__detach',
        value: function () {
          var t = this;

          this._transforms.forEach(function (n) {
            for (var o in n) {
              var f = n[o];
              if (f instanceof module219) f.__removeChild(t);
            }
          });

          module49(module13(N.prototype), '__detach', this).call(this);
        },
      },
      {
        key: '__getNativeConfig',
        value: function () {
          var t = [];

          this._transforms.forEach(function (n) {
            for (var o in n) {
              var f = n[o];
              if (f instanceof module219)
                t.push({
                  type: 'animated',
                  property: o,
                  nodeTag: f.__getNativeTag(),
                });
              else
                t.push({
                  type: 'static',
                  property: o,
                  value: module220.transformDataType(f),
                });
            }
          });

          module220.validateTransform(t);
          return {
            type: 'transform',
            transforms: t,
          };
        },
      },
    ]);
    return N;
  })();

class l {
  constructor(n) {
    var o;
    module7(this, N);
    (o = k.call(this))._transforms = n;
    return o;
  }

  __makeNative() {
    this._transforms.forEach(function (t) {
      for (var n in t) {
        var o = t[n];
        if (o instanceof module219) o.__makeNative();
      }
    });

    module49(module13(N.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    return this._transforms.map(function (t) {
      var n = {};

      for (var o in t) {
        var f = t[o];
        n[o] = f instanceof module219 ? f.__getValue() : f;
      }

      return n;
    });
  }

  __getAnimatedValue() {
    return this._transforms.map(function (t) {
      var n = {};

      for (var o in t) {
        var f = t[o];
        n[o] = f instanceof module219 ? f.__getAnimatedValue() : f;
      }

      return n;
    });
  }

  __attach() {
    var t = this;

    this._transforms.forEach(function (n) {
      for (var o in n) {
        var f = n[o];
        if (f instanceof module219) f.__addChild(t);
      }
    });
  }

  __detach() {
    var t = this;

    this._transforms.forEach(function (n) {
      for (var o in n) {
        var f = n[o];
        if (f instanceof module219) f.__removeChild(t);
      }
    });

    module49(module13(N.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    var t = [];

    this._transforms.forEach(function (n) {
      for (var o in n) {
        var f = n[o];
        if (f instanceof module219)
          t.push({
            type: 'animated',
            property: o,
            nodeTag: f.__getNativeTag(),
          });
        else
          t.push({
            type: 'static',
            property: o,
            value: module220.transformDataType(f),
          });
      }
    });

    module220.validateTransform(t);
    return {
      type: 'transform',
      transforms: t,
    };
  }
}

module.exports = l;
