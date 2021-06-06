exports.isBlockedContent = function (n) {
  for (var t, u = l(module498.RemoteConfigManager.getConfig('config/WebViewConfig/BlockUrls')); !(t = u()).done; ) {
    var c = t.value;
    if (n.includes(c)) return true;
  }

  return false;
};

exports.willOpenContent = function (n) {
  for (var t, u = l(module498.RemoteConfigManager.getConfig('config/WebViewConfig/OpenUrls')); !(t = u()).done; ) {
    var c = t.value;
    if (n.includes(c)) return true;
  }

  return false;
};

exports.isAllowedContent = function (n) {
  for (var t, u = l(module498.RemoteConfigManager.getConfig('config/WebViewConfig/AllowUrls')); !(t = u()).done; ) {
    var c = t.value;
    if (n.includes(c)) return true;
  }

  return false;
};

exports.isPCLogin = function (n, t) {
  if (n.toLowerCase().includes('member/login') && 'PC' == t) return true;
};

exports.processPCLogin = function () {
  module651.NavigationService.navigate({
    router: module651.NavigationService.routers.MainRoute_Login,
    needLogin: false,
    needAccountLinking: false,
  });
};

exports.isMainPage = function (n) {
  var t = n.toLowerCase();
  if (t.includes('main') && t.includes('index')) return true;
};

exports.processMainPage = function () {
  module651.NavigationService.dispatch(module437.StackActions.popToTop());
};

exports.isTwitchContent = function (n) {
  if (n.toLowerCase().includes('channelview')) return true;
};

exports.processTwitchContent = function (n) {
  module651.NavigationService.navigate({
    router: module651.NavigationService.routers.MainRoute_DefaultWeb,
    url: n,
  });
};

exports.isYoutubeOption = function (n) {
  var t = n.toLowerCase();
  return t.includes('twitter.com/intent') || t.includes('facebook.com/dialog/share') || t.includes('action=share');
};

exports.processYoutubeOption = function (t) {
  module17.Linking.openURL(t);
};

exports.isYoutubeEmbede = function (n) {
  if (n.includes('www.youtube.com/watch') || n.includes('m.youtube.com/watch')) return true;
  return false;
};

exports.processYoutubeEmbede = function (t) {
  var o = b(t);
  module17.Linking.canOpenURL(o).then(function (u) {
    if (u) module17.Linking.openURL(o);
    else
      module651.NavigationService.navigate({
        router: module651.NavigationService.routers.MainRoute_DefaultWeb,
        url: t,
      });
  });
};

exports.isYoutubeSignIn = function (n) {
  return n.includes('youtube.com/signin');
};

exports.processYoutubeSignIn = function (t) {
  module17.Linking.canOpenURL(t).then(function (o) {
    if (o) module17.Linking.openURL(t);
    else
      module651.NavigationService.navigate({
        router: module651.NavigationService.routers.MainRoute_DefaultWeb,
        url: t,
      });
  });
};

exports.isGoogleDocs = function (n) {
  return n.includes('docs.google.com') || n.includes('forms.gle');
};

exports.processGoogleDocs = function (t) {
  module17.Linking.canOpenURL(t).then(function (o) {
    if (o) module17.Linking.openURL(t);
    else
      module651.NavigationService.navigate({
        router: module651.NavigationService.routers.MainRoute_DefaultWeb,
        url: t,
      });
  });
};

