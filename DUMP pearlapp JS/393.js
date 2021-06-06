Object.defineProperty(exports, 'PureNativeButton', {
  enumerable: true,
  get: function () {
    return module394.default;
  },
});

var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module17 = require('./17'),
  module382 = require('./382'),
  module394 = require('./394'),
  module387 = require('./387');

function S(t) {
  var n = _();

  return function () {
    var o,
      l = module13.default(t);

    if (n) {
      var u = module13.default(this).constructor;
      o = Reflect.construct(l, arguments, u);
    } else o = l.apply(this, arguments);

    return module11.default(this, o);
  };
}

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

var E = module382.default(module394.default, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: false,
});
exports.RawButton = E;

var B = (function (t) {
  module9.default(p, t);
  var c = S(p);

  function p(t) {
    var n;
    module7.default(this, p);

    (n = c.call(this, t))._handleEvent = function (t) {
      var o = t.nativeEvent,
        l = o.state,
        u = o.oldState,
        s = o.pointerInside && l === module387.default.ACTIVE;
      if (s !== n._lastActive && n.props.onActiveStateChange) n.props.onActiveStateChange(s);
      if (u === module387.default.ACTIVE && l !== module387.default.CANCELLED && n._lastActive && n.props.onPress) n.props.onPress(s);
      n._lastActive = s;
    };

    n._onHandlerStateChange = function (t) {
      if (n.props.onHandlerStateChange) n.props.onHandlerStateChange(t);

      n._handleEvent(t);
    };

    n._onGestureEvent = function (t) {
      if (n.props.onGestureEvent) n.props.onGestureEvent(t);

      n._handleEvent(t);
    };

    n._lastActive = false;
    return n;
  }

  module8.default(p, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = t.style,
          u = t.rippleColor,
          s = module56.default(t, ['style', 'rippleColor']);
        return React.default.createElement(
          E,
          module6.default(
            {
              style: [
                {
                  overflow: 'hidden',
                },
                l,
              ],
              rippleColor: module17.processColor(u),
            },
            s,
            {
              onGestureEvent: this._onGestureEvent,
              onHandlerStateChange: this._onHandlerStateChange,
            }
          )
        );
      },
    },
  ]);
  return p;
})(React.default.Component);

exports.BaseButton = B;
B.propTypes = module6.default({}, E.propTypes, {
  onPress: PropTypes.default.func,
  onActiveStateChange: PropTypes.default.func,
});

var P = module17.Animated.createAnimatedComponent(B),
  O = module17.StyleSheet.create({
    underlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  }),
  b = (function (t) {
    module9.default(p, t);
    var c = S(p);

    function p(t) {
      var n;
      module7.default(this, p);

      (n = c.call(this, t))._onActiveStateChange = function (t) {
        if ('android' !== module17.Platform.OS) n._opacity.setValue(t ? n.props.activeOpacity : 0);
        if (n.props.onActiveStateChange) n.props.onActiveStateChange(t);
      };

      n._opacity = new module17.Animated.Value(0);
      return n;
    }

    module8.default(p, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.children,
            u = module56.default(t, ['children']);
          return React.default.createElement(
            B,
            module6.default({}, u, {
              onActiveStateChange: this._onActiveStateChange,
            }),
            React.default.createElement(module17.Animated.View, {
              style: [
                O.underlay,
                {
                  opacity: this._opacity,
                },
                {
                  backgroundColor: this.props.underlayColor,
                },
              ],
            }),
            l
          );
        },
      },
    ]);
    return p;
  })(React.default.Component);

exports.RectButton = b;
b.propTypes = B.propTypes;
b.defaultProps = {
  activeOpacity: 0.105,
  underlayColor: 'black',
};

var R = (function (t) {
  module9.default(p, t);
  var c = S(p);

  function p(t) {
    var n;
    module7.default(this, p);

    (n = c.call(this, t))._onActiveStateChange = function (t) {
      if ('android' !== module17.Platform.OS) n._opacity.setValue(t ? n.props.activeOpacity : 1);
      if (n.props.onActiveStateChange) n.props.onActiveStateChange(t);
    };

    n._opacity = new module17.Animated.Value(1);
    return n;
  }

  module8.default(p, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = t.children,
          u = t.style,
          s = module56.default(t, ['children', 'style']);
        return React.default.createElement(
          P,
          module6.default({}, s, {
            onActiveStateChange: this._onActiveStateChange,
            style: [
              u,
              'ios' === module17.Platform.OS && {
                opacity: this._opacity,
              },
            ],
          }),
          l
        );
      },
    },
  ]);
  return p;
})(React.default.Component);

exports.BorderlessButton = R;
R.propTypes = module6.default({}, B.propTypes, {
  borderless: PropTypes.default.bool,
});
R.defaultProps = {
  activeOpacity: 0.3,
  borderless: true,
};
