var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module498 = require('./498');

function y() {
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

var b = (function (t) {
  module9.default(P, t);

  var s = P,
    b = y(),
    v = function () {
      var t,
        n = module13.default(s);

      if (b) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function P() {
    module7.default(this, P);
    return v.apply(this, arguments);
  }

  module8.default(P, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return module498.SystemManager.isIos()
          ? React.default.createElement(
              module17.TouchableHighlight,
              {
                activeOpacity: this.props.isActive ? 0.85 : 1,
                underlayColor: 'rgba(0, 0, 0, 0.15)',
                onPress: function () {
                  return t.props.onPress();
                },
                delayPressOut: 150,
                delayPressIn: this.props.delayPressIn,
                accessibilityLabel: this.props.accessibilityLabel,
              },
              this.props.children
            )
          : React.default.createElement(
              module17.TouchableNativeFeedback,
              {
                useForeground: true,
                background: module17.TouchableNativeFeedback.SelectableBackground(),
                disabled: !this.props.isActive,
                onPress: function () {
                  return t.props.onPress();
                },
                delayPressIn: this.props.delayPressIn,
                accessibilityLabel: this.props.accessibilityLabel,
              },
              this.props.children
            );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = b;
b.defaultProps = {
  isActive: true,
  delayPressIn: 50,
  onPress: function () {
    return null;
  },
};
