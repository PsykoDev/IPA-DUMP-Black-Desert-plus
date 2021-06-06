var module32 = require('./32'),
  n = {
    register: function (n) {
      module32.registerCallableModule('RCTEventEmitter', n);
    },
  };

module.exports = n;