exports.isShortcutMenu = function (n, t, o, l) {
  for (
    var v = [
        {
          urlContain: 'trade',
          url: module714.replacedUrl.market(o, l),
          needLogin: true,
          needAccountLinking: true,
          title: module613.store.getState().system.uiLanguage.Setting_TradeMarket,
          router: module651.NavigationService.routers.MainRoute_CertifiedWeb,
        },
        {
          urlContain: 'coupon',
          url: module714.replacedUrl.coupon(o),
          needLogin: true,
          needAccountLinking: true,
          title: module613.store.getState().system.uiLanguage.Hamburger_Coupon,
          router: module651.NavigationService.routers.MainRoute_CertifiedWeb,
        },
        {
          urlContain: 'Community',
          url: n,
          needLogin: true,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_Community,
          router: module651.NavigationService.routers.MainRoute_ContentWeb,
        },
        {
          urlContain: 'News',
          url: n,
          needLogin: false,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_News,
          router: module651.NavigationService.routers.MainRoute_ContentWeb,
        },
        {
          urlContain: 'faq',
          url: module714.replacedUrl.FAQSupport(t, o, l),
          needLogin: true,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_FAQAndSupports,
          router: module651.NavigationService.routers.MainRoute_CertifiedWeb,
        },
        {
          urlContain: 'BeautyAlbum',
          url: n,
          needLogin: false,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_Beauty_Album,
          router: module651.NavigationService.routers.MainRoute_ContentWeb,
        },
        {
          urlContain: '/tv',
          url: module714.replacedUrl.blackDesertTV(l),
          needLogin: false,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_TV,
          router: module651.NavigationService.routers.MainRoute_ContentWeb,
        },
        {
          urlContain: 'guildChat',
          url: module714.replacedUrl.guildChat(o),
          needLogin: true,
          needAccountLinking: true,
          title: module613.store.getState().system.uiLanguage.Setting_GuildChat,
          router: module651.NavigationService.routers.MainRoute_ChatScreen,
        },
        {
          urlContain: 'guide',
          url: n,
          needLogin: false,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_Guide,
          router: module651.NavigationService.routers.MainRoute_ContentWeb,
        },
        {
          urlContain: 'Wiki',
          url: n,
          needLogin: false,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Hamburger_Guide,
          router: module651.NavigationService.routers.MainRoute_ContentWeb,
        },
        {
          urlContain: 'bossTimeTable',
          url: n,
          needLogin: false,
          needAccountLinking: false,
          title: module613.store.getState().system.uiLanguage.Text_World_Boss_TimeTable,
          router: module651.NavigationService.routers.MainRoute_BossTimeTable,
        },
      ],
      f = 0;
    f < v.length;
    f++
  ) {
    var b = v[f];

    if (n.includes(b.urlContain)) {
      module651.NavigationService.navigate({
        url: b.url,
        title: b.title,
        router: b.router,
        needLogin: b.needLogin,
        needAccountLinking: b.needAccountLinking,
      });
      return true;
    }
  }

  return false;
};

var module17 = require('./17'),
  module437 = require('./437'),
  module498 = require('./498'),
  module714 = require('./714'),
  module651 = require('./651'),
  module613 = require('./613');

function l(n, t) {
  var o;

  if ('undefined' == typeof Symbol || null == n[Symbol.iterator]) {
    if (Array.isArray(n) || (o = v(n)) || (t && n && 'number' == typeof n.length)) {
      if (o) n = o;
      var u = 0;
      return function () {
        return u >= n.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: n[u++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = n[Symbol.iterator]()).next.bind(o);
}

function v(n, t) {
  if (n) {
    if ('string' == typeof n) return f(n, t);
    var o = Object.prototype.toString.call(n).slice(8, -1);
    if ('Object' === o && n.constructor) o = n.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(n) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? f(n, t) : undefined;
  }
}

function f(n, t) {
  if (null == t || t > n.length) t = n.length;

  for (var o = 0, u = new Array(t); o < t; o++) u[o] = n[o];

  return u;
}

function b(n) {
  var t = n;

  if (module498.SystemManager.isIos()) {
    var u = (
      n.includes('time_continue')
        ? n.includes('www')
          ? new RegExp('https://www.youtube.com/watch\\?time_continue=\\d+&v=(\\S+)')
          : new RegExp('https://m.youtube.com/watch\\?time_continue=\\d+&v=(\\S+)')
        : n.includes('www')
        ? new RegExp('https://www.youtube.com/watch\\?v=(\\S+)')
        : new RegExp('https://m.youtube.com/watch\\?v=(\\S+)')
    ).exec(n);
    if (null != u) t = 'youtube://watch?v=' + u[1];
  }

  return t;
}
