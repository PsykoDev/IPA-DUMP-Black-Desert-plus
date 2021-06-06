exports.createOrReuseTransformNode = function (t, n) {
  var u = p(t);
  if (n && module385.default(u, n._config)) return n;
  return new h(t, u);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module385 = require('./385');

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

function p(t) {
  var n = [];
  t.forEach(function (t) {
    for (var u in t) {
      var f = t[u];
      if (f instanceof module1032.default)
        n.push({
          property: u,
          nodeID: f.__nodeID,
        });
      else
        n.push({
          property: u,
          value: f,
        });
    }
  });
  return n;
}

function _(t) {
  var n = [];
  t.forEach(function (t) {
    for (var u in t) {
      var f = t[u];
      if (f instanceof module1032.default) n.push(f);
    }
  });
  return n;
}

var h = (function (t) {
  module9.default(y, t);

  var module385 = y,
    p = v(),
    h = function () {
      var t,
        n = module13.default(module385);

      if (p) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function y(t, u) {
    var f;
    module7.default(this, y);
    (f = h.call(
      this,
      {
        type: 'transform',
        transform: u,
      },
      _(t)
    ))._config = u;
    f._transform = t;
    return f;
  }

  module8.default(y, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedTransform, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._transform.map(function (t) {
          var n = {};

          for (var u in t) {
            var f = t[u];
            if (f instanceof module1032.default) n[u] = f.__getValue();
          }

          return n;
        });
      },
    },
  ]);
  return y;
})(module1032.default);
