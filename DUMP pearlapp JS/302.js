var module303 = require('@babel/runtime/helpers/interopRequireDefault')(require('./303')),
  n = module303.default
    ? module303.default.getConstants()
    : {
        isRTL: false,
        doLeftAndRightSwapInRTL: true,
      };

module.exports = {
  getConstants: function () {
    return n;
  },
  allowRTL: function (n) {
    if (module303.default) module303.default.allowRTL(n);
  },
  forceRTL: function (n) {
    if (module303.default) module303.default.forceRTL(n);
  },
  swapLeftAndRightInRTL: function (n) {
    if (module303.default) module303.default.swapLeftAndRightInRTL(n);
  },
  isRTL: n.isRTL,
  doLeftAndRightSwapInRTL: n.doLeftAndRightSwapInRTL,
};
