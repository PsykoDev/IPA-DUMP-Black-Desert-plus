var module853 = require('./853'),
  module859 = require('./859'),
  module860 = require('./860'),
  c = '[object String]';

module.exports = function (f) {
  return 'string' == typeof f || (!module859(f) && module860(f) && module853(f) == c);
};
