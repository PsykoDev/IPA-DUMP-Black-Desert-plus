exports.createFormatDate = function () {
  var o = module613.store.getState().system.uiLanguage,
    c = new Date(),
    l = null;

  switch (o.LanguageCode) {
    case module498.LocalizeManager.languages['ko-KR'].code:
    case module498.LocalizeManager.languages['ja-JP'].code:
    case module498.LocalizeManager.languages['en-US'].code:
    case module498.LocalizeManager.languages['en-SEA'].code:
    case module498.LocalizeManager.languages['en-MENA'].code:
    case module498.LocalizeManager.languages['th-TH'].code:
    case module498.LocalizeManager.languages['tr-TR'].code:
    case module498.LocalizeManager.languages['zh-Hant-TW'].code:
    case module498.LocalizeManager.languages['ru-RU'].code:
      l = o.Now_Date.replace('${year}', c.getFullYear().toString())
        .replace('${month}', (c.getMonth() + 1).toString())
        .replace('${day}', c.getDate().toString())
        .replace('${hour}', c.getHours().toString())
        .replace('${minute}', c.getMinutes().toString());
      break;

    default:
      l = o.Now_Date.replace('${year}', c.getFullYear().toString())
        .replace('${month}', 1 == String(c.getMonth() + 1).length ? String('0' + (c.getMonth() + 1)) : String(c.getMonth() + 1))
        .replace('${day}', 1 == String(c.getDate()).length ? '0' + c.getDate() : c.getDate().toString())
        .replace('${hour}', 1 == String(c.getHours()).length ? '0' + c.getHours() : c.getHours().toString())
        .replace('${minute}', 1 == String(c.getMinutes()).length ? '0' + c.getMinutes() : c.getMinutes().toString());
  }

  return l;
};

var module498 = require('./498'),
  module613 = require('./613');
