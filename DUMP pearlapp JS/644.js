exports.newLoginFlow = w;
exports.loginFlow = V;
exports.auth = W;
exports.login = Y;
exports.logoutFlow = B;
exports.doLogout = j;
exports.checkAccountIsValid = Z;
exports.getLinkingInfoFlow = J;
exports.saveLinkingInfo = q;
exports.refreshLinkingInfoFlow = z;
exports.fetchAllowMarketingFlow = X;
exports.setAccountLanguage = $;
exports.watchAccount = ee;

var module6 = require('./6'),
  regeneratorRuntime = require('regenerator-runtime'),
  module641 = require('./641'),
  module497 = require('./497'),
  module645 = require('./645'),
  module604 = require('./604'),
  module646 = require('./646'),
  module437 = require('./437'),
  module498 = require('./498'),
  module609 = require('./609'),
  module648 = require('./648'),
  module650 = require('./650'),
  module711 = require('./711'),
  module715 = require('./715'),
  module716 = require('./716'),
  module717 = require('./717'),
  module614 = require('./614'),
  O = regeneratorRuntime.default.mark(w),
  S = regeneratorRuntime.default.mark(V),
  U = regeneratorRuntime.default.mark(W),
  D = regeneratorRuntime.default.mark(Y),
  b = regeneratorRuntime.default.mark(B),
  y = regeneratorRuntime.default.mark(j),
  G = regeneratorRuntime.default.mark(Z),
  R = regeneratorRuntime.default.mark(J),
  P = regeneratorRuntime.default.mark(Q),
  v = regeneratorRuntime.default.mark(q),
  F = regeneratorRuntime.default.mark(z),
  K = regeneratorRuntime.default.mark(X),
  h = regeneratorRuntime.default.mark($),
  H = regeneratorRuntime.default.mark(ee),
  M = 100;

function w(t) {
  var n, module645, module604, module437, module648, module711, module715, S, U, D, b, y, G, R;
  return regeneratorRuntime.default.wrap(function (O) {
    for (;;)
      switch ((O.prev = O.next)) {
        case 0:
          module715 = function (t) {
            var u, o, l, f, _, A;

            return regeneratorRuntime.default.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    for (_ in ((u = undefined), (o = undefined), (l = undefined), (f = false), t.accountLinkingInfo))
                      (A = t.accountLinkingInfo[_]).linkingPlatform === module648 &&
                        A.linkingRegion === module711 &&
                        ((u = A.linkingPlatform), (o = A.linkingRegion), (l = A.userNickname), (f = true));

                    n.t0 = module641.all;
                    n.next = 8;
                    return module641.put({
                      type: module716.default.SAVE_ACCOUNT_DATA,
                      accountID: t.accountId,
                      userNickname: l,
                      isLoggined: true,
                      isAccountLinking: f,
                      linkingPlatform: u,
                      linkingRegion: o,
                      accountLinkInfo: t.accountLinkingInfo,
                      allowMarketing: t.allowMarketing,
                    });

                  case 8:
                    n.t1 = n.sent;
                    n.next = 11;
                    return module641.put({
                      type: module716.default.DONE_LOGIN,
                      accessToken: t.accessToken,
                      refreshToken: t.refreshToken,
                    });

                  case 11:
                    n.t2 = n.sent;
                    n.t3 = [n.t1, n.t2];
                    n.next = 15;
                    return n.t0(n.t3);

                  case 15:
                  case 'end':
                    return n.stop();
                }
            }, n);
          };

          n = regeneratorRuntime.default.mark(module715);
          module645 = module614.store.getState().system;
          module604 = module645.uiLanguage;
          module437 = module645.uiLanguageCode;
          module648 = module645.platform;
          module711 = module645.region;
          O.next = 5;
          return module641.put({
            type: module717.default.GET_KEYWORD_LIST,
            accessToken: t.loginPayload.accessToken,
          });

        case 5:
          O.next = 7;
          return module641.take([module717.default.FAILED_GET_KEYWORD_LIST_API, module717.default.SUCCESS_GET_KEYWORD_LIST_API]);

        case 7:
          if ((S = O.sent).type != module717.default.FAILED_GET_KEYWORD_LIST_API) {
            O.next = 12;
            break;
          }

          return O.abrupt(
            'return',
            module609.simpleAlert({
              content: module604.Alert_API_Error,
              confirmText: module604.Confirm,
              alertTime: M,
            })
          );

        case 12:
          U = S.keywordList;
          O.next = 15;
          return module641.put({
            type: module717.default.SAVE_CHAT_KEYWORDS,
            chatKeywords: U,
          });

        case 15:
          if (0 == U.length) {
            O.next = 18;
            break;
          }

          O.next = 18;
          return module641.put({
            type: module717.default.TOGGLE_GUILD_CHAT_KEYWORD,
            enable: true,
          });

        case 18:
          O.t0 = module641.all;
          O.next = 21;
          return module641.put({
            type: module717.default.SAVE_TOPIC_TO_LOCAL,
            topics: t.loginPayload.allowAlarmList,
          });

        case 21:
          O.t1 = O.sent;
          O.next = 24;
          return module641.put({
            type: module717.default.TOGGLE_TO_ALL_TOPIC,
            canReceiveNotification: true,
            platform: module648,
            region: module711,
            uiLanguageCode: module437,
          });

        case 24:
          O.t2 = O.sent;
          O.t3 = [O.t1, O.t2];
          O.next = 28;
          return O.t0(O.t3);

        case 28:
          if (((D = module498.SystemManager.generateGroupKey(t.loginPayload.accountId)), !module498.BossNotificationManager.checkGroupExist(D))) {
            O.next = 35;
            break;
          }

          for (G in ((b = module614.store.getState().service.bossNotifications[D].beforeAlarmMinutes), (y = module498.BossNotificationManager.getScheduledNotifications(D)))) {
            R = module6.default({}, y[G]);
            module498.BossNotificationManager.scheduleNotification(D, G, R, b);
          }

          O.next = 37;
          break;

        case 35:
          O.next = 37;
          return module641.put({
            type: module717.default.ADD_GROUP_KEY,
            groupKey: D,
          });

        case 37:
          O.next = 39;
          return module641.put({
            type: module717.default.SET_DEVICE_TIME_ZONE,
            timeZone: module646.getTimeZone(),
          });

        case 39:
          O.next = 41;
          return module641.fork(module715, t.loginPayload);

        case 41:
          module497.setGenericPassword(t.loginPayload.accessToken, t.loginPayload.refreshToken);
          module650.NavigationService.popToMain();

        case 43:
        case 'end':
          return O.stop();
      }
  }, O);
}

