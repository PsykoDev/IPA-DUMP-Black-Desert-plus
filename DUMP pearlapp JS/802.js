var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module498 = require('./498'),
  module755 = require('./755');

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

var C = (function (t) {
  module9.default(C, t);

  var o = C,
    module498 = y(),
    v = function () {
      var t,
        n = module13.default(o);

      if (module498) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function C() {
    module7.default(this, C);
    return v.apply(this, arguments);
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        return this.props.visible
          ? React.default.createElement(
              module17.View,
              {
                style: [b.view, this.props.style],
                accessibilityLabel: this.props.accessibilityLabel,
              },
              React.default.createElement(
                module17.TouchableOpacity,
                {
                  onPress: this.props.onPress,
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: {
                      width: this.props.width,
                      height: this.props.height,
                      backgroundColor: this.props.isActive ? this.props.activeColor : this.props.inactiveColor,
                      borderColor: this.props.borderColor,
                      borderRadius: this.props.borderRadius,
                      justifyContent: 'center',
                      overflow: 'hidden',
                    },
                  },
                  React.default.createElement(
                    module17.View,
                    {
                      style: {
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    },
                    this.props.children,
                    React.default.createElement(
                      module17.Text,
                      {
                        style: {
                          fontSize: this.props.fontSize,
                          color: this.props.fontColor,
                          textAlign: 'center',
                        },
                      },
                      this.props.title
                    )
                  )
                )
              )
            )
          : null;
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = C;
C.defaultProps = {
  width: module498.UIManager.getWidth(0.45),
  height: module498.UIManager.getHeight(0.055),
  visible: true,
  isActive: true,
  title: undefined,
  fontSize: 16,
  fontColor: module755.Color.white,
  borderColor: '',
  borderRadius: 32,
  activeColor: module755.Color.activeButton,
  inactiveColor: module755.Color.inactiveButton,
  onPress: function () {
    return null;
  },
};
var b = module17.StyleSheet.create({
  view: {
    alignItems: 'center',
  },
});
