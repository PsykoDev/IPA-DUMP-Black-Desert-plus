var n,
  module113 = require('./113');

n = module113.now
  ? function () {
      return module113.now();
    }
  : function () {
      return Date.now();
    };
module.exports = n;
