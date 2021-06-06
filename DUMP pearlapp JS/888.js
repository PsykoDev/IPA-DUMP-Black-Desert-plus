var module889 = require('./889'),
  module865 = require('./865'),
  module878 = require('./878');

module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new module889(),
    map: new (module878 || module865)(),
    string: new module889(),
  };
};
