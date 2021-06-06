var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module381 = require('./381'),
  PropTypes = require('prop-types');

function v() {
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

var y = {
  UNDETERMINED: 0,
  BEGAN: 1,
  MOVED_OUTSIDE: 2,
};
exports.TOUCHABLE_STATE = y;

var S = {
    accessible: PropTypes.default.bool,
    accessibilityLabel: PropTypes.default.node,
    accessibilityHint: PropTypes.default.string,
    hitSlop: PropTypes.default.shape({
      top: PropTypes.default.number,
      left: PropTypes.default.number,
      bottom: PropTypes.default.number,
      right: PropTypes.default.number,
    }),
    disabled: PropTypes.default.bool,
    onPress: PropTypes.default.func,
    onPressIn: PropTypes.default.func,
    onPressOut: PropTypes.default.func,
    onLayout: PropTypes.default.func,
    onLongPress: PropTypes.default.func,
    nativeID: PropTypes.default.string,
    testID: PropTypes.default.string,
    delayPressIn: PropTypes.default.number,
    delayPressOut: PropTypes.default.number,
    delayLongPress: PropTypes.default.number,
    shouldActivateOnStart: PropTypes.default.bool,
    disallowInterruption: PropTypes.default.bool,
  },
  D = {
    extraButtonProps: PropTypes.default.object,
    onStateChange: PropTypes.default.func,
  },
  P = (function (t, ...args) {
    module9.default(D, t);

    var s = D,
      PropTypes = v(),
      S = function () {
        var t,
          o = module13.default(s);

        if (PropTypes) {
          var n = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function D() {
      var t;
      module7.default(this, D);
      (t = S.call(this, ...args)).longPressDetected = false;
      t.pointerInside = true;
      t.STATE = y.UNDETERMINED;

      t.onGestureEvent = function (s) {
        var o = s.nativeEvent.pointerInside;
        if (t.pointerInside !== o) o ? t.onMoveIn() : t.onMoveOut();
        t.pointerInside = o;
      };

      t.onHandlerStateChange = function (s) {
        var o = s.nativeEvent.state;
        if (o === module381.State.CANCELLED || o === module381.State.FAILED) t.moveToState(y.UNDETERMINED);
        else if (o === ('android' !== module17.Platform.OS ? module381.State.ACTIVE : module381.State.BEGAN) && t.STATE === y.UNDETERMINED) t.handlePressIn();
        else if (o === module381.State.END) {
          var n = !t.longPressDetected && t.STATE !== y.MOVED_OUTSIDE && null === t.pressOutTimeout;
          t.handleGoToUndetermined();
          if (n && t.props.onPress) t.props.onPress();
        }
      };

      t.onLongPressDetected = function () {
        t.longPressDetected = true;
        t.props.onLongPress();
      };

      return t;
    }

    module8.default(D, [
      {
        key: 'handlePressIn',
        value: function () {
          var t = this;

          if (
            (this.props.delayPressIn
              ? (this.pressInTimeout = setTimeout(function () {
                  t.moveToState(y.BEGAN);
                  t.pressInTimeout = null;
                }, this.props.delayPressIn))
              : this.moveToState(y.BEGAN),
            this.props.onLongPress)
          ) {
            var s = (this.props.delayPressIn || 0) + (this.props.delayLongPress || 0);
            this.longPressTimeout = setTimeout(this.onLongPressDetected, s);
          }
        },
      },
      {
        key: 'handleMoveOutside',
        value: function () {
          var t = this;
          if (this.props.delayPressOut)
            this.pressOutTimeout =
              this.pressOutTimeout ||
              setTimeout(function () {
                t.moveToState(y.MOVED_OUTSIDE);
                t.pressOutTimeout = null;
              }, this.props.delayPressOut);
          else this.moveToState(y.MOVED_OUTSIDE);
        },
      },
      {
        key: 'handleGoToUndetermined',
        value: function () {
          var t = this;
          clearTimeout(this.pressOutTimeout);
          if (this.props.delayPressOut)
            this.pressOutTimeout = setTimeout(function () {
              if (t.STATE === y.UNDETERMINED) t.moveToState(y.BEGAN);
              t.moveToState(y.UNDETERMINED);
              t.pressOutTimeout = null;
            }, this.props.delayPressOut);
          else {
            if (this.STATE === y.UNDETERMINED) this.moveToState(y.BEGAN);
            this.moveToState(y.UNDETERMINED);
          }
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this.reset();
        },
      },
      {
        key: 'reset',
        value: function () {
          this.longPressDetected = false;
          this.pointerInside = true;
          clearTimeout(this.pressInTimeout);
          clearTimeout(this.pressOutTimeout);
          clearTimeout(this.longPressTimeout);
          this.pressOutTimeout = null;
          this.longPressTimeout = null;
          this.pressInTimeout = null;
        },
      },
      {
        key: 'moveToState',
        value: function (t) {
          if (t !== this.STATE) {
            if (t === y.BEGAN) {
              if (this.props.onPressIn) this.props.onPressIn();
            } else if (t === y.MOVED_OUTSIDE) {
              if (this.props.onPressOut) this.props.onPressOut();
            } else if (t === y.UNDETERMINED) {
              this.reset();
              if (this.STATE === y.BEGAN && this.props.onPressOut) this.props.onPressOut();
            }
            if (this.props.onStateChange) this.props.onStateChange(this.STATE, t);
            this.STATE = t;
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.reset();
        },
      },
      {
        key: 'onMoveIn',
        value: function () {
          if (this.STATE === y.MOVED_OUTSIDE) this.moveToState(y.BEGAN);
        },
      },
      {
        key: 'onMoveOut',
        value: function () {
          clearTimeout(this.longPressTimeout);
          this.longPressTimeout = null;
          if (this.STATE === y.BEGAN) this.handleMoveOutside();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = {
            accessible: false !== this.props.accessible,
            accessibilityLabel: this.props.accessibilityLabel,
            accessibilityHint: this.props.accessibilityHint,
            accessibilityComponentType: this.props.accessibilityComponentType,
            accessibilityRole: this.props.accessibilityRole,
            accessibilityStates: this.props.accessibilityStates,
            accessibilityTraits: this.props.accessibilityTraits,
            nativeID: this.props.nativeID,
            testID: this.props.testID,
            onLayout: this.props.onLayout,
            hitSlop: this.props.hitSlop,
          };
          return React.default.createElement(
            module381.BaseButton,
            module6.default(
              {
                style: this.props.containerStyle,
                onHandlerStateChange: this.props.disabled ? null : this.onHandlerStateChange,
                onGestureEvent: this.onGestureEvent,
                hitSlop: this.props.hitSlop,
                shouldActivateOnStart: this.props.shouldActivateOnStart,
                disallowInterruption: this.props.disallowInterruption,
              },
              this.props.extraButtonProps
            ),
            React.default.createElement(
              module17.Animated.View,
              module6.default({}, t, {
                style: this.props.style,
              }),
              this.props.children
            )
          );
        },
      },
    ]);
    return D;
  })(React.Component);

exports.default = P;
P.publicPropTypes = S;
P.internalPropTypes = D;
P.propTypes = module6.default({}, D, S);
P.defaultProps = {
  delayLongPress: 600,
  extraButtonProps: {
    rippleColor: 'transparent',
  },
};
