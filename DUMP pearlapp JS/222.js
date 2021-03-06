var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function _(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = u(t)) || (n && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var c = 0;
      return function () {
        return c >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[c++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function u(t, n) {
  if (t) {
    if ('string' == typeof t) return h(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? h(t, n) : undefined;
  }
}

function h(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, c = new Array(n); o < n; o++) c[o] = t[o];

  return c;
}

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

var module219 = require('./219'),
  module220 = require('./220'),
  p = (function (u) {
    module9(b, module219);

    var h = b,
      p = v(),
      N = function () {
        var t,
          n = module13(h);

        if (p) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function b() {
      var n;
      module7(this, b);
      (n = N.call(this))._children = [];
      return n;
    }

    module8(b, [
      {
        key: '__makeNative',
        value: function () {
          if (!this.__isNative) {
            this.__isNative = true;

            for (var t, n = _(this._children); !(t = n()).done; ) {
              var c = t.value;

              c.__makeNative();

              module220.API.connectAnimatedNodes(this.__getNativeTag(), c.__getNativeTag());
            }
          }

          module49(module13(b.prototype), '__makeNative', this).call(this);
        },
      },
      {
        key: '__addChild',
        value: function (t) {
          if (0 === this._children.length) this.__attach();

          this._children.push(t);

          if (this.__isNative) {
            t.__makeNative();

            module220.API.connectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag());
          }
        },
      },
      {
        key: '__removeChild',
        value: function (t) {
          var n = this._children.indexOf(t);

          if (-1 !== n) {
            if (this.__isNative && t.__isNative) module220.API.disconnectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag());

            this._children.splice(n, 1);

            if (0 === this._children.length) this.__detach();
          } else console.warn("Trying to remove a child that doesn't exist");
        },
      },
      {
        key: '__getChildren',
        value: function () {
          return this._children;
        },
      },
      {
        key: '__callListeners',
        value: function (t) {
          if ((module49(module13(b.prototype), '__callListeners', this).call(this, t), !this.__isNative))
            for (var n, c = _(this._children); !(n = c()).done; ) {
              var s = n.value;
              if (s.__getValue) s.__callListeners(s.__getValue());
            }
        },
      },
    ]);
    return b;
  })();

class p {
  constructor() {
    var n;
    module7(this, b);
    (n = N.call(this))._children = [];
    return n;
  }

  __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;

      for (var t, n = _(this._children); !(t = n()).done; ) {
        var c = t.value;

        c.__makeNative();

        module220.API.connectAnimatedNodes(this.__getNativeTag(), c.__getNativeTag());
      }
    }

    module49(module13(b.prototype), '__makeNative', this).call(this);
  }

  __addChild(t) {
    if (0 === this._children.length) this.__attach();

    this._children.push(t);

    if (this.__isNative) {
      t.__makeNative();

      module220.API.connectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag());
    }
  }

  __removeChild(t) {
    var n = this._children.indexOf(t);

    if (-1 !== n) {
      if (this.__isNative && t.__isNative) module220.API.disconnectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag());

      this._children.splice(n, 1);

      if (0 === this._children.length) this.__detach();
    } else console.warn("Trying to remove a child that doesn't exist");
  }

  __getChildren() {
    return this._children;
  }

  __callListeners(t) {
    if ((module49(module13(b.prototype), '__callListeners', this).call(this, t), !this.__isNative))
      for (var n, c = _(this._children); !(n = c()).done; ) {
        var s = n.value;
        if (s.__getValue) s.__callListeners(s.__getValue());
      }
  }
}

module.exports = p;
