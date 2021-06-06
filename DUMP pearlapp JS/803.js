var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
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

var v = (function (t) {
  module9.default(w, t);

  var n = w,
    v = y(),
    b = function () {
      var t,
        l = module13.default(n);

      if (v) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, u);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function w(t) {
    module7.default(this, w);
    return b.call(this, t);
  }

  module8.default(w, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: {
              width: this.props.width,
              height: this.props.height,
              backgroundColor: module755.Color.mainTheme,
            },
            accessibilityLabel: this.props.accessibilityLabel,
          },
          React.default.createElement(
            module17.View,
            {
              style: [
                {
                  flex: 1,
                },
                this.props.style,
              ],
            },
            this.props.children
          )
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.default = v;
v.defaultProps = {
  width: '100%',
  height: '100%',
  style: {},
};
