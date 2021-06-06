var module10 = require('./10'),
  module101 = require('./101');

function p(o, u, l) {
  if (module101()) module.exports = p = Reflect.construct;
  else
    module.exports = p = function (t, p, o) {
      var u = [null];
      u.push.apply(u, p);
      var l = new (Function.bind.apply(t, u))();
      if (o) module10(l, o.prototype);
      return l;
    };
  return p.apply(null, arguments);
}

module.exports = p;
