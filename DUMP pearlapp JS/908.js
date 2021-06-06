var module909 = require('./909'),
  module921 = require('./921'),
  module925 = require('./925');

module.exports = function (u) {
  return module925(u) ? module909(u) : module921(u);
};
