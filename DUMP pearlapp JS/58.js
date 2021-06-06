var module59 = require('@babel/runtime/helpers/interopRequireDefault')(require('./59')),
  s = {
    __constants: null,
    OS: 'ios',

    get Version() {
      return this.constants.osVersion;
    },

    get constants() {
      if (null == this.__constants) this.__constants = module59.default.getConstants();
      return this.__constants;
    },

    get isPad() {
      return 'pad' === this.constants.interfaceIdiom;
    },

    get isTVOS() {
      return s.isTV;
    },

    get isTV() {
      return 'tv' === this.constants.interfaceIdiom;
    },

    get isTesting() {
      return false;
    },

    select: function (t) {
      return 'ios' in t ? t.ios : t.default;
    },
  };

module.exports = s;
