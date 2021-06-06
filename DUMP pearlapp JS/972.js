var module973 = require('./973'),
  module975 = require('./975');

module.exports = function (o, u) {
  return u.length < 2 ? o : module973(o, module975(u, 0, -1));
};