function V(t) {
  var n,
    module645,
    module711,
    module715,
    O,
    U,
    D,
    b,
    y,
    G,
    R,
    P,
    v,
    F,
    K,
    h,
    H,
    w,
    V,
    B,
    j,
    Z,
    J,
    Q,
    q = arguments;
  return regeneratorRuntime.default.wrap(function (S) {
    for (;;)
      switch ((S.prev = S.next)) {
        case 0:
          module711 = function (t) {
            switch (t) {
              case '2':
              case '3':
                return 'Facebook';

              case '4':
                return 'Steam';

              case '5':
              case '6':
                return 'Vk';

              case '7':
                return 'Innova';

              case '8':
              case '9':
                return 'Google';

              case '10':
              case '11':
                return 'Kakao';

              case '12':
              case '13':
                return 'Naver';

              case '14':
              case '15':
                return 'Twitter';

              case '16':
              case '17':
                return 'Yahoo';

              case '18':
              case '19':
                return 'mixi';

              default:
                return t;
            }
          };

          module645 = function (t, u, o, l) {
            var f, _, A, p, T, C;

            return regeneratorRuntime.default.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    for (T in ((f = undefined), (_ = undefined), (A = undefined), (p = false), u.AccountLinkInfo))
                      (C = u.AccountLinkInfo[T]).linkingPlatform == o && C.linkingRegion == l && ((f = C.linkingPlatform), (_ = C.linkingRegion), (A = C.userNickname), (p = true));

                    n.next = 7;
                    return module641.put({
                      type: module716.default.SAVE_ACCOUNT_DATA,
                      accountID: t,
                      userNickname: A,
                      isLoggined: true,
                      isAccountLinking: p,
                      linkingPlatform: f,
                      linkingRegion: _,
                      accountLinkInfo: u.AccountLinkInfo,
                      allowMarketing: u.AllowMarketing,
                    });

                  case 7:
                  case 'end':
                    return n.stop();
                }
            }, n);
          };

          n = regeneratorRuntime.default.mark(module645);
          module715 = t.id.trim();
          O = t.pw.trim();
          U = module614.store.getState().system;
          D = U.uiLanguage;
          b = U.uiLanguageCode;
          y = U.platform;
          G = U.region;
          R = U.regionLanguage;
          S.next = 8;
          return module641.call(function () {
            return module498.SystemManager.fetchFirebaseCloudToken();
          });

        case 8:
          P = S.sent;
          module648.Logger.info(q.callee.name, P);
          S.t0 = module715;
          S.t1 = O;
          S.t2 = module498.ServiceManager.getTargetService(y, G);
          S.t3 = P;
          S.t4 = R;
          S.t5 = module604.default.getUniqueId();
          S.next = 18;
          return module641.call(function () {
            return module498.SystemManager.getDeviceName();
          });

        case 18:
          S.t6 = S.sent;
          v = {
            a: S.t0,
            b: S.t1,
            targetService: S.t2,
            instanceId: S.t3,
            language: S.t4,
            uuid: S.t5,
            deviceName: S.t6,
          };
          module648.Logger.info(q.callee.name, v);
          S.next = 23;
          return module641.fork(W, v);

        case 23:
          S.next = 25;
          return module641.take([
            module716.default.AUTH_SUCCESS,
            module716.default.AUTH_BLOCKED_ACCOUNT,
            module716.default.AUTH_NOT_MATCH_ACCOUNT,
            module716.default.AUTH_NOT_FOUND_CHARACTER_INFO,
            module716.default.AUTH_WITHDRAWN_ACCOUNT,
            module716.default.AUTH_WRONG_FIVE_MORE_TRY,
            module716.default.AUTH_NEED_EMAIL_AUTH,
            module716.default.AUTH_FAILED,
          ]);

        case 25:
          F = S.sent;
          module648.Logger.info(q.callee.name, F);
          S.t7 = F.type;
          S.next =
            S.t7 === module716.default.AUTH_SUCCESS
              ? 30
              : S.t7 === module716.default.AUTH_NOT_MATCH_ACCOUNT
              ? 32
              : S.t7 === module716.default.AUTH_NOT_FOUND_CHARACTER_INFO
              ? 33
              : S.t7 === module716.default.AUTH_WRONG_FIVE_MORE_TRY
              ? 34
              : S.t7 === module716.default.AUTH_NEED_EMAIL_AUTH
              ? 35
              : S.t7 === module716.default.AUTH_WITHDRAWN_ACCOUNT
              ? 36
              : S.t7 === module716.default.AUTH_BLOCKED_ACCOUNT
              ? 36
              : 37;
          break;

        case 30:
          K = {
            a: F.accessToken,
            b: F.refreshToken,
          };
          return S.abrupt('break', 38);

        case 32:
          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_LoginScreen_Error_Title1,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 33:
          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_Not_Found_Character_Info,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 34:
          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_Five_or_More_Failed,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 35:
          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_Need_Email_Authentication,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 36:
          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_Blocked_Account,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 37:
          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_LoginScreen_Error_Msg1,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 38:
          S.next = 40;
          return module641.fork(Y, K);

        case 40:
          S.next = 42;
          return module641.take([module716.default.LOGIN_SUCCESS, module716.default.LOGIN_DUPLICATE_TOKEN, module716.default.LOGIN_FAILED]);

        case 42:
          h = S.sent;
          S.t8 = h.type;
          S.next = S.t8 === module716.default.LOGIN_SUCCESS ? 46 : S.t8 === module716.default.LOGIN_DUPLICATE_TOKEN ? 48 : S.t8 === module716.default.LOGIN_FAILED ? 49 : 50;
          break;

        case 46:
          H = h.accountData;
          return S.abrupt('break', 51);

        case 48:
        case 49:
          return S.abrupt('break', 51);

        case 50:
          return S.abrupt('return');

        case 51:
          S.next = 53;
          return module641.put({
            type: module717.default.GET_KEYWORD_LIST,
            accessToken: F.accessToken,
          });

        case 53:
          S.next = 55;
          return module641.take([module717.default.FAILED_GET_KEYWORD_LIST_API, module717.default.SUCCESS_GET_KEYWORD_LIST_API]);

        case 55:
          if ((w = S.sent).type != module717.default.FAILED_GET_KEYWORD_LIST_API) {
            S.next = 60;
            break;
          }

          return S.abrupt(
            'return',
            module609.simpleAlert({
              content: D.Alert_API_Error,
              confirmText: D.Confirm,
              alertTime: M,
            })
          );

        case 60:
          V = w.keywordList;
          S.next = 63;
          return module641.put({
            type: module717.default.SAVE_CHAT_KEYWORDS,
            chatKeywords: V,
          });

        case 63:
          if (0 == V.length) {
            S.next = 66;
            break;
          }

          S.next = 66;
          return module641.put({
            type: module717.default.TOGGLE_GUILD_CHAT_KEYWORD,
            enable: true,
          });

        case 66:
          S.next = 68;
          return module641.fork(module645, module711(module715), H, y, G);

        case 68:
          S.next = 70;
          return module641.take([module716.default.SAVE_ACCOUNT_DATA]);

        case 70:
          S.t9 = module641.all;
          S.next = 73;
          return module641.put({
            type: module717.default.SAVE_TOPIC_TO_LOCAL,
            topics: JSON.parse(H.AllowAlarmList),
          });

        case 73:
          S.t10 = S.sent;
          S.next = 76;
          return module641.put({
            type: module717.default.TOGGLE_TO_ALL_TOPIC,
            canReceiveNotification: true,
            platform: y,
            region: G,
            uiLanguageCode: b,
          });

        case 76:
          S.t11 = S.sent;
          S.t12 = [S.t10, S.t11];
          S.next = 80;
          return S.t9(S.t12);

        case 80:
          if (((B = module498.SystemManager.generateGroupKey(module711(module715))), !module498.BossNotificationManager.checkGroupExist(B))) {
            S.next = 87;
            break;
          }

          for (J in ((j = module614.store.getState().service.bossNotifications[B].beforeAlarmMinutes), (Z = module498.BossNotificationManager.getScheduledNotifications(B)))) {
            Q = module6.default({}, Z[J]);
            module498.BossNotificationManager.scheduleNotification(B, J, Q, j);
          }

          S.next = 89;
          break;

        case 87:
          S.next = 89;
          return module641.put({
            type: module717.default.ADD_GROUP_KEY,
            groupKey: B,
          });

        case 89:
          S.next = 91;
          return module641.put({
            type: module717.default.SET_DEVICE_TIME_ZONE,
            timeZone: module646.getTimeZone(),
          });

        case 91:
          S.next = 93;
          return module641.put({
            type: module716.default.DONE_LOGIN,
            accessToken: F.accessToken,
            refreshToken: F.refreshToken,
          });

        case 93:
          module497.setGenericPassword(F.accessToken, F.refreshToken);
          module650.NavigationService.dispatch(
            module437.StackActions.pop({
              n: 1,
            })
          );

        case 95:
        case 'end':
          return S.stop();
      }
  }, S);
}

