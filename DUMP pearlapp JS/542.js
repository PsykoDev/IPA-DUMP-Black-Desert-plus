require('./537');

var module6 = require('./6'),
  module7 = require('./7'),
  module17 = require('./17'),
  module505 = require('./505'),
  module539 = require('./539'),
  module507 = require('./507'),
  f = new ((function () {
    function t() {
      module7.default(this, t);
      this._tree = {};
      this._reverseLookup = {};

      if (module17.NativeModules.RNFirebaseDatabase) {
        this._nativeEmitter = new module17.NativeEventEmitter(module17.NativeModules.RNFirebaseDatabase);

        this._nativeEmitter.addListener('database_sync_event', this._handleSyncEvent.bind(this));
      }
    }

    module8.default(t, [
      {
        key: '_handleSyncEvent',
        value: function (t) {
          if (t.error) this._handleErrorEvent(t);
          else this._handleValueEvent(t);
        },
      },
      {
        key: '_handleValueEvent',
        value: function (t) {
          var n = t.registration,
            s = n.key,
            o = n.eventRegistrationKey,
            l = this.getRegistration(o);
          if (!l) return module17.NativeModules.RNFirebaseDatabase.off(s, o);
          var f = t.data,
            _ = f.snapshot,
            y = f.previousChildName;
          return module505.SharedEventEmitter.emit(o, new module539.default(l.ref, _), y);
        },
      },
      {
        key: '_handleErrorEvent',
        value: function (t) {
          var n = t.error,
            s = n.code,
            o = n.message,
            v = t.registration,
            h = v.eventRegistrationKey,
            f = v.registrationCancellationKey,
            _ = this.getRegistration(f);

          if (_) {
            var y = module507.nativeToJSError(s, o, {
              ref: _.ref,
            });
            module505.SharedEventEmitter.emit(f, y);
            this.removeRegistration(h);
          }
        },
      },
      {
        key: 'getRegistration',
        value: function (t) {
          return this._reverseLookup[t] ? module6.default({}, this._reverseLookup[t]) : null;
        },
      },
      {
        key: 'removeListenersForRegistrations',
        value: function (t) {
          if (module507.isString(t)) {
            this.removeRegistration(t);
            module505.SharedEventEmitter.removeAllListeners(t);
            return 1;
          }

          if (!Array.isArray(t)) return 0;

          for (var n = 0, s = t.length; n < s; n++) {
            this.removeRegistration(t[n]);
            module505.SharedEventEmitter.removeAllListeners(t[n]);
          }

          return t.length;
        },
      },
      {
        key: 'removeListenerRegistrations',
        value: function (t, n) {
          if (!Array.isArray(n)) return [];

          for (var s = [], o = 0, v = n.length; o < v; o++) {
            var h = n[o],
              l = module505.SharedEventEmitter._subscriber.getSubscriptionsForType(h);

            if (l)
              for (var f = 0, _ = l.length; f < _; f++) {
                var y = l[f];

                if (y && y.listener === t) {
                  y.remove();
                  s.push(h);
                  this.removeRegistration(h);
                }
              }
          }

          return s;
        },
      },
      {
        key: 'getRegistrationsByPath',
        value: function (t) {
          for (var n = [], s = Object.keys(this._tree[t] || {}), o = 0, v = s.length; o < v; o++) Array.prototype.push.apply(n, Object.keys(this._tree[t][s[o]]));

          return n;
        },
      },
      {
        key: 'getRegistrationsByPathEvent',
        value: function (t, n) {
          return this._tree[t] && this._tree[t][n] ? Object.keys(this._tree[t][n]) : [];
        },
      },
      {
        key: 'getOneByPathEventListener',
        value: function (t, n, s) {
          if (!this._tree[t]) return null;
          if (!this._tree[t][n]) return null;

          for (var o = Object.entries(this._tree[t][n]), v = 0; v < o.length; v++) {
            var u = o[v];
            if (u[1] === s) return u[0];
          }

          return null;
        },
      },
      {
        key: 'addRegistration',
        value: function (t) {
          var n = t.eventRegistrationKey,
            s = t.eventType,
            o = t.listener,
            v = t.once,
            h = t.path;
          if (!this._tree[h]) this._tree[h] = {};
          if (!this._tree[h][s]) this._tree[h][s] = {};
          this._tree[h][s][n] = o;
          this._reverseLookup[n] = t;
          if (v) module505.SharedEventEmitter.once(n, this._onOnceRemoveRegistration(n, o));
          else module505.SharedEventEmitter.addListener(n, o);
          return n;
        },
      },
      {
        key: 'removeRegistration',
        value: function (t) {
          if (!this._reverseLookup[t]) return false;
          var n = this._reverseLookup[t],
            s = n.path,
            o = n.eventType,
            u = n.once;

          if (!this._tree[s]) {
            delete this._reverseLookup[t];
            return false;
          }

          if (!this._tree[s][o]) {
            delete this._reverseLookup[t];
            return false;
          }

          var h = this._reverseLookup[t];
          if (h && !u) module17.NativeModules.RNFirebaseDatabase.off(h.key, t);
          delete this._tree[s][o][t];
          delete this._reverseLookup[t];
          return !!h;
        },
      },
      {
        key: '_onOnceRemoveRegistration',
        value: function (t, n) {
          var s = this;
          return function () {
            s.removeRegistration(t);
            n.apply(undefined, arguments);
          };
        },
      },
    ]);
    return t;
  })())();

exports.default = f;
