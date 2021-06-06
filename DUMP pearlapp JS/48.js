var module7 = require('./7'),
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

var module51 = require('./51'),
  module54 = require('./54'),
  h = (function (h) {
    module9(R, module51);

    var v = R,
      y = l(),
      b = function () {
        var t,
          n = module13(v);

        if (y) {
          var c = module13(this).constructor;
          t = Reflect.construct(n, arguments, c);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function R() {
      var n;
      module7(this, R);
      var c = new module54();
      (n = b.call(this, c)).sharedSubscriber = c;
      return n;
    }

    module8(R, [
      {
        key: 'addListener',
        value: function (t, n, o) {
          return module49(module13(R.prototype), 'addListener', this).call(this, t, n, o);
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          module49(module13(R.prototype), 'removeAllListeners', this).call(this, t);
        },
      },
      {
        key: 'removeSubscription',
        value: function (t) {
          if (t.emitter !== this) t.emitter.removeSubscription(t);
          else module49(module13(R.prototype), 'removeSubscription', this).call(this, t);
        },
      },
    ]);
    return R;
  })();

class h {
  constructor() {
    var n;
    module7(this, R);
    var c = new module54();
    (n = b.call(this, c)).sharedSubscriber = c;
    return n;
  }

  addListener(t, n, o) {
    return module49(module13(R.prototype), 'addListener', this).call(this, t, n, o);
  }

  removeAllListeners(t) {
    module49(module13(R.prototype), 'removeAllListeners', this).call(this, t);
  }

  removeSubscription(t) {
    if (t.emitter !== this) t.emitter.removeSubscription(t);
    else module49(module13(R.prototype), 'removeSubscription', this).call(this, t);
  }
}

module.exports = new h();
