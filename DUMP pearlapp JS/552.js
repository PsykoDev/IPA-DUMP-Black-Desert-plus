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

var module553 = (function (t) {
  module9.default(h, t);

  var module553 = h,
    p = o(),
    s = function () {
      var t,
        n = module13.default(module553);

      if (p) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h(t) {
    var u;
    module7.default(this, h);
    (u = s.call(this, t.error)).path = t.path;
    u.appName = t.appName;
    return u;
  }

  return h;
})(require('./553').default);

exports.default = module553;
