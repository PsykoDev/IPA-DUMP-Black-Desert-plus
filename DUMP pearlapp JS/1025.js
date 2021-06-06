var module26 = require('@babel/runtime/helpers/slicedToArray'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module2 = require('./2'),
  module1026 = require('./1026'),
  module1085 = require('./1085');

function S() {
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

function b() {
  return (b =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    }).apply(this, arguments);
}

function T(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function X(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      T(Object(o), true).forEach(function (n) {
        V(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      T(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function V(t, n, o) {
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

var D = module1026.default.Clock,
  P = module1026.default.Value,
  E = module1026.default.onChange,
  C = module1026.default.clockRunning,
  k = module1026.default.startClock,
  W = module1026.default.stopClock,
  j = module1026.default.interpolate,
  x = module1026.default.spring,
  B = module1026.default.abs,
  I = module1026.default.add,
  R = module1026.default.and,
  F = module1026.default.block,
  H = module1026.default.call,
  L = module1026.default.cond,
  A = module1026.default.divide,
  G = module1026.default.eq,
  M = module1026.default.event,
  q = module1026.default.greaterThan,
  U = module1026.default.lessThan,
  _ = module1026.default.max,
  z = module1026.default.min,
  N = module1026.default.multiply,
  K = module1026.default.neq,
  Y = module1026.default.or,
  J = module1026.default.set,
  Q = module1026.default.sub,
  Z = 1,
  $ = 0,
  ee = 0,
  te = -1,
  re = 1,
  ne = -1,
  ae = 60,
  ie = 5,
  oe = {
    stiffness: 1e3,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
  se = (function (t, ...args) {
    module9.default(ue, t);

    var n = ue,
      T = S(),
      se = function () {
        var t,
          o = module13.default(n);

        if (T) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function ue() {
      var t;
      module7.default(this, ue);
      t = se.call(this, ...args);
      V(module12.default(t), 'clock', new D());
      V(module12.default(t), 'isDrawerTypeFront', new P('front' === t.props.drawerType ? Z : $));
      V(module12.default(t), 'isOpen', new P(t.props.open ? Z : $));
      V(module12.default(t), 'nextIsOpen', new P(te));
      V(module12.default(t), 'isSwiping', new P($));
      V(module12.default(t), 'gestureState', new P(module2.State.UNDETERMINED));
      V(module12.default(t), 'touchX', new P(0));
      V(module12.default(t), 'velocityX', new P(0));
      V(module12.default(t), 'gestureX', new P(0));
      V(module12.default(t), 'offsetX', new P(0));
      V(module12.default(t), 'position', new P(0));
      V(module12.default(t), 'containerWidth', new P(0));
      V(module12.default(t), 'drawerWidth', new P(0));
      V(module12.default(t), 'drawerOpacity', new P(0));
      V(module12.default(t), 'drawerPosition', new P('right' === t.props.drawerPosition ? ne : re));
      V(
        module12.default(t),
        'touchDistanceFromDrawer',
        L(
          t.isDrawerTypeFront,
          L(G(t.drawerPosition, re), _(Q(Q(t.touchX, t.gestureX), t.drawerWidth), 0), z(N(Q(Q(t.containerWidth, t.drawerWidth), Q(t.touchX, t.gestureX)), ne), 0)),
          0
        )
      );
      V(module12.default(t), 'swipeDistanceThreshold', new P(undefined !== t.props.swipeDistanceThreshold ? t.props.swipeDistanceThreshold : ae));
      V(module12.default(t), 'swipeVelocityThreshold', new P(t.props.swipeVelocityThreshold));
      V(module12.default(t), 'currentOpenValue', t.props.open);
      V(module12.default(t), 'pendingOpenValue', undefined);
      V(module12.default(t), 'isStatusBarHidden', false);
      V(module12.default(t), 'manuallyTriggerSpring', new P($));
      V(module12.default(t), 'transitionTo', function (n) {
        var s = new P(0),
          l = new P(0),
          u = {
            position: t.position,
            time: new P(0),
            finished: new P($),
            velocity: new P(0),
          };
        return F([
          L(C(t.clock), ee, [
            J(s, N(n, t.drawerWidth, t.drawerPosition)),
            J(l, 0),
            J(u.time, 0),
            J(u.finished, $),
            J(u.velocity, t.velocityX),
            J(t.isOpen, n),
            k(t.clock),
            J(t.manuallyTriggerSpring, $),
          ]),
          x(
            t.clock,
            u,
            X({}, oe, {
              toValue: s,
            })
          ),
          L(u.finished, [
            J(t.touchX, 0),
            J(t.gestureX, 0),
            J(t.velocityX, 0),
            J(t.offsetX, 0),
            W(t.clock),
            H([t.isOpen], function (n) {
              var s = module26.default(n, 1)[0];
              if (Boolean(s) !== t.props.open) t.toggleDrawer(t.props.open);
            }),
          ]),
        ]);
      });
      V(
        module12.default(t),
        'dragX',
        F([
          E(
            t.isOpen,
            H([t.isOpen], function (n) {
              var s = module26.default(n, 1)[0],
                l = Boolean(s);
              t.currentOpenValue = l;

              if (l !== t.props.open) {
                if (l) t.props.onOpen();
                else t.props.onClose();
                t.pendingOpenValue = l;
                t.forceUpdate();
              }
            })
          ),
          E(t.nextIsOpen, L(K(t.nextIsOpen, te), [L(C(t.clock), W(t.clock)), J(t.isOpen, t.nextIsOpen), J(t.gestureX, 0), J(t.nextIsOpen, te)])),
          E(
            t.isSwiping,
            H([t.isSwiping], function (n) {
              var s = module26.default(n, 1)[0],
                l = t.props.keyboardDismissMode;

              if (s === Z) {
                if ('on-drag' === l) module17.Keyboard.dismiss();
                t.toggleStatusBar(true);
              } else t.toggleStatusBar(t.currentOpenValue);
            })
          ),
          L(
            G(t.gestureState, module2.State.ACTIVE),
            [L(t.isSwiping, ee, [J(t.isSwiping, Z), J(t.offsetX, t.position)]), J(t.position, I(t.offsetX, t.gestureX, t.touchDistanceFromDrawer)), W(t.clock)],
            [
              J(t.isSwiping, $),
              J(t.touchX, 0),
              t.transitionTo(
                L(
                  t.manuallyTriggerSpring,
                  t.isOpen,
                  L(
                    Y(R(q(B(t.gestureX), ie), q(B(t.velocityX), t.swipeVelocityThreshold)), q(B(t.gestureX), t.swipeDistanceThreshold)),
                    L(G(t.drawerPosition, re), q(L(G(t.velocityX, 0), t.gestureX, t.velocityX), 0), U(L(G(t.velocityX, 0), t.gestureX, t.velocityX), 0)),
                    t.isOpen
                  )
                )
              ),
            ]
          ),
          t.position,
        ])
      );
      V(module12.default(t), 'translateX', L(G(t.drawerPosition, ne), z(_(N(t.drawerWidth, -1), t.dragX), 0), _(z(t.drawerWidth, t.dragX), 0)));
      V(module12.default(t), 'progress', L(G(t.drawerWidth, 0), 0, B(A(t.translateX, t.drawerWidth))));
      V(
        module12.default(t),
        'handleGestureEvent',
        M([
          {
            nativeEvent: {
              x: t.touchX,
              translationX: t.gestureX,
              velocityX: t.velocityX,
            },
          },
        ])
      );
      V(
        module12.default(t),
        'handleGestureStateChange',
        M([
          {
            nativeEvent: {
              state: function (n) {
                return J(t.gestureState, n);
              },
            },
          },
        ])
      );
      V(
        module12.default(t),
        'handleTapStateChange',
        M([
          {
            nativeEvent: {
              oldState: function (n) {
                return L(G(n, module2.State.ACTIVE), J(t.manuallyTriggerSpring, Z));
              },
            },
          },
        ])
      );
      V(module12.default(t), 'handleContainerLayout', function (n) {
        return t.containerWidth.setValue(n.nativeEvent.layout.width);
      });
      V(module12.default(t), 'handleDrawerLayout', function (n) {
        t.drawerWidth.setValue(n.nativeEvent.layout.width);
        t.toggleDrawer(t.props.open);
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return t.drawerOpacity.setValue(1);
          });
        });
      });
      V(module12.default(t), 'toggleDrawer', function (n) {
        if (t.currentOpenValue !== n) {
          t.nextIsOpen.setValue(n ? Z : $);
          t.currentOpenValue = n;
        }
      });
      V(module12.default(t), 'toggleStatusBar', function (n) {
        var o = t.props,
          s = o.hideStatusBar,
          l = o.statusBarAnimation;

        if (s && t.isStatusBarHidden !== n) {
          t.isStatusBarHidden = n;
          module17.StatusBar.setHidden(n, l);
        }
      });
      return t;
    }

    module8.default(ue, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props,
            o = n.open,
            s = n.drawerPosition,
            l = n.drawerType,
            u = n.swipeDistanceThreshold,
            p = n.swipeVelocityThreshold,
            c = n.hideStatusBar;
          if (!('boolean' == typeof this.pendingOpenValue && o === this.pendingOpenValue)) this.toggleDrawer(o);
          this.pendingOpenValue = undefined;
          if (o !== t.open && c) this.toggleStatusBar(o);
          if (t.drawerPosition !== s) this.drawerPosition.setValue('right' === s ? ne : re);
          if (t.drawerType !== l) this.isDrawerTypeFront.setValue('front' === l ? Z : $);
          if (t.swipeDistanceThreshold !== u) this.swipeDistanceThreshold.setValue(undefined !== u ? u : ae);
          if (t.swipeVelocityThreshold !== p) this.swipeVelocityThreshold.setValue(p);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.toggleStatusBar(false);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.open,
            s = n.gestureEnabled,
            l = n.drawerPosition,
            u = n.drawerType,
            p = n.swipeEdgeWidth,
            c = n.sceneContainerStyle,
            f = n.drawerStyle,
            S = n.overlayStyle,
            T = n.onGestureRef,
            X = n.renderDrawerContent,
            V = n.renderSceneContent,
            D = n.gestureHandlerProps,
            P = 'right' === l,
            C = 'front' === u ? 0 : this.translateX,
            k = 'back' === u ? (module17.I18nManager.isRTL ? N(this.drawerWidth, ne) : this.drawerWidth) : this.translateX,
            W = module17.I18nManager.isRTL ? '100%' : N(this.drawerWidth, -1),
            x = P
              ? {
                  right: 0,
                  width: o ? undefined : p,
                }
              : {
                  left: 0,
                  width: o ? undefined : p,
                };
          return React.createElement(
            module1085.default.Provider,
            {
              value: this.progress,
            },
            React.createElement(
              module2.PanGestureHandler,
              b(
                {
                  ref: T,
                  activeOffsetX: [-5, ie],
                  failOffsetY: [-5, ie],
                  onGestureEvent: this.handleGestureEvent,
                  onHandlerStateChange: this.handleGestureStateChange,
                  hitSlop: x,
                  enabled: s,
                },
                D
              ),
              React.createElement(
                module1026.default.View,
                {
                  onLayout: this.handleContainerLayout,
                  style: le.main,
                },
                React.createElement(
                  module1026.default.View,
                  {
                    style: [
                      le.content,
                      {
                        transform: [
                          {
                            translateX: C,
                          },
                        ],
                      },
                      c,
                    ],
                    importantForAccessibility: o ? 'no-hide-descendants' : 'yes',
                  },
                  V({
                    progress: this.progress,
                  }),
                  React.createElement(
                    module2.TapGestureHandler,
                    {
                      enabled: s,
                      onHandlerStateChange: this.handleTapStateChange,
                    },
                    React.createElement(module1026.default.View, {
                      style: [
                        le.overlay,
                        {
                          opacity: j(this.progress, {
                            inputRange: [0.05, 1],
                            outputRange: [0, 1],
                          }),
                          zIndex: L(q(this.progress, 0.05), 0, -1),
                        },
                        S,
                      ],
                    })
                  )
                ),
                React.createElement(module1026.default.Code, {
                  exec: F([
                    E(this.manuallyTriggerSpring, [
                      L(G(this.manuallyTriggerSpring, Z), [
                        J(this.nextIsOpen, $),
                        H([], function () {
                          return (t.currentOpenValue = false);
                        }),
                      ]),
                    ]),
                  ]),
                }),
                React.createElement(
                  module1026.default.View,
                  {
                    accessibilityViewIsModal: o,
                    removeClippedSubviews: 'ios' !== module17.Platform.OS,
                    onLayout: this.handleDrawerLayout,
                    style: [
                      le.container,
                      P
                        ? {
                            right: W,
                          }
                        : {
                            left: W,
                          },
                      {
                        transform: [
                          {
                            translateX: k,
                          },
                        ],
                        opacity: this.drawerOpacity,
                        zIndex: 'back' === u ? -1 : 0,
                      },
                      f,
                    ],
                  },
                  X({
                    progress: this.progress,
                  })
                )
              )
            )
          );
        },
      },
    ]);
    return ue;
  })(React.PureComponent);

exports.default = se;
V(se, 'defaultProps', {
  gestureEnabled: true,
  drawerPostion: module17.I18nManager.isRTL ? 'left' : 'right',
  drawerType: 'front',
  swipeEdgeWidth: 32,
  swipeVelocityThreshold: 500,
  keyboardDismissMode: 'on-drag',
  hideStatusBar: false,
  statusBarAnimation: 'slide',
});
var le = module17.StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '80%',
    maxWidth: '100%',
  },
  overlay: X({}, module17.StyleSheet.absoluteFillObject, {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }),
  content: {
    flex: 1,
  },
  main: {
    flex: 1,
    overflow: 'hidden',
  },
});
