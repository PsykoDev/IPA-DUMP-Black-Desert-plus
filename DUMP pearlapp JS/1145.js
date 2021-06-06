var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1146 = require('./1146');

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

var v = (function (t) {
  module9.default(_, t);

  var n = _,
    v = h(),
    R = function () {
      var t,
        c = module13.default(n);

      if (v) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(c, arguments, l);
      } else t = c.apply(this, arguments);

      return module11.default(this, t);
    };

  function _(t) {
    module7.default(this, _);
    return R.call(this, t);
  }

  module8.default(_, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          {
            style: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          },
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: 18,
                color: '#959595',
                marginTop: 12,
                marginBottom: 12,
              },
            },
            this.props.title
          ),
          React.default.createElement(module1146.default, {
            onPress: function () {
              return t.props.cancel();
            },
            accessibilityLabel: 'CancelCircle_' + this.props.title,
          })
        );
      },
    },
  ]);
  return _;
})(React.Component);

exports.default = v;
