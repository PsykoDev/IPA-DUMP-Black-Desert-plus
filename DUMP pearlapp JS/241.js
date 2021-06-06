var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function h() {
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

require('./217');

require('./236');

var l,
  module238 = require('./238'),
  module220 = require('./220').shouldUseNativeDriver;

function v() {
  if (!l) {
    var module242 = require('./242');

    l = module242.inOut(module242.ease);
  }

  return l;
}

class p {
  constructor(n) {
    var s, o, u, _, h, l;

    module7(this, D);
    (l = V.call(this))._toValue = n.toValue;
    l._easing = null != (s = n.easing) ? s : v();
    l._duration = null != (o = n.duration) ? o : 500;
    l._delay = null != (u = n.delay) ? u : 0;
    l.__iterations = null != (_ = n.iterations) ? _ : 1;
    l._useNativeDriver = module220(n);
    l.__isInteraction = null != (h = n.isInteraction) ? h : !l._useNativeDriver;
    return l;
  }

  __getNativeAnimationConfig() {
    for (var t = [], n = 0; n < this._duration; n += 16.666666666666668) t.push(this._easing(n / this._duration));

    t.push(this._easing(1));
    return {
      type: 'frames',
      frames: t,
      toValue: this._toValue,
      iterations: this.__iterations,
    };
  }

  start(t, n, s, o, u) {
    var _ = this;

    this.__active = true;
    this._fromValue = t;
    this._onUpdate = n;
    this.__onEnd = s;

    var h = function () {
      if (0 !== _._duration || _._useNativeDriver) {
        _._startTime = Date.now();
        if (_._useNativeDriver) _.__startNativeAnimation(u);
        else _._animationFrame = requestAnimationFrame(_.onUpdate.bind(_));
      } else {
        _._onUpdate(_._toValue);

        _.__debouncedOnEnd({
          finished: true,
        });
      }
    };

    if (this._delay) this._timeout = setTimeout(h, this._delay);
    else h();
  }

  onUpdate() {
    var t = Date.now();

    if (t >= this._startTime + this._duration) {
      if (0 === this._duration) this._onUpdate(this._toValue);
      else this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
      return void this.__debouncedOnEnd({
        finished: true,
      });
    }

    this._onUpdate(this._fromValue + this._easing((t - this._startTime) / this._duration) * (this._toValue - this._fromValue));

    if (this.__active) this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  }

  stop() {
    module49(module13(D.prototype), 'stop', this).call(this);
    this.__active = false;
    clearTimeout(this._timeout);
    globals.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false,
    });
  }
}

module.exports = p;
