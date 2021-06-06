exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    f = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    H = arguments.length > 3 ? arguments[3] : undefined,
    w = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : {},
    T = (function (n) {
      module9.default(N, n);

      var T = N,
        C = E(),
        S = function () {
          var t,
            n = module13.default(T);

          if (C) {
            var o = module13.default(this).constructor;
            t = Reflect.construct(n, arguments, o);
          } else t = n.apply(this, arguments);

          return module11.default(this, t);
        };

      function N(n) {
        var u;

        if (
          (module7.default(this, N),
          ((u = S.call(this, n))._onGestureHandlerEvent = function (t) {
            if (t.nativeEvent.handlerTag === u._handlerTag) {
              if (u.props.onGestureEvent) u.props.onGestureEvent(t);
            } else if (u.props.onGestureHandlerEvent) u.props.onGestureHandlerEvent(t);
          }),
          (u._onGestureHandlerStateChange = function (t) {
            if (t.nativeEvent.handlerTag === u._handlerTag) {
              if (u.props.onHandlerStateChange) u.props.onHandlerStateChange(t);
              var n = J[t.nativeEvent.state];
              if ('function' == typeof u.props[n]) u.props[n](t);
            } else u.props.onGestureHandlerStateChange && u.props.onGestureHandlerStateChange(t);
          }),
          (u._refHandler = function (t) {
            u._viewNode = t;
            var n = React.default.Children.only(u.props.children),
              o = n.ref;
            if (null !== o) 'function' == typeof o ? o(t) : (o.current = t);
          }),
          (u._createGestureHandler = function (n) {
            u._config = n;
            module386.default.createGestureHandler(t, u._handlerTag, n);
          }),
          (u._attachGestureHandler = function (t) {
            u._viewTag = t;
            module386.default.attachGestureHandler(u._handlerTag, t);
          }),
          (u._updateGestureHandler = function (t) {
            u._config = t;
            module386.default.updateGestureHandler(u._handlerTag, t);
          }),
          (u._handlerTag = b++),
          (u._config = {}),
          n.id)
        ) {
          if (undefined !== A[n.id]) throw new Error('Handler with ID "' + n.id + '" already registered');
          A[n.id] = u._handlerTag;
        }

        return u;
      }

      module8.default(N, [
        {
          key: 'componentWillUnmount',
          value: function () {
            module386.default.dropGestureHandler(this._handlerTag);
            if (this._updateEnqueued) clearImmediate(this._updateEnqueued);
            if (this.props.id) delete A[this.props.id];
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var t,
              n,
              o = this;
            t = this.props;
            if (
              (n = function (t) {
                return Array.isArray(t)
                  ? t.some(function (t) {
                      return t && null === t.current;
                    })
                  : t && null === t.current;
              })(t.simultaneousHandlers) ||
              n(t.waitFor)
            )
              this._updateEnqueued = setImmediate(function () {
                o._updateEnqueued = null;

                o._update();
              });

            this._createGestureHandler(k(H ? H(this.props) : this.props, module6.default({}, this.constructor.propTypes, w), f));

            this._attachGestureHandler(G(this._viewNode));
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var t = G(this._viewNode);
            if (this._viewTag !== t) this._attachGestureHandler(t);

            this._update();
          },
        },
        {
          key: '_update',
          value: function () {
            var t = k(H ? H(this.props) : this.props, module6.default({}, this.constructor.propTypes, w), f);
            if (!module385.default(this._config, t)) this._updateGestureHandler(t);
          },
        },
        {
          key: 'setNativeProps',
          value: function (t) {
            var n = module6.default({}, this.props, t),
              o = k(H ? H(n) : n, module6.default({}, this.constructor.propTypes, w), f);

            this._updateGestureHandler(o);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this._onGestureHandlerEvent,
              n = this.props,
              o = n.onGestureEvent,
              u = n.onGestureHandlerEvent;

            if (o && 'function' != typeof o) {
              if (u) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              t = this.props.onGestureEvent;
            } else if (u && 'function' != typeof u) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var s = this._onGestureHandlerStateChange,
              l = this.props,
              p = l.onHandlerStateChange,
              f = l.onGestureHandlerStateChange;

            if (p && 'function' != typeof p) {
              if (f) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              s = this.props.onHandlerStateChange;
            } else if (f && 'function' != typeof f) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var c = React.default.Children.only(this.props.children),
              y = c.props.children;
            if (module17.Touchable.TOUCH_TARGET_DEBUG && c.type && ('RNGestureHandlerButton' === c.type || 'View' === c.type.name || 'View' === c.type.displayName))
              (y = React.default.Children.toArray(y)).push(
                module17.Touchable.renderDebugView({
                  color: 'mediumspringgreen',
                  hitSlop: c.props.hitSlop,
                })
              );
            return React.default.cloneElement(
              c,
              {
                ref: this._refHandler,
                collapsable: false,
                onGestureHandlerEvent: t,
                onGestureHandlerStateChange: s,
              },
              y
            );
          },
        },
      ]);
      return N;
    })(React.default.Component);

  T.displayName = t;
  T.propTypes = n;
  return T;
};

