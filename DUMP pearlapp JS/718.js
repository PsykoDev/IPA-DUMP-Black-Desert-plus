exports.refreshInstanceId = P;
exports.getKeywordList = V;
exports.watchService = U;

var module6 = require('./6'),
  regeneratorRuntime = require('regenerator-runtime'),
  module641 = require('./641'),
  module501 = require('./501'),
  module497 = require('./497'),
  l = require('./609'),
  module648 = require('./648'),
  module498 = require('./498'),
  module613 = require('./613'),
  module717 = require('./717'),
  module716 = require('./716'),
  module711 = require('./711'),
  module644 = require('./644'),
  module715 = require('./715'),
  O = regeneratorRuntime.default.mark(P),
  k = regeneratorRuntime.default.mark(w),
  C = regeneratorRuntime.default.mark(M),
  N = regeneratorRuntime.default.mark(R),
  S = regeneratorRuntime.default.mark(h),
  y = regeneratorRuntime.default.mark(G),
  b = regeneratorRuntime.default.mark(F),
  v = regeneratorRuntime.default.mark(V),
  D = regeneratorRuntime.default.mark(U);

function P() {
  var t,
    n,
    module6,
    module501,
    f,
    l,
    module613,
    L = arguments;
  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          u.next = 2;
          return module641.fork(module644.checkAccountIsValid);

        case 2:
          u.next = 4;
          return module641.take([module716.default.VALID_ACCOUNT, module716.default.INVALID_ACCOUNT]);

        case 4:
          if ((t = u.sent).type != module716.default.INVALID_ACCOUNT) {
            u.next = 9;
            break;
          }

          u.next = 8;
          return module641.put({
            type: module717.default.FAILED_REFRESH_INSTANCE_ID,
          });

        case 8:
          return u.abrupt('return', u.sent);

        case 9:
          u.next = 11;
          return module641.call(function () {
            return module498.SystemManager.fetchFirebaseCloudToken();
          });

        case 11:
          n = u.sent;
          module6 = t.accessToken;
          module501 = {
            _instanceId: n,
          };
          u.next = 16;
          return module641.call(module711.PaAPI.refreshInstanceId.fetch, module6, module501);

        case 16:
          if (((f = u.sent), (l = f.response), !f.error)) {
            u.next = 23;
            break;
          }

          u.next = 22;
          return module641.put({
            type: module717.default.FAILED_REFRESH_INSTANCE_ID,
          });

        case 22:
          return u.abrupt('return', u.sent);

        case 23:
          u.next = 25;
          return module641.call([l, l.json]);

        case 25:
          module613 = u.sent;
          module648.Logger.info(L.callee.name, module613);
          u.next = 29;
          return module641.put({
            type: module717.default.DONE_REFRESH_INSTANCE_ID,
          });

        case 29:
        case 'end':
          return u.stop();
      }
  }, O);
}

function w(t) {
  var n,
    module497,
    l,
    _,
    module715,
    O,
    C,
    N,
    S,
    y,
    b = arguments,
    v = arguments;

  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          n = require('./719').default.topics;
          module497 = t.prevTopics;
          l = t.nextTopics;
          u.next = 4;
          return module641.fork(module644.checkAccountIsValid);

        case 4:
          u.next = 6;
          return module641.take([module716.default.VALID_ACCOUNT, module716.default.INVALID_ACCOUNT]);

        case 6:
          if ((_ = u.sent).type != module716.default.INVALID_ACCOUNT) {
            u.next = 11;
            break;
          }

          u.next = 10;
          return module641.put({
            type: module717.default.FAILED_MANAGE_TOPIC,
          });

        case 10:
          return u.abrupt('return', u.sent);

        case 11:
          l.AlldayNoNight = !l.AlldayNight;
          l = module6.default({}, n, l);
          module715 = _.accessToken;
          O = module613.store.getState().account.linkingPlatform;
          C = {
            _allowAlarmList: JSON.stringify(l),
          };
          u.next = 18;
          return module641.call(module711.PaAPI.setNotification.fetch, module715, O, C);

        case 18:
          if (((N = u.sent), (S = N.response), !N.error)) {
            u.next = 25;
            break;
          }

          u.next = 24;
          return module641.put({
            type: module717.default.FAILED_MANAGE_TOPIC,
          });

        case 24:
          return u.abrupt('return', u.sent);

        case 25:
          u.next = 27;
          return module641.call([S, S.json]);

        case 27:
          if (((y = u.sent), module648.Logger.info(v.callee.name, y), 0 == y.resultCode)) {
            u.next = 33;
            break;
          }

          u.next = 32;
          return module641.put({
            type: module717.default.FAILED_MANAGE_TOPIC,
          });

        case 32:
          return u.abrupt('return', u.sent);

        case 33:
          Object.keys(l).map(function (t) {
            if (module497[t] != l[t])
              l[t]
                ? (module648.Logger.info(b.callee.name, y), module501.default.messaging().subscribeToTopic(t))
                : (module648.Logger.info(b.callee.name, y), module501.default.messaging().unsubscribeFromTopic(t));
          });
          u.t0 = module641.all;
          u.next = 37;
          return module641.put({
            type: module717.default.SAVE_TOPIC_TO_LOCAL,
            topics: l,
          });

        case 37:
          u.t1 = u.sent;
          u.next = 40;
          return module641.put({
            type: module717.default.SHOW_PUSH_MODAL,
          });

        case 40:
          u.t2 = u.sent;
          u.next = 43;
          return module641.put({
            type: module717.default.DONE_MANAGE_TOPIC,
          });

        case 43:
          u.t3 = u.sent;
          u.t4 = [u.t1, u.t2, u.t3];
          u.next = 47;
          return u.t0(u.t4);

        case 47:
        case 'end':
          return u.stop();
      }
  }, k);
}

