var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module18 = require('./18'),
  module17 = require('./17'),
  module381 = require('./381');

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

var y = 0.05,
  S = 'Idle',
  V = 'Dragging',
  A = 'Settling',
  C = (function (t) {
    module9.default(b, t);

    var n = b,
      module6 = _(),
      C = function () {
        var t,
          l = module13.default(n);

        if (module6) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(l, arguments, s);
        } else t = l.apply(this, arguments);

        return module11.default(this, t);
      };

    function b(t, n) {
      var o;
      module7.default(this, b);
      (o = C.call(this, t, n))._accessibilityIsModalView = React.default.createRef();
      o._pointerEventsView = React.default.createRef();
      o._panGestureHandler = React.default.createRef();
      o._drawerShown = false;

      o._updateAnimatedEvent = function (t, n) {
        var l = t.drawerPosition,
          s = t.drawerWidth,
          u = t.drawerType,
          p = n.dragX,
          c = n.touchX,
          w = n.drawerTranslation,
          f = n.containerWidth,
          v = p,
          _ = c;

        if ('left' !== l) {
          v = module17.Animated.multiply(new module17.Animated.Value(-1), p);
          _ = module17.Animated.add(new module17.Animated.Value(f), module17.Animated.multiply(new module17.Animated.Value(-1), c));
          c.setValue(f);
        } else c.setValue(0);

        var y = v;

        if ('front' === u) {
          var S = module17.Animated.add(_, module17.Animated.multiply(new module17.Animated.Value(-1), v)).interpolate({
            inputRange: [s - 1, s, s + 1],
            outputRange: [0, 0, 1],
          });
          y = module17.Animated.add(v, S);
        }

        o._openValue = module17.Animated.add(y, w).interpolate({
          inputRange: [0, s],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        o._onGestureEvent = module17.Animated.event(
          [
            {
              nativeEvent: {
                translationX: p,
                x: c,
              },
            },
          ],
          {
            useNativeDriver: t.useNativeAnimations,
          }
        );
      };

      o._handleContainerLayout = function (t) {
        var n = t.nativeEvent;
        o.setState({
          containerWidth: n.layout.width,
        });
      };

      o._emitStateChanged = function (t, n) {
        if (o.props.onDrawerStateChanged) o.props.onDrawerStateChanged(t, n);
      };

      o._openingHandlerStateChange = function (t) {
        var n = t.nativeEvent;
        if (n.oldState === module381.State.ACTIVE) o._handleRelease(n);
        else if (n.state === module381.State.ACTIVE) {
          o._emitStateChanged(V, false);

          if ('on-drag' === o.props.keyboardDismissMode) module17.Keyboard.dismiss();
          if (o.props.hideStatusBar) module17.StatusBar.setHidden(true, o.props.statusBarAnimation || 'slide');
        }
      };

      o._onTapHandlerStateChange = function (t) {
        var n = t.nativeEvent;
        if (o._drawerShown && n.oldState === module381.State.ACTIVE && 'locked-open' !== o.props.drawerLockMode) o.closeDrawer();
      };

      o._handleRelease = function (t) {
        var n = o.props,
          l = n.drawerWidth,
          s = n.drawerPosition,
          u = n.drawerType,
          p = o.state.containerWidth,
          c = t.translationX,
          w = t.velocityX,
          f = t.x;

        if ('left' !== s) {
          c = -c;
          f = p - f;
          w = -w;
        }

        var h = f - c,
          v = 0;
        if ('front' === u) v = h > l ? h - l : 0;

        var _ = c + v + (o._drawerShown ? l : 0);

        if (_ + y * w > l / 2) o._animateDrawer(_, l, w);
        else o._animateDrawer(_, 0, w);
      };

      o._updateShowing = function (t) {
        o._drawerShown = t;
        if (o._accessibilityIsModalView.current)
          o._accessibilityIsModalView.current.setNativeProps({
            accessibilityViewIsModal: t,
          });
        if (o._pointerEventsView.current)
          o._pointerEventsView.current.setNativeProps({
            pointerEvents: t ? 'auto' : 'none',
          });
        var n = o.props,
          l = n.drawerPosition,
          s = n.minSwipeDistance,
          u = n.edgeWidth,
          p = 'left' === l,
          c = (p ? 1 : -1) * (o._drawerShown ? -1 : 1),
          w = p
            ? {
                left: 0,
                width: t ? undefined : u,
              }
            : {
                right: 0,
                width: t ? undefined : u,
              };
        if (o._panGestureHandler.current)
          o._panGestureHandler.current.setNativeProps({
            hitSlop: w,
            activeOffsetX: c * s,
          });
      };

      o._animateDrawer = function (t, n, l) {
        if ((o.state.dragX.setValue(0), o.state.touchX.setValue('left' === o.props.drawerPosition ? 0 : o.state.containerWidth), null != t)) {
          var s = t;
          if (o.props.useNativeAnimations) t < n && l > 0 ? (s = (t + l / 60) ** n) : t > n && l < 0 && (s = (t + l / 60) ** n);
          o.state.drawerTranslation.setValue(s);
        }

        var u = 0 !== n;

        o._updateShowing(u);

        o._emitStateChanged(A, u);

        if (o.props.hideStatusBar) module17.StatusBar.setHidden(u, o.props.statusBarAnimation || 'slide');
        module17.Animated.spring(o.state.drawerTranslation, {
          velocity: l,
          bounciness: 0,
          toValue: n,
          useNativeDriver: o.props.useNativeAnimations,
        }).start(function (t) {
          if (t.finished) {
            o._emitStateChanged(S, u);

            if (u) {
              if (o.props.onDrawerOpen) o.props.onDrawerOpen();
            } else if (o.props.onDrawerClose) o.props.onDrawerClose();
          }
        });
      };

      o.openDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};

        o._animateDrawer(undefined, o.props.drawerWidth, t.velocity ? t.velocity : 0);

        o.forceUpdate();
      };

      o.closeDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};

        o._animateDrawer(undefined, 0, t.velocity ? t.velocity : 0);

        o.forceUpdate();
      };

      o._renderOverlay = function () {
        module18.default(o._openValue, 'should be set');
        var t = {
          opacity: o._openValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
          backgroundColor: o.props.overlayColor,
        };
        return React.default.createElement(
          module381.TapGestureHandler,
          {
            onHandlerStateChange: o._onTapHandlerStateChange,
          },
          React.default.createElement(module17.Animated.View, {
            pointerEvents: o._drawerShown ? 'auto' : 'none',
            ref: o._pointerEventsView,
            style: [E.overlay, t],
          })
        );
      };

      o._renderDrawer = function () {
        var t,
          n = o.props,
          l = n.drawerBackgroundColor,
          s = n.drawerWidth,
          u = n.drawerPosition,
          p = n.drawerType,
          c = n.drawerContainerStyle,
          v = n.contentContainerStyle,
          _ = 'left' === u,
          y = 'back' !== p,
          S = 'front' !== p,
          V = module17.I18nManager.isRTL ? _ : !_,
          A = {
            backgroundColor: l,
            width: s,
          },
          C = o._openValue;

        if ((module18.default(C, 'should be set'), S))
          t = {
            transform: [
              {
                translateX: C.interpolate({
                  inputRange: [0, 1],
                  outputRange: _ ? [0, s] : [0, -s],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };
        var b = 0;

        if (y) {
          var D = _ ? -s : s;
          b = C.interpolate({
            inputRange: [0, 1],
            outputRange: [D, 0],
            extrapolate: 'clamp',
          });
        }

        var R = {
          transform: [
            {
              translateX: b,
            },
          ],
          flexDirection: V ? 'row-reverse' : 'row',
        };
        return React.default.createElement(
          module17.Animated.View,
          {
            style: E.main,
            onLayout: o._handleContainerLayout,
          },
          React.default.createElement(
            module17.Animated.View,
            {
              style: ['front' === p ? E.containerOnBack : E.containerInFront, t, v],
              importantForAccessibility: o._drawerShown ? 'no-hide-descendants' : 'yes',
            },
            'function' == typeof o.props.children ? o.props.children(o._openValue) : o.props.children,
            o._renderOverlay()
          ),
          React.default.createElement(
            module17.Animated.View,
            {
              pointerEvents: 'box-none',
              ref: o._accessibilityIsModalView,
              accessibilityViewIsModal: o._drawerShown,
              style: [E.drawerContainer, R, c],
            },
            React.default.createElement(
              module17.View,
              {
                style: A,
              },
              o.props.renderNavigationView(o._openValue)
            )
          )
        );
      };

      o._setPanGestureRef = function (t) {
        o._panGestureHandler.current = t;
        if (o.props.onGestureRef) o.props.onGestureRef(t);
      };

      var s = new module17.Animated.Value(0),
        u = new module17.Animated.Value(0),
        p = new module17.Animated.Value(0);
      o.state = {
        dragX: s,
        touchX: u,
        drawerTranslation: p,
        containerWidth: 0,
      };

      o._updateAnimatedEvent(t, o.state);

      return o;
    }

    module8.default(b, [
      {
        key: 'UNSAFE_componentWillUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.drawerPosition === t.drawerPosition &&
              this.props.drawerWidth === t.drawerWidth &&
              this.props.drawerType === t.drawerType &&
              this.state.containerWidth === n.containerWidth
            )
          )
            this._updateAnimatedEvent(t, n);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.drawerPosition,
            o = t.drawerLockMode,
            l = t.edgeWidth,
            s = t.minSwipeDistance,
            u = 'left' === n,
            p = (u ? 1 : -1) * (this._drawerShown ? -1 : 1),
            c = u
              ? {
                  left: 0,
                  width: this._drawerShown ? undefined : l,
                }
              : {
                  right: 0,
                  width: this._drawerShown ? undefined : l,
                };
          return React.default.createElement(
            module381.PanGestureHandler,
            {
              ref: this._setPanGestureRef,
              hitSlop: c,
              activeOffsetX: p * s,
              failOffsetY: [-15, 15],
              onGestureEvent: this._onGestureEvent,
              onHandlerStateChange: this._openingHandlerStateChange,
              enabled: 'locked-closed' !== o && 'locked-open' !== o,
            },
            this._renderDrawer()
          );
        },
      },
    ]);
    return b;
  })(React.Component);

exports.default = C;
C.defaultProps = {
  drawerWidth: 200,
  drawerPosition: 'left',
  useNativeAnimations: true,
  drawerType: 'front',
  edgeWidth: 20,
  minSwipeDistance: 3,
  overlayColor: 'rgba(0, 0, 0, 0.7)',
  drawerLockMode: 'unlocked',
};
C.positions = {
  Left: 'left',
  Right: 'right',
};
var E = module17.StyleSheet.create({
  drawerContainer: module6.default({}, module17.StyleSheet.absoluteFillObject, {
    zIndex: 1001,
    flexDirection: 'row',
  }),
  containerInFront: module6.default({}, module17.StyleSheet.absoluteFillObject, {
    zIndex: 1002,
  }),
  containerOnBack: module6.default({}, module17.StyleSheet.absoluteFillObject),
  main: {
    flex: 1,
    zIndex: 0,
    overflow: 'hidden',
  },
  overlay: module6.default({}, module17.StyleSheet.absoluteFillObject, {
    zIndex: 1e3,
  }),
});
