var module968 = require('./968'),
  c = 500;

module.exports = function (t) {
  var u = module968(t, function (n) {
      if (o.size === c) o.clear();
      return n;
    }),
    o = u.cache;
  return u;
};
