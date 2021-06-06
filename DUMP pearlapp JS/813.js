var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

function p() {
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
  module9.default(R, t);

  var o = R,
    y = p(),
    b = function () {
      var t,
        n = module13.default(o);

      if (y) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function R(t) {
    module7.default(this, R);
    return b.call(this, t);
  }

  module8.default(R, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.TouchableOpacity,
          {
            style: [
              v.button,
              {
                width: this.props.width,
                height: this.props.height,
                borderRadius: this.props.borderRadius,
                backgroundColor: this.props.buttonColor,
              },
            ],
            onPress: function () {
              t.props.onPress();
            },
          },
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: this.props.fontSize,
                color: this.props.titleColor,
              },
            },
            this.props.title
          )
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = y;
y.defaultProps = {
  title: 'untitled',
  width: 350,
  height: 80,
  borderRadius: 5,
  buttonColor: '#000',
  titleColor: '#fff',
  fontSize: 30,
  isActive: true,
  onPress: function () {
    return null;
  },
};
var v = module17.StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
