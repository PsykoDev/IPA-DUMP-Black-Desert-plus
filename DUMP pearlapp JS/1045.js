var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1035 = require('./1035'),
  module1046 = require('./1046'),
  module1034 = require('./1034'),
  module17 = require('./17'),
  module1051 = require('./1051'),
  module1033 = require('./1033');

function _() {
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

var R = (function (t) {
  module9.default(D, t);

  var module1034 = D,
    R = _(),
    V = function () {
      var t,
        n = module13.default(module1034);

      if (R) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function D() {
    module7.default(this, D);
    return V.apply(this, arguments);
  }

  module8.default(D, [
    {
      key: 'setValue',
      value: function (t) {
        this.__detachAnimation(this._animation);

        if ('web' === module17.Platform.OS) this._updateValue(t);
        else if (module1033.default.setValue && 'number' == typeof t) module1033.default.setValue(this.__nodeID, t);
        else module1051.evaluateOnce(module1035.createAnimatedSet(this, t), this);
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'AnimatedValue, id: ' + this.__nodeID;
      },
    },
    {
      key: 'interpolate',
      value: function (t) {
        return module1046.default(this, t);
      },
    },
  ]);
  return D;
})(module1034.default);

exports.default = R;
