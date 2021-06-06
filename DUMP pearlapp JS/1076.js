var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1034 = require('./1034'),
  module1074 = require('./1074'),
  module1028 = require('./1028'),
  module1037 = require('./1037'),
  module1027 = require('./1027'),
  module1077 = require('./1077');

function p() {
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

var y = module1027.default.inOut(module1027.default.ease),
  w = (function (t) {
    module9.default(R, t);

    var module1027 = R,
      module1077 = p(),
      w = function () {
        var t,
          n = module13.default(module1027);

        if (module1077) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function R(t) {
      var u;
      module7.default(this, R);
      (u = w.call(this))._toValue = t.toValue;
      u._easing = undefined !== t.easing ? t.easing : y;
      u._duration = undefined !== t.duration ? t.duration : 500;
      return u;
    }

    module8.default(
      R,
      [
        {
          key: 'start',
          value: function (t) {
            this._clock = new module1037.default();
            var n = {
                finished: new module1034.default(0),
                position: t,
                time: new module1034.default(0),
                frameTime: new module1034.default(0),
              },
              u = {
                duration: this._duration,
                toValue: this._toValue,
                easing: this._easing,
              };
            return module1028.block([
              module1028.cond(module1028.clockRunning(this._clock), 0, [module1028.startClock(this._clock)]),
              module1074.default(this._clock, n, u),
              module1028.cond(n.finished, module1028.stopClock(this._clock)),
            ]);
          },
        },
        {
          key: 'stop',
          value: function () {},
        },
      ],
      [
        {
          key: 'getDefaultState',
          value: function () {
            return {
              position: new module1034.default(0),
              finished: new module1034.default(0),
              time: new module1034.default(0),
              frameTime: new module1034.default(0),
            };
          },
        },
      ]
    );
    return R;
  })(module1077.default);

exports.default = w;
