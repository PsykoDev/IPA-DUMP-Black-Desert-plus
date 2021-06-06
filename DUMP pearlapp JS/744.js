exports.setUILanguageCode = function (t) {
  var o;
  o = undefined != module498.LocalizeManager.languageData[t] ? t : 'en-US';
  return {
    type: module721.default.SET_UI_LANGUAGE_CODE,
    uiLanguageCode: o,
  };
};

exports.setUILanguage = function (t) {
  var l = undefined;
  l = undefined != module498.LocalizeManager.languageData[t] ? module498.LocalizeManager.languageData[t] : module498.LocalizeManager.languageData['en-US'];
  module650.NavigationService.setNavigationDefaultBackTitle(l.Text_Header_Back_Title);
  return {
    type: module721.default.SET_UI_LANGUAGE,
    uiLanguage: l,
  };
};

exports.setRegionLanguage = function (t) {
  return {
    type: module721.default.SET_SERVICE_LANGUAGE,
    regionLanguage: t,
  };
};

exports.setPlatform = function (t) {
  return {
    type: module721.default.SET_PLATFORM,
    platform: t,
  };
};

exports.setRegion = function (t) {
  return {
    type: module721.default.SET_REGION,
    region: t,
  };
};

exports.setPlatformAndRegion = function (t, u) {
  return {
    type: module721.default.SET_PLATFORM_AND_REGION,
    platform: t,
    region: u,
  };
};

exports.finishDefaultSetting = function (t) {
  return {
    type: module721.default.FINISH_DEFAULT_SETTING,
    boolean: t,
  };
};

exports.changeNetworkState = function (t) {
  return {
    type: module721.default.CHANGE_NETWORK_STATE,
    isNetworkConnected: t,
  };
};

var module721 = require('./721'),
  module498 = require('./498'),
  module650 = require('./650');
