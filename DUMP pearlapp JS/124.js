var module7 = require('./7'),
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

require('./58');

var module51 = require('./51'),
  module48 = require('./48'),
  module18 = require('./18'),
  p = (function (p) {
    module9(M, module51);

    var y = M,
      _ = c(),
      L = function () {
        var t,
          n = module13(y);

        if (_) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function M(n) {
      var module49;
      module7(this, M);
      module49 = L.call(this, module48.sharedSubscriber);
      module18(n, 'Native module cannot be null.');
      module49._nativeModule = n;
      return module49;
    }

    module8(M, [
      {
        key: 'addListener',
        value: function (t, n, s) {
          if (null != this._nativeModule) this._nativeModule.addListener(t);
          return module49(module13(M.prototype), 'addListener', this).call(this, t, n, s);
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          module18(t, 'eventType argument is required.');
          var n = this.listeners(t).length;
          if (null != this._nativeModule) this._nativeModule.removeListeners(n);
          module49(module13(M.prototype), 'removeAllListeners', this).call(this, t);
        },
      },
      {
        key: 'removeSubscription',
        value: function (t) {
          if (null != this._nativeModule) this._nativeModule.removeListeners(1);
          module49(module13(M.prototype), 'removeSubscription', this).call(this, t);
        },
      },
    ]);
    return M;
  })();

class p {
  constructor(n) {
    var module49;
    module7(this, M);
    module49 = L.call(this, module48.sharedSubscriber);
    module18(n, 'Native module cannot be null.');
    module49._nativeModule = n;
    return module49;
  }

  addListener(t, n, s) {
    if (null != this._nativeModule) this._nativeModule.addListener(t);
    return module49(module13(M.prototype), 'addListener', this).call(this, t, n, s);
  }

  removeAllListeners(t) {
    module18(t, 'eventType argument is required.');
    var n = this.listeners(t).length;
    if (null != this._nativeModule) this._nativeModule.removeListeners(n);
    module49(module13(M.prototype), 'removeAllListeners', this).call(this, t);
  }

  removeSubscription(t) {
    if (null != this._nativeModule) this._nativeModule.removeListeners(1);
    module49(module13(M.prototype), 'removeSubscription', this).call(this, t);
  }
}

module.exports = p;
