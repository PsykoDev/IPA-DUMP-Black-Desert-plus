exports.__esModule = true;

var module410 = require('./410'),
  t = {
    notify: function () {},
  };

var s = (function () {
  function s(n, s) {
    this.store = n;
    this.parentSub = s;
    this.unsubscribe = null;
    this.listeners = t;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var u = s.prototype;

  u.addNestedSub = function (n) {
    this.trySubscribe();
    return this.listeners.subscribe(n);
  };

  u.notifyNestedSubs = function () {
    this.listeners.notify();
  };

  u.handleChangeWrapper = function () {
    if (this.onStateChange) this.onStateChange();
  };

  u.isSubscribed = function () {
    return Boolean(this.unsubscribe);
  };

  u.trySubscribe = function () {
    var t, s, u;

    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners =
        ((t = module410.getBatch()),
        (s = null),
        (u = null),
        {
          clear: function () {
            s = null;
            u = null;
          },
          notify: function () {
            t(function () {
              for (var n = s; n; ) {
                n.callback();
                n = n.next;
              }
            });
          },
          get: function () {
            for (var n = [], t = s; t; ) {
              n.push(t);
              t = t.next;
            }

            return n;
          },
          subscribe: function (n) {
            var t = true,
              h = (u = {
                callback: n,
                next: null,
                prev: u,
              });
            if (h.prev) h.prev.next = h;
            else s = h;
            return function () {
              if (t && null !== s) {
                t = false;
                if (h.next) h.next.prev = h.prev;
                else u = h.prev;
                if (h.prev) h.prev.next = h.next;
                else s = h.next;
              }
            };
          },
        });
    }
  };

  u.tryUnsubscribe = function () {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = t;
    }
  };

  return s;
})();

exports.default = s;
