exports.createOrReusePropsNode = function (t, n, u) {
  if (t.style)
    t = module6.default({}, t, {
      style: module1071.createOrReuseStyleNode(t.style, u && u._props.style),
    });
  var l = R(t);
  if (u && module385.default(l, u._config)) return u;
  return new b(t, l, n);
};

var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6'),
  module17 = require('./17'),
  module1032 = require('./1032'),
  module1044 = require('./1044'),
  module1071 = require('./1071'),
  module210 = require('./210'),
  module385 = require('./385'),
  module1031 = require('./1031');

function k() {
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

function R(t) {
  var n = {};

  for (var u in t) {
    var l = t[u];
    if (l instanceof module1032.default && !(l instanceof module1044.default)) n[u] = l.__nodeID;
  }

  return n;
}

var b = (function (t) {
  module9.default(R, t);

  var module6 = R,
    module1071 = k(),
    w = function () {
      var t,
        n = module13.default(module6);

      if (module1071) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function R(t, u, l) {
    var o;
    module7.default(this, R);
    (o = w.call(
      this,
      {
        type: 'props',
        props: u,
      },
      Object.values(t).filter(function (t) {
        return !(t instanceof module1044.default);
      })
    ))._config = u;
    o._props = t;
    o._callback = l;

    o.__attach();

    return o;
  }

  module8.default(R, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedProps, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = {};

        for (var n in this._props) {
          var u = this._props[n];
          if (u instanceof module1032.default) t[n] = u.__getValue();
        }

        return t;
      },
    },
    {
      key: '__detach',
      value: function () {
        var t = module17.findNodeHandle(this._animatedView);
        module210.default(null != t, 'Unable to locate attached view in the native tree');

        this._disconnectAnimatedView(t);

        module49.default(module13.default(R.prototype), '__detach', this).call(this);
      },
    },
    {
      key: 'update',
      value: function () {
        this._callback();

        if (this._animatedView) module1031.val(this);
      },
    },
    {
      key: 'setNativeView',
      value: function (t) {
        if (this._animatedView !== t) {
          this._animatedView = t;
          var n = module17.findNodeHandle(this._animatedView);
          module210.default(null != n, 'Unable to locate attached view in the native tree');

          this._connectAnimatedView(n);
        }
      },
    },
  ]);
  return R;
})(module1032.default);
