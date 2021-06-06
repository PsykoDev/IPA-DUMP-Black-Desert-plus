var module7 = require('./7'),
  module220 = require('./220'),
  _ = (function () {
    function _() {
      module7(this, _);
    }

    module8(_, [
      {
        key: 'start',
        value: function (n, t, o, _, u) {},
      },
      {
        key: 'stop',
        value: function () {
          if (this.__nativeId) module220.API.stopAnimation(this.__nativeId);
        },
      },
      {
        key: '__getNativeAnimationConfig',
        value: function () {
          throw new Error('This animation type cannot be offloaded to native');
        },
      },
      {
        key: '__debouncedOnEnd',
        value: function (n) {
          var t = this.__onEnd;
          this.__onEnd = null;
          if (t) t(n);
        },
      },
      {
        key: '__startNativeAnimation',
        value: function (n) {
          module220.API.enableQueue();

          n.__makeNative();

          module220.API.disableQueue();
          this.__nativeId = module220.generateNewAnimationId();
          module220.API.startAnimatingNode(this.__nativeId, n.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
        },
      },
    ]);
    return _;
  })();

class _ {
  constructor() {
    module7(this, _);
  }

  start(n, t, o, _, u) {}

  stop() {
    if (this.__nativeId) module220.API.stopAnimation(this.__nativeId);
  }

  __getNativeAnimationConfig() {
    throw new Error('This animation type cannot be offloaded to native');
  }

  __debouncedOnEnd(n) {
    var t = this.__onEnd;
    this.__onEnd = null;
    if (t) t(n);
  }

  __startNativeAnimation(n) {
    module220.API.enableQueue();

    n.__makeNative();

    module220.API.disableQueue();
    this.__nativeId = module220.generateNewAnimationId();
    module220.API.startAnimatingNode(this.__nativeId, n.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
  }
}

module.exports = _;
