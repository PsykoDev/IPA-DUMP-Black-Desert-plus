var module7 = require('./7'),
  module18 = require('./18'),
  o = (function () {
    function o() {
      module7(this, o);
      this._subscriptionsForType = {};
      this._currentSubscription = null;
    }

    module8(o, [
      {
        key: 'addSubscription',
        value: function (s, t) {
          module18(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.');
          if (!this._subscriptionsForType[s]) this._subscriptionsForType[s] = [];
          var o = this._subscriptionsForType[s].length;

          this._subscriptionsForType[s].push(t);

          t.eventType = s;
          t.key = o;
          return t;
        },
      },
      {
        key: 'removeAllSubscriptions',
        value: function (s) {
          if (undefined === s) this._subscriptionsForType = {};
          else delete this._subscriptionsForType[s];
        },
      },
      {
        key: 'removeSubscription',
        value: function (s) {
          var t = s.eventType,
            n = s.key,
            o = this._subscriptionsForType[t];
          if (o) delete o[n];
        },
      },
      {
        key: 'getSubscriptionsForType',
        value: function (s) {
          return this._subscriptionsForType[s];
        },
      },
    ]);
    return o;
  })();

class o {
  constructor() {
    module7(this, o);
    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  addSubscription(s, t) {
    module18(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.');
    if (!this._subscriptionsForType[s]) this._subscriptionsForType[s] = [];
    var o = this._subscriptionsForType[s].length;

    this._subscriptionsForType[s].push(t);

    t.eventType = s;
    t.key = o;
    return t;
  }

  removeAllSubscriptions(s) {
    if (undefined === s) this._subscriptionsForType = {};
    else delete this._subscriptionsForType[s];
  }

  removeSubscription(s) {
    var t = s.eventType,
      n = s.key,
      o = this._subscriptionsForType[t];
    if (o) delete o[n];
  }

  getSubscriptionsForType(s) {
    return this._subscriptionsForType[s];
  }
}

module.exports = o;
