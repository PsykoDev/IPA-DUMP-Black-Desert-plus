var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1034 = require('./1034'),
  module1077 = require('./1077'),
  module1079 = require('./1079'),
  module1075 = require('./1075'),
  module1028 = require('./1028'),
  module1037 = require('./1037'),
  module210 = require('./210');

function b() {
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

function k(t, s) {
  return undefined === t || null === t ? s : t;
}

var T = (function (t) {
  module9.default(D, t);

  var module1077 = D,
    T = b(),
    w = function () {
      var t,
        s = module13.default(module1077);

      if (T) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(s, arguments, n);
      } else t = s.apply(this, arguments);

      return module11.default(this, t);
    };

  function D(t) {
    var n;

    if (
      (module7.default(this, D),
      ((n = w.call(this))._overshootClamping = k(t.overshootClamping, false)),
      (n._restDisplacementThreshold = k(t.restDisplacementThreshold, 0.001)),
      (n._restSpeedThreshold = k(t.restSpeedThreshold, 0.001)),
      (n._initialVelocity = k(t.velocity, 0)),
      (n._lastVelocity = k(t.velocity, 0)),
      (n._toValue = t.toValue),
      (n._delay = k(t.delay, 0)),
      undefined !== t.stiffness || undefined !== t.damping || undefined !== t.mass)
    ) {
      module210.default(
        undefined === t.bounciness && undefined === t.speed && undefined === t.tension && undefined === t.friction,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      n._stiffness = k(t.stiffness, 100);
      n._damping = k(t.damping, 10);
      n._mass = k(t.mass, 1);
    } else if (undefined !== t.bounciness || undefined !== t.speed) {
      module210.default(
        undefined === t.tension && undefined === t.friction && undefined === t.stiffness && undefined === t.damping && undefined === t.mass,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      var o = module1079.default.fromBouncinessAndSpeed(k(t.bounciness, 8), k(t.speed, 12));
      n._stiffness = o.stiffness;
      n._damping = o.damping;
      n._mass = 1;
    } else {
      var f = module1079.default.fromOrigamiTensionAndFriction(k(t.tension, 40), k(t.friction, 7));
      n._stiffness = f.stiffness;
      n._damping = f.damping;
      n._mass = 1;
    }

    module210.default(n._stiffness > 0, 'Stiffness value must be greater than 0');
    module210.default(n._damping > 0, 'Damping value must be greater than 0');
    module210.default(n._mass > 0, 'Mass value must be greater than 0');
    return n;
  }

  module8.default(
    D,
    [
      {
        key: 'start',
        value: function (t) {
          this._clock = new module1037.default();
          var s = {
              finished: new module1034.default(0),
              velocity: new module1034.default(this._initialVelocity),
              position: t,
              time: new module1034.default(0),
            },
            n = {
              damping: this._damping,
              mass: this._mass,
              stiffness: this._stiffness,
              toValue: this._toValue,
              overshootClamping: this._overshootClamping,
              restSpeedThreshold: this._restSpeedThreshold,
              restDisplacementThreshold: this._restDisplacementThreshold,
            };
          return module1028.block([
            module1028.cond(module1028.clockRunning(this._clock), 0, [module1028.startClock(this._clock)]),
            module1075.default(this._clock, s, n),
            module1028.cond(s.finished, module1028.stopClock(this._clock)),
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
            velocity: new module1034.default(0),
            time: new module1034.default(0),
          };
        },
      },
    ]
  );
  return D;
})(module1077.default);

exports.default = T;
