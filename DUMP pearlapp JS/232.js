var module6 = require('./6'),
  module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function c() {
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
  module233 = require('./233'),
  module222 = require('./222'),
  module220 = require('./220'),
  module87 = require('./87'),
  A = (function (A) {
    module9(w, module222);

    var p = w,
      V = c(),
      S = function () {
        var t,
          n = module13(p);

        if (V) {
          var s = module13(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function w(s) {
      var module49;
      module7(this, w);
      module49 = S.call(this);
      if ((s = module87(s) || {}).transform)
        s = module6({}, s, {
          transform: new module233(s.transform),
        });
      module49._style = s;
      return module49;
    }

    module8(w, [
      {
        key: '_walkStyleAndGetValues',
        value: function (t) {
          var n = {};

          for (var s in t) {
            var l = t[s];
            if (l instanceof module219) {
              if (!l.__isNative) n[s] = l.__getValue();
            } else if (l && !Array.isArray(l) && 'object' == typeof l) n[s] = this._walkStyleAndGetValues(l);
            else n[s] = l;
          }

          return n;
        },
      },
      {
        key: '__getValue',
        value: function () {
          return this._walkStyleAndGetValues(this._style);
        },
      },
      {
        key: '_walkStyleAndGetAnimatedValues',
        value: function (t) {
          var n = {};

          for (var s in t) {
            var l = t[s];
            if (l instanceof module219) n[s] = l.__getAnimatedValue();
            else if (l && !Array.isArray(l) && 'object' == typeof l) n[s] = this._walkStyleAndGetAnimatedValues(l);
          }

          return n;
        },
      },
      {
        key: '__getAnimatedValue',
        value: function () {
          return this._walkStyleAndGetAnimatedValues(this._style);
        },
      },
      {
        key: '__attach',
        value: function () {
          for (var t in this._style) {
            var n = this._style[t];
            if (n instanceof module219) n.__addChild(this);
          }
        },
      },
      {
        key: '__detach',
        value: function () {
          for (var t in this._style) {
            var n = this._style[t];
            if (n instanceof module219) n.__removeChild(this);
          }

          module49(module13(w.prototype), '__detach', this).call(this);
        },
      },
      {
        key: '__makeNative',
        value: function () {
          for (var t in this._style) {
            var n = this._style[t];
            if (n instanceof module219) n.__makeNative();
          }

          module49(module13(w.prototype), '__makeNative', this).call(this);
        },
      },
      {
        key: '__getNativeConfig',
        value: function () {
          var t = {};

          for (var n in this._style)
            if (this._style[n] instanceof module219) {
              var s = this._style[n];

              s.__makeNative();

              t[n] = s.__getNativeTag();
            }

          module220.validateStyles(t);
          return {
            type: 'style',
            style: t,
          };
        },
      },
    ]);
    return w;
  })();

class A {
  constructor(s) {
    var module49;
    module7(this, w);
    module49 = S.call(this);
    if ((s = module87(s) || {}).transform)
      s = module6({}, s, {
        transform: new module233(s.transform),
      });
    module49._style = s;
    return module49;
  }

  _walkStyleAndGetValues(t) {
    var n = {};

    for (var s in t) {
      var l = t[s];
      if (l instanceof module219) {
        if (!l.__isNative) n[s] = l.__getValue();
      } else if (l && !Array.isArray(l) && 'object' == typeof l) n[s] = this._walkStyleAndGetValues(l);
      else n[s] = l;
    }

    return n;
  }

  __getValue() {
    return this._walkStyleAndGetValues(this._style);
  }

  _walkStyleAndGetAnimatedValues(t) {
    var n = {};

    for (var s in t) {
      var l = t[s];
      if (l instanceof module219) n[s] = l.__getAnimatedValue();
      else if (l && !Array.isArray(l) && 'object' == typeof l) n[s] = this._walkStyleAndGetAnimatedValues(l);
    }

    return n;
  }

  __getAnimatedValue() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  }

  __attach() {
    for (var t in this._style) {
      var n = this._style[t];
      if (n instanceof module219) n.__addChild(this);
    }
  }

  __detach() {
    for (var t in this._style) {
      var n = this._style[t];
      if (n instanceof module219) n.__removeChild(this);
    }

    module49(module13(w.prototype), '__detach', this).call(this);
  }

  __makeNative() {
    for (var t in this._style) {
      var n = this._style[t];
      if (n instanceof module219) n.__makeNative();
    }

    module49(module13(w.prototype), '__makeNative', this).call(this);
  }

  __getNativeConfig() {
    var t = {};

    for (var n in this._style)
      if (this._style[n] instanceof module219) {
        var s = this._style[n];

        s.__makeNative();

        t[n] = s.__getNativeTag();
      }

    module220.validateStyles(t);
    return {
      type: 'style',
      style: t,
    };
  }
}

module.exports = A;
