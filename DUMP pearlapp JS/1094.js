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
  module9.default(b, t);

  var n = b,
    v = y(),
    R = function () {
      var t,
        o = module13.default(n);

      if (v) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function b() {
    module7.default(this, b);
    return R.apply(this, arguments);
  }

  module8.default(b, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.TouchableOpacity,
          {
            style: {
              borderRadius: Math.round(module17.Dimensions.get('window').width + module17.Dimensions.get('window').height) / 2,
              borderColor: module755.Color.borderLine,
              borderWidth: 1,
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginEnd: 4,
              marginStart: 4,
            },
            onPress: function () {
              module17.Linking.canOpenURL(t.props.url).then(function (n) {
                if (n) module17.Linking.openURL(t.props.url);
                else
                  t.props.navigation.navigate('MainRoute_DefaultWeb', {
                    returnUrl: t.props.url,
                  });
              });
            },
          },
          React.default.createElement(module17.Image, {
            style: {
              flex: 0.6,
            },
            resizeMode: 'contain',
            source: this.props.source,
          })
        );
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = v;
