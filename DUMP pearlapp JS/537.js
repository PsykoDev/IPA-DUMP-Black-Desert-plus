var module6 = require('./6'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module538 = require('./538'),
  module539 = require('./539'),
  module540 = require('./540'),
  module509 = require('./509'),
  module510 = require('./510'),
  module541 = require('./541'),
  module507 = require('./507'),
  module542 = require('./542');

function R() {
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

var F = 0,
  O = {
    value: 'value',
    child_added: 'child_added',
    child_removed: 'child_removed',
    child_changed: 'child_changed',
    child_moved: 'child_moved',
  },
  q = (function (t) {
    module9.default(P, t);

    var module541 = P,
      q = R(),
      B = function () {
        var t,
          n = module13.default(module541);

        if (q) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function P(t, n, u) {
      var l;
      module7.default(this, P);
      (l = B.call(this, n))._refListeners = {};
      l._database = t;
      l._query = new module538.default(module12.default(l), u);
      module509.getLogger(t).debug('Created new Reference', l._getRefKey());
      return l;
    }

    module8.default(P, [
      {
        key: 'keepSynced',
        value: function (t) {
          return module510.getNativeModule(this._database).keepSynced(this._getRefKey(), this.path, this._query.getModifiers(), t);
        },
      },
      {
        key: 'set',
        value: function (t, n) {
          return module507.promiseOrCallback(module510.getNativeModule(this._database).set(this.path, this._serializeAnyType(t)), n);
        },
      },
      {
        key: 'setPriority',
        value: function (t, n) {
          var s = this._serializeAnyType(t);

          return module507.promiseOrCallback(module510.getNativeModule(this._database).setPriority(this.path, s), n);
        },
      },
      {
        key: 'setWithPriority',
        value: function (t, n, s) {
          var u = this._serializeAnyType(t),
            o = this._serializeAnyType(n);

          return module507.promiseOrCallback(module510.getNativeModule(this._database).setWithPriority(this.path, u, o), s);
        },
      },
      {
        key: 'update',
        value: function (t, n) {
          var s = this._serializeObject(t);

          return module507.promiseOrCallback(module510.getNativeModule(this._database).update(this.path, s), n);
        },
      },
      {
        key: 'remove',
        value: function (t) {
          return module507.promiseOrCallback(module510.getNativeModule(this._database).remove(this.path), t);
        },
      },
      {
        key: 'transaction',
        value: function (t, n) {
          var s = this,
            u = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          return module507.isFunction(t)
            ? new Promise(function (o, l) {
                s._database._transactionHandler.add(
                  s,
                  t,
                  function (t, u, h) {
                    if (module507.isFunction(n)) t ? n(t, u, null) : n(null, u, new module539.default(s, h));
                    return t
                      ? l(t)
                      : o({
                          committed: u,
                          snapshot: new module539.default(s, h),
                        });
                  },
                  u
                );
              })
            : Promise.reject(new Error('Missing transactionUpdate function argument.'));
        },
      },
      {
        key: 'once',
        value: function () {
          var t = this,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 'value',
            s = arguments.length > 1 ? arguments[1] : undefined,
            u = arguments.length > 2 ? arguments[2] : undefined,
            o = arguments.length > 3 ? arguments[3] : undefined;
          return module510
            .getNativeModule(this._database)
            .once(this._getRefKey(), this.path, this._query.getModifiers(), n)
            .then(function (n) {
              var l = n.snapshot,
                h = new module539.default(t, l);

              if (module507.isFunction(s)) {
                if (module507.isObject(u)) s.bind(u)(h);
                if (o && module507.isObject(o)) s.bind(o)(h);
                s(h);
              }

              return h;
            })
            .catch(function (t) {
              if (module507.isFunction(u)) return u(t);
              throw t;
            });
        },
      },
      {
        key: 'push',
        value: function (t, n) {
          var module7,
            u = module507.generatePushID(this._database._serverTimeOffset),
            o = this.child(u),
            l = this.child(u);
          module7 =
            null != t
              ? l.set(t, n).then(function () {
                  return o;
                })
              : Promise.resolve(o);
          l.then = module7.then.bind(module7);
          l.catch = module7.catch.bind(module7);
          if (module507.isFunction(n)) module7.catch(function () {});
          return l;
        },
      },
      {
        key: 'orderByKey',
        value: function () {
          return this.orderBy('orderByKey');
        },
      },
      {
        key: 'orderByPriority',
        value: function () {
          return this.orderBy('orderByPriority');
        },
      },
      {
        key: 'orderByValue',
        value: function () {
          return this.orderBy('orderByValue');
        },
      },
      {
        key: 'orderByChild',
        value: function (t) {
          return this.orderBy('orderByChild', t);
        },
      },
      {
        key: 'orderBy',
        value: function (t, n) {
          var s = new P(this._database, this.path, this._query.getModifiers());

          s._query.orderBy(t, n);

          return s;
        },
      },
      {
        key: 'limitToLast',
        value: function (t) {
          return this.limit('limitToLast', t);
        },
      },
      {
        key: 'limitToFirst',
        value: function (t) {
          return this.limit('limitToFirst', t);
        },
      },
      {
        key: 'limit',
        value: function (t, n) {
          var s = new P(this._database, this.path, this._query.getModifiers());

          s._query.limit(t, n);

          return s;
        },
      },
      {
        key: 'equalTo',
        value: function (t, n) {
          return this.filter('equalTo', t, n);
        },
      },
      {
        key: 'endAt',
        value: function (t, n) {
          return this.filter('endAt', t, n);
        },
      },
      {
        key: 'startAt',
        value: function (t, n) {
          return this.filter('startAt', t, n);
        },
      },
      {
        key: 'filter',
        value: function (t, n, s) {
          var u = new P(this._database, this.path, this._query.getModifiers());

          u._query.filter(t, n, s);

          return u;
        },
      },
      {
        key: 'onDisconnect',
        value: function () {
          return new module540.default(this);
        },
      },
      {
        key: 'child',
        value: function (t) {
          return new P(this._database, this.path + '/' + t);
        },
      },
      {
        key: 'toString',
        value: function () {
          return '' + this._database.databaseUrl + this.path;
        },
      },
      {
        key: 'toJSON',
        value: function () {
          return this.toString();
        },
      },
      {
        key: 'isEqual',
        value: function (t) {
          return !!t && t.constructor === P && t.key === this.key && this._query.queryIdentifier() === t._query.queryIdentifier();
        },
      },
      {
        key: '_getRegistrationKey',
        value: function (t) {
          return '$' + this._database.databaseUrl + '$/' + this.path + '$' + this._query.queryIdentifier() + '$' + F + '$' + t;
        },
      },
      {
        key: '_getRefKey',
        value: function () {
          return '$' + this._database.databaseUrl + '$/' + this.path + '$' + this._query.queryIdentifier();
        },
      },
      {
        key: '_serializeObject',
        value: function (t) {
          return module507.isObject(t) ? module507.tryJSONParse(module507.tryJSONStringify(t)) : t;
        },
      },
      {
        key: '_serializeAnyType',
        value: function (t) {
          return module507.isObject(t)
            ? {
                type: 'object',
                value: this._serializeObject(t),
              }
            : {
                type: typeof t,
                value: t,
              };
        },
      },
      {
        key: 'on',
        value: function (t, s, u, o) {
          if (!t) throw new Error('Query.on failed: Function called with 0 arguments. Expects at least 2.');
          if (!module507.isString(t) || !O[t]) throw new Error('Query.on failed: First argument must be a valid string event type: "' + Object.keys(O).join(', ') + '"');
          if (!s) throw new Error('Query.on failed: Function called with 1 argument. Expects at least 2.');
          if (!module507.isFunction(s)) throw new Error('Query.on failed: Second argument must be a valid function.');
          if (u && !module507.isFunction(u) && !module507.isObject(o) && !module507.isObject(u))
            throw new Error('Query.on failed: Function called with 3 arguments, but third optional argument `cancelCallbackOrContext` was not a function.');
          if (u && !module507.isFunction(u) && o)
            throw new Error('Query.on failed: Function called with 4 arguments, but third optional argument `cancelCallbackOrContext` was not a function.');

          var l = this._getRegistrationKey(t),
            h = l + '$cancelled',
            c = u && !module507.isFunction(u) ? u : o,
            f = {
              eventType: t,
              ref: this,
              path: this.path,
              key: this._getRefKey(),
              appName: this._database.app.name,
              dbURL: this._database.databaseUrl,
              eventRegistrationKey: l,
            };

          module542.default.addRegistration(
            module6.default({}, f, {
              listener: c ? s.bind(c) : s,
            })
          );
          if (u && module507.isFunction(u))
            module542.default.addRegistration({
              ref: this,
              once: true,
              path: this.path,
              key: this._getRefKey(),
              appName: this._database.app.name,
              dbURL: this._database.databaseUrl,
              eventType: t + '$cancelled',
              eventRegistrationKey: h,
              listener: c ? u.bind(c) : u,
            });
          module510.getNativeModule(this._database).on({
            eventType: t,
            path: this.path,
            key: this._getRefKey(),
            appName: this._database.app.name,
            modifiers: this._query.getModifiers(),
            hasCancellationCallback: module507.isFunction(u),
            registration: {
              eventRegistrationKey: l,
              key: f.key,
              registrationCancellationKey: h,
            },
          });
          F += 1;
          return s;
        },
      },
      {
        key: 'off',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
            n = arguments.length > 1 ? arguments[1] : undefined;
          if (!arguments.length) return module542.default.removeListenersForRegistrations(module542.default.getRegistrationsByPath(this.path));
          if (t && (!module507.isString(t) || !O[t])) throw new Error('Query.off failed: First argument must be a valid string event type: "' + Object.keys(O).join(', ') + '"');
          if (n && !module507.isFunction(n)) throw new Error('Query.off failed: Function called with 2 arguments, but second optional argument was not a function.');

          if (t && n) {
            var s = module542.default.getOneByPathEventListener(this.path, t, n);

            if (s) {
              module542.default.removeListenersForRegistrations([s + '$cancelled']);
              return module542.default.removeListenerRegistrations(n, [s]);
            } else return [];
          }

          var u = module542.default.getRegistrationsByPathEvent(this.path, t);
          module542.default.removeListenersForRegistrations(module542.default.getRegistrationsByPathEvent(this.path, t + '$cancelled'));
          return module542.default.removeListenersForRegistrations(u);
        },
      },
      {
        key: 'parent',
        get: function () {
          return '/' === this.path ? null : new P(this._database, this.path.substring(0, this.path.lastIndexOf('/')));
        },
      },
      {
        key: 'ref',
        get: function () {
          return this;
        },
      },
      {
        key: 'root',
        get: function () {
          return new P(this._database, '/');
        },
      },
    ]);
    return P;
  })(module541.default);

exports.default = q;
