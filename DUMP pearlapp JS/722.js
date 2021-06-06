var module723 = require('./723'),
  n = {
    uiLanguageCode:
      undefined != module723.LocalizeManager.languages[module723.LocalizeManager.getLocalLangTag()]
        ? module723.LocalizeManager.languages[module723.LocalizeManager.getLocalLangTag()].code
        : 'en-US',
    uiLanguage: undefined,
    regionLanguage: undefined,
    platform: undefined,
    region: undefined,
    isFinishedDefaultSetting: false,
    isNetworkConnected: true,
  };

exports.default = n;
