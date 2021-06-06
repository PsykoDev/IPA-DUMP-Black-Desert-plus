var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

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

var module218 = require('./218'),
  module222 = require('./222'),
  module223 = require('./223'),
  module220 = require('./220').API;

function p(t) {
  var n = new Set();
  !(function t(s) {
    if ('function' == typeof s.update) n.add(s);
    else s.__getChildren().forEach(t);
  })(t);
  n.forEach(function (t) {
    return t.update();
  });
}

class y {
  constructor(n) {
    var s;
    module7(this, A);
    (s = V.call(this))._startingValue = s._value = n;
    s._offset = 0;
    s._animation = null;
    return s;
  }

  __detach() {
    this.stopAnimation();
    module49(module13(A.prototype), '__detach', this).call(this);
  }

  __getValue() {
    return this._value + this._offset;
  }

  setValue(t) {
    if (this._animation) {
      this._animation.stop();

      this._animation = null;
    }

    this._updateValue(t, !this.__isNative);

    if (this.__isNative) module220.setAnimatedNodeValue(this.__getNativeTag(), t);
  }

  setOffset(t) {
    this._offset = t;
    if (this.__isNative) module220.setAnimatedNodeOffset(this.__getNativeTag(), t);
  }

  flattenOffset() {
    this._value += this._offset;
    this._offset = 0;
    if (this.__isNative) module220.flattenAnimatedNodeOffset(this.__getNativeTag());
  }

  extractOffset() {
    this._offset += this._value;
    this._value = 0;
    if (this.__isNative) module220.extractAnimatedNodeOffset(this.__getNativeTag());
  }

  stopAnimation(t) {
    this.stopTracking();
    if (this._animation) this._animation.stop();
    this._animation = null;
    if (t) t(this.__getValue());
  }

  resetAnimation(t) {
    this.stopAnimation(t);
    this._value = this._startingValue;
  }

  _onAnimatedValueUpdateReceived(t) {
    this._updateValue(t, false);
  }

  interpolate(t) {
    return new module218(this, t);
  }

  animate(t, n) {
    var s = this,
      u = null;
    if (t.__isInteraction) u = module223.createInteractionHandle();
    var o = this._animation;
    if (this._animation) this._animation.stop();
    this._animation = t;
    t.start(
      this._value,
      function (t) {
        s._updateValue(t, true);
      },
      function (t) {
        s._animation = null;
        if (null !== u) module223.clearInteractionHandle(u);
        if (n) n(t);
      },
      o,
      this
    );
  }

  stopTracking() {
    if (this._tracking) this._tracking.__detach();
    this._tracking = null;
  }

  track(t) {
    this.stopTracking();
    this._tracking = t;
  }

  _updateValue(t, n) {
    this._value = t;
    if (n) p(this);
    module49(module13(A.prototype), '__callListeners', this).call(this, this.__getValue());
  }

  __getNativeConfig() {
    return {
      type: 'value',
      value: this._value,
      offset: this._offset,
    };
  }
}

module.exports = y;