function W(t) {
  var n,
    u,
    o,
    l = arguments;
  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          s.next = 2;
          return module641.call(module711.PaAPI.auth.fetch, t);

        case 2:
          if (((n = s.sent), (u = n.response), !n.error)) {
            s.next = 9;
            break;
          }

          s.next = 8;
          return module641.put({
            type: module716.default.AUTH_FAILED,
          });

        case 8:
          return s.abrupt('return', s.sent);

        case 9:
          s.next = 11;
          return module641.call([u, u.json]);

        case 11:
          o = s.sent;
          module648.Logger.info(l.callee.name, o);
          s.t0 = o.resultCode;
          s.next =
            s.t0 === module711.resultCode.common.SUCCESS
              ? 16
              : s.t0 === module711.PaAPI.auth.resultCode.BLOCKED_ACCOUNT
              ? 19
              : s.t0 === module711.PaAPI.auth.resultCode.BLOCKED_ACCOUNT_2
              ? 19
              : s.t0 === module711.PaAPI.auth.resultCode.BLOCKED_ACCOUNT_3
              ? 19
              : s.t0 === module711.PaAPI.auth.resultCode.NOT_MATCH_ACCOUNT
              ? 22
              : s.t0 === module711.PaAPI.auth.resultCode.NOT_MATCH_ACCOUNT_2
              ? 22
              : s.t0 === module711.PaAPI.auth.resultCode.NOT_MATCH_ACCOUNT_3
              ? 22
              : s.t0 === module711.PaAPI.auth.resultCode.NOT_MATCH_ACCOUNT_4
              ? 22
              : s.t0 === module711.PaAPI.auth.resultCode.NOT_MATCH_ACCOUNT_5
              ? 22
              : s.t0 === module711.PaAPI.auth.resultCode.NOT_FOUND_CHARACTER_INFO
              ? 25
              : s.t0 === module711.PaAPI.auth.resultCode.WITHDRAWN_ACCOUNT
              ? 28
              : s.t0 === module711.PaAPI.auth.resultCode.WITHDRAWN_ACCOUNT_2
              ? 28
              : s.t0 === module711.PaAPI.auth.resultCode.WRONG_FIVE_MORE_TRY
              ? 31
              : s.t0 === module711.PaAPI.auth.resultCode.WRONG_FIVE_MORE_TRY_2
              ? 31
              : s.t0 === module711.PaAPI.auth.resultCode.WRONG_REQUEST_PARAMETER
              ? 34
              : s.t0 === module711.PaAPI.auth.resultCode.WRONG_REQUEST_PARAMETER_2
              ? 34
              : s.t0 === module711.PaAPI.auth.resultCode.NEED_EMAIL_AUTH
              ? 37
              : 40;
          break;

        case 16:
          s.next = 18;
          return module641.put({
            type: module716.default.AUTH_SUCCESS,
            accessToken: o.AccessToken,
            refreshToken: o.RefreshToken,
          });

        case 18:
          return s.abrupt('return', s.sent);

        case 19:
          s.next = 21;
          return module641.put({
            type: module716.default.AUTH_BLOCKED_ACCOUNT,
          });

        case 21:
          return s.abrupt('return', s.sent);

        case 22:
          s.next = 24;
          return module641.put({
            type: module716.default.AUTH_NOT_MATCH_ACCOUNT,
          });

        case 24:
          return s.abrupt('return', s.sent);

        case 25:
          s.next = 27;
          return module641.put({
            type: module716.default.AUTH_NOT_FOUND_CHARACTER_INFO,
          });

        case 27:
          return s.abrupt('return', s.sent);

        case 28:
          s.next = 30;
          return module641.put({
            type: module716.default.AUTH_WITHDRAWN_ACCOUNT,
          });

        case 30:
          return s.abrupt('return', s.sent);

        case 31:
          s.next = 33;
          return module641.put({
            type: module716.default.AUTH_WRONG_FIVE_MORE_TRY,
          });

        case 33:
          return s.abrupt('return', s.sent);

        case 34:
          s.next = 36;
          return module641.put({
            type: module716.default.AUTH_FAILED,
          });

        case 36:
          return s.abrupt('return', s.sent);

        case 37:
          s.next = 39;
          return module641.put({
            type: module716.default.AUTH_NEED_EMAIL_AUTH,
          });

        case 39:
          return s.abrupt('return', s.sent);

        case 40:
          s.next = 42;
          return module641.put({
            type: module716.default.AUTH_FAILED,
            errorCode: o.resultCode,
          });

        case 42:
          return s.abrupt('return', s.sent);

        case 43:
        case 'end':
          return s.stop();
      }
  }, U);
}

