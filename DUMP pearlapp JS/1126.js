var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1125 = require('./1125'),
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

var P = (function (t) {
  module9.default(k, t);

  var module755 = k,
    P = y(),
    C = function () {
      var t,
        n = module13.default(module755);

      if (P) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function k() {
    module7.default(this, k);
    return C.apply(this, arguments);
  }

  module8.default(k, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          {
            style: module1125.default.content,
          },
          React.default.createElement(module799.ContentWebView, {
            url: this.props.navigation.getParam('returnUrl', ''),
            userAgent: this.props.navigation.getParam('userAgent', 'pearlApp'),
            navigation: this.props.navigation,
            canBackGesture: function (n) {
              t.props.navigation.setParams({
                canBackGesture: !n,
              });
            },
          })
        );
      },
    },
  ]);
  return k;
})(React.default.Component);

exports.default = P;

P.navigationOptions = function (t) {
  var n = t.navigation;
  return {
    title: n.getParam('title', ''),
    headerTintColor: module755.Color.headerTitle,
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    gestureEnabled: n.getParam('canBackGesture', true),
  };
};
