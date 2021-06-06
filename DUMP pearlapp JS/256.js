var module257 = require('@babel/runtime/helpers/interopRequireDefault')(require('./257')),
  module18 = require('./18'),
  l = {
    setGlobalOptions: function (l) {
      if ((undefined !== l.debug && module18(module257.default, 'Trying to debug FrameRateLogger without the native module!'), module257.default)) {
        var u = {
          debug: !!l.debug,
          reportStackTraces: !!l.reportStackTraces,
        };
        module257.default.setGlobalOptions(u);
      }
    },
    setContext: function (o) {
      if (module257.default) module257.default.setContext(o);
    },
    beginScroll: function () {
      if (module257.default) module257.default.beginScroll();
    },
    endScroll: function () {
      if (module257.default) module257.default.endScroll();
    },
  };

module.exports = l;
