var module943 = require('./943'),
  module860 = require('./860'),
  o = '[object Set]';

module.exports = function (c) {
  return module860(c) && module943(c) == o;
};
