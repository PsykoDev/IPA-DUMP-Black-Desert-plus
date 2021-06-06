var module957 = require('./957'),
  module939 = require('./939'),
  module922 = require('./922');

module.exports = function (c) {
  return 'function' != typeof c.constructor || module922(c) ? {} : module957(module939(c));
};