function Y(t) {
  var n,
    u,
    o,
    l = arguments;
  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          s.next = 2;
          return module641.call(module711.PaAPI.login.fetch, t);

        case 2:
          if (((n = s.sent), (u = n.response), !n.error)) {
            s.next = 9;
            break;
          }

          s.next = 8;
          return module641.put({
            type: module716.default.LOGIN_FAILED,
          });

        case 8:
          return s.abrupt('return', s.sent);

        case 9:
          s.next = 11;
          return module641.call([u, u.json]);

        case 11:
          o = s.sent;
          module648.Logger.info(l.callee.name, o);
          s.t0 = o.resultCode;
          s.next = s.t0 === module711.resultCode.common.SUCCESS ? 16 : s.t0 === module711.resultCode.login.DUPLICATE_TOKEN ? 19 : 22;
          break;

        case 16:
          s.next = 18;
          return module641.put({
            type: module716.default.LOGIN_SUCCESS,
            accountData: o,
          });

        case 18:
          return s.abrupt('return', s.sent);

        case 19:
          s.next = 21;
          return module641.put({
            type: module716.default.LOGIN_DUPLICATE_TOKEN,
          });

        case 21:
          return s.abrupt('return', s.sent);

        case 22:
          s.next = 24;
          return module641.put({
            type: module716.default.LOGIN_FAILED,
          });

        case 24:
        case 'end':
          return s.stop();
      }
  }, D);
}

function B() {
  var t, n, module6, module497;
  return regeneratorRuntime.default.wrap(function (l) {
    for (;;)
      switch ((l.prev = l.next)) {
        case 0:
          n = function (n) {
            var u,
              o,
              l,
              f = arguments;
            return regeneratorRuntime.default.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return module641.call(module711.PaAPI.logout.fetch, n);

                  case 2:
                    if (((u = t.sent), (o = u.response), !u.error)) {
                      t.next = 9;
                      break;
                    }

                    t.next = 8;
                    return module641.put({
                      type: module716.default.FAILED_CHECK_LOGOUT_API,
                    });

                  case 8:
                    return t.abrupt('return', t.sent);

                  case 9:
                    t.next = 11;
                    return module641.call([o, o.json]);

                  case 11:
                    if (((l = t.sent), module648.Logger.info(f.callee.name, l), l.resultCode != module711.resultCode.common.SUCCESS)) {
                      t.next = 18;
                      break;
                    }

                    t.next = 16;
                    return module641.put({
                      type: module716.default.SUCCESS_CHECK_LOGOUT_API,
                    });

                  case 16:
                    t.next = 20;
                    break;

                  case 18:
                    t.next = 20;
                    return module641.put({
                      type: module716.default.FAILED_CHECK_LOGOUT_API,
                    });

                  case 20:
                  case 'end':
                    return t.stop();
                }
            }, t);
          };

          t = regeneratorRuntime.default.mark(n);
          module6 = module614.store.getState().account.accessToken;
          module497 = module614.store.getState().system.uiLanguage;
          l.next = 6;
          return module641.fork(n, module6);

        case 6:
          l.next = 8;
          return module641.take([module716.default.SUCCESS_CHECK_LOGOUT_API, module716.default.FAILED_CHECK_LOGOUT_API]);

        case 8:
          if (l.sent.type != module716.default.FAILED_CHECK_LOGOUT_API) {
            l.next = 11;
            break;
          }

          return l.abrupt(
            'return',
            module609.simpleAlert({
              content: module497.Alert_Logout_Error_Msg1,
              confirmText: module497.Confirm,
              alertTime: M,
            })
          );

        case 11:
          l.next = 13;
          return module641.put({
            type: module716.default.DO_LOGOUT,
          });

        case 13:
        case 'end':
          return l.stop();
      }
  }, b);
}