function M(t) {
  var n,
    module6,
    module497,
    l,
    module498,
    A = arguments;
  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          n = t.isActivateNotification;
          module6 = t.platform;
          module497 = t.region;
          l = t.langCode;
          module498 = module6 + module497 + l;

          if (n) {
            module648.Logger.info(A.callee.name + ' subscribe', module498);
            module501.default.messaging().subscribeToTopic(module498);
          } else {
            module648.Logger.info(A.callee.name + ' unsubscribe', module498);
            module501.default.messaging().unsubscribeFromTopic(module498);
          }

          u.next = 5;
          return module641.put({
            type: module717.default.SAVE_SYSTEM_TOPIC_TO_LOCAL,
            isActivateNotification: n,
            platform: module6,
            region: module497,
            langCode: l,
          });

        case 5:
        case 'end':
          return u.stop();
      }
  }, C);
}

function R(t) {
  var n,
    s,
    module497,
    l,
    module716,
    module711,
    E = arguments;
  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          if (((n = t.canReceiveNotification), (s = module613.store.getState().service.topics), !n)) {
            u.next = 9;
            break;
          }

          module497 = module613.store.getState().system;
          l = module497.platform;
          module716 = module497.region;
          module711 = module497.regionLanguage;
          if (undefined != s && undefined != s)
            Object.keys(s).map(function (t, n) {
              if (s[t]) {
                module648.Logger.info(E.callee.name, t);
                module501.default.messaging().subscribeToTopic(t);
              }
            });
          u.next = 7;
          return module641.fork(M, {
            type: module717.default.MANAGE_SYSTEM_TOPIC,
            isActivateNotification: true,
            platform: l,
            region: module716,
            langCode: module711,
          });

        case 7:
          u.next = 11;
          break;

        case 9:
          u.next = 11;
          return module641.call(function () {
            return module498.SystemManager.deleteFCMToken();
          });

        case 11:
          u.next = 13;
          return module641.put({
            type: module717.default.DONE_TOGGLE_TO_ALL_TOPIC,
          });

        case 13:
        case 'end':
          return u.stop();
      }
  }, N);
}

function h(t) {
  var n;
  return regeneratorRuntime.default.wrap(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            t.next = 2;
            return module641.call(function () {
              return module498.SystemManager.deleteFCMToken();
            });

          case 2:
            t.prev = 2;
            t.next = 5;
            return module641.call(function () {
              return module497.getGenericPassword();
            });

          case 5:
            n = t.sent;
            t.next = 10;
            break;

          case 8:
            t.prev = 8;
            t.t0 = t.catch(2);

          case 10:
            t.next = 12;
            return module641.fork(module644.loginFlow, {
              type: module716.default.FETCH_LOGIN,
              id: n.username,
              pw: n.password,
            });

          case 12:
            t.next = 14;
            return module641.take(module715.loginType);

          case 14:
            if (t.sent.type == module716.default.SUCCESS_LOGIN) {
              t.next = 18;
              break;
            }

            t.next = 18;
            return module641.put({
              type: module716.default.DO_LOGOUT,
            });

          case 18:
            t.next = 20;
            return module641.put({
              type: module717.default.DONE_MOVE_TO_OTHER_PLATFORM,
            });

          case 20:
          case 'end':
            return t.stop();
        }
    },
    S,
    null,
    [[2, 8]]
  );
}

function G(t) {
  var n, module6, module501, module497, l, module648;
  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          n = t.prevPlatform;
          module6 = t.prevRegion;
          module501 = t.prevLangCode;
          module497 = t.nextPlatform;
          l = t.nextRegion;
          module648 = t.nextLangCode;
          u.next = 3;
          return module641.fork(M, {
            type: module717.default.MANAGE_SYSTEM_TOPIC,
            isActivateNotification: false,
            platform: n,
            region: module6,
            langCode: module501,
          });

        case 3:
          u.next = 5;
          return module641.fork(M, {
            type: module717.default.MANAGE_SYSTEM_TOPIC,
            isActivateNotification: true,
            platform: module497,
            region: l,
            langCode: module648,
          });

        case 5:
        case 'end':
          return u.stop();
      }
  }, y);
}

