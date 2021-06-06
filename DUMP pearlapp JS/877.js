var module865 = require('./865'),
  module878 = require('./878'),
  module887 = require('./887');

module.exports = function (n, h) {
  var f = this.__data__;

  if (f instanceof module865) {
    var u = f.__data__;

    if (!module878 || u.length < 199) {
      u.push([n, h]);
      this.size = ++f.size;
      return this;
    }

    f = this.__data__ = new module887(u);
  }

  f.set(n, h);
  this.size = f.size;
  return this;
};