function j() {
  var t, n, u;
  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          if (module498.SystemManager.isAndroid()) module645.default.clearAll();
          else {
            t = true;
            module645.default.clearAll(t);
          }
          s.next = 3;
          return module641.put({
            type: module717.default.SAVE_CHAT_KEYWORDS,
            chatKeywords: [],
          });

        case 3:
          module497.resetGenericPassword();
          s.next = 6;
          return module641.call(function () {
            return module498.SystemManager.deleteFCMToken();
          });

        case 6:
          if (((n = module498.SystemManager.generateGroupKey()), module498.BossNotificationManager.checkGroupExist(n)))
            for (u in module498.BossNotificationManager.getScheduledNotifications(n)) module498.BossNotificationManager.cancelNotification(n, u);
          s.next = 10;
          return module641.put({
            type: module716.default.SAVE_LOGOUT_ACCOUNT_DATA,
          });

        case 10:
        case 'end':
          return s.stop();
      }
  }, y);
}

function Z() {
  var t, n, module6, module645, module604, module646, module498, L, O, S, U, D;
  return regeneratorRuntime.default.wrap(function (b) {
    for (;;)
      switch ((b.prev = b.next)) {
        case 0:
          module645 = function (t, u) {
            var o, l, f;
            return regeneratorRuntime.default.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    n.next = 2;
                    return module641.call(module711.PaAPI.refreshAccessToken.fetch, t, u);

                  case 2:
                    if (((o = n.sent), (l = o.response), !o.error)) {
                      n.next = 9;
                      break;
                    }

                    n.next = 8;
                    return module641.put({
                      type: module716.default.FAILED_REFRESH_ACCESS_TOKEN,
                    });

                  case 8:
                    return n.abrupt('return', n.sent);

                  case 9:
                    n.next = 11;
                    return module641.call([l, l.json]);

                  case 11:
                    if (0 !== (f = n.sent).resultCode) {
                      n.next = 17;
                      break;
                    }

                    n.next = 15;
                    return module641.put({
                      type: module716.default.DONE_REFRESH_ACCESS_TOKEN,
                      accessToken: f.accessToken,
                      refreshToken: f.refreshToken,
                    });

                  case 15:
                    n.next = 24;
                    break;

                  case 17:
                    if (-32003 !== f.resultCode) {
                      n.next = 22;
                      break;
                    }

                    n.next = 20;
                    return module641.put({
                      type: module716.default.INVALID_REFRESH_TOKEN,
                    });

                  case 20:
                    n.next = 24;
                    break;

                  case 22:
                    n.next = 24;
                    return module641.put({
                      type: module716.default.FAILED_REFRESH_ACCESS_TOKEN,
                    });

                  case 24:
                  case 'end':
                    return n.stop();
                }
            }, n);
          };

          module6 = function (n) {
            var u,
              o,
              l,
              f,
              _ = arguments;
            return regeneratorRuntime.default.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return module641.call(module711.PaAPI.checkAccessToken.fetch, n);

                  case 2:
                    if (((u = t.sent), (o = u.response), !(l = u.error))) {
                      t.next = 10;
                      break;
                    }

                    module648.Logger.info(_.callee.name, l);
                    t.next = 9;
                    return module641.put({
                      type: module716.default.FAILED_CHECK_ACCESS_TOKEN,
                    });

                  case 9:
                    return t.abrupt('return', t.sent);

                  case 10:
                    t.next = 12;
                    return module641.call([o, o.json]);

                  case 12:
                    if (((f = t.sent), module648.Logger.info(_.callee.name, f), f.resultCode != module711.resultCode.common.SUCCESS)) {
                      t.next = 19;
                      break;
                    }

                    t.next = 17;
                    return module641.put({
                      type: module716.default.VALID_ACCESS_TOKEN,
                    });

                  case 17:
                    t.next = 21;
                    break;

                  case 19:
                    t.next = 21;
                    return module641.put({
                      type: module716.default.INVALID_ACCESS_TOKEN,
                    });

                  case 21:
                  case 'end':
                    return t.stop();
                }
            }, t);
          };

          t = regeneratorRuntime.default.mark(module6);
          n = regeneratorRuntime.default.mark(module645);
          module604 = module614.store.getState().account;
          module646 = module604.accessToken;
          module498 = module604.refreshToken;
          b.next = 6;
          return module641.fork(module6, module646);

        case 6:
          b.next = 8;
          return module641.take(module715.accessTokenType);

        case 8:
          if ((L = b.sent).type !== module716.default.VALID_ACCESS_TOKEN) {
            b.next = 12;
            break;
          }

          b.next = 12;
          return module641.put({
            type: module716.default.VALID_ACCOUNT,
            accessToken: module614.store.getState().account.accessToken,
          });

        case 12:
          if (L.type != module716.default.FAILED_CHECK_ACCESS_TOKEN) {
            b.next = 16;
            break;
          }

          b.next = 15;
          return module641.put({
            type: module716.default.INVALID_ACCOUNT,
          });

        case 15:
          return b.abrupt('return', b.sent);

        case 16:
          if (L.type != module716.default.INVALID_ACCESS_TOKEN) {
            b.next = 54;
            break;
          }

          b.next = 19;
          return module641.fork(module645, module646, module498);

        case 19:
          b.next = 21;
          return module641.take([module716.default.DONE_REFRESH_ACCESS_TOKEN, module716.default.INVALID_REFRESH_TOKEN, module716.default.FAILED_REFRESH_ACCESS_TOKEN]);

        case 21:
          O = b.sent;
          b.t0 = O.type;
          b.next =
            b.t0 === module716.default.DONE_REFRESH_ACCESS_TOKEN
              ? 25
              : b.t0 === module716.default.INVALID_REFRESH_TOKEN
              ? 37
              : b.t0 === module716.default.FAILED_REFRESH_ACCESS_TOKEN
              ? 51
              : 54;
          break;

        case 25:
          module497.setGenericPassword(O.accessToken, O.refreshToken);
          b.t1 = module641.all;
          b.next = 29;
          return module641.put({
            type: module716.default.CHANGE_TOKEN,
            accessToken: O.accessToken,
            refreshToken: O.refreshToken,
          });

        case 29:
          b.t2 = b.sent;
          b.next = 32;
          return module641.put({
            type: module716.default.VALID_ACCOUNT,
          });

        case 32:
          b.t3 = b.sent;
          b.t4 = [b.t2, b.t3];
          b.next = 36;
          return b.t1(b.t4);

        case 36:
          return b.abrupt('break', 54);

        case 37:
          b.t5 = module641.all;
          b.next = 40;
          return module641.fork(j);

        case 40:
          b.t6 = b.sent;
          b.next = 43;
          return module641.put({
            type: module716.default.INVALID_ACCOUNT,
          });

        case 43:
          b.t7 = b.sent;
          b.t8 = [b.t6, b.t7];
          b.next = 47;
          return b.t5(b.t8);

        case 47:
          S = module614.store.getState().system.uiLanguage;
          U = S.Alert_Expired_Token;
          D = S.Confirm;
          module650.NavigationService.dispatch(module437.StackActions.popToTop());
          module609.simpleAlert({
            content: U,
            confirmText: D,
            confirmOnPress: function () {
              module650.NavigationService.navigate({
                router: module650.NavigationService.routers.MainRoute_Login,
                needLogin: false,
                needAccountLinking: false,
              });
            },
          });
          return b.abrupt('break', 54);

        case 51:
          b.next = 53;
          return module641.put({
            type: module716.default.INVALID_ACCOUNT,
          });

        case 53:
          return b.abrupt('break', 54);

        case 54:
        case 'end':
          return b.stop();
      }
  }, G);
}

