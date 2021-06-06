var module6 = require('./6'),
  module7 = require('./7'),
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

var module216 = require('./216').AnimatedEvent,
  module219 = require('./219'),
  module232 = require('./232'),
  module220 = require('./220'),
  module90 = require('./90'),
  module18 = require('./18'),
  V = (function (V) {
    module9(b, module219);

    var k = b,
      w = u(),
      A = function () {
        var t,
          n = module13(k);

        if (w) {
          var s = module13(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function b(s, o) {
      var module9;
      module7(this, b);
      module9 = A.call(this);
      if (s.style)
        s = module6({}, s, {
          style: new module232(s.style),
        });
      module9._props = s;
      module9._callback = o;

      module9.__attach();

      return module9;
    }

    module8(b, [
      {
        key: '__getValue',
        value: function () {
          var t = {};

          for (var n in this._props) {
            var s = this._props[n];
            if (s instanceof module219) {
              if (!s.__isNative || s instanceof module232) t[n] = s.__getValue();
            } else t[n] = s instanceof module216 ? s.__getHandler() : s;
          }

          return t;
        },
      },
      {
        key: '__getAnimatedValue',
        value: function () {
          var t = {};

          for (var n in this._props) {
            var s = this._props[n];
            if (s instanceof module219) t[n] = s.__getAnimatedValue();
          }

          return t;
        },
      },
      {
        key: '__attach',
        value: function () {
          for (var t in this._props) {
            var n = this._props[t];
            if (n instanceof module219) n.__addChild(this);
          }
        },
      },
      {
        key: '__detach',
        value: function () {
          for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
            var n = this._props[t];
            if (n instanceof module219) n.__removeChild(this);
          }

          module49(module13(b.prototype), '__detach', this).call(this);
        },
      },
      {
        key: 'update',
        value: function () {
          this._callback();
        },
      },
      {
        key: '__makeNative',
        value: function () {
          if (!this.__isNative) {
            for (var t in ((this.__isNative = true), this._props)) {
              var n = this._props[t];
              if (n instanceof module219) n.__makeNative();
            }

            if (this._animatedView) this.__connectAnimatedView();
          }
        },
      },
      {
        key: 'setNativeView',
        value: function (t) {
          if (this._animatedView !== t) {
            this._animatedView = t;
            if (this.__isNative) this.__connectAnimatedView();
          }
        },
      },
      {
        key: '__connectAnimatedView',
        value: function () {
          module18(this.__isNative, 'Expected node to be marked as "native"');
          var t = module90.findNodeHandle(this._animatedView);
          module18(null != t, 'Unable to locate attached view in the native tree');
          module220.API.connectAnimatedNodeToView(this.__getNativeTag(), t);
        },
      },
      {
        key: '__disconnectAnimatedView',
        value: function () {
          module18(this.__isNative, 'Expected node to be marked as "native"');
          var t = module90.findNodeHandle(this._animatedView);
          module18(null != t, 'Unable to locate attached view in the native tree');
          module220.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), t);
        },
      },
      {
        key: '__getNativeConfig',
        value: function () {
          var t = {};

          for (var n in this._props) {
            var s = this._props[n];

            if (s instanceof module219) {
              s.__makeNative();

              t[n] = s.__getNativeTag();
            }
          }

          return {
            type: 'props',
            props: t,
          };
        },
      },
    ]);
    return b;
  })();

class V {
  constructor(s, o) {
    var module9;
    module7(this, b);
    module9 = A.call(this);
    if (s.style)
      s = module6({}, s, {
        style: new module232(s.style),
      });
    module9._props = s;
    module9._callback = o;

    module9.__attach();

    return module9;
  }

  __getValue() {
    var t = {};

    for (var n in this._props) {
      var s = this._props[n];
      if (s instanceof module219) {
        if (!s.__isNative || s instanceof module232) t[n] = s.__getValue();
      } else t[n] = s instanceof module216 ? s.__getHandler() : s;
    }

    return t;
  }

  __getAnimatedValue() {
    var t = {};

    for (var n in this._props) {
      var s = this._props[n];
      if (s instanceof module219) t[n] = s.__getAnimatedValue();
    }

    return t;
  }

  __attach() {
    for (var t in this._props) {
      var n = this._props[t];
      if (n instanceof module219) n.__addChild(this);
    }
  }

  __detach() {
    for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
      var n = this._props[t];
      if (n instanceof module219) n.__removeChild(this);
    }

    module49(module13(b.prototype), '__detach', this).call(this);
  }

  update() {
    this._callback();
  }

  __makeNative() {
    if (!this.__isNative) {
      for (var t in ((this.__isNative = true), this._props)) {
        var n = this._props[t];
        if (n instanceof module219) n.__makeNative();
      }

      if (this._animatedView) this.__connectAnimatedView();
    }
  }

  setNativeView(t) {
    if (this._animatedView !== t) {
      this._animatedView = t;
      if (this.__isNative) this.__connectAnimatedView();
    }
  }

  __connectAnimatedView() {
    module18(this.__isNative, 'Expected node to be marked as "native"');
    var t = module90.findNodeHandle(this._animatedView);
    module18(null != t, 'Unable to locate attached view in the native tree');
    module220.API.connectAnimatedNodeToView(this.__getNativeTag(), t);
  }

  __disconnectAnimatedView() {
    module18(this.__isNative, 'Expected node to be marked as "native"');
    var t = module90.findNodeHandle(this._animatedView);
    module18(null != t, 'Unable to locate attached view in the native tree');
    module220.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), t);
  }

  __getNativeConfig() {
    var t = {};

    for (var n in this._props) {
      var s = this._props[n];

      if (s instanceof module219) {
        s.__makeNative();

        t[n] = s.__getNativeTag();
      }
    }

    return {
      type: 'props',
      props: t,
    };
  }
}

module.exports = V;
