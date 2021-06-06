exports.default = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module722,
    f = arguments.length > 1 ? arguments[1] : undefined;

  switch (f.type) {
    case module721.default.SET_UI_LANGUAGE_CODE:
      return module6.default({}, t, {
        uiLanguageCode: f.uiLanguageCode,
      });

    case module721.default.SET_UI_LANGUAGE:
      return module6.default({}, t, {
        uiLanguage: f.uiLanguage,
      });

    case module721.default.SET_SERVICE_LANGUAGE:
      return module6.default({}, t, {
        regionLanguage: f.regionLanguage,
      });

    case module721.default.SET_PLATFORM:
      return module6.default({}, t, {
        platform: f.platform,
      });

    case module721.default.SET_REGION:
      return module6.default({}, t, {
        region: f.region,
      });

    case module721.default.FINISH_DEFAULT_SETTING:
      return module6.default({}, t, {
        isFinishedDefaultSetting: f.boolean,
      });

    case module721.default.CHANGE_NETWORK_STATE:
      return module6.default({}, t, {
        isNetworkConnected: f.isNetworkConnected,
      });

    case module721.default.SET_PLATFORM_AND_REGION:
      return module6.default({}, t, {
        platform: f.platform,
        region: f.region,
      });

    default:
      return t;
  }
};

var module6 = require('./6'),
  module721 = require('./721'),
  module722 = require('./722').default;
