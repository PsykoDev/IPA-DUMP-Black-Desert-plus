var module45 = require('./45');

module.exports = module45;

module45.prototype.done = function (t, n) {
  (arguments.length ? this.then.apply(this, arguments) : this).then(null, function (t) {
    setTimeout(function () {
      throw t;
    }, 0);
  });
};
