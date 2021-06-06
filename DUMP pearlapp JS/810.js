var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

function h() {
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
  module9.default(b, t);

  var n = b,
    y = h(),
    v = function () {
      var t,
        s = module13.default(n);

      if (y) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(s, arguments, u);
      } else t = s.apply(this, arguments);

      return module11.default(this, t);
    };

  function b() {
    module7.default(this, b);
    return v.apply(this, arguments);
  }

  module8.default(b, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return this.props.visible
          ? React.default.createElement(
              module17.TouchableOpacity,
              {
                onPress: function () {
                  t.props.onPress();
                },
                style: [
                  {
                    width: this.props.width,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  this.props.style,
                ],
                accessibilityLabel: this.props.accessibilityLabel,
              },
              React.default.createElement(module17.Image, {
                style: [
                  {
                    width: this.props.width,
                    resizeMode: 'contain',
                  },
                  this.props.imageStyle,
                ],
                source: this.props.source,
              })
            )
          : null;
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = y;
y.defaultProps = {
  style: {},
  imageStyle: {},
  width: 40,
  visible: true,
  source: null,
  onPress: function () {
    return null;
  },
};
