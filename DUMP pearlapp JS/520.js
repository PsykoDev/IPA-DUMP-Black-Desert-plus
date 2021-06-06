var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module521 = require('./521'),
  module511 = require('./511'),
  module505 = require('./505'),
  module507 = require('./507'),
  module509 = require('./509'),
  module510 = require('./510'),
  module506 = require('./506'),
  module522 = require('./522'),
  module523 = require('./523'),
  module524 = require('./524'),
  module525 = require('./525'),
  module526 = require('./526'),
  module527 = require('./527'),
  module528 = require('./528'),
  module529 = require('./529'),
  module530 = require('./530'),
  module531 = require('./531'),
  module532 = require('./532');

function w() {
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

var T = ['auth_state_changed', 'auth_id_token_changed', 'phone_auth_state_changed'],
  L = 'RNFirebaseAuth';
exports.MODULE_NAME = L;
var W = 'auth';
exports.NAMESPACE = W;

var O = (function (t) {
  module9.default(U, t);

  var module511 = U,
    module525 = w(),
    k = function () {
      var t,
        n = module13.default(module511);

      if (module525) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function U(t) {
    var s;
    module7.default(this, U);
    s = k.call(this, t, {
      events: T,
      moduleName: L,
      hasMultiAppSupport: true,
      hasCustomUrlSupport: false,
      namespace: W,
    });
    var o = module510.getNativeModule(module12.default(s));
    s._user = null;
    s._settings = null;
    s._authResult = false;
    s._languageCode = o.APP_LANGUAGE[t._name] || o.APP_LANGUAGE['[DEFAULT]'];
    if (o.APP_USER[t._name]) s._setUser(o.APP_USER[t._name]);
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(s), 'auth_state_changed'), function (t) {
      s._setUser(t.user);

      module505.SharedEventEmitter.emit(module505.getAppEventName(module12.default(s), 'onAuthStateChanged'), s._user);
    });
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(s), 'phone_auth_state_changed'), function (t) {
      var n = 'phone:auth:' + t.requestKey + ':' + t.type;
      module505.SharedEventEmitter.emit(n, t.state);
    });
    module505.SharedEventEmitter.addListener(module505.getAppEventName(module12.default(s), 'auth_id_token_changed'), function (t) {
      s._setUser(t.user);

      module505.SharedEventEmitter.emit(module505.getAppEventName(module12.default(s), 'onIdTokenChanged'), s._user);
    });
    o.addAuthStateListener();
    o.addIdTokenListener();
    return s;
  }

  module8.default(U, [
    {
      key: '_setUser',
      value: function (t) {
        this._user = t ? new module521.default(this, t) : null;
        this._authResult = true;
        module505.SharedEventEmitter.emit(module505.getAppEventName(this, 'onUserChanged'), this._user);
        return this._user;
      },
    },
    {
      key: '_setUserCredential',
      value: function (t) {
        var n = new module521.default(this, t.user);
        this._user = n;
        this._authResult = true;
        module505.SharedEventEmitter.emit(module505.getAppEventName(this, 'onUserChanged'), this._user);
        return {
          additionalUserInfo: t.additionalUserInfo,
          user: n,
        };
      },
    },
    {
      key: 'onAuthStateChanged',
      value: function (t) {
        var n = this;
        module509.getLogger(this).info('Creating onAuthStateChanged listener');
        module505.SharedEventEmitter.addListener(module505.getAppEventName(this, 'onAuthStateChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module509.getLogger(n).info('Removing onAuthStateChanged listener');
          module505.SharedEventEmitter.removeListener(module505.getAppEventName(n, 'onAuthStateChanged'), t);
        };
      },
    },
    {
      key: 'onIdTokenChanged',
      value: function (t) {
        var n = this;
        module509.getLogger(this).info('Creating onIdTokenChanged listener');
        module505.SharedEventEmitter.addListener(module505.getAppEventName(this, 'onIdTokenChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module509.getLogger(n).info('Removing onIdTokenChanged listener');
          module505.SharedEventEmitter.removeListener(module505.getAppEventName(n, 'onIdTokenChanged'), t);
        };
      },
    },
    {
      key: 'onUserChanged',
      value: function (t) {
        var n = this;
        module509.getLogger(this).info('Creating onUserChanged listener');
        module505.SharedEventEmitter.addListener(module505.getAppEventName(this, 'onUserChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module509.getLogger(n).info('Removing onUserChanged listener');
          module505.SharedEventEmitter.removeListener(module505.getAppEventName(n, 'onUserChanged'), t);
        };
      },
    },
    {
      key: 'signOut',
      value: function () {
        var t = this;
        return module510
          .getNativeModule(this)
          .signOut()
          .then(function () {
            t._setUser();
          });
      },
    },
    {
      key: 'signInAnonymously',
      value: function () {
        var t = this;
        return module510
          .getNativeModule(this)
          .signInAnonymously()
          .then(function (n) {
            return t._setUserCredential(n);
          });
      },
    },
    {
      key: 'signInAnonymouslyAndRetrieveData',
      value: function () {
        var t = this;
        console.warn('Deprecated signInAnonymouslyAndRetrieveData in favor of signInAnonymously.');
        return module510
          .getNativeModule(this)
          .signInAnonymously()
          .then(function (n) {
            return t._setUserCredential(n);
          });
      },
    },
    {
      key: 'createUserWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        return module510
          .getNativeModule(this)
          .createUserWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'createUserAndRetrieveDataWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        console.warn('Deprecated createUserAndRetrieveDataWithEmailAndPassword in favor of createUserWithEmailAndPassword.');
        return module510
          .getNativeModule(this)
          .createUserWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        return module510
          .getNativeModule(this)
          .signInWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        console.warn('Deprecated signInAndRetrieveDataWithEmailAndPassword in favor of signInWithEmailAndPassword.');
        return module510
          .getNativeModule(this)
          .signInWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithCustomToken',
      value: function (t) {
        var n = this;
        return module510
          .getNativeModule(this)
          .signInWithCustomToken(t)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithCustomToken',
      value: function (t) {
        var n = this;
        console.warn('Deprecated signInAndRetrieveDataWithCustomToken in favor of signInWithCustomToken.');
        return module510
          .getNativeModule(this)
          .signInWithCustomToken(t)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithCredential',
      value: function (t) {
        var n = this;
        return module510
          .getNativeModule(this)
          .signInWithCredential(t.providerId, t.token, t.secret)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithCredential',
      value: function (t) {
        var n = this;
        console.warn('Deprecated signInAndRetrieveDataWithCredential in favor of signInWithCredential.');
        return module510
          .getNativeModule(this)
          .signInWithCredential(t.providerId, t.token, t.secret)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithPhoneNumber',
      value: function (t, n) {
        var s = this;
        return module507.isAndroid
          ? module510
              .getNativeModule(this)
              .signInWithPhoneNumber(t, n || false)
              .then(function (t) {
                return new module522.default(s, t.verificationId);
              })
          : module510
              .getNativeModule(this)
              .signInWithPhoneNumber(t)
              .then(function (t) {
                return new module522.default(s, t.verificationId);
              });
      },
    },
    {
      key: 'verifyPhoneNumber',
      value: function (t, n, s) {
        var u = s,
          o = 60;
        if (module507.isBoolean(n)) u = n;
        else o = n;
        return new module523.default(this, t, o, u);
      },
    },
    {
      key: 'sendPasswordResetEmail',
      value: function (t, n) {
        return module510.getNativeModule(this).sendPasswordResetEmail(t, n);
      },
    },
    {
      key: 'sendSignInLinkToEmail',
      value: function (t, n) {
        return module510.getNativeModule(this).sendSignInLinkToEmail(t, n);
      },
    },
    {
      key: 'isSignInWithEmailLink',
      value: function (t) {
        return 'string' == typeof t && (t.includes('mode=signIn') || t.includes('mode%3DsignIn')) && (t.includes('oobCode=') || t.includes('oobCode%3D'));
      },
    },
    {
      key: 'signInWithEmailLink',
      value: function (t, n) {
        var s = this;
        return module510
          .getNativeModule(this)
          .signInWithEmailLink(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'confirmPasswordReset',
      value: function (t, n) {
        return module510.getNativeModule(this).confirmPasswordReset(t, n);
      },
    },
    {
      key: 'applyActionCode',
      value: function (t) {
        var n = this;
        return module510
          .getNativeModule(this)
          .applyActionCode(t)
          .then(function (t) {
            n._setUser(t);
          });
      },
    },
    {
      key: 'checkActionCode',
      value: function (t) {
        return module510.getNativeModule(this).checkActionCode(t);
      },
    },
    {
      key: 'fetchSignInMethodsForEmail',
      value: function (t) {
        return module510.getNativeModule(this).fetchSignInMethodsForEmail(t);
      },
    },
    {
      key: 'verifyPasswordResetCode',
      value: function (t) {
        return module510.getNativeModule(this).verifyPasswordResetCode(t);
      },
    },
    {
      key: 'getRedirectResult',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'getRedirectResult'));
      },
    },
    {
      key: 'setPersistence',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'setPersistence'));
      },
    },
    {
      key: 'signInWithPopup',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'signInWithPopup'));
      },
    },
    {
      key: 'signInWithRedirect',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'signInWithRedirect'));
      },
    },
    {
      key: 'useDeviceLanguage',
      value: function () {
        throw new Error(module506.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'useDeviceLanguage'));
      },
    },
    {
      key: 'languageCode',
      set: function (t) {
        this._languageCode = t;
        module510.getNativeModule(this).setLanguageCode(t);
      },
      get: function () {
        return this._languageCode;
      },
    },
    {
      key: 'settings',
      get: function () {
        if (!this._settings) this._settings = new module524.default(this);
        return this._settings;
      },
    },
    {
      key: 'currentUser',
      get: function () {
        return this._user;
      },
    },
  ]);
  return U;
})(module511.default);

exports.default = O;
var G = {
  EmailAuthProvider: module525.default,
  PhoneAuthProvider: module526.default,
  GoogleAuthProvider: module527.default,
  GithubAuthProvider: module528.default,
  TwitterAuthProvider: module530.default,
  FacebookAuthProvider: module531.default,
  AppleAuthProvider: module532.default,
  OAuthProvider: module529.default,
  PhoneAuthState: {
    CODE_SENT: 'sent',
    AUTO_VERIFY_TIMEOUT: 'timeout',
    AUTO_VERIFIED: 'verified',
    ERROR: 'error',
  },
};
exports.statics = G;
