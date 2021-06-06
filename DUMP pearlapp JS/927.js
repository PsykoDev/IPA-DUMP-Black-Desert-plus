var module909 = require('./909'),
  module928 = require('./928'),
  module925 = require('./925');

module.exports = function (u) {
  return module925(u) ? module909(u, true) : module928(u);
};
