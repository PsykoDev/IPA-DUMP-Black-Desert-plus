var module7 = require('./7'),
  module552 = require('./552'),
  module550 = require('./550'),
  module545 = require('./545'),
  module554 = require('./554'),
  module555 = require('./555'),
  module510 = require('./510'),
  module507 = require('./507'),
  module505 = require('./505'),
  w = (function () {
    function t(o, u) {
      module7.default(this, t);
      this._documentPath = u;
      this._firestore = o;
    }

    module8.default(t, [
      {
        key: 'isEqual',
        value: function (n) {
          if (!(n instanceof t)) throw new Error('firebase.firestore.DocumentReference.isEqual(*) expects an instance of DocumentReference.');
          return this.path === n.path && this._firestore.app.name === n._firestore.app.name && this._firestore.app.options.projectId === n._firestore.app.options.projectId;
        },
      },
      {
        key: 'collection',
        value: function (t) {
          var n = this._documentPath.child(t);

          if (!n.isCollection) throw new Error('Argument "collectionPath" must point to a collection.');
          return new module545.default(this._firestore, n);
        },
      },
      {
        key: 'delete',
        value: function () {
          return module510.getNativeModule(this._firestore).documentDelete(this.path);
        },
      },
      {
        key: 'get',
        value: function (t) {
          var n = this;

          if (t) {
            if (!module507.isObject(t)) return Promise.reject(new Error('DocumentReference.get failed: First argument must be an object.'));
            if (t.source && 'default' !== t.source && 'server' !== t.source && 'cache' !== t.source)
              return Promise.reject(new Error('DocumentReference.get failed: GetOptions.source must be one of `default`, `server` or `cache`.'));
          }

          return module510
            .getNativeModule(this._firestore)
            .documentGet(this.path, t)
            .then(function (t) {
              return new module550.default(n._firestore, t);
            });
        },
      },
      {
        key: 'onSnapshot',
        value: function (t, n, o) {
          var c,
            f = this,
            h = {};

          if (module507.isFunction(t)) {
            if (n && !module507.isFunction(n)) throw new Error('DocumentReference.onSnapshot failed: Second argument must be a valid function.');
            c = {
              next: t,
              error: n,
            };
          } else {
            if (!t || !module507.isObject(t)) throw new Error('DocumentReference.onSnapshot failed: Called with invalid arguments.');

            if (t.next) {
              if (!module507.isFunction(t.next)) throw new Error('DocumentReference.onSnapshot failed: Observer.next must be a valid function.');
              if (t.error && !module507.isFunction(t.error)) throw new Error('DocumentReference.onSnapshot failed: Observer.error must be a valid function.');
              c = {
                next: t.next,
                error: t.error,
              };
            } else {
              if (!Object.prototype.hasOwnProperty.call(t, 'includeMetadataChanges'))
                throw new Error('DocumentReference.onSnapshot failed: First argument must be a function, observer or options.');

              if (((h = t), module507.isFunction(n))) {
                if (o && !module507.isFunction(o)) throw new Error('DocumentReference.onSnapshot failed: Third argument must be a valid function.');
                c = {
                  next: n,
                  error: o,
                };
              } else {
                if (!(n && module507.isObject(n) && n.next)) throw new Error('DocumentReference.onSnapshot failed: Second argument must be a function or observer.');
                if (!module507.isFunction(n.next)) throw new Error('DocumentReference.onSnapshot failed: Observer.next must be a valid function.');
                if (n.error && !module507.isFunction(n.error)) throw new Error('DocumentReference.onSnapshot failed: Observer.error must be a valid function.');
                c = {
                  next: n.next,
                  error: n.error,
                };
              }
            }
          }

          var w,
            _ = module507.firestoreAutoId(),
            b = module505.SharedEventEmitter.addListener(module505.getAppEventName(this._firestore, 'onDocumentSnapshot:' + _), function (t) {
              var n = new module550.default(f.firestore, t);
              c.next(n);
            }),
            E = module505.SharedEventEmitter.addListener(module505.getAppEventName(this._firestore, 'onDocumentSnapshotError:' + _), function (t) {
              if (w) w();
              var n = new module552.default(t);
              if (c.error) c.error(n);
              else f.firestore.log.error(n);
            });

          module510.getNativeModule(this._firestore).documentOnSnapshot(this.path, _, h);

          w = function () {
            b.remove();
            E.remove();
            module510.getNativeModule(f._firestore).documentOffSnapshot(f.path, _);
          };

          return w;
        },
      },
      {
        key: 'set',
        value: function (t, n) {
          var o = module555.buildNativeMap(t);
          return module510.getNativeModule(this._firestore).documentSet(this.path, o, n);
        },
      },
      {
        key: 'update',
        value: function (...args) {
          var u = module554.parseUpdateArgs(args, 'DocumentReference.update'),
            s = module555.buildNativeMap(u);
          return module510.getNativeModule(this._firestore).documentUpdate(this.path, s);
        },
      },
      {
        key: 'firestore',
        get: function () {
          return this._firestore;
        },
      },
      {
        key: 'id',
        get: function () {
          return this._documentPath.id;
        },
      },
      {
        key: 'parent',
        get: function () {
          var t = this._documentPath.parent();

          return new module545.default(this._firestore, t);
        },
      },
      {
        key: 'path',
        get: function () {
          return this._documentPath.relativeName;
        },
      },
    ]);
    return t;
  })();

exports.default = w;
