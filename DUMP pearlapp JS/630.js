exports.useAsyncStorage = function (t) {
  return {
    getItem: function (...args) {
      return module628.default.getItem.apply(module628.default, [t].concat(args));
    },
    setItem: function (...args) {
      return module628.default.setItem.apply(module628.default, [t].concat(args));
    },
    mergeItem: function (...args) {
      return module628.default.mergeItem.apply(module628.default, [t].concat(args));
    },
    removeItem: function (...args) {
      return module628.default.removeItem.apply(module628.default, [t].concat(args));
    },
  };
};

var module628 = require('./628');
