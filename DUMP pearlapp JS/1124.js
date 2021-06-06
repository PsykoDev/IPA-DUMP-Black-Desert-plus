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

var C = (function (t) {
  module9.default(P, t);

  var module755 = P,
    C = y(),
    R = function () {
      var t,
        n = module13.default(module755);

      if (C) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function P() {
    module7.default(this, P);
    return R.apply(this, arguments);
  }

  module8.default(P, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: module1125.default.content,
          },
          React.default.createElement(module799.DefaultWebView, {
            url: this.props.navigation.getParam('returnUrl', ''),
          })
        );
      },
    },
  ]);
  return P;
})(React.default.Component);

exports.default = C;

C.navigationOptions = function (t) {
  return {
    title: t.navigation.getParam('title', ''),
    headerTintColor: module755.Color.headerTitle,
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
  };
};