function J(t) {
  var n, module6, module497, module645, module604, module646, module437, C, N;
  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          n = t.url;
          module6 = module614.store.getState().account.accessToken;
          module497 = module614.store.getState().system;
          module645 = module497.platform;
          module604 = module497.region;
          module646 = module497.uiLanguage;
          module437 = module497.regionLanguage;
          s.next = 5;
          return module641.fork(Q, module6, module645);

        case 5:
          s.next = 7;
          return module641.take(module715.getLinkingInfoType);

        case 7:
          if ((C = s.sent).type != module716.default.FAILED_GET_LINKING_INFO) {
            s.next = 10;
            break;
          }

          return s.abrupt(
            'return',
            module609.simpleAlert({
              content: module646.Error_Connect_Failed,
              confirmText: module646.Confirm,
              alertTime: M,
            })
          );

        case 10:
          if (C.type != module716.default.INVALID_ACCESS_TOKEN) {
            s.next = 23;
            break;
          }

          s.next = 13;
          return module641.fork(Z);

        case 13:
          s.next = 15;
          return module641.take([module716.default.YES_LINKING_INFO, module716.default.NO_LINKING_INFO]);

        case 15:
          if ((N = s.sent).type != module716.default.NO_LINKING_INFO) {
            s.next = 21;
            break;
          }

          module650.NavigationService.popToMain();
          return s.abrupt(
            'return',
            module609.simpleAlert({
              content: module646.Hamburger_Alert_AccountLinking_Msg2,
              confirmText: module646.Confirm,
              confirmOnPress: function () {
                module650.NavigationService.navigate({
                  router: module650.NavigationService.routers.MainRoute_ContentWeb,
                  url: module498.RemoteConfigManager.getConfig('config/URL/ACCOUNT_LINKING_GUIDE/' + module645 + '/' + module437),
                });
              },
              alertTime: M,
            })
          );

        case 21:
          if (N.type != module716.default.YES_LINKING_INFO) {
            s.next = 23;
            break;
          }

          return s.abrupt(
            'return',
            module650.NavigationService.navigate({
              router: module650.NavigationService.routers.MainRoute_CertifiedWeb,
              needLogin: true,
              needAccountLinking: true,
              url: n,
            })
          );

        case 23:
          s.next = 25;
          return module641.fork(q, {
            type: module716.default.DO_SAVE_LINKING_INFO,
            linkingInfo: C.linkingInfo,
            platform: module645,
            region: module604,
          });

        case 25:
          s.next = 27;
          return module641.take([module716.default.SAVE_LINKING_INFO, module716.default.NO_LINKING_INFO]);

        case 27:
          if (s.sent.type != module716.default.NO_LINKING_INFO) {
            s.next = 31;
            break;
          }

          module650.NavigationService.popToMain();
          return s.abrupt(
            'return',
            module609.simpleAlert({
              content: module646.Hamburger_Alert_AccountLinking_Msg2,
              confirmText: module646.Confirm,
              confirmOnPress: function () {
                module650.NavigationService.navigate({
                  router: module650.NavigationService.routers.MainRoute_ContentWeb,
                  url: module498.RemoteConfigManager.getConfig('config/URL/ACCOUNT_LINKING_GUIDE/' + module645 + '/' + module437),
                });
              },
              alertTime: M,
            })
          );

        case 31:
          module650.NavigationService.navigate({
            router: module650.NavigationService.routers.MainRoute_CertifiedWeb,
            needLogin: true,
            needAccountLinking: true,
            url: n,
          });

        case 32:
        case 'end':
          return s.stop();
      }
  }, R);
}

