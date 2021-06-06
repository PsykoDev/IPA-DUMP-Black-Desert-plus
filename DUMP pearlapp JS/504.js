var module6 = require('./6'),
  module7 = require('./7'),
  module17 = require('./17'),
  module503 = require('./503'),
  module505 = require('./505'),
  module506 = require('./506'),
  module507 = require('./507'),
  module508 = require('./508'),
  module520 = require('./520'),
  module533 = require('./533'),
  module534 = require('./534'),
  module535 = require('./535'),
  module536 = require('./536'),
  module544 = require('./544'),
  module566 = require('./566'),
  module568 = require('./568'),
  module569 = require('./569'),
  module577 = require('./577'),
  module580 = require('./580'),
  module591 = require('./591'),
  module594 = require('./594'),
  module597 = require('./597'),
  z = module17.NativeModules.RNFirebase,
  I = (function () {
    function t(n, l) {
      var o = this,
        p = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      module7.default(this, t);
      this._initialized = false;
      this._nativeInitialized = false;
      this._name = n;
      this._options = module6.default({}, l);

      if (p) {
        this._initialized = true;
        this._nativeInitialized = true;
      } else if (l.databaseURL && l.apiKey)
        z.initializeApp(this._name, this._options, function (t, n) {
          o._initialized = true;
          module505.SharedEventEmitter.emit('AppReady:' + o._name, {
            error: t,
            result: n,
          });
        });

      this.admob = module503.default.appModule(this, module508.NAMESPACE, module508.default);
      this.analytics = module503.default.appModule(this, module533.NAMESPACE, module533.default);
      this.auth = module503.default.appModule(this, module520.NAMESPACE, module520.default);
      this.config = module503.default.appModule(this, module534.NAMESPACE, module534.default);
      this.crashlytics = module503.default.appModule(this, module535.NAMESPACE, module535.default);
      this.database = module503.default.appModule(this, module536.NAMESPACE, module536.default);
      this.firestore = module503.default.appModule(this, module544.NAMESPACE, module544.default);
      this.functions = module503.default.appModule(this, module566.NAMESPACE, module566.default);
      this.iid = module503.default.appModule(this, module568.NAMESPACE, module568.default);
      this.links = module503.default.appModule(this, module569.NAMESPACE, module569.default);
      this.messaging = module503.default.appModule(this, module577.NAMESPACE, module577.default);
      this.notifications = module503.default.appModule(this, module580.NAMESPACE, module580.default);
      this.perf = module503.default.appModule(this, module591.NAMESPACE, module591.default);
      this.storage = module503.default.appModule(this, module594.NAMESPACE, module594.default);
      this.utils = module503.default.appModule(this, module597.NAMESPACE, module597.default);
      this._extendedProps = {};
    }

    module8.default(t, [
      {
        key: 'extendApp',
        value: function (t) {
          if (!module507.isObject(t)) throw new Error(module506.default.STRINGS.ERROR_MISSING_ARG('Object', 'extendApp'));

          for (var n = Object.keys(t), s = 0, u = n.length; s < u; s++) {
            var l = n[s];
            if (!this._extendedProps[l] && Object.hasOwnProperty.call(this, l)) throw new Error(module506.default.STRINGS.ERROR_PROTECTED_PROP(l));
            this[l] = t[l];
            this._extendedProps[l] = true;
          }
        },
      },
      {
        key: 'delete',
        value: function () {
          var t = this;
          return this._name === module503.default.DEFAULT_APP_NAME && this._nativeInitialized
            ? Promise.reject(new Error('Unable to delete the default native firebase app instance.'))
            : z.deleteApp(this._name).then(function () {
                return module503.default.deleteApp(t._name);
              });
        },
      },
      {
        key: 'onReady',
        value: function () {
          var t = this;
          return this._initialized
            ? Promise.resolve(this)
            : new Promise(function (n, s) {
                module505.SharedEventEmitter.once('AppReady:' + t._name, function (u) {
                  var l = u.error;
                  return l ? s(new Error(l)) : n(t);
                });
              });
        },
      },
      {
        key: 'toString',
        value: function () {
          return this._name;
        },
      },
      {
        key: 'name',
        get: function () {
          return this._name;
        },
      },
      {
        key: 'options',
        get: function () {
          return module6.default({}, this._options);
        },
      },
    ]);
    return t;
  })();

exports.default = I;
