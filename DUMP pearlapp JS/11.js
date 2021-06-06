var module5 = require('./5'),
  module12 = require('./12');

module.exports = function (o, c) {
  return !c || ('object' !== module5(c) && 'function' != typeof c) ? module12(o) : c;
};