function Q(t, n) {
  var u,
    o,
    l,
    f = arguments;
  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          s.next = 2;
          return module641.call(module711.PaAPI.getLinkingInfo.fetch, t, n);

        case 2:
          if (((u = s.sent), (o = u.response), !u.error)) {
            s.next = 9;
            break;
          }

          s.next = 8;
          return module641.put({
            type: module716.default.FAILED_GET_LINKING_INFO,
          });

        case 8:
          return s.abrupt('return', s.sent);

        case 9:
          s.next = 11;
          return module641.call([o, o.json]);

        case 11:
          if (((l = s.sent), module648.Logger.info(f.callee.name, l), l.resultCode != module711.resultCode.common.SUCCESS)) {
            s.next = 18;
            break;
          }

          s.next = 16;
          return module641.put({
            type: module716.default.SUCCESS_GET_LINKING_INFO,
            linkingInfo: JSON.parse(l.resultMsg),
          });

        case 16:
          s.next = 25;
          break;

        case 18:
          if ('Invalid AccessToken' != l.resultMsg) {
            s.next = 23;
            break;
          }

          s.next = 21;
          return module641.put({
            type: module716.default.INVALID_ACCESS_TOKEN,
          });

        case 21:
          s.next = 25;
          break;

        case 23:
          s.next = 25;
          return module641.put({
            type: module716.default.FAILED_GET_LINKING_INFO,
          });

        case 25:
        case 'end':
          return s.stop();
      }
  }, P);
}

function q(t) {
  var n, u, o, l, f, _;

  return regeneratorRuntime.default.wrap(function (A) {
    for (;;)
      switch ((A.prev = A.next)) {
        case 0:
          n = t.platform;
          u = t.region;
          o = t.linkingInfo;
          l = o;
          A.t0 = regeneratorRuntime.default.keys(l);

        case 3:
          if ((A.t1 = A.t0()).done) {
            A.next = 12;
            break;
          }

          if (((f = A.t1.value), (_ = l[f]).linkingPlatform != n || _.linkingRegion != u)) {
            A.next = 10;
            break;
          }

          A.next = 9;
          return module641.put({
            type: module716.default.SAVE_LINKING_INFO,
            isAccountLinking: true,
            userNickname: _.userNickname,
            linkingPlatform: _.linkingPlatform,
            linkingRegion: _.linkingRegion,
            accountLinkInfo: l,
          });

        case 9:
          return A.abrupt('return', A.sent);

        case 10:
          A.next = 3;
          break;

        case 12:
          A.next = 14;
          return module641.put({
            type: module716.default.NO_LINKING_INFO,
          });

        case 14:
        case 'end':
          return A.stop();
      }
  }, v);
}

function z() {
  var t, n, module6, module497, module645, f;
  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          t = module614.store.getState().account.accessToken;
          n = module614.store.getState().system;
          module6 = n.platform;
          module497 = n.region;
          module645 = n.uiLanguage;
          s.next = 4;
          return module641.fork(Q, t, module6);

        case 4:
          s.next = 6;
          return module641.take(module715.getLinkingInfoType);

        case 6:
          if ((f = s.sent).type != module716.default.SUCCESS_GET_LINKING_INFO) {
            s.next = 12;
            break;
          }

          s.next = 10;
          return module641.fork(q, {
            type: module716.default.DO_SAVE_LINKING_INFO,
            linkingInfo: f.linkingInfo,
            platform: module6,
            region: module497,
          });

        case 10:
          s.next = 21;
          break;

        case 12:
          if (f.type != module716.default.FAILED_GET_LINKING_INFO) {
            s.next = 16;
            break;
          }

          module609.simpleAlert({
            content: module645.Error_Connect_Failed,
            confirmText: module645.Confirm,
            alertTime: M,
          });
          s.next = 21;
          break;

        case 16:
          if (f.type != module716.default.INVALID_ACCESS_TOKEN) {
            s.next = 21;
            break;
          }

          s.next = 19;
          return module641.fork(Z);

        case 19:
          s.next = 21;
          return module641.take([module716.default.INVALID_ACCOUNT, module716.default.VALID_ACCOUNT]);

        case 21:
          s.next = 23;
          return module641.put({
            type: module716.default.DONE_REFRESH_LINKING_INFO,
          });

        case 23:
        case 'end':
          return s.stop();
      }
  }, F);
}

