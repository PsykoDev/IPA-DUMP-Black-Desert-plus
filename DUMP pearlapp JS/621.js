exports.__esModule = true;

exports.default = function (o) {
  var c = o.storage,
    u = ''.concat(undefined !== o.keyPrefix ? o.keyPrefix : module617.KEY_PREFIX).concat(o.key);
  return c.removeItem(u, n);
};

var module617 = require('./617');

function n(t) {
  0;
}
