var module259 = require('@babel/runtime/helpers/interopRequireDefault')(require('./259')),
  module260 = require('./260'),
  module124 = require('./124'),
  module261 = require('./261'),
  module18 = require('./18'),
  c = {
    addListener: function (n, o) {
      module18(false, 'Dummy method used for documentation');
    },
    removeListener: function (n, o) {
      module18(false, 'Dummy method used for documentation');
    },
    removeAllListeners: function (n) {
      module18(false, 'Dummy method used for documentation');
    },
    dismiss: function () {
      module18(false, 'Dummy method used for documentation');
    },
    scheduleLayoutAnimation: function (n) {
      module18(false, 'Dummy method used for documentation');
    },
  };

(c = new module124(module259.default)).dismiss = module261;

c.scheduleLayoutAnimation = function (n) {
  var t = n.duration,
    u = n.easing;
  if (null != t && 0 !== t)
    module260.configureNext({
      duration: t,
      update: {
        duration: t,
        type: (null != u && module260.Types[u]) || 'keyboard',
      },
    });
};

module.exports = c;
