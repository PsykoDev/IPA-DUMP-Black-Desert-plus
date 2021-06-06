var module6 = require('./6');

function s(t, s) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = n(t)) || (s && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var l = 0;
      return function () {
        return l >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[l++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function n(t, s) {
  if (t) {
    if ('string' == typeof t) return o(t, s);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === n && t.constructor) n = t.constructor.name;
    return 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, s) : undefined;
  }
}

function o(t, s) {
  if (null == s || s > t.length) s = t.length;

  for (var n = 0, o = new Array(s); n < s; n++) o[n] = t[n];

  return o;
}

var module199 = require('./199'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module203 = require('./203'),
  module88 = require('./88'),
  module280 = require('./280'),
  module284 = require('./284'),
  module285 = require('./285').DeprecatedAccessibilityRoles,
  P = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  S = [
    'accessibilityLabel',
    'accessibilityHint',
    'accessibilityIgnoresInvertColors',
    'accessibilityRole',
    'accessibilityStates',
    'accessibilityState',
    'accessibilityActions',
    'onAccessibilityAction',
    'hitSlop',
    'nativeID',
    'onBlur',
    'onFocus',
    'onLayout',
    'testID',
  ],
  v = module280({
    displayName: 'TouchableWithoutFeedback',
    mixins: [module203.Mixin],
    propTypes: {
      accessible: PropTypes.bool,
      accessibilityLabel: PropTypes.node,
      accessibilityHint: PropTypes.string,
      accessibilityIgnoresInvertColors: PropTypes.bool,
      accessibilityRole: PropTypes.oneOf(module285),
      accessibilityStates: PropTypes.array,
      accessibilityState: PropTypes.object,
      accessibilityActions: PropTypes.array,
      onAccessibilityAction: PropTypes.func,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func,
      disabled: PropTypes.bool,
      onPress: PropTypes.func,
      onPressIn: PropTypes.func,
      onPressOut: PropTypes.func,
      onLayout: PropTypes.func,
      touchSoundDisabled: PropTypes.bool,
      onLongPress: PropTypes.func,
      nativeID: PropTypes.string,
      testID: PropTypes.string,
      delayPressIn: PropTypes.number,
      delayPressOut: PropTypes.number,
      delayLongPress: PropTypes.number,
      pressRetentionOffset: module199,
      hitSlop: module199,
    },
    getInitialState: function () {
      return this.touchableGetInitialState();
    },
    componentDidMount: function () {
      module284(this.props);
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      module284(t);
    },
    touchableHandlePress: function (t) {
      if (this.props.onPress) this.props.onPress(t);
    },
    touchableHandleActivePressIn: function (t) {
      if (this.props.onPressIn) this.props.onPressIn(t);
    },
    touchableHandleActivePressOut: function (t) {
      if (this.props.onPressOut) this.props.onPressOut(t);
    },
    touchableHandleLongPress: function (t) {
      if (this.props.onLongPress) this.props.onLongPress(t);
    },
    touchableGetPressRectOffset: function () {
      return this.props.pressRetentionOffset || P;
    },
    touchableGetHitSlop: function () {
      return this.props.hitSlop;
    },
    touchableGetHighlightDelayMS: function () {
      return this.props.delayPressIn || 0;
    },
    touchableGetLongPressDelayMS: function () {
      return 0 === this.props.delayLongPress ? 0 : this.props.delayLongPress || 500;
    },
    touchableGetPressOutDelayMS: function () {
      return this.props.delayPressOut || 0;
    },
    render: function () {
      var n = React.Children.only(this.props.children),
        o = n.props.children;
      if (module203.TOUCH_TARGET_DEBUG && n.type === module88)
        (o = React.Children.toArray(o)).push(
          module203.renderDebugView({
            color: 'red',
            hitSlop: this.props.hitSlop,
          })
        );

      for (var l, u = {}, b = s(S); !(l = b()).done; ) {
        var y = l.value;
        if (undefined !== this.props[y]) u[y] = this.props[y];
      }

      return React.cloneElement(
        n,
        module6({}, u, {
          accessible: false !== this.props.accessible,
          focusable: false !== this.props.focusable && undefined !== this.props.onPress,
          onClick: this.touchableHandlePress,
          onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
          onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
          onResponderGrant: this.touchableHandleResponderGrant,
          onResponderMove: this.touchableHandleResponderMove,
          onResponderRelease: this.touchableHandleResponderRelease,
          onResponderTerminate: this.touchableHandleResponderTerminate,
          children: o,
        })
      );
    },
  });

module.exports = v;
