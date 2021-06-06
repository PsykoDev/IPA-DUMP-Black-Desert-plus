var module854 = require('./854'),
  t = module854 ? module854.prototype : undefined,
  n = t ? t.valueOf : undefined;

module.exports = function (o) {
  return n ? Object(n.call(o)) : {};
};
