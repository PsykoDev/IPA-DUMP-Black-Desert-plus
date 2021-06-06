var module882 = require('./882'),
  n = Object.create,
  o = (function () {
    function o() {}

    return function (u) {
      if (!module882(u)) return {};
      if (n) return n(u);
      o.prototype = u;
      var c = new o();
      o.prototype = undefined;
      return c;
    };
  })();

module.exports = o;
