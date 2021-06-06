var n,
  regeneratorRuntime = require('regenerator-runtime'),
  module17 = require('./17'),
  module501 = require('./501'),
  module600 = require('./600'),
  module604 = require('./604'),
  module609 = require('./609'),
  module745 = require('./745'),
  module614 = require('./614');

exports.SystemManager = n;

(function (t) {
  t.buildKey = module745.BuildKey;
  t.appVersion = module745.AppVersion;
  var n,
    x,
    b,
    k = (t.platform = module17.Platform.OS);
  t.appID = 'android' === k ? 'com.pearlabyss.pearlapp ' : '1460559702';

  function y() {
    return 'ios' == k;
  }

  function h() {
    return 'android' == k;
  }

  function w() {
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              t.prev = 0;
              t.next = 3;
              return regeneratorRuntime.default.awrap(module501.default.messaging().requestPermission());

            case 3:
              t.next = 5;
              return regeneratorRuntime.default.awrap(P());

            case 5:
              t.next = 9;
              break;

            case 7:
              t.prev = 7;
              t.t0 = t.catch(0);

            case 9:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      [[0, 7]],
      Promise
    );
  }

  function P() {
    var t;
    return regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.prev = 0;
              n.next = 3;
              return regeneratorRuntime.default.awrap(module501.default.messaging().hasPermission());

            case 3:
              if (!n.sent) {
                n.next = 17;
                break;
              }

              n.prev = 5;
              if ('ios' === k) module501.default.messaging().ios.registerForRemoteNotifications();
              n.next = 9;
              return regeneratorRuntime.default.awrap(module501.default.messaging().getToken());

            case 9:
              t = n.sent;
              return n.abrupt('return', t);

            case 13:
              n.prev = 13;
              n.t0 = n.catch(5);

            case 15:
              n.next = 24;
              break;

            case 17:
              n.prev = 17;
              n.next = 20;
              return regeneratorRuntime.default.awrap(w());

            case 20:
              n.next = 24;
              break;

            case 22:
              n.prev = 22;
              n.t1 = n.catch(17);

            case 24:
              n.next = 28;
              break;

            case 26:
              n.prev = 26;
              n.t2 = n.catch(0);

            case 28:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      [
        [0, 26],
        [5, 13],
        [17, 22],
      ],
      Promise
    );
  }

  t.setMarketAppVersion = function (t) {
    x = t;
  };

  t.setIpCountry = function (t) {
    b = t;
  };

  t.getMarketAppVersion = function () {
    return x;
  };

  t.getIpCountry = function () {
    return b;
  };

  t.isIos = y;
  t.isAndroid = h;

  t.getDeviceName = function () {
    var t, n;
    return regeneratorRuntime.default.async(
      function (u) {
        for (;;)
          switch ((u.prev = u.next)) {
            case 0:
              if (((t = 'Unknown Device'), !h())) {
                u.next = 6;
                break;
              }

              n = require('./746');
              t = n[module604.default.getModel()];
              u.next = 10;
              break;

            case 6:
              if (!y()) {
                u.next = 10;
                break;
              }

              u.next = 9;
              return regeneratorRuntime.default.awrap(module604.default.getDeviceName());

            case 9:
              t = u.sent;

            case 10:
              return u.abrupt('return', t);

            case 11:
            case 'end':
              return u.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  };

  t.getUserAgent = function () {
    var t;

    try {
      t = module604.default.getUserAgentSync();
    } catch (n) {
      t = '';
    }

    return t;
  };

  t.initAppVersion = function () {
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if (((t.prev = 0), !h())) {
                t.next = 7;
                break;
              }

              t.next = 4;
              return regeneratorRuntime.default.awrap(module600.getAppstoreAppVersion('com.pearlabyss.pearlapp'));

            case 4:
              x = t.sent;
              t.next = 11;
              break;

            case 7:
              if (!y()) {
                t.next = 11;
                break;
              }

              t.next = 10;
              return regeneratorRuntime.default.awrap(module600.getAppstoreAppVersion('1460559702'));

            case 10:
              x = t.sent;

            case 11:
              t.next = 16;
              break;

            case 13:
              t.prev = 13;
              t.t0 = t.catch(0);
              x = '-1';

            case 16:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      [[0, 13]],
      Promise
    );
  };

  t.fetchIpCountryCode = function (t) {
    var n, module17, c;
    return regeneratorRuntime.default.async(
      function (o) {
        for (;;)
          switch ((o.prev = o.next)) {
            case 0:
              o.prev = 0;
              n = 2e3;
              o.next = 4;
              return regeneratorRuntime.default.awrap(module609.timeoutFetch(t, undefined, n));

            case 4:
              module17 = o.sent;
              o.next = 7;
              return regeneratorRuntime.default.awrap(module17.json());

            case 7:
              c = o.sent;
              b = c.country_code;
              o.next = 13;
              break;

            case 11:
              o.prev = 11;
              o.t0 = o.catch(0);

            case 13:
            case 'end':
              return o.stop();
          }
      },
      null,
      null,
      [[0, 11]],
      Promise
    );
  };

  t.getFirebaseCloudToken = function () {
    return n || '';
  };

  t.requestFirebaseCloudTokenPermission = w;
  t.fetchFirebaseCloudToken = P;

  t.deleteFCMToken = function () {
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              t.prev = 0;
              t.next = 3;
              return regeneratorRuntime.default.awrap(module501.default.iid().delete());

            case 3:
              t.next = 7;
              break;

            case 5:
              t.prev = 5;
              t.t0 = t.catch(0);

            case 7:
              t.next = 9;
              return regeneratorRuntime.default.awrap(module501.default.messaging().hasPermission());

            case 9:
              if (!t.sent) {
                t.next = 15;
                break;
              }

              t.next = 12;
              return regeneratorRuntime.default.awrap(P());

            case 12:
              n = t.sent;
              t.next = 16;
              break;

            case 15:
              n = '';

            case 16:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      [[0, 5]],
      Promise
    );
  };

  t.generateGroupKey = function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
      n = module614.store.getState().system,
      s = n.platform,
      u = n.region;
    return '' !== t ? s + '_' + u + '_' + t : s + '_' + u + '_' + module614.store.getState().account.accountID;
  };
})(n || (exports.SystemManager = n = {}));
