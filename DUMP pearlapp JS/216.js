var module7 = require('./7'),
  module217 = require('./217'),
  module220 = require('./220'),
  module90 = require('./90'),
  module18 = require('./18'),
  module220 = require('./220').shouldUseNativeDriver;

function l(t, n, _) {
  var l = [];
  module18(_[0] && _[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');

  (function t(n, v) {
    if (n instanceof module217) {
      n.__makeNative();

      l.push({
        nativeEventPath: v,
        animatedValueTag: n.__getNativeTag(),
      });
    } else if ('object' == typeof n) for (var o in n) t(n[o], v.concat(o));
  })(_[0].nativeEvent, []);

  var h = module90.findNodeHandle(t);
  l.forEach(function (t) {
    module220.API.addAnimatedEventToView(h, n, t);
  });
  return {
    detach: function () {
      l.forEach(function (t) {
        module220.API.removeAnimatedEventFromView(h, n, t.animatedValueTag);
      });
    },
  };
}

class h {
  constructor(n) {
    var s = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    module7(this, v);
    this._listeners = [];
    this._argMapping = n;
    if (s.listener) this.__addListener(s.listener);
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = module220(s);
  }

  __addListener(t) {
    this._listeners.push(t);
  }

  __removeListener(t) {
    this._listeners = this._listeners.filter(function (n) {
      return n !== t;
    });
  }

  __attach(t, n) {
    module18(this.__isNative, 'Only native driven events need to be attached.');
    this._attachedEvent = l(t, n, this._argMapping);
  }

  __detach(t, n) {
    module18(this.__isNative, 'Only native driven events need to be detached.');
    if (this._attachedEvent) this._attachedEvent.detach();
  }

  __getHandler() {
    var t = this;
    return this.__isNative
      ? this._callListeners
      : function (...args) {
          var c = function t(n, v, o) {
            if ('number' == typeof v && n instanceof module217) n.setValue(v);
            else if ('object' == typeof n) for (var c in n) t(n[c], v[c], c);
          };

          if (!t.__isNative)
            t._argMapping.forEach(function (t, n) {
              c(t, args[n]);
            });

          t._callListeners.apply(t, args);
        };
  }

  _callListeners(...args) {
    this._listeners.forEach(function (t) {
      return t.apply(undefined, args);
    });
  }

  _validateMapping() {}
}

module.exports = {
  AnimatedEvent: h,
  attachNativeEvent: l,
};
