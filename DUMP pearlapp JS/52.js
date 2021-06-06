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

var module53 = require('./53'),
  l = (function (l) {
    module9(y, module53);

    var h = y,
      v = f(),
      p = function () {
        var t,
          n = module13(h);

        if (v) {
          var c = module13(this).constructor;
          t = Reflect.construct(n, arguments, c);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function y(n, c, o, u) {
      var f;
      module7(this, y);
      (f = p.call(this, c)).emitter = n;
      f.listener = o;
      f.context = u;
      return f;
    }

    module8(y, [
      {
        key: 'remove',
        value: function () {
          this.emitter.removeSubscription(this);
        },
      },
    ]);
    return y;
  })();

class l {
  constructor(n, c, o, u) {
    var f;
    module7(this, y);
    (f = p.call(this, c)).emitter = n;
    f.listener = o;
    f.context = u;
    return f;
  }

  remove() {
    this.emitter.removeSubscription(this);
  }
}

module.exports = l;
