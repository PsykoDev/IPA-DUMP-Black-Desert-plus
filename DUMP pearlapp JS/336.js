var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function o() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var module98 = (function (t) {
  module9.default(v, t);

  var module98 = v,
    s = o(),
    p = function () {
      var t,
        u = module13.default(module98);

      if (s) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function v() {
    module7.default(this, v);
    return p.apply(this, arguments);
  }

  return v;
})(require('./98').default(Error));

exports.default = module98;