function F(t) {
  var n,
    s,
    module501,
    module497,
    module498,
    module715,
    O,
    k,
    C,
    N,
    S,
    y,
    v = arguments;
  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          n = module613.store.getState().system.uiLanguage;
          u.next = 3;
          return module641.fork(module644.checkAccountIsValid);

        case 3:
          u.next = 5;
          return module641.take([module716.default.VALID_ACCOUNT, module716.default.INVALID_ACCOUNT]);

        case 5:
          if ((s = u.sent).type != module716.default.INVALID_ACCOUNT) {
            u.next = 11;
            break;
          }

          l.simpleAlert({
            content: n.Alert_API_Error,
            confirmText: n.Confirm,
          });
          u.next = 10;
          return module641.put({
            type: module717.default.FAILED_SET_KEYWORD_LIST_API,
          });

        case 10:
          return u.abrupt('return', u.sent);

        case 11:
          module501 = t.chatKeywords;
          module497 = t.doLocalSave;
          module498 = module501.join(',');
          module715 = s.accessToken;
          O = {
            _keyWordList: module498,
          };
          u.next = 17;
          return module641.call(module711.PaAPI.setKeywordList.fetch, module715, O);

        case 17:
          if (((k = u.sent), (C = k.response), !k.error)) {
            u.next = 24;
            break;
          }

          u.next = 23;
          return module641.put({
            type: module717.default.FAILED_SET_KEYWORD_LIST_API,
          });

        case 23:
          return u.abrupt('return', u.sent);

        case 24:
          u.next = 26;
          return module641.call([C, C.json]);

        case 26:
          if (((N = u.sent), module648.Logger.info(v.callee.name, N), 0 != N.resultCode)) {
            u.next = 37;
            break;
          }

          if (!module497) {
            u.next = 35;
            break;
          }

          S = module498.split(',');
          if (-1 != (y = S.indexOf(''))) S.splice(y, y + 1);
          u.next = 35;
          return module641.put({
            type: module717.default.SAVE_CHAT_KEYWORDS,
            chatKeywords: S,
          });

        case 35:
          u.next = 38;
          break;

        case 37:
          l.simpleAlert({
            content: n.Alert_API_Error,
            confirmText: n.Confirm,
          });

        case 38:
        case 'end':
          return u.stop();
      }
  }, b);
}

function V(t) {
  var n,
    s,
    o,
    f,
    l,
    _,
    A = arguments;

  return regeneratorRuntime.default.wrap(function (u) {
    for (;;)
      switch ((u.prev = u.next)) {
        case 0:
          n = t.accessToken;
          u.next = 3;
          return module641.call(module711.PaAPI.getKeywordList.fetch, n);

        case 3:
          if (((s = u.sent), (o = s.response), !s.error)) {
            u.next = 10;
            break;
          }

          u.next = 9;
          return module641.put({
            type: module717.default.FAILED_GET_KEYWORD_LIST_API,
          });

        case 9:
          return u.abrupt('return', u.sent);

        case 10:
          u.next = 12;
          return module641.call([o, o.json]);

        case 12:
          if (((f = u.sent), module648.Logger.info(A.callee.name, f), 0 != f.resultCode)) {
            u.next = 23;
            break;
          }

          l = f.resultMsg.split(',');
          if (-1 != (_ = l.indexOf(''))) l.splice(_, _ + 1);
          u.next = 20;
          return module641.put({
            type: module717.default.SUCCESS_GET_KEYWORD_LIST_API,
            keywordList: l,
          });

        case 20:
          return u.abrupt('return', u.sent);

        case 23:
          u.next = 25;
          return module641.put({
            type: module717.default.FAILED_GET_KEYWORD_LIST_API,
          });

        case 25:
        case 'end':
          return u.stop();
      }
  }, v);
}

function U() {
  return regeneratorRuntime.default.wrap(function (t) {
    for (;;)
      switch ((t.prev = t.next)) {
        case 0:
          t.next = 2;
          return module641.takeLatest(module717.default.MANAGE_TOPIC, w);

        case 2:
          t.next = 4;
          return module641.takeLatest(module717.default.MANAGE_SYSTEM_TOPIC, M);

        case 4:
          t.next = 6;
          return module641.takeLatest(module717.default.REFRESH_INSTANCE_ID, P);

        case 6:
          t.next = 8;
          return module641.takeLatest(module717.default.TOGGLE_TO_ALL_TOPIC, R);

        case 8:
          t.next = 10;
          return module641.takeLatest(module717.default.MOVE_TO_OTHER_PLATFORM, h);

        case 10:
          t.next = 12;
          return module641.takeLatest(module717.default.MOVE_TO_OTHER_REGION_OR_LANGUAGE, G);

        case 12:
          t.next = 14;
          return module641.takeLatest(module717.default.GET_KEYWORD_LIST, V);

        case 14:
          t.next = 16;
          return module641.takeLatest(module717.default.SET_KEYWORD_LIST, F);

        case 16:
        case 'end':
          return t.stop();
      }
  }, D);
}
