exports.addEventListener = function (u, o) {
  if ('change' !== u) n(u);
  else if (!module647.handlers.has(o)) module647.handlers.add(o);
};

exports.removeEventListener = function (u, o) {
  if ('change' !== u) n(u);
  else if (module647.handlers.has(o)) module647.handlers.delete(o);
};

exports.findBestAvailableLanguage = function (n) {
  for (var o = module647.getLocales(), c = 0; c < o.length; c++) {
    var s = o[c],
      l = s.languageTag,
      f = s.languageCode,
      b = s.isRTL;
    if (n.includes(l))
      return {
        languageTag: l,
        isRTL: b,
      };
    var y = u(s),
      T = o[c + 1];
    if ((!T || y !== u(T)) && n.includes(y))
      return {
        languageTag: y,
        isRTL: b,
      };
    if ((!T || f !== T.languageCode) && n.includes(f))
      return {
        languageTag: f,
        isRTL: b,
      };
  }
};

Object.defineProperty(exports, 'getCalendar', {
  enumerable: true,
  get: function () {
    return module647.getCalendar;
  },
});
Object.defineProperty(exports, 'getCountry', {
  enumerable: true,
  get: function () {
    return module647.getCountry;
  },
});
Object.defineProperty(exports, 'getCurrencies', {
  enumerable: true,
  get: function () {
    return module647.getCurrencies;
  },
});
Object.defineProperty(exports, 'getLocales', {
  enumerable: true,
  get: function () {
    return module647.getLocales;
  },
});
Object.defineProperty(exports, 'getNumberFormatSettings', {
  enumerable: true,
  get: function () {
    return module647.getNumberFormatSettings;
  },
});
Object.defineProperty(exports, 'getTemperatureUnit', {
  enumerable: true,
  get: function () {
    return module647.getTemperatureUnit;
  },
});
Object.defineProperty(exports, 'getTimeZone', {
  enumerable: true,
  get: function () {
    return module647.getTimeZone;
  },
});
Object.defineProperty(exports, 'uses24HourClock', {
  enumerable: true,
  get: function () {
    return module647.uses24HourClock;
  },
});
Object.defineProperty(exports, 'usesMetricSystem', {
  enumerable: true,
  get: function () {
    return module647.usesMetricSystem;
  },
});
Object.defineProperty(exports, 'usesAutoDateAndTime', {
  enumerable: true,
  get: function () {
    return module647.usesAutoDateAndTime;
  },
});
Object.defineProperty(exports, 'usesAutoTimeZone', {
  enumerable: true,
  get: function () {
    return module647.usesAutoTimeZone;
  },
});

var module647 = require('./647');

function n(t) {
  console.error('`'.concat(t, '` is not a valid react-native-localize event'));
}

function u(t) {
  var n = t.languageCode,
    u = t.scriptCode;
  return n + (u ? '-' + u : '');
}
