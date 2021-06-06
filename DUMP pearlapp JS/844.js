var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module826 = require('./826'),
  module406 = require('./406'),
  module755 = require('./755'),
  module609 = require('./609'),
  module832 = require('./832'),
  module841 = require('./841');

function C() {
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

var L = (function (t) {
    module9.default(P, t);

    var n = P,
      module406 = C(),
      L = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function P(t) {
      var n;
      module7.default(this, P);
      (n = L.call(this, t)).webView = React.createRef();
      n.state = {
        isErrorPage: false,
        canGoBack: false,
        isFirstOpendWebView: true,
        onDidFocus: false,
      };
      return n;
    }

    module8.default(P, [
      {
        key: '_onMessage',
        value: function (t) {
          var n;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (!t.nativeEvent.data.includes(module832.Message.alert)) {
                      o.next = 4;
                      break;
                    }

                    n = t.nativeEvent.data.replace('alert: ', '');
                    return o.abrupt(
                      'return',
                      module609.simpleAlert({
                        content: n,
                        confirmText: this.props.uiLanguage.Confirm,
                      })
                    );

                  case 4:
                  case 'end':
                    return o.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'onStartWithRequest',
        value: function (t) {
          var n = t.url;

          if (n.includes('pg1.payletter.com')) {
            this.props.navigation.navigate('MainRoute_DefaultWeb', {
              returnUrl: n,
            });
            return false;
          } else return !n.includes('intent') || (module841.IntentModule.launchApp(n), false);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            module17.View,
            {
              style: {
                flex: 1,
                backgroundColor: module755.Color.mainTheme,
              },
            },
            React.default.createElement(module826.WebView, {
              style: {
                backgroundColor: module755.Color.mainTheme,
              },
              source: {
                uri: this.props.url,
              },
              ref: this.webView,
              onShouldStartLoadWithRequest: this.onStartWithRequest.bind(this),
              onNavigationStateChange: function (t) {},
              startInLoadingState: true,
              renderLoading: function () {
                return null;
              },
            })
          );
        },
      },
    ]);
    return P;
  })(React.default.Component),
  P = module406.connect(function (t) {
    return {
      platform: t.system.platform,
      region: t.system.region,
      accessToken: t.account.accessToken,
      linkingPlatform: t.account.linkingPlatform,
      uiLanguage: t.system.uiLanguage,
      regionLanguage: t.system.regionLanguage,
      isNetworkConnected: t.system.isNetworkConnected,
      checkAccountIsValidProgress: t.progress.checkAccountIsValidProgress,
    };
  })(L);

exports.default = P;
