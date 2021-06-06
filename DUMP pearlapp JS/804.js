var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755');

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

var w = (function (t) {
  module9.default(b, t);

  var o = b,
    w = v(),
    y = function () {
      var t,
        n = module13.default(o);

      if (w) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function b() {
    module7.default(this, b);
    return y.apply(this, arguments);
  }

  module8.default(b, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(module17.View, {
          style: {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.backgroundColor,
            borderRadius: Math.round(module17.Dimensions.get('window').width + module17.Dimensions.get('window').height) / 2,
            borderColor: module755.Color.borderLine,
            overflow: 'hidden',
          },
        });
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = w;
w.defaultProps = {
  visible: true,
  width: 20,
  height: 20,
  backgroundColor: module755.Color.black,
  resizeMode: 'contain',
  source: null,
  onPress: function () {
    return null;
  },
};
