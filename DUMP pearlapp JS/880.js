var module881 = require('./881'),
  module883 = require('./883'),
  module882 = require('./882'),
  module885 = require('./885'),
  p = /^\[object .+?Constructor\]$/,
  u = Function.prototype,
  s = Object.prototype,
  $ = u.toString,
  f = s.hasOwnProperty,
  l = RegExp(
    '^' +
      $.call(f)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

module.exports = function (u) {
  return !(!module882(u) || module883(u)) && (module881(u) ? l : p).test(module885(u));
};
