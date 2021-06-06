var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755'),
  module802 = require('./802');

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
  module9.default(C, t);

  var n = C,
    w = v(),
    x = function () {
      var t,
        o = module13.default(n);

      if (w) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function C(t) {
    module7.default(this, C);
    return x.call(this, t);
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          {
            style: {
              flex: 1,
              width: '100%',
              height: '100%',
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: module755.Color.white,
              alignContent: 'center',
              justifyContent: 'center',
            },
          },
          React.default.createElement(module17.Image, {
            style: {
              width: 300,
              resizeMode: 'contain',
            },
            source: module755.ImageMap.shutdown_genie,
          }),
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: 18,
                color: '#11445e',
                marginTop: 16,
                textAlign: 'center',
              },
            },
            this.props.errorText
          ),
          React.default.createElement(module802.default, {
            style: {
              marginTop: 16,
            },
            width: 250,
            height: 40,
            title: this.props.refreshText,
            onPress: function () {
              t.props.onPress();
            },
          })
        );
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = w;
