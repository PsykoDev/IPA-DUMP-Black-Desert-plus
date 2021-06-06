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

var b = (function (t) {
  module9.default(S, t);

  var o = S,
    b = y(),
    A = function () {
      var t,
        n = module13.default(o);

      if (b) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function S(t) {
    var o;
    module7.default(this, S);

    (o = A.call(this, t)).Circle = function () {
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
              borderColor: o.state.isActive ? module755.Color.activeButton : module755.Color.inactiveButton,
              borderWidth: 1.3,
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
          o.state.isActive &&
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
      isActive: o.props.isActive,
    };
    return o;
  }

  module8.default(S, [
    {
      key: 'componentDidUpdate',
      value: function () {
        if (!this.props.enabled)
          this.state.isActive &&
            (this.setState({
              isActive: false,
            }),
            this.props.onPress(!this.state.isActive));
      },
    },
  ]);
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
              },
              React.default.createElement(
                module17.TouchableOpacity,
                {
                  onPress: function () {
                    if (t.props.enabled) {
                      t.setState({
                        isActive: !t.state.isActive,
                      });
                      t.props.onPress(!t.state.isActive);
                    }
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
                        backgroundColor: '#161717',
                        alignItems: 'center',
                        borderRadius: 6,
                        marginTop: 2,
                        marginBottom: 2,
                      },
                      this.state.isActive ? C.activeBorder : C.inactiveBorder,
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

exports.default = b;
b.defaultProps = {
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
