var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module799 = require('./799'),
  module613 = require('./613'),
  module755 = require('./755'),
  module498 = require('./498'),
  module648 = require('./648'),
  module1119 = require('./1119');

function x() {
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
  module9.default(p, t);

  var n = p,
    module17 = x(),
    y = function () {
      var t,
        o = module13.default(n);

      if (module17) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function p(t) {
    var n;
    module7.default(this, p);
    (n = y.call(this, t)).state = {
      isSelectedLanguage: false,
      selectedLangCode: n.props.uiLanguageCode,
    };
    return n;
  }

  module8.default(p, [
    {
      key: 'componentDidMount',
      value: function () {
        this.props.navigation.setParams({
          next: this.next.bind(this),
        });
      },
    },
  ]);
  module8.default(p, [
    {
      key: 'next',
      value: function () {
        if (this.state.isSelectedLanguage) {
          module648.Logger.info(arguments.callee.name, this.state.selectedLangCode);
          module613.bindAction.system.setUILanguageCode(this.state.selectedLangCode);
          module613.bindAction.system.setUILanguage(this.state.selectedLangCode);
        }

        this.props.navigation.goBack();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module799.PABackgroundScrollView,
          {
            style: [module1119.default.container],
          },
          module498.LocalizeManager.getLangNames().map(function (n) {
            var o = module498.LocalizeManager.getLangCodeByName(n);
            return React.default.createElement(module799.PATextCheckButton, {
              key: n,
              text: n,
              isCheck: t.state.selectedLangCode === o,
              fontSize: 16,
              onPress: function () {
                t.setState({
                  isSelectedLanguage: true,
                  selectedLangCode: o,
                });
              },
            });
          })
        );
      },
    },
  ]);
  return p;
})(React.Component);

P.navigationOptions = function (t) {
  var n = t.navigation;
  return {
    headerRight: function () {
      return React.default.createElement(
        module17.TouchableOpacity,
        {
          onPress: function () {
            var t = n.getParam('next', undefined);
            if (t) t();
          },
        },
        React.default.createElement(
          module17.View,
          {
            style: {
              paddingEnd: 12,
            },
          },
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: 18,
                color: module755.Color.headerTitle,
              },
            },
            module613.store.getState().system.uiLanguage.Confirm
          )
        )
      );
    },
  };
};

var E = module406.connect(function (t) {
  return {
    isLoggined: t.account.isLoggined,
    platform: t.system.platform,
    region: t.system.region,
    uiLanguage: t.system.uiLanguage,
    uiLanguageCode: t.system.uiLanguageCode,
  };
})(P);
exports.default = E;
