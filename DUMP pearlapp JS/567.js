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
  module9.default(h, t);

  var module98 = h,
    s = o(),
    v = function () {
      var t,
        n = module13.default(module98);

      if (s) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h(t, u, c) {
    var f;
    module7.default(this, h);
    (f = v.call(this, u)).code = t;
    f.details = c;
    f.message = u;
    return f;
  }

  return h;
})(require('./98').default(Error));

exports.default = module98;
