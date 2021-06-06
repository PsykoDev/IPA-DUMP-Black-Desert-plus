var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module498 = require('./498'),
  module755 = require('./755');

function b() {
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

var y = (function (t) {
  module9.default(S, t);

  var o = S,
    y = b(),
    w = function () {
      var t,
        n = module13.default(o);

      if (y) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function S(t) {
    var o;
    module7.default(this, S);

    (o = w.call(this, t)).Circle = function () {
      return React.default.createElement(
        module17.View,
        {
          style: {
            marginStart: 24,
          },
        },
        React.default.createElement(
          module17.View,
          {
            style: {
              width: o.props.circleSize,
              height: o.props.circleSize,
              borderRadius: Math.round(module498.UIManager.getWidth(1) + module498.UIManager.getHeight(1)) / 2,
              borderColor: o.props.isActive ? module755.Color.activeButton : module755.Color.inactiveButton,
              borderWidth: 1.3,
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
          o.props.isActive &&
            React.default.createElement(module17.View, {
              style: {
                backgroundColor: '#DAB262',
                width: 14,
                height: 14,
                borderRadius: Math.round(module498.UIManager.getWidth(1) + module498.UIManager.getHeight(1)) / 2,
                borderWidth: 1.3,
              },
            })
        )
      );
    };

    o.state = {
      isChecked: false,
    };
    return o;
  }

  module8.default(S, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return this.props.visible
          ? React.default.createElement(
              module17.View,
              {
                style: this.props.style,
                accessibilityLabel: this.props.accessibilityLabel,
              },
              React.default.createElement(
                module17.TouchableOpacity,
                {
                  onPress: function () {
                    return t.props.onPress();
                  },
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: [
                      {
                        flexDirection: 'row',
                        width: this.props.width,
                        height: this.props.height,
                        backgroundColor: 'rgb(32,33,34)',
                        alignItems: 'center',
                        borderRadius: 6,
                        marginTop: 1,
                        marginBottom: 1,
                      },
                      this.props.isActive ? C.activeBorder : C.inactiveBorder,
                    ],
                  },
                  this.Circle(),
                  React.default.createElement(
                    module17.Text,
                    {
                      style: {
                        flex: 1,
                        fontSize: this.props.fontSize,
                        textAlign: 'center',
                        color: undefined == this.props.titleColor ? module755.Color.optionText : this.props.titleColor,
                        marginStart: -24,
                      },
                    },
                    this.props.title
                  )
                )
              )
            )
          : null;
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = y;
y.defaultProps = {
  style: {},
  width: module498.UIManager.getWidth(0.9),
  height: module498.UIManager.getHeight(0.055),
  visible: true,
  enabled: true,
  isActive: false,
  title: undefined,
  titleColor: undefined,
  fontSize: 14,
  circleSize: 26,
  onPress: function () {
    return null;
  },
};
var C = module17.StyleSheet.create({
  activeBorder: {
    borderColor: '#D8B162',
    borderWidth: 2,
  },
  inactiveBorder: {
    borderColor: module755.Color.transparent,
    borderWidth: 2,
  },
});
