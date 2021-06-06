var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module799 = require('./799'),
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
  module9.default(C, t);

  var v = C,
    b = y(),
    F = function () {
      var t,
        n = module13.default(v);

      if (b) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function C(t) {
    module7.default(this, C);
    return F.call(this, t);
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module799.PATouchable,
          {
            onPress: function () {
              t.props.onPress();
            },
            accessibilityLabel: this.props.accessibilityLabel,
          },
          React.default.createElement(
            module17.View,
            {
              style: {
                flex: 1,
                width: 100,
                height: 35,
                borderWidth: 1.1,
                borderColor: 'rgb(103, 101, 96)',
                alignItems: 'center',
                backgroundColor: this.props.selected ? module755.Color.activeButton : undefined,
                justifyContent: 'center',
              },
            },
            React.default.createElement(
              module17.Text,
              {
                style: {
                  fontSize: 12,
                  color: this.props.selected ? '#FFFFFF' : 'rgb(103, 101, 96)',
                },
              },
              this.props.title
            )
          )
        );
      },
    },
  ]);
  return C;
})(React.default.Component);

exports.default = v;
