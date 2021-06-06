var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module684 = require('./684'),
  module693 = require('./693'),
  module663 = require('./663'),
  module694 = require('./694'),
  module695 = require('./695'),
  module696 = require('./696'),
  module681 = require('./681');

function V() {
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

function C() {
  return (C =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
      }

      return t;
    }).apply(this, arguments);
}

function D(t, n) {
  if (null == t) return {};
  var o,
    l,
    s = x(t, n);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (l = 0; l < u.length; l++) {
      o = u[l];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (s[o] = t[o]);
    }
  }

  return s;
}

function x(t, n) {
  if (null == t) return {};
  var o,
    l,
    s = {},
    u = Object.keys(t);

  for (l = 0; l < u.length; l++) {
    o = u[l];
    if (!(n.indexOf(o) >= 0)) s[o] = t[o];
  }

  return s;
}

function A(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function P(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      A(Object(o), true).forEach(function (n) {
        j(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      A(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function j(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

var I = 1,
  k = 0,
  G = 'web' !== module17.Platform.OS,
  H = (function (t, ...args) {
    module9.default(H, t);

    var n = H,
      x = V(),
      A = function () {
        var t,
          o = module13.default(n);

        if (x) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function H() {
      var t;
      module7.default(this, H);
      t = A.call(this, ...args);
      j(module12.default(t), 'isClosing', new module17.Animated.Value(k));
      j(module12.default(t), 'inverted', new module17.Animated.Value(module696.default(t.props.gestureDirection)));
      j(module12.default(t), 'layout', {
        width: new module17.Animated.Value(t.props.layout.width),
        height: new module17.Animated.Value(t.props.layout.height),
      });
      j(module12.default(t), 'isSwiping', new module17.Animated.Value(k));
      j(module12.default(t), 'interactionHandle', undefined);
      j(module12.default(t), 'pendingGestureCallback', undefined);
      j(module12.default(t), 'animate', function (n) {
        var o = n.closing,
          l = n.velocity,
          s = t.props,
          u = s.gesture,
          c = s.transitionSpec,
          f = s.onOpen,
          h = s.onClose,
          p = s.onTransitionStart,
          y = t.getAnimateToValue(
            P({}, t.props, {
              closing: o,
            })
          ),
          w = o ? c.close : c.open,
          b = 'spring' === w.animation ? module17.Animated.spring : module17.Animated.timing;
        t.setPointerEventsEnabled(!o);
        t.handleStartInteraction();
        clearTimeout(t.pendingGestureCallback);
        if (!(null === p || undefined === p))
          p({
            closing: o,
          });
        b(
          u,
          P({}, w.config, {
            velocity: l,
            toValue: y,
            useNativeDriver: G,
            isInteraction: false,
          })
        ).start(function (n) {
          var l = n.finished;
          t.handleEndInteraction();
          clearTimeout(t.pendingGestureCallback);
          if (l) o ? h() : f();
        });
      });
      j(module12.default(t), 'getAnimateToValue', function (t) {
        var n = t.closing,
          o = t.layout,
          l = t.gestureDirection;
        return n ? module695.default(o, l) : 0;
      });
      j(module12.default(t), 'setPointerEventsEnabled', function (n) {
        var o,
          l = n ? 'box-none' : 'none';
        if (!(null === (o = t.contentRef.current) || undefined === o))
          o.setNativeProps({
            pointerEvents: l,
          });
      });
      j(module12.default(t), 'handleStartInteraction', function () {
        if (undefined === t.interactionHandle) t.interactionHandle = module17.InteractionManager.createInteractionHandle();
      });
      j(module12.default(t), 'handleEndInteraction', function () {
        if (undefined !== t.interactionHandle) {
          module17.InteractionManager.clearInteractionHandle(t.interactionHandle);
          t.interactionHandle = undefined;
        }
      });
      j(module12.default(t), 'handleGestureStateChange', function (n) {
        var o = n.nativeEvent,
          l = t.props,
          s = l.layout,
          u = l.onClose,
          c = l.onGestureBegin,
          f = l.onGestureCanceled,
          h = l.onGestureEnd,
          v = l.gestureDirection,
          p = l.gestureVelocityImpact;

        switch (o.state) {
          case module663.GestureState.BEGAN:
            t.isSwiping.setValue(I);
            t.handleStartInteraction();
            if (!(null === c || undefined === c)) c();
            break;

          case module663.GestureState.CANCELLED:
            t.isSwiping.setValue(k);
            t.handleEndInteraction();
            var y = 'vertical' === v || 'vertical-inverted' === v ? o.velocityY : o.velocityX;
            t.animate({
              closing: t.props.closing,
              velocity: y,
            });
            if (!(null === f || undefined === f)) f();
            break;

          case module663.GestureState.END:
            var b, E, O;
            t.isSwiping.setValue(k);

            if ('vertical' === v || 'vertical-inverted' === v) {
              b = s.height;
              E = o.translationY;
              O = o.velocityY;
            } else {
              b = s.width;
              E = o.translationX;
              O = o.velocityX;
            }

            var V = (E + O * p) * module696.default(v) > b / 2 ? 0 !== O || 0 !== E : t.props.closing;
            t.animate({
              closing: V,
              velocity: O,
            });
            if (V) t.pendingGestureCallback = setTimeout(u, 32);
            if (!(null === h || undefined === h)) h();
        }
      });
      j(
        module12.default(t),
        'getInterpolatedStyle',
        module681.default(function (n, o, l, s, u, c, f, h, v) {
          return n({
            index: o,
            current: {
              progress: l,
            },
            next: s && {
              progress: s,
            },
            closing: t.isClosing,
            swiping: t.isSwiping,
            inverted: t.inverted,
            layouts: {
              screen: u,
            },
            insets: {
              top: c,
              right: f,
              bottom: h,
              left: v,
            },
          });
        })
      );
      j(
        module12.default(t),
        'getCardAnimationContext',
        module681.default(function (n, o, l, s, u, c, f, h) {
          return {
            index: n,
            current: {
              progress: o,
            },
            next: l && {
              progress: l,
            },
            closing: t.isClosing,
            swiping: t.isSwiping,
            inverted: t.inverted,
            layouts: {
              screen: s,
            },
            insets: {
              top: u,
              right: c,
              bottom: f,
              left: h,
            },
          };
        })
      );
      j(module12.default(t), 'contentRef', React.createRef());
      return t;
    }

    module8.default(H, [
      {
        key: 'componentDidMount',
        value: function () {
          this.animate({
            closing: this.props.closing,
          });
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props,
            o = n.layout,
            l = n.gestureDirection,
            s = n.closing,
            u = o.width,
            c = o.height;
          if (u !== t.layout.width) this.layout.width.setValue(u);
          if (c !== t.layout.height) this.layout.height.setValue(c);
          if (l !== t.gestureDirection) this.inverted.setValue(module696.default(l));
          if (this.getAnimateToValue(this.props) !== this.getAnimateToValue(t))
            this.animate({
              closing: s,
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.handleEndInteraction();
        },
      },
      {
        key: 'gestureActivationCriteria',
        value: function () {
          var t = this.props,
            n = t.layout,
            o = t.gestureDirection,
            l = t.gestureResponseDistance,
            s =
              'vertical' === o || 'vertical-inverted' === o
                ? undefined !== (null === l || undefined === l ? undefined : l.vertical)
                  ? l.vertical
                  : 135
                : undefined !== (null === l || undefined === l ? undefined : l.horizontal)
                ? l.horizontal
                : 50;
          if ('vertical' === o)
            return {
              maxDeltaX: 15,
              minOffsetY: 5,
              hitSlop: {
                bottom: -n.height + s,
              },
            };
          if ('vertical-inverted' === o)
            return {
              maxDeltaX: 15,
              minOffsetY: -5,
              hitSlop: {
                top: -n.height + s,
              },
            };
          var u = -n.width + s;
          return 1 === module696.default(o)
            ? {
                minOffsetX: 5,
                maxDeltaY: 20,
                hitSlop: {
                  right: u,
                },
              }
            : {
                minOffsetX: -5,
                maxDeltaY: 20,
                hitSlop: {
                  left: u,
                },
              };
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.styleInterpolator,
            o = t.index,
            l = t.current,
            s = t.gesture,
            u = t.next,
            c = t.layout,
            f = t.insets,
            E = t.overlay,
            S = t.overlayEnabled,
            O = t.shadowEnabled,
            V = t.gestureEnabled,
            x = t.gestureDirection,
            A = t.pageOverflowEnabled,
            P = t.children,
            j = t.containerStyle,
            I = t.contentStyle,
            k = D(t, [
              'styleInterpolator',
              'index',
              'current',
              'gesture',
              'next',
              'layout',
              'insets',
              'overlay',
              'overlayEnabled',
              'shadowEnabled',
              'gestureEnabled',
              'gestureDirection',
              'pageOverflowEnabled',
              'children',
              'containerStyle',
              'contentStyle',
            ]),
            H = this.getInterpolatedStyle(n, o, l, u, c, f.top, f.right, f.bottom, f.left),
            T = this.getCardAnimationContext(o, l, u, c, f.top, f.right, f.bottom, f.left),
            X = H.containerStyle,
            Y = H.cardStyle,
            z = H.overlayStyle,
            N = H.shadowStyle,
            B = V
              ? module17.Animated.event(
                  [
                    {
                      nativeEvent:
                        'vertical' === x || 'vertical-inverted' === x
                          ? {
                              translationY: s,
                            }
                          : {
                              translationX: s,
                            },
                    },
                  ],
                  {
                    useNativeDriver: G,
                  }
                )
              : undefined,
            L = module17.StyleSheet.flatten(I || {}).backgroundColor,
            M = !!L && 0 === module684.default(L).alpha();
          return React.createElement(
            module694.default.Provider,
            {
              value: T,
            },
            React.createElement(
              module17.View,
              C(
                {
                  pointerEvents: 'box-none',
                },
                k
              ),
              S
                ? React.createElement(
                    module17.View,
                    {
                      pointerEvents: 'box-none',
                      style: module17.StyleSheet.absoluteFill,
                    },
                    E({
                      style: z,
                    })
                  )
                : null,
              React.createElement(
                module17.Animated.View,
                {
                  style: [R.container, X, j],
                  pointerEvents: 'box-none',
                },
                React.createElement(
                  module663.PanGestureHandler,
                  C(
                    {
                      enabled: 0 !== c.width && V,
                      onGestureEvent: B,
                      onHandlerStateChange: this.handleGestureStateChange,
                    },
                    this.gestureActivationCriteria()
                  ),
                  React.createElement(
                    module17.Animated.View,
                    {
                      style: [R.container, Y],
                    },
                    O && N && !M
                      ? React.createElement(module17.Animated.View, {
                          style: [
                            R.shadow,
                            'horizontal' === x
                              ? [R.shadowHorizontal, R.shadowLeft]
                              : 'horizontal-inverted' === x
                              ? [R.shadowHorizontal, R.shadowRight]
                              : 'vertical' === x
                              ? [R.shadowVertical, R.shadowTop]
                              : [R.shadowVertical, R.shadowBottom],
                            {
                              backgroundColor: L,
                            },
                            N,
                          ],
                          pointerEvents: 'none',
                        })
                      : null,
                    React.createElement(
                      module693.default,
                      {
                        ref: this.contentRef,
                        enabled: A,
                        layout: c,
                        style: I,
                      },
                      P
                    )
                  )
                )
              )
            )
          );
        },
      },
    ]);
    return H;
  })(React.Component);

exports.default = H;
j(H, 'defaultProps', {
  overlayEnabled: 'ios' !== module17.Platform.OS,
  shadowEnabled: true,
  gestureEnabled: true,
  gestureVelocityImpact: 0.3,
  overlay: function (t) {
    var n = t.style;
    return n
      ? React.createElement(module17.Animated.View, {
          pointerEvents: 'none',
          style: [R.overlay, n],
        })
      : null;
  },
});
var R = module17.StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000',
  },
  shadow: {
    position: 'absolute',
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
  },
  shadowHorizontal: {
    top: 0,
    bottom: 0,
    width: 3,
    shadowOffset: {
      width: -1,
      height: 1,
    },
  },
  shadowLeft: {
    left: 0,
  },
  shadowRight: {
    right: 0,
  },
  shadowVertical: {
    left: 0,
    right: 0,
    height: 3,
    shadowOffset: {
      width: 1,
      height: -1,
    },
  },
  shadowTop: {
    top: 0,
  },
  shadowBottom: {
    bottom: 0,
  },
});
