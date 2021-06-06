var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module321 = require('./321');

function l() {
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

var module124 = (function (t) {
  module9.default(h, t);

  var module321 = h,
    module124 = l(),
    p = function () {
      var t,
        n = module13.default(module321);

      if (module124) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h() {
    module7.default(this, h);
    return p.apply(this, arguments);
  }

  return h;
})(require('./124'));

module.exports = new module124(module321.default);
