exports.default = function (c) {
  var v = module613.store.getState().system,
    l = v.region,
    s = v.regionLanguage,
    S = v.uiLanguage,
    N = c.notification._data;

  if (undefined != N) {
    var M = N.category,
      h = N.url;

    switch (M) {
      case t.GuildChat:
        return module651.NavigationService.navigate({
          router: module651.NavigationService.routers.MainRoute_ChatScreen,
          title: S.Setting_GuildChat,
          needLogin: true,
          needAccountLinking: true,
          url: module714.replacedUrl.guildChat(l),
        });

      case t.TradeMarket:
        return module651.NavigationService.navigate({
          router: module651.NavigationService.routers.MainRoute_CertifiedWeb,
          title: S.Setting_TradeMarket,
          needLogin: true,
          needAccountLinking: true,
          url: module714.replacedUrl.market(l, s),
        });

      case t.Notice:
      case t.Event:
      case t.Update:
      case t.PearlShop:
      case t.GMNotes:
        return module651.NavigationService.navigate({
          router: module651.NavigationService.routers.MainRoute_CertifiedWeb,
          needLogin: true,
          needAccountLinking: true,
          url: h,
        });
    }
  }
};

var t,
  module613 = require('./613'),
  module714 = require('./714'),
  module651 = require('./651');

!(function (t) {
  t.GuildChat = 'GuildChat';
  t.TradeMarket = 'TradeMarket';
  t.Notice = 'Notice';
  t.Event = 'Event';
  t.Update = 'Update';
  t.PearlShop = 'PearlShop';
  t.GMNotes = 'GMNotes';
})(t || (t = {}));
