var module45 = require('./45');

module.exports = module45;

module45.prototype.finally = function (t) {
  return this.then(
    function (o) {
      return module45.resolve(t()).then(function () {
        return o;
      });
    },
    function (o) {
      return module45.resolve(t()).then(function () {
        throw o;
      });
    }
  );
};
