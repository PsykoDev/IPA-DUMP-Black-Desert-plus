var module742 = require('./742'),
  module743 = require('./743'),
  module744 = require('./744'),
  module614 = require('./614'),
  h = {
    account: {
      fetchNewLogin: function (t) {
        module614.store.dispatch(module742.fetchNewLogin(t));
      },
      fetchLogin: function (t, n) {
        module614.store.dispatch(module742.fetchLogin(t, n));
      },
      fetchLogout: function () {
        module614.store.dispatch(module742.fetchLogout());
      },
      fetchGetLinkingInfo: function (t) {
        module614.store.dispatch(module742.fetchGetLinkingInfo(t));
      },
      refreshLinkingInfo: function () {
        module614.store.dispatch(module742.refreshLinkingInfo());
      },
      fetchAllowMarketing: function (t) {
        module614.store.dispatch(module742.fetchAllowMarketing(t));
      },
      setAccountLanguage: function (t, n) {
        module614.store.dispatch(module742.setAccountLanguage(t, n));
      },
      checkAccountIsValid: function () {
        module614.store.dispatch(module742.checkAccountIsValid());
      },
      saveLinkingInfo: function (t, n, s) {
        module614.store.dispatch(module742.saveLinkingInfo(t, n, s));
      },
      changeToken: function (t, n) {
        module614.store.dispatch(module742.changeToken(t, n));
      },
    },
    service: {
      refreshInstanceId: function () {
        module614.store.dispatch(module743.refreshInstanceId());
      },
      toggleNotification: function (t) {
        module614.store.dispatch(module743.toggleNotification(t));
      },
      manageTopic: function (t, o) {
        module614.store.dispatch(module743.manageTopic(t, o));
      },
      manageSystemTopic: function (t, o, s, h) {
        module614.store.dispatch(module743.manageSystemTopic(t, o, s, h));
      },
      moveToOtherPlatform: function () {
        module614.store.dispatch(module743.moveToOtherPlatform());
      },
      moveToOtherRegionOrLanguage: function (t, o, s, h, f, u) {
        module614.store.dispatch(module743.moveToOtherRegionOrLanguage(t, o, s, h, f, u));
      },
      doneModalTopic: function () {
        module614.store.dispatch(module743.doneModalTopic());
      },
      addGroupKey: function (t) {
        module614.store.dispatch(module743.addGroupKey(t));
      },
      addBossSchedule: function (t, o, s) {
        module614.store.dispatch(module743.addBossSchedule(t, o, s));
      },
      removeBossSchedule: function (t, o) {
        module614.store.dispatch(module743.removeBossSchedule(t, o));
      },
      clearBossSchedule: function (t) {
        module614.store.dispatch(module743.clearBossSchedule(t));
      },
      completeInitAndroidChannel: function () {
        module614.store.dispatch(module743.completeInitAndroidChannel());
      },
      setBossMinutes: function (t, o) {
        module614.store.dispatch(module743.setBossMinutes(t, o));
      },
      setDeviceTimeZone: function (t) {
        module614.store.dispatch(module743.setDeviceTimeZone(t));
      },
      toggleGuildChatKeyword: function (t) {
        module614.store.dispatch(module743.toggleGuildChatKeyword(t));
      },
      getKeywordList: function (t) {
        module614.store.dispatch(module743.getKeywordList(t));
      },
      setKeywordList: function (t, o) {
        module614.store.dispatch(module743.setKeywordList(t, o));
      },
      saveChatKeywords: function (t) {
        module614.store.dispatch(module743.saveChatKeywords(t));
      },
    },
    system: {
      setUILanguageCode: function (t) {
        module614.store.dispatch(module744.setUILanguageCode(t));
      },
      setUILanguage: function (t) {
        module614.store.dispatch(module744.setUILanguage(t));
      },
      setRegionLanguage: function (t) {
        module614.store.dispatch(module744.setRegionLanguage(t));
      },
      setPlatform: function (t) {
        module614.store.dispatch(module744.setPlatform(t));
      },
      setRegion: function (t) {
        module614.store.dispatch(module744.setRegion(t));
      },
      setPlatformAndRegion: function (t, o) {
        module614.store.dispatch(module744.setPlatformAndRegion(t, o));
      },
      finishDefaultSetting: function (t) {
        module614.store.dispatch(module744.finishDefaultSetting(t));
      },
      changeNetworkState: function (t) {
        module614.store.dispatch(module744.changeNetworkState(t));
      },
    },
  };

exports.bindAction = h;
