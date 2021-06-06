var module23 = require('@babel/runtime/helpers/interopRequireDefault')(require('./23')),
  module43 = require('./43'),
  module48 = require('./48'),
  c = {
    announcementFinished: 'announcementFinished',
    boldTextChanged: 'boldTextChanged',
    grayscaleChanged: 'grayscaleChanged',
    invertColorsChanged: 'invertColorsChanged',
    reduceMotionChanged: 'reduceMotionChanged',
    reduceTransparencyChanged: 'reduceTransparencyChanged',
    screenReaderChanged: 'screenReaderChanged',
  },
  o = new Map(),
  s = {
    isBoldTextEnabled: function () {
      return new module43(function (t, u) {
        if (module23.default) module23.default.getCurrentBoldTextState(t, u);
        else u(u);
      });
    },
    isGrayscaleEnabled: function () {
      return new module43(function (t, u) {
        if (module23.default) module23.default.getCurrentGrayscaleState(t, u);
        else u(u);
      });
    },
    isInvertColorsEnabled: function () {
      return new module43(function (t, u) {
        if (module23.default) module23.default.getCurrentInvertColorsState(t, u);
        else u(u);
      });
    },
    isReduceMotionEnabled: function () {
      return new module43(function (t, u) {
        if (module23.default) module23.default.getCurrentReduceMotionState(t, u);
        else u(u);
      });
    },
    isReduceTransparencyEnabled: function () {
      return new module43(function (t, u) {
        if (module23.default) module23.default.getCurrentReduceTransparencyState(t, u);
        else u(u);
      });
    },
    isScreenReaderEnabled: function () {
      return new module43(function (t, u) {
        if (module23.default) module23.default.getCurrentVoiceOverState(t, u);
        else u(u);
      });
    },

    get fetch() {
      return this.isScreenReaderEnabled;
    },

    addEventListener: function (n, t) {
      var l;
      if ('change' === n) l = module48.addListener(c.screenReaderChanged, t);
      else if (c[n]) l = module48.addListener(n, t);
      o.set(t, l);
      return {
        remove: s.removeEventListener.bind(null, n, t),
      };
    },
    setAccessibilityFocus: function (t) {
      if (module23.default) module23.default.setAccessibilityFocus(t);
    },
    announceForAccessibility: function (t) {
      if (module23.default) module23.default.announceForAccessibility(t);
    },
    removeEventListener: function (n, t) {
      var u = o.get(t);

      if (u) {
        u.remove();
        o.delete(t);
      }
    },
  };

module.exports = s;
