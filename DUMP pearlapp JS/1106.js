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

var y = (function (t) {
  module9.default(w, t);

  var n = w,
    y = v(),
    _ = function () {
      var t,
        u = module13.default(n);

      if (y) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function w() {
    module7.default(this, w);
    return _.apply(this, arguments);
  }

  module8.default(w, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.TouchableOpacity,
          {
            style: {
              paddingLeft: 10,
            },
            onPress: function () {
              if (t.props.navigation.state.isDrawerOpen) t.props.navigation.closeDrawer();
              else t.props.navigation.openDrawer();
            },
            accessibilityLabel: 'LeftHeader_Navigation',
          },
          React.default.createElement(
            module17.View,
            {
              style: {
                width: 30,
                height: 30,
              },
            },
            React.default.createElement(module17.Image, {
              style: {
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              },
              source: module755.ImageMap.icn_header_menu,
            })
          )
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.default = y;
