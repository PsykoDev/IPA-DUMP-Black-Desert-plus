var o,
  module646 = require('./646'),
  module648 = require('./648');

exports.LocalizeManager = o;

(function (n) {
  var o = (n.languages = {
    'en-US': {
      code: 'en-US',
      name: 'English',
    },
    'en-SEA': {
      code: 'en-SEA',
      name: 'English-SEA',
    },
    'en-MENA': {
      code: 'en-MENA',
      name: 'English-MENA',
    },
    'es-ES': {
      code: 'es-ES',
      name: 'Espa\xf1ol',
    },
    'fr-FR': {
      code: 'fr-FR',
      name: 'Fran\xe7ais',
    },
    'de-DE': {
      code: 'de-DE',
      name: 'Deutsch',
    },
    'ja-JP': {
      code: 'ja-JP',
      name: '\u65e5\u672c\u8a9e',
    },
    'ko-KR': {
      code: 'ko-KR',
      name: '\ud55c\uad6d\uc5b4',
    },
    'ru-RU': {
      code: 'ru-RU',
      name: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a',
    },
    'tr-TR': {
      code: 'tr-TR',
      name: 'T\xfcrk\xe7e',
    },
    'zh-Hant-TW': {
      code: 'zh-TW',
      name: '\u7e41\u9ad4\u4e2d\u6587',
    },
    'th-TH': {
      code: 'th-TH',
      name: '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22',
    },
  });
  n.languageData = {
    'en-US': require('./724'),
    'en-SEA': require('./725'),
    'es-ES': require('./726'),
    'en-MENA': require('./727'),
    'fr-FR': require('./728'),
    'de-DE': require('./729'),
    'ja-JP': require('./730'),
    'ko-KR': require('./731'),
    'ru-RU': require('./732'),
    'tr-TR': require('./733'),
    'zh-TW': require('./734'),
    'th-TH': require('./735'),
  };

  n.getLocalLangTag = function () {
    return module646.getLocales()[0].languageTag;
  };

  n.getLangCodeByTag = function (n) {
    var t = o[n];
    return t ? t.code : 'en-US';
  };

  n.getLangCodeByName = function (n) {
    if (undefined === n) return 'en-US';

    for (var t in o) if (o[t].name == n) return o[t].code;

    module648.Logger.warning(arguments.callee.name, 'Return Error');
    return 'en-US';
  };

  n.getLangNameByCode = function (n) {
    if (undefined === n) return 'English';

    for (var t = Object.keys(o), u = 0; t.length; u++) {
      var E = t[u];
      if (o[E].code == n) return o[E].name;
    }

    module648.Logger.warning(arguments.callee.name, 'Not Exist Langauge Name');
    return 'English';
  };

  n.getLangNames = function () {
    return Object.keys(o).map(function (n) {
      return o[n].name;
    });
  };
})(o || (exports.LocalizeManager = o = {}));