var n,
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module247 = require('./247'),
  module6 = require('./6'),
  React = require('react'),
  module17 = require('./17'),
  module385 = require('./385'),
  module386 = require('./386'),
  module387 = require('./387');

function E() {
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

function G(t) {
  return 'web' === module17.Platform.OS ? t : module17.findNodeHandle(t);
}

var w = module17.NativeModules.UIManager,
  T = undefined === w ? {} : w,
  C = {
    onGestureHandlerEvent: {
      registrationName: 'onGestureHandlerEvent',
    },
    onGestureHandlerStateChange: {
      registrationName: 'onGestureHandlerStateChange',
    },
  };
T.genericDirectEventTypes = module6.default({}, T.genericDirectEventTypes, C);
if (T.getConstants) T.getConstants().genericDirectEventTypes = module6.default({}, T.getConstants().genericDirectEventTypes, C);
var S = T.setJSResponder,
  N = undefined === S ? function () {} : S,
  D = T.clearJSResponder,
  R = undefined === D ? function () {} : D;

T.setJSResponder = function (t, n) {
  module386.default.handleSetJSResponder(t, n);
  N(t, n);
};

T.clearJSResponder = function () {
  module386.default.handleClearJSResponder();
  R();
};

var b = 1,
  A = {};

function k(t, n) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    u = module6.default({}, o);
  Object.keys(n).forEach(function (n) {
    var o,
      s,
      l = t[n];

    if (((s = n), !(undefined === (o = l) || (o === Object(o) && '__isNative' in o) || 'onHandlerStateChange' === s || 'onGestureEvent' === s))) {
      var p = t[n];
      if ('simultaneousHandlers' === n || 'waitFor' === n) p = I(t[n]);
      else if ('hitSlop' === n && 'object' != typeof p)
        p = {
          top: p,
          left: p,
          bottom: p,
          right: p,
        };
      u[n] = p;
    }
  });
  return u;
}

function I(t) {
  if (!Array.isArray(t)) t = [t];
  return 'web' === module17.Platform.OS
    ? t
        .map(function (t) {
          return t.current;
        })
        .filter(function (t) {
          return t;
        })
    : t
        .map(function (t) {
          return A[t] || (t.current && t.current._handlerTag) || -1;
        })
        .filter(function (t) {
          return t > 0;
        });
}

n = {};
module247.default(n, module387.default.BEGAN, 'onBegan');
module247.default(n, module387.default.FAILED, 'onFailed');
module247.default(n, module387.default.CANCELLED, 'onCancelled');
module247.default(n, module387.default.ACTIVE, 'onActivated');
module247.default(n, module387.default.END, 'onEnded');
var J = n;
