require('./58');

var module208 = require('@babel/runtime/helpers/interopRequireDefault')(require('./208')),
  module124 = require('./124');

function v() {
  this.__nativeTVNavigationEventListener = null;
  this.__nativeTVNavigationEventEmitter = null;
}

v.prototype.enable = function (v, o) {
  if (module208.default) {
    this.__nativeTVNavigationEventEmitter = new module124(module208.default);
    this.__nativeTVNavigationEventListener = this.__nativeTVNavigationEventEmitter.addListener('onHWKeyEvent', function (t) {
      if (o) o(v, t);
    });
  }
};

v.prototype.disable = function () {
  if (this.__nativeTVNavigationEventListener) {
    this.__nativeTVNavigationEventListener.remove();

    delete this.__nativeTVNavigationEventListener;
  }

  if (this.__nativeTVNavigationEventEmitter) delete this.__nativeTVNavigationEventEmitter;
};

module.exports = v;
