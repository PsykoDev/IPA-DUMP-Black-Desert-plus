var module853 = require('./853'),
  module860 = require('./860'),
  n = '[object Symbol]';

module.exports = function (b) {
  return 'symbol' == typeof b || (module860(b) && module853(b) == n);
};
