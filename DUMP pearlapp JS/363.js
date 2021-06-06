require('./58');

var module6 = require('./6'),
  regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module141 = require('./141'),
  module364 = require('./364'),
  module18 = require('./18'),
  S = Object.freeze({
    GRANTED: 'granted',
    DENIED: 'denied',
    NEVER_ASK_AGAIN: 'never_ask_again',
  }),
  l = Object.freeze({
    READ_CALENDAR: 'android.permission.READ_CALENDAR',
    WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
    CAMERA: 'android.permission.CAMERA',
    READ_CONTACTS: 'android.permission.READ_CONTACTS',
    WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
    GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
    ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
    ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
    RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
    READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
    CALL_PHONE: 'android.permission.CALL_PHONE',
    READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
    WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
    ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
    USE_SIP: 'android.permission.USE_SIP',
    PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
    BODY_SENSORS: 'android.permission.BODY_SENSORS',
    SEND_SMS: 'android.permission.SEND_SMS',
    RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
    READ_SMS: 'android.permission.READ_SMS',
    RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
    RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
    READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
    WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
  }),
  R = (function () {
    function n() {
      module7.default(this, n);
      this.PERMISSIONS = l;
      this.RESULTS = S;
    }

    module8.default(n, [
      {
        key: 'checkPermission',
        value: function (n) {
          console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead');
          console.warn('"PermissionsAndroid" module works only for Android platform.');
          return Promise.resolve(false);
        },
      },
      {
        key: 'check',
        value: function (n) {
          console.warn('"PermissionsAndroid" module works only for Android platform.');
          return Promise.resolve(false);
        },
      },
      {
        key: 'requestPermission',
        value: function (n, s) {
          var module7;
          return regeneratorRuntime.default.async(
            function (E) {
              for (;;)
                switch ((E.prev = E.next)) {
                  case 0:
                    console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead');
                    console.warn('"PermissionsAndroid" module works only for Android platform.');
                    return E.abrupt('return', Promise.resolve(false));

                  case 4:
                    E.next = 6;
                    return regeneratorRuntime.default.awrap(this.request(n, s));

                  case 6:
                    module7 = E.sent;
                    return E.abrupt('return', module7 === this.RESULTS.GRANTED);

                  case 8:
                  case 'end':
                    return E.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'request',
        value: function (n, t) {
          return regeneratorRuntime.default.async(
            function (E) {
              for (;;)
                switch ((E.prev = E.next)) {
                  case 0:
                    console.warn('"PermissionsAndroid" module works only for Android platform.');
                    return E.abrupt('return', Promise.resolve(this.RESULTS.DENIED));

                  case 3:
                    if ((module18.default(module364.default, 'PermissionsAndroid is not installed correctly.'), !t)) {
                      E.next = 10;
                      break;
                    }

                    E.next = 7;
                    return regeneratorRuntime.default.awrap(module364.default.shouldShowRequestPermissionRationale(n));

                  case 7:
                    if (!E.sent || !module141.default) {
                      E.next = 10;
                      break;
                    }

                    return E.abrupt(
                      'return',
                      new Promise(function (o, E) {
                        var _ = module6.default({}, t);

                        module141.default.showAlert(
                          _,
                          function () {
                            return E(new Error('Error showing rationale'));
                          },
                          function () {
                            return o(module364.default.requestPermission(n));
                          }
                        );
                      })
                    );

                  case 10:
                    return E.abrupt('return', module364.default.requestPermission(n));

                  case 11:
                  case 'end':
                    return E.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'requestMultiple',
        value: function (n) {
          console.warn('"PermissionsAndroid" module works only for Android platform.');
          return Promise.resolve({});
        },
      },
    ]);
    return n;
  })();

R = new R();
module.exports = R;
