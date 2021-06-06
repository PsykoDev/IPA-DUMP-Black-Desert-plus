var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module799 = require('./799');

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
  module9.default(R, t);

  var n = R,
    v = h(),
    E = function () {
      var t,
        l = module13.default(n);

      if (v) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function R() {
    module7.default(this, R);
    return E.apply(this, arguments);
  }

  module8.default(R, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: {
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
          React.default.createElement(module17.View, {
            style: {
              marginTop: 10,
            },
          }),
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: 12,
                color: '#F9B545',
                textAlign: 'center',
              },
            },
            this.props.title
          ),
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: 12,
                color: '#F9B545',
                textAlign: 'center',
              },
            },
            this.props.content
          ),
          React.default.createElement(module17.View, {
            style: {
              marginTop: 6,
            },
          }),
          React.default.createElement(module799.PARoundButton, {
            title: this.props.joinTitle,
            fontSize: 12,
            width: 200,
            height: 25,
            onPress: this.props.onPress,
          })
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = v;
