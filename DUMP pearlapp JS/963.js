var module859 = require('./859'),
  module964 = require('./964'),
  module966 = require('./966'),
  module969 = require('./969');

module.exports = function (c, f) {
  return module859(c) ? c : module964(c, f) ? [c] : module966(module969(c));
};
