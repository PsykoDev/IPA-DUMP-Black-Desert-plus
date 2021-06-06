var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function f() {
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
    l = f(),
    v = function () {
      var t,
        n = module13.default(module98);

      if (l) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h(t) {
    var o;
    module7.default(this, h);
    (o = v.call(this, t.message)).code = t.code;
    o.message = t.message;
    o.nativeErrorCode = t.nativeErrorCode;
    o.nativeErrorMessage = t.nativeErrorMessage;
    return o;
  }

  return h;
})(require('./98').default(Error));

exports.default = module98;
