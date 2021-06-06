var module20 = require('./20'),
  n = {};

module.exports = function (c, o) {
  if (!n[c]) {
    module20(false, o);
    n[c] = true;
  }
};
