var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1077 = require('./1077'),
  module1073 = require('./1073'),
  module1028 = require('./1028'),
  module1037 = require('./1037'),
  module1034 = require('./1034');

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

var k = (function (t) {
  module9.default(w, t);

  var module1077 = w,
    k = _(),
    p = function () {
      var t,
        n = module13.default(module1077);

      if (k) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function w(t) {
    var c;
    module7.default(this, w);
    (c = p.call(this))._deceleration = undefined !== t.deceleration ? t.deceleration : 0.998;
    c._velocity = t.velocity;
    return c;
  }

  module8.default(
    w,
    [
      {
        key: 'start',
        value: function (t) {
          this._clock = new module1037.default();
          var n = {
              finished: new module1034.default(0),
              velocity: new module1034.default(this._velocity),
              position: t,
              time: new module1034.default(0),
            },
            c = {
              deceleration: this._deceleration,
            };
          return module1028.block([
            module1028.cond(module1028.clockRunning(this._clock), 0, [module1028.startClock(this._clock)]),
            module1073.default(this._clock, n, c),
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
            velocity: new module1034.default(0),
          };
        },
      },
    ]
  );
  return w;
})(module1077.default);

exports.default = k;
