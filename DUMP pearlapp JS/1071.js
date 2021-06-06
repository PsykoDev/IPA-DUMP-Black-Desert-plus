exports.createOrReuseStyleNode = function (t, n) {
  if ((t = module17.StyleSheet.flatten(t) || {}).transform)
    t = module6.default({}, t, {
      transform: module1072.createOrReuseTransformNode(t.transform, n && n._style.transform),
    });
  var u = p(t);
  if (n && module385.default(u, n._config)) return n;
  return new A(t, u);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6'),
  module17 = require('./17'),
  module1032 = require('./1032'),
  module1072 = require('./1072'),
  module385 = require('./385');

function h() {
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
  var n = {};

  for (var u in t) {
    var f = t[u];
    if (f instanceof module1032.default) n[u] = f.__nodeID;
  }

  return n;
}

var A = (function (t) {
  module9.default(_, t);

  var module6 = _,
    module17 = h(),
    v = function () {
      var t,
        n = module13.default(module6);

      if (module17) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function _(t, u) {
    var f;
    module7.default(this, _);
    (f = v.call(
      this,
      {
        type: 'style',
        style: u,
      },
      Object.values(t)
    ))._config = u;
    f._style = t;
    return f;
  }

  module8.default(_, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedStyle, id: ' + this.__nodeID;
      },
    },
    {
      key: '_walkStyleAndGetAnimatedValues',
      value: function (t) {
        var n = {};

        for (var u in t) {
          var f = t[u];
          if (f instanceof module1032.default) n[u] = f.__getValue();
          else if (f && !Array.isArray(f) && 'object' == typeof f) n[u] = this._walkStyleAndGetAnimatedValues(f);
        }

        return n;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._walkStyleAndGetAnimatedValues(this._style);
      },
    },
  ]);
  return _;
})(module1032.default);

exports.default = A;
