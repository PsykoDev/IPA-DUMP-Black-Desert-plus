var module891 = require('./891'),
  o = Object.prototype.hasOwnProperty;

module.exports = function (n) {
  var _ = this.__data__;
  return module891 ? undefined !== _[n] : o.call(_, n);
};
