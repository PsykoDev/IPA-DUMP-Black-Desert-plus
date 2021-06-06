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

var h = (function (t) {
  module9.default(C, t);

  var o = C,
    h = v(),
    b = function () {
      var t,
        n = module13.default(o);

      if (h) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function C() {
    module7.default(this, C);
    return b.apply(this, arguments);
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        return this.props.visible
          ? React.default.createElement(module17.ActivityIndicator, {
              style: {
                backgroundColor: this.props.backgroundColor,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              },
              color: module755.Color.gray,
              size: 'large',
            })
          : null;
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = h;
h.defaultProps = {
  backgroundColor: module755.Color.mainTheme,
  visible: false,
};