function X(t) {
  var n,
    module6,
    o,
    l,
    f,
    _,
    A = arguments;

  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          n = t.allowMarketing;
          module6 = module614.store.getState().account.linkingPlatform;
          s.next = 4;
          return module641.fork(Z);

        case 4:
          s.next = 6;
          return module641.take([module716.default.INVALID_ACCOUNT, module716.default.VALID_ACCOUNT]);

        case 6:
          if ((o = s.sent).type != module716.default.INVALID_ACCOUNT) {
            s.next = 11;
            break;
          }

          s.next = 10;
          return module641.put({
            type: module716.default.FAILED_ALLOW_MARKETING,
          });

        case 10:
          return s.abrupt('return', s.sent);

        case 11:
          s.next = 13;
          return module641.call(module711.PaAPI.allowMarketingNotification.fetch, o.accessToken, module6, n);

        case 13:
          if (((l = s.sent), (f = l.response), !l.error)) {
            s.next = 20;
            break;
          }

          s.next = 19;
          return module641.put({
            type: module716.default.FAILED_ALLOW_MARKETING,
          });

        case 19:
          return s.abrupt('return', s.sent);

        case 20:
          s.next = 22;
          return module641.call([f, f.json]);

        case 22:
          _ = s.sent;
          module648.Logger.info(A.callee.name, _);
          s.t0 = _.resultCode;
          s.next = s.t0 === module711.resultCode.common.SUCCESS ? 27 : 38;
          break;

        case 27:
          s.t1 = module641.all;
          s.next = 30;
          return module641.put({
            type: module716.default.SAVE_ALLOW_MARKETING,
            allowMarketing: true,
          });

        case 30:
          s.t2 = s.sent;
          s.next = 33;
          return module641.put({
            type: module717.default.HIDE_PUSH_MODAL,
          });

        case 33:
          s.t3 = s.sent;
          s.t4 = [s.t2, s.t3];
          s.next = 37;
          return s.t1(s.t4);

        case 37:
          return s.abrupt('break', 48);

        case 38:
          s.t5 = module641.all;
          s.next = 41;
          return module641.put({
            type: module716.default.SAVE_ALLOW_MARKETING,
            allowMarketing: undefined,
          });

        case 41:
          s.t6 = s.sent;
          s.next = 44;
          return module641.put({
            type: module717.default.HIDE_PUSH_MODAL,
          });

        case 44:
          s.t7 = s.sent;
          s.t8 = [s.t6, s.t7];
          s.next = 48;
          return s.t5(s.t8);

        case 48:
        case 'end':
          return s.stop();
      }
  }, K);
}

function $(t) {
  var n,
    module6,
    module497,
    module645,
    f,
    _,
    A,
    p = arguments;

  return regeneratorRuntime.default.wrap(function (s) {
    for (;;)
      switch ((s.prev = s.next)) {
        case 0:
          s.next = 2;
          return module641.fork(Z);

        case 2:
          s.next = 4;
          return module641.take([module716.default.INVALID_ACCOUNT, module716.default.VALID_ACCOUNT]);

        case 4:
          if ((n = s.sent).type != module716.default.INVALID_ACCOUNT) {
            s.next = 9;
            break;
          }

          s.next = 8;
          return module641.put({
            type: module716.default.FAILED_SET_ACCOUNT_LANGUAGE,
          });

        case 8:
          return s.abrupt('return', s.sent);

        case 9:
          module6 = t.region;
          module497 = t.regionLanguageCode;
          module645 = module614.store.getState().system.platform;
          s.next = 13;
          return module641.call(module711.PaAPI.setAccountLanguage.fetch, module6, module497, n.accessToken, module645);

        case 13:
          if (((f = s.sent), (_ = f.response), !f.error)) {
            s.next = 20;
            break;
          }

          s.next = 19;
          return module641.put({
            type: module716.default.FAILED_SET_ACCOUNT_LANGUAGE,
          });

        case 19:
          return s.abrupt('return', s.sent);

        case 20:
          s.next = 22;
          return module641.call([_, _.json]);

        case 22:
          A = s.sent;
          module648.Logger.info(p.callee.name, A);
          s.t0 = A.resultCode;
          s.next = s.t0 === module711.resultCode.common.SUCCESS ? 27 : 30;
          break;

        case 27:
          s.next = 29;
          return module641.put({
            type: module716.default.SUCCESS_SET_ACCOUNT_LANGUAGE,
          });

        case 29:
          return s.abrupt('return', s.sent);

        case 30:
          s.next = 32;
          return module641.put({
            type: module716.default.FAILED_SET_ACCOUNT_LANGUAGE,
          });

        case 32:
          return s.abrupt('return', s.sent);

        case 33:
        case 'end':
          return s.stop();
      }
  }, h);
}

function ee() {
  return regeneratorRuntime.default.wrap(function (t) {
    for (;;)
      switch ((t.prev = t.next)) {
        case 0:
          t.next = 2;
          return module641.takeLatest(module716.default.FETCH_GET_LINKING_INFO, J);

        case 2:
          t.next = 4;
          return module641.takeLatest(module716.default.REFRESH_LINKING_INFO, z);

        case 4:
          t.next = 6;
          return module641.takeLatest(module716.default.FETCH_NEW_LOGIN, w);

        case 6:
          t.next = 8;
          return module641.takeLatest(module716.default.FETCH_LOGIN, V);

        case 8:
          t.next = 10;
          return module641.takeLatest(module716.default.FETCH_LOGOUT, B);

        case 10:
          t.next = 12;
          return module641.takeLatest(module716.default.FETCH_ALLOW_MARKETING, X);

        case 12:
          t.next = 14;
          return module641.takeLatest(module716.default.DO_LOGOUT, j);

        case 14:
          t.next = 16;
          return module641.takeLatest(module716.default.SET_ACCOUNT_LANGUAGE, $);

        case 16:
          t.next = 18;
          return module641.takeLatest(module716.default.CHECK_ACCOUNT_IS_VALID, Z);

        case 18:
          t.next = 20;
          return module641.takeLatest(module716.default.DO_SAVE_LINKING_INFO, q);

        case 20:
        case 'end':
          return t.stop();
      }
  }, H);
}
