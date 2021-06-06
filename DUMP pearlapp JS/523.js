var module7 = require('./7'),
  module506 = require('./506'),
  module505 = require('./505'),
  module507 = require('./507'),
  module510 = require('./510'),
  v = (function () {
    function t(s, o, u, v) {
      module7.default(this, t);
      this._auth = s;
      this._reject = null;
      this._resolve = null;
      this._promise = null;
      this._credential = null;
      this._timeout = u || 20;
      this._forceResending = v || false;
      this._phoneAuthRequestKey = module507.generatePushID();
      this._internalEvents = {
        codeSent: 'phone:auth:' + this._phoneAuthRequestKey + ':onCodeSent',
        verificationFailed: 'phone:auth:' + this._phoneAuthRequestKey + ':onVerificationFailed',
        verificationComplete: 'phone:auth:' + this._phoneAuthRequestKey + ':onVerificationComplete',
        codeAutoRetrievalTimeout: 'phone:auth:' + this._phoneAuthRequestKey + ':onCodeAutoRetrievalTimeout',
      };
      this._publicEvents = {
        error: 'phone:auth:' + this._phoneAuthRequestKey + ':error',
        event: 'phone:auth:' + this._phoneAuthRequestKey + ':event',
        success: 'phone:auth:' + this._phoneAuthRequestKey + ':success',
      };

      this._subscribeToEvents();

      if (module507.isAndroid) module510.getNativeModule(this._auth).verifyPhoneNumber(o, this._phoneAuthRequestKey, this._timeout, this._forceResending);
      if (module507.isIOS) module510.getNativeModule(this._auth).verifyPhoneNumber(o, this._phoneAuthRequestKey);
    }

    module8.default(t, [
      {
        key: '_subscribeToEvents',
        value: function () {
          for (var t = Object.keys(this._internalEvents), n = 0, s = t.length; n < s; n++) {
            var o = t[n];
            module505.SharedEventEmitter.once(this._internalEvents[o], this['_' + o + 'Handler'].bind(this));
          }
        },
      },
      {
        key: '_addUserObserver',
        value: function (t) {
          module505.SharedEventEmitter.addListener(this._publicEvents.event, t);
        },
      },
      {
        key: '_emitToObservers',
        value: function (t) {
          module505.SharedEventEmitter.emit(this._publicEvents.event, t);
        },
      },
      {
        key: '_emitToErrorCb',
        value: function (t) {
          var n = t.error;
          if (this._reject) this._reject(n);
          module505.SharedEventEmitter.emit(this._publicEvents.error, n);
        },
      },
      {
        key: '_emitToSuccessCb',
        value: function (t) {
          if (this._resolve) this._resolve(t);
          module505.SharedEventEmitter.emit(this._publicEvents.success, t);
        },
      },
      {
        key: '_removeAllListeners',
        value: function () {
          var t = this;
          setTimeout(function () {
            Object.values(t._internalEvents).forEach(function (t) {
              module505.SharedEventEmitter.removeAllListeners(t);
            });
            Object.values(t._publicEvents).forEach(function (t) {
              module505.SharedEventEmitter.removeAllListeners(t);
            });
          }, 0);
        },
      },
      {
        key: '_promiseDeferred',
        value: function () {
          var t = this;
          if (!this._promise)
            this._promise = new Promise(function (n, s) {
              t._resolve = function (s) {
                t._resolve = null;
                return n(s);
              };

              t._reject = function (n) {
                t._reject = null;
                return s(n);
              };
            });
        },
      },
      {
        key: '_codeSentHandler',
        value: function (t) {
          var n = {
            verificationId: t.verificationId,
            code: null,
            error: null,
            state: 'sent',
          };

          this._emitToObservers(n);

          if (module507.isIOS) this._emitToSuccessCb(n);
        },
      },
      {
        key: '_codeAutoRetrievalTimeoutHandler',
        value: function (t) {
          var n = {
            verificationId: t.verificationId,
            code: null,
            error: null,
            state: 'timeout',
          };

          this._emitToObservers(n);

          this._emitToSuccessCb(n);
        },
      },
      {
        key: '_verificationCompleteHandler',
        value: function (t) {
          var n = {
            verificationId: t.verificationId,
            code: t.code || null,
            error: null,
            state: 'verified',
          };

          this._emitToObservers(n);

          this._emitToSuccessCb(n);

          this._removeAllListeners();
        },
      },
      {
        key: '_verificationFailedHandler',
        value: function (t) {
          var n = {
              verificationId: t.verificationId,
              code: null,
              error: null,
              state: 'error',
            },
            s = t.error,
            o = s.code,
            u = s.message,
            c = s.nativeErrorMessage;
          n.error = module507.nativeToJSError(o, u, {
            nativeErrorMessage: c,
          });

          this._emitToObservers(n);

          this._emitToErrorCb(n);

          this._removeAllListeners();
        },
      },
      {
        key: 'on',
        value: function (t, n, s, c) {
          if (!module507.isString(t)) throw new Error(module506.default.STRINGS.ERROR_MISSING_ARG_NAMED('event', 'string', 'on'));
          if ('state_changed' !== t) throw new Error(module506.default.STRINGS.ERROR_ARG_INVALID_VALUE('event', 'state_changed', t));
          if (!module507.isFunction(n)) throw new Error(module506.default.STRINGS.ERROR_MISSING_ARG_NAMED('observer', 'function', 'on'));

          this._addUserObserver(n);

          if (module507.isFunction(s)) module505.SharedEventEmitter.once(this._publicEvents.error, s);
          if (module507.isFunction(c)) module505.SharedEventEmitter.once(this._publicEvents.success, c);
          return this;
        },
      },
      {
        key: 'then',
        value: function (t) {
          if ((this._promiseDeferred(), this._promise)) return this._promise.then.bind(this._promise)(t);
        },
      },
      {
        key: 'catch',
        value: function (t) {
          if ((this._promiseDeferred(), this._promise)) return this._promise.catch.bind(this._promise)(t);
        },
      },
    ]);
    return t;
  })();

exports.default = v;
