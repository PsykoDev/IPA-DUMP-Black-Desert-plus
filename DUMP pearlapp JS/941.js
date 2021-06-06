var module938 = require('./938'),
  module859 = require('./859');

module.exports = function (o, u, c) {
  var f = u(o);
  return module859(o) ? f : module938(f, c(o));
};
