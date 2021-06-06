exports.default = function (t) {
  switch (t) {
    case 'vertical':
      return 1;

    case 'vertical-inverted':
      return -1;

    case 'horizontal':
      return module17.I18nManager.isRTL ? -1 : 1;

    case 'horizontal-inverted':
      return module17.I18nManager.isRTL ? 1 : -1;
  }
};

var module17 = require('./17');
