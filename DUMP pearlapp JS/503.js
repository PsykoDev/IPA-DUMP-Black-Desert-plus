var module6 = require('./6'),
  module17 = require('./17'),
  module504 = require('./504'),
  module506 = require('./506'),
  module507 = require('./507'),
  f = module17.NativeModules.RNFirebase,
  s = {},
  S = {},
  I = {
    database: true,
    functions: true,
    storage: false,
    admob: false,
    analytics: false,
    auth: false,
    config: false,
    crashlytics: false,
    firestore: false,
    iid: false,
    invites: false,
    links: false,
    messaging: false,
    notifications: false,
    perf: false,
    utils: false,
  },
  E = {
    DEFAULT_APP_NAME: '[DEFAULT]',
    app: function (t) {
      var n = t ? t.toUpperCase() : '[DEFAULT]',
        o = s[n];
      if (!o) throw new Error(module506.default.STRINGS.ERROR_APP_NOT_INIT(n));
      return o;
    },
    apps: function () {
      return Object.values(s);
    },
    appModule: function (t, n, o) {
      return function () {
        var u = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        if (u && !I[n]) throw new Error(module506.default.STRINGS.ERROR_INIT_SERVICE_URL_OR_REGION_UNSUPPORTED(n));
        var f = '' + t.name + (u || '');
        if (!S[f]) S[f] = {};

        if (!S[f][n]) {
          S[f][n] = new o(t, u);

          if (module507.isAndroid && 'utils' !== n && !module506.default.FLAGS.checkedPlayServices) {
            module506.default.FLAGS.checkedPlayServices = true;
            t.utils().checkPlayServicesAvailability();
          }
        }

        return S[f][n];
      };
    },
    deleteApp: function (t) {
      if (s[t]) delete s[t];
    },
    initializeApp: function (t, n) {
      if (n && !module507.isString(n)) throw new Error(module506.default.STRINGS.ERROR_INIT_STRING_NAME);
      var o = (n || '[DEFAULT]').toUpperCase();

      if (s[o]) {
        console.warn(module506.default.STRINGS.WARN_INITIALIZE_DEPRECATION);
        return s[o];
      }

      if (!module507.isObject(t)) throw new Error(module506.default.STRINGS.ERROR_INIT_OBJECT);
      if (!t.apiKey) throw new Error(module506.default.STRINGS.ERROR_MISSING_OPT('apiKey'));
      if (!t.appId) throw new Error(module506.default.STRINGS.ERROR_MISSING_OPT('appId'));
      if (!t.databaseURL) throw new Error(module506.default.STRINGS.ERROR_MISSING_OPT('databaseURL'));
      if (!t.messagingSenderId) throw new Error(module506.default.STRINGS.ERROR_MISSING_OPT('messagingSenderId'));
      if (!t.projectId) throw new Error(module506.default.STRINGS.ERROR_MISSING_OPT('projectId'));
      if (!t.storageBucket) throw new Error(module506.default.STRINGS.ERROR_MISSING_OPT('storageBucket'));
      s[o] = new module504.default(o, t);
      return s[o];
    },
    initializeNativeApps: function () {
      for (var t = 0, o = f.apps.length; t < o; t++) {
        var R = f.apps[t],
          l = module6.default({}, R);
        delete l.name;
        s[R.name.toUpperCase()] = new module504.default(R.name.toUpperCase(), l, true);
      }
    },
    moduleAndStatics: function (t, l, f) {
      var s = this;
      return module6.default(
        function (n, o) {
          var l = n,
            f = o || null;
          if (('string' == typeof n && I[t] && ((l = null), (f = n)), l && !(l instanceof module504.default))) throw new Error(module506.default.STRINGS.ERROR_NOT_APP(t));
          if (!l) l = s.app('[DEFAULT]');
          return l[t](f);
        },
        l,
        {
          nativeModuleExists: !!module17.NativeModules[f],
        }
      );
    },
  };

exports.default = E;
