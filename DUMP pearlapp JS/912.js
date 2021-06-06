var module853 = require('./853'),
  module860 = require('./860'),
  o = '[object Arguments]';

module.exports = function (u) {
  return module860(u) && module853(u) == o;
};
