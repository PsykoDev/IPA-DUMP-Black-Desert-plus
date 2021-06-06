var module898 = require('./898');

module.exports = function (n, _) {
  var o = n.__data__;
  return module898(_) ? o['string' == typeof _ ? 'string' : 'hash'] : o.map;
};
