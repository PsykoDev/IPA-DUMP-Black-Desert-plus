var t,
  module652 = require('./652'),
  module609 = require('./609'),
  module498 = require('./498'),
  module613 = require('./613'),
  module648 = require('./648'),
  module437 = require('./437');

exports.NavigationService = t;

(function (t) {
  var _, f;

  !(function (t) {
    t.MainRoute_CertifiedWeb = 'MainRoute_CertifiedWeb';
    t.MainRoute_ContentWeb = 'MainRoute_ContentWeb';
    t.MainRoute_ChatScreen = 'MainRoute_ChatScreen';
    t.MainRoute_BossNotificationSetting = 'MainRoute_BossNotificationSetting';
    t.MainRoute_WebLogin = 'MainRoute_WebLogin';
    t.MainRoute_SocialWebLogin = 'MainRoute_SocialWebLogin';
    t.MainRoute_Login = 'MainRoute_Login';
    t.MainRoute_Home = 'MainRoute_Home';
    t.MainRoute_BossTimeTable = 'MainRoute_BossTimeTable';
    t.MainRoute_DefaultWeb = 'MainRoute_DefaultWeb';
    t.MainRoute_GuildChatSetting = 'MainRoute_GuildChatSetting';
    t.MainRoute_PayWeb = 'MainRoute_PayWeb';
    t.MainRoute_Setting = 'MainRoute_Setting';
    t.MainRoute_DefaultSetting = 'MainRoute_DefaultSetting';
  })(_ || (_ = {}));
  t.routers = _;

  t.setNavigation = function (t) {
    f = t;
  };

  t.getNavigation = function () {
    return f;
  };

  t.setNavigationDefaultBackTitle = function (t) {
    module652.setDefaultBackTitle(t);
  };

  t.dispatch = function (t) {
    f.dispatch(t);
  };

  t.navigate = function (t) {
    if (undefined === f) module648.Logger.error(arguments.callee.name, 'navigation set\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.');

    var n = t.router,
      s = t.url,
      _ = undefined === s ? '' : s,
      M = t.title,
      R = undefined === M ? '' : M,
      v = t.needLogin,
      S = undefined !== v && v,
      b = t.needAccountLinking,
      A = undefined !== b && b,
      L = t.disableCheckAccount,
      k = undefined !== L && L,
      T = module613.store.getState().system.uiLanguage;

    if (S) {
      if (!module613.store.getState().account.isLoggined)
        return module609.simpleAlert({
          title: T.Hamburger_Alert_Login_Title1,
          content: T.Hamburger_Alert_Login_Msg1,
          confirmText: T.Confirm,
          confirmOnPress: function () {
            f.navigate('MainRoute_Login');
          },
        });
      if (!k) module613.bindAction.account.checkAccountIsValid();
    }

    var p = module613.store.getState().account.isAccountLinking;

    if (A) {
      if (!p) return module613.bindAction.account.fetchGetLinkingInfo(_);
      var W = module613.store.getState().system,
        h = W.platform,
        C = W.region,
        N = module613.store.getState().account,
        P = N.linkingPlatform,
        y = N.linkingRegion;

      if (
        !module498.ServiceManager.isSameWithLocal({
          platform: h,
          region: C,
          linkingPlatform: P,
          linkingRegion: y,
        })
      ) {
        var D = module613.store.getState().account,
          B = D.linkingPlatform,
          H = D.linkingRegion;
        return module609.simpleAlert({
          title: T.Alert_Region_Move,
          content: T.Alert_Disharmony_Account_Title_And_Content,
          confirmText: T.Yes,
          confirmOnPress: function () {
            module613.bindAction.system.setPlatform(B);
            module613.bindAction.system.setRegion(H);
          },
          cancelText: T.No,
        });
      }
    }

    f.navigate(n, {
      returnUrl: _,
      title: R,
    });
  };

  t.popToMain = function () {
    f.dispatch(module437.StackActions.popToTop());
  };
})(t || (exports.NavigationService = t = {}));
