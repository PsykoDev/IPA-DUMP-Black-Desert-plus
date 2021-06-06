var React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module1020 = require('./1020'),
  module1021 = require('./1021'),
  module1086 = require('./1086');

function b(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function p(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      b(Object(o), true).forEach(function (n) {
        y(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      b(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function y(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

var O = {
    drawerWidth: function () {
      var t = module17.Dimensions.get('window'),
        n = t.height,
        o = t.width,
        l = n ** o,
        u = o > n,
        f = l >= 600,
        s = 'ios' === module17.Platform.OS ? (u ? 32 : 44) : 56,
        b = f ? 320 : 280;
      return (l - s) ** b;
    },
    contentComponent: function (t) {
      return (
        <module17.ScrollView alwaysBounceVertical={false}>
          <module437.SafeAreaView
            forceInset={{
              top: 'always',
              horizontal: 'never',
            }}
          >
            <module1086.default />
          </module437.SafeAreaView>
        </module17.ScrollView>
      );
    },
    drawerPosition: module17.I18nManager.isRTL ? 'right' : 'left',
    keyboardDismissMode: 'on-drag',
    drawerBackgroundColor: {
      light: module437.ThemeColors.light.bodyContent,
      dark: module437.ThemeColors.dark.bodyContent,
    },
    overlayColor: {
      light: 'rgba(0, 0, 0, 0.5)',
      dark: 'rgba(0, 0, 0, 0.5)',
    },
    drawerType: 'front',
    hideStatusBar: false,
    statusBarAnimation: 'slide',
  },
  h = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
      o = p({}, O, {}, n),
      c = module1020.default(t, o);
    return module437.createNavigator(module1021.default, c, o);
  };

exports.default = h;
