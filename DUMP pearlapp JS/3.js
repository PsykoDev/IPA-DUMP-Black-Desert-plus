var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module381 = require('./381');

function w() {
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

var S = 0.05,
  _ = (function (t) {
    module9.default(O, t);

    var n = O,
      _ = w(),
      A = function () {
        var t,
          o = module13.default(n);

        if (_) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function O(t) {
      var n;
      module7.default(this, O);

      (n = A.call(this, t))._updateAnimatedEvent = function (t, o) {
        var s = t.friction,
          l = t.overshootFriction,
          p = o.dragX,
          u = o.rowTranslation,
          f = o.leftWidth,
          h = undefined === f ? 0 : f,
          v = o.rowWidth,
          w = undefined === v ? 0 : v,
          S = o.rightOffset,
          _ = undefined === S ? w : S,
          R = 0 ** (w - _),
          A = t.overshootLeft,
          O = undefined === A ? h > 0 : A,
          y = t.overshootRight,
          b = undefined === y ? R > 0 : y,
          E = module17.Animated.add(
            u,
            p.interpolate({
              inputRange: [0, s],
              outputRange: [0, 1],
            })
          ).interpolate({
            inputRange: [-R - (b ? 1 : l), -R, h, h + (O ? 1 : l)],
            outputRange: [-R - (b || l > 1 ? 1 : 0), -R, h, h + (O || l > 1 ? 1 : 0)],
          });

        n._transX = E;
        n._showLeftAction =
          h > 0
            ? E.interpolate({
                inputRange: [-1, 0, h],
                outputRange: [0, 0, 1],
              })
            : new module17.Animated.Value(0);
        n._leftActionTranslate = n._showLeftAction.interpolate({
          inputRange: [0, Number.MIN_VALUE],
          outputRange: [-1e4, 0],
          extrapolate: 'clamp',
        });
        n._showRightAction =
          R > 0
            ? E.interpolate({
                inputRange: [-R, 0, 1],
                outputRange: [1, 0, 0],
              })
            : new module17.Animated.Value(0);
        n._rightActionTranslate = n._showRightAction.interpolate({
          inputRange: [0, Number.MIN_VALUE],
          outputRange: [-1e4, 0],
          extrapolate: 'clamp',
        });
      };

      n._onTapHandlerStateChange = function (t) {
        if (t.nativeEvent.oldState === module381.State.ACTIVE) n.close();
      };

      n._onHandlerStateChange = function (t) {
        var o = t.nativeEvent;
        if (o.oldState === module381.State.ACTIVE) n._handleRelease(o);
      };

      n._handleRelease = function (t) {
        var o = t.velocityX,
          s = t.translationX,
          l = n.state,
          p = l.leftWidth,
          u = undefined === p ? 0 : p,
          f = l.rowWidth,
          h = undefined === f ? 0 : f,
          c = l.rowState,
          v = n.state.rightOffset,
          w = h - (undefined === v ? h : v),
          _ = n.props,
          R = _.friction,
          A = _.leftThreshold,
          O = undefined === A ? u / 2 : A,
          y = _.rightThreshold,
          b = undefined === y ? w / 2 : y,
          E = n._currentOffset() + s / R,
          W = (s + S * o) / R,
          L = 0;
        if (0 === c) W > O ? (L = u) : W < -b && (L = -w);
        else if (1 === c) {
          if (W > -O) L = u;
        } else if (W < b) L = -w;

        n._animateRow(E, L, o / R);
      };

      n._animateRow = function (t, s, l) {
        var p = n.state,
          u = p.dragX,
          f = p.rowTranslation;
        u.setValue(0);
        f.setValue(t);
        n.setState({
          rowState: Math.sign(s),
        });
        module17.Animated.spring(
          f,
          module6.default(
            {
              restSpeedThreshold: 1.7,
              restDisplacementThreshold: 0.4,
              velocity: l,
              bounciness: 0,
              toValue: s,
              useNativeDriver: n.props.useNativeAnimations,
            },
            n.props.animationOptions
          )
        ).start(function (t) {
          if (t.finished) {
            if (s > 0 && n.props.onSwipeableLeftOpen) n.props.onSwipeableLeftOpen();
            else if (s < 0 && n.props.onSwipeableRightOpen) n.props.onSwipeableRightOpen();
            if (0 === s) {
              if (n.props.onSwipeableClose) n.props.onSwipeableClose();
            } else if (n.props.onSwipeableOpen) n.props.onSwipeableOpen();
          }
        });
        if (s > 0 && n.props.onSwipeableLeftWillOpen) n.props.onSwipeableLeftWillOpen();
        else if (s < 0 && n.props.onSwipeableRightWillOpen) n.props.onSwipeableRightWillOpen();
        if (0 === s) {
          if (n.props.onSwipeableWillClose) n.props.onSwipeableWillClose();
        } else if (n.props.onSwipeableWillOpen) n.props.onSwipeableWillOpen();
      };

      n._onRowLayout = function (t) {
        var o = t.nativeEvent;
        n.setState({
          rowWidth: o.layout.width,
        });
      };

      n._currentOffset = function () {
        var t = n.state,
          o = t.leftWidth,
          s = undefined === o ? 0 : o,
          l = t.rowWidth,
          p = undefined === l ? 0 : l,
          u = t.rowState,
          f = n.state.rightOffset;
        return 1 === u ? s : -1 === u ? -(p - (undefined === f ? p : f)) : 0;
      };

      n.close = function () {
        n._animateRow(n._currentOffset(), 0);
      };

      n.openLeft = function () {
        var t = n.state.leftWidth,
          o = undefined === t ? 0 : t;

        n._animateRow(n._currentOffset(), o);
      };

      n.openRight = function () {
        var t = n.state.rowWidth,
          o = undefined === t ? 0 : t,
          s = n.state.rightOffset,
          l = o - (undefined === s ? o : s);

        n._animateRow(n._currentOffset(), -l);
      };

      var l = new module17.Animated.Value(0);
      n.state = {
        dragX: l,
        rowTranslation: new module17.Animated.Value(0),
        rowState: 0,
        leftWidth: undefined,
        rightOffset: undefined,
        rowWidth: undefined,
      };

      n._updateAnimatedEvent(t, n.state);

      n._onGestureEvent = module17.Animated.event(
        [
          {
            nativeEvent: {
              translationX: l,
            },
          },
        ],
        {
          useNativeDriver: t.useNativeAnimations,
        }
      );
      return n;
    }

    module8.default(O, [
      {
        key: 'UNSAFE_componentWillUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.friction === t.friction &&
              this.props.overshootLeft === t.overshootLeft &&
              this.props.overshootRight === t.overshootRight &&
              this.props.overshootFriction === t.overshootFriction &&
              this.state.leftWidth === n.leftWidth &&
              this.state.rightOffset === n.rightOffset &&
              this.state.rowWidth === n.rowWidth
            )
          )
            this._updateAnimatedEvent(t, n);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state.rowState,
            s = this.props,
            l = s.children,
            p = s.renderLeftActions,
            u = s.renderRightActions,
            f =
              p &&
              React.default.createElement(
                module17.Animated.View,
                {
                  style: [
                    R.leftActions,
                    {
                      transform: [
                        {
                          translateX: this._leftActionTranslate,
                        },
                      ],
                    },
                  ],
                },
                p(this._showLeftAction, this._transX),
                React.default.createElement(module17.View, {
                  onLayout: function (n) {
                    var o = n.nativeEvent;
                    return t.setState({
                      leftWidth: o.layout.x,
                    });
                  },
                })
              ),
            w =
              u &&
              React.default.createElement(
                module17.Animated.View,
                {
                  style: [
                    R.rightActions,
                    {
                      transform: [
                        {
                          translateX: this._rightActionTranslate,
                        },
                      ],
                    },
                  ],
                },
                u(this._showRightAction, this._transX),
                React.default.createElement(module17.View, {
                  onLayout: function (n) {
                    var o = n.nativeEvent;
                    return t.setState({
                      rightOffset: o.layout.x,
                    });
                  },
                })
              );
          return React.default.createElement(
            module381.PanGestureHandler,
            module6.default(
              {
                activeOffsetX: [-10, 10],
              },
              this.props,
              {
                onGestureEvent: this._onGestureEvent,
                onHandlerStateChange: this._onHandlerStateChange,
              }
            ),
            React.default.createElement(
              module17.Animated.View,
              {
                onLayout: this._onRowLayout,
                style: [R.container, this.props.containerStyle],
              },
              f,
              w,
              React.default.createElement(
                module381.TapGestureHandler,
                {
                  enabled: 0 !== n,
                  onHandlerStateChange: this._onTapHandlerStateChange,
                },
                React.default.createElement(
                  module17.Animated.View,
                  {
                    pointerEvents: 0 === n ? 'auto' : 'box-only',
                    style: [
                      {
                        transform: [
                          {
                            translateX: this._transX,
                          },
                        ],
                      },
                      this.props.childrenContainerStyle,
                    ],
                  },
                  l
                )
              )
            )
          );
        },
      },
    ]);
    return O;
  })(React.Component);

exports.default = _;
_.defaultProps = {
  friction: 1,
  overshootFriction: 1,
  useNativeAnimations: true,
};
var R = module17.StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  leftActions: module6.default({}, module17.StyleSheet.absoluteFillObject, {
    flexDirection: module17.I18nManager.isRTL ? 'row-reverse' : 'row',
  }),
  rightActions: module6.default({}, module17.StyleSheet.absoluteFillObject, {
    flexDirection: module17.I18nManager.isRTL ? 'row' : 'row-reverse',
  }),
});
