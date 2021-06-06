var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module826 = require('./826'),
  module406 = require('./406'),
  module437 = require('./437'),
  module498 = require('./498'),
  module755 = require('./755'),
  module609 = require('./609'),
  module648 = require('./648'),
  module831 = require('./831'),
  module833 = require('./833'),
  module836 = require('./836'),
  module832 = require('./832'),
  module801 = require('./801'),
  module805 = require('./805');

function T() {
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

var x = (function (t) {
    module9.default(C, t);

    var n = C,
      module406 = T(),
      x = function () {
        var t,
          s = module13.default(n);

        if (module406) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(s, arguments, o);
        } else t = s.apply(this, arguments);

        return module11.default(this, t);
      };

    function C(t) {
      var n;
      module7.default(this, C);
      (n = x.call(this, t)).webView = React.createRef();

      n.backHandler = function () {
        var t;
        return !!(n.state.onDidFocus && n.state.canGoBack && n.webView) && (null == (t = n.webView.current) || t.goBack(), true);
      };

      n.state = {
        isErrorPage: false,
        canGoBack: false,
        isFirstOpendWebView: true,
        onDidFocus: false,
      };
      return n;
    }

    module8.default(C, [
      {
        key: 'componentDidMount',
        value: function () {
          if (module498.SystemManager.isAndroid()) this.backHandlerListener = module17.BackHandler.addEventListener('hardwareBackPress', this.backHandler);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (module498.SystemManager.isAndroid() && undefined != this.backHandlerListener) this.backHandlerListener.remove();
        },
      },
      {
        key: '_onLoadStart',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (this.props.isNetworkConnected)
                      this.setState({
                        isErrorPage: false,
                      });
                    else
                      this.setState({
                        isFirstOpendWebView: false,
                        isErrorPage: true,
                      });

                  case 1:
                  case 'end':
                    return t.stop();
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
        key: '_onLoadEnd',
        value: function (t) {
          var n,
            s,
            o = module831.TradeScript;

          if (
            (this.setState({
              isFirstOpendWebView: false,
            }),
            t.nativeEvent.url.includes('Home/list/hot'))
          ) {
            if (!(null == (n = this.webView.current))) n.injectJavaScript(o.removeLanguageBox);
            if (!(null == (s = this.webView.current))) s.injectJavaScript(o.removeTradeLogout);
          }
        },
      },
      {
        key: '_onMessage',
        value: function (t) {
          var n, module7;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (((n = t.nativeEvent.data), module648.Logger.info('Certified WebView MessageData', n), !n.includes(module832.Message.alert))) {
                      s.next = 5;
                      break;
                    }

                    module7 = t.nativeEvent.data.replace('alert: ', '');
                    return s.abrupt(
                      'return',
                      module609.simpleAlert({
                        content: module7,
                        confirmText: this.props.uiLanguage.Confirm,
                      })
                    );

                  case 5:
                    if (!n.includes(module832.Message.command + ': goBack')) {
                      s.next = 7;
                      break;
                    }

                    return s.abrupt('return', this.props.navigation.goBack());

                  case 7:
                    n.includes(module832.Message.click + ': favoriteButton');

                  case 8:
                  case 'end':
                    return s.stop();
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
        key: '_onRefresh',
        value: function () {
          var t;

          if (this.props.isNetworkConnected) {
            if (!(null == (t = this.webView.current))) t.reload();
            this.setState({
              isErrorPage: false,
            });
          } else
            this.setState({
              isErrorPage: true,
            });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            module17.View,
            {
              style: {
                flex: 1,
                backgroundColor: module755.Color.mainTheme,
              },
            },
            React.default.createElement(module437.NavigationEvents, {
              onDidFocus: function () {
                t.setState({
                  onDidFocus: true,
                });
              },
              onWillBlur: function () {
                t.setState({
                  onDidFocus: false,
                });
              },
            }),
            React.default.createElement(module826.WebView, {
              style: {
                backgroundColor: module755.Color.mainTheme,
              },
              source: module836.createPaWebViewRequest({
                url: this.props.url,
                accessToken: this.props.accessToken,
              }),
              userAgent: 'pearlApp',
              ref: this.webView,
              decelerationRate: module498.SystemManager.isIos() ? 'normal' : undefined,
              injectedJavaScript: module833.webviewScript.combineScript([module833.webviewScript.utils.overrideAlert, module833.webviewScript.utils.disableZoom]),
              allowsBackForwardNavigationGestures: module498.SystemManager.isIos(),
              allowsFullscreenVideo: module498.SystemManager.isAndroid(),
              onLoadStart: function () {
                return t._onLoadStart();
              },
              onLoadEnd: function (n) {
                return t._onLoadEnd(n);
              },
              onMessage: this._onMessage.bind(this),
              onNavigationStateChange: function (n) {
                if ('backforward' === n.navigationType)
                  t.setState({
                    isErrorPage: false,
                  });
                t.props.canBackGesture(n.canGoBack);
                t.setState({
                  canGoBack: n.canGoBack,
                });
              },
              onError: function () {
                t.setState({
                  isErrorPage: true,
                });
              },
              startInLoadingState: true,
            }),
            this.state.isErrorPage &&
              React.default.createElement(module801.default, {
                onPress: function () {
                  t._onRefresh();
                },
                errorText: this.props.uiLanguage.Text_Error_Page,
                refreshText: this.props.uiLanguage.Text_Refresh,
              }),
            React.default.createElement(module805.default, {
              visible: this.state.isFirstOpendWebView || this.props.checkAccountIsValidProgress,
            })
          );
        },
      },
    ]);
    return C;
  })(React.default.Component),
  C = module406.connect(function (t) {
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
  })(x);

exports.default = C;
