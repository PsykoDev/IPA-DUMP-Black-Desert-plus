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
    module9.default(M, t);

    var n = M,
      v = y(),
      I = function () {
        var t,
          o = module13.default(n);

        if (v) {
          var c = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, c);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function M() {
      module7.default(this, M);
      return I.apply(this, arguments);
    }

    module8.default(M, [
      {
        key: 'render',
        value: function () {
          var t,
            n = this;
          return React.default.createElement(
            module17.TouchableOpacity,
            {
              style: _.container,
              onPress: function () {
                if (n.props.onPress) n.props.onPress();
              },
            },
            React.default.createElement(module17.Image, {
              style: _.image,
              source:
                ((t = this.props.url),
                (t = t.toLowerCase()).includes('google')
                  ? module755.ImageMap.icn_google
                  : t.includes('facebook')
                  ? module755.ImageMap.icn_facebook
                  : t.includes('kakao')
                  ? module755.ImageMap.icn_kakao
                  : t.includes('naver')
                  ? module755.ImageMap.icn_naver
                  : t.includes('steam')
                  ? module755.ImageMap.icn_steam
                  : t.includes('twitter')
                  ? module755.ImageMap.icn_twitter
                  : t.includes('yahoo')
                  ? module755.ImageMap.icn_yahoo
                  : t.includes('vk')
                  ? module755.ImageMap.icn_vkn
                  : null),
            })
          );
        },
      },
    ]);
    return M;
  })(React.Component),
  _ = module17.StyleSheet.create({
    container: {
      borderRadius: Math.round(module17.Dimensions.get('window').width + module17.Dimensions.get('window').height) / 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
    },
    image: {
      width: 48,
      height: 48,
    },
  }),
  I = v;

exports.default = I;
