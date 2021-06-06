var module7 = require('./7'),
  module52 = require('./52'),
  module54 = require('./54'),
  module18 = require('./18'),
  c = function () {
    return true;
  },
  b = (function () {
    function b(n) {
      module7(this, b);
      this._subscriber = n || new module54();
    }

    module8(b, [
      {
        key: 'addListener',
        value: function (t, n, u) {
          return this._subscriber.addSubscription(t, new module52(this, this._subscriber, n, u));
        },
      },
      {
        key: 'once',
        value: function (t, n, s) {
          var u = this;
          return this.addListener(t, function (...args) {
            u.removeCurrentListener();
            n.apply(s, args);
          });
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          this._subscriber.removeAllSubscriptions(t);
        },
      },
      {
        key: 'removeCurrentListener',
        value: function () {
          module18(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
          this.removeSubscription(this._currentSubscription);
        },
      },
      {
        key: 'removeSubscription',
        value: function (t) {
          module18(t.emitter === this, 'Subscription does not belong to this emitter.');

          this._subscriber.removeSubscription(t);
        },
      },
      {
        key: 'listeners',
        value: function (t) {
          var n = this._subscriber.getSubscriptionsForType(t);

          return n
            ? n.filter(c).map(function (t) {
                return t.listener;
              })
            : [];
        },
      },
      {
        key: 'emit',
        value: function (t) {
          var n = this._subscriber.getSubscriptionsForType(t);

          if (n) {
            for (var s = 0, u = n.length; s < u; s++) {
              var o = n[s];

              if (o && o.listener) {
                this._currentSubscription = o;
                o.listener.apply(o.context, Array.prototype.slice.call(arguments, 1));
              }
            }

            this._currentSubscription = null;
          }
        },
      },
      {
        key: 'removeListener',
        value: function (t, n) {
          var s = this._subscriber.getSubscriptionsForType(t);

          if (s)
            for (var u = 0, o = s.length; u < o; u++) {
              var c = s[u];
              if (c && c.listener === n) c.remove();
            }
        },
      },
    ]);
    return b;
  })();

class b {
  constructor(n) {
    module7(this, b);
    this._subscriber = n || new module54();
  }

  addListener(t, n, u) {
    return this._subscriber.addSubscription(t, new module52(this, this._subscriber, n, u));
  }

  once(t, n, s) {
    var u = this;
    return this.addListener(t, function (...args) {
      u.removeCurrentListener();
      n.apply(s, args);
    });
  }

  removeAllListeners(t) {
    this._subscriber.removeAllSubscriptions(t);
  }

  removeCurrentListener() {
    module18(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
    this.removeSubscription(this._currentSubscription);
  }

  removeSubscription(t) {
    module18(t.emitter === this, 'Subscription does not belong to this emitter.');

    this._subscriber.removeSubscription(t);
  }

  listeners(t) {
    var n = this._subscriber.getSubscriptionsForType(t);

    return n
      ? n.filter(c).map(function (t) {
          return t.listener;
        })
      : [];
  }

  emit(t) {
    var n = this._subscriber.getSubscriptionsForType(t);

    if (n) {
      for (var s = 0, u = n.length; s < u; s++) {
        var o = n[s];

        if (o && o.listener) {
          this._currentSubscription = o;
          o.listener.apply(o.context, Array.prototype.slice.call(arguments, 1));
        }
      }

      this._currentSubscription = null;
    }
  }

  removeListener(t, n) {
    var s = this._subscriber.getSubscriptionsForType(t);

    if (s)
      for (var u = 0, o = s.length; u < o; u++) {
        var c = s[u];
        if (c && c.listener === n) c.remove();
      }
  }
}

module.exports = b;
