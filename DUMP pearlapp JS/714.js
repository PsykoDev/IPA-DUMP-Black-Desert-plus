var module498 = require('./498');

var o = {
  home: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/HOME')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
  login: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/LOGIN')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
  market: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/MARKET')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
  alarm: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/ALARM').replace(/\${region}/gi, o);
  },
  news: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/NEWS').replace(/\${region}/gi, o);
  },
  guildChat: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/GUILD_CHAT').replace(/\${region}/gi, o);
  },
  guide: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/GUIDE').replace(/\${region}/gi, o);
  },
  coupon: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/REEDEM_COUPON')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
  community: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/COMMUNITY')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
  blackDesertTV: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/TV').replace(/\${language}/gi, o);
  },
  FAQSupport: function (o, t, f) {
    return module498.RemoteConfigManager.getConfig('config/URL/FAQ_SUPPORT')
      .replace(/\${platform}/gi, o)
      .replace(/\${region}/gi, t)
      .replace(/\${language}/gi, f);
  },
  signUp: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/SIGN_UP').replace(/\${region}/gi, o);
  },
  findId: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/FIND_ID').replace(/\${region}/gi, o);
  },
  findPw: function (o) {
    return module498.RemoteConfigManager.getConfig('config/URL/FIND_PW').replace(/\${region}/gi, o);
  },
  privacyPolicy: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/PRIVACY_POLICY')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
  termsOfService: function (o, t) {
    return module498.RemoteConfigManager.getConfig('config/URL/TERMS_OF_SERVICE')
      .replace(/\${region}/gi, o)
      .replace(/\${language}/gi, t);
  },
};
exports.replacedUrl = o;
