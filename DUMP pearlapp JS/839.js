var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module826 = require('./826'),
  module437 = require('./437'),
  module498 = require('./498'),
  module609 = require('./609'),
  module755 = require('./755'),
  module836 = require('./836'),
  module648 = require('./648'),
  module832 = require('./832'),
  module833 = require('./833'),
  module801 = require('./801'),
  module805 = require('./805');

function q() {
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

var C = module833.startWithRequest.isPCLogin,
  _ = module833.startWithRequest.processPCLogin,
  M = module833.startWithRequest.isTwitchContent,
  B = module833.startWithRequest.processTwitchContent,
  V = module833.startWithRequest.isYoutubeOption,
  x = module833.startWithRequest.processYoutubeOption,
  F = module833.startWithRequest.isYoutubeEmbede,
  D = module833.startWithRequest.processYoutubeEmbede,
  G = module833.startWithRequest.isYoutubeSignIn,
  N = module833.startWithRequest.processYoutubeSignIn,
  A = module833.startWithRequest.isMainPage,
  O = module833.startWithRequest.isGoogleDocs,
  H = module833.startWithRequest.processGoogleDocs,
  Y = module833.startWithRequest.processMainPage,
  I = (function (t) {
    module9.default(j, t);

    var n = j,
      module406 = q(),
      I = function () {
        var t,
          s = module13.default(n);

        if (module406) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(s, arguments, o);
        } else t = s.apply(this, arguments);

        return module11.default(this, t);
      };

    function j(t) {
      var n;
      module7.default(this, j);
      (n = I.call(this, t)).webView = React.createRef();

      n.backHandler = function () {
        var t;
        return !!(n.state.onDidFocus && n.state.canGoBack && n.webView) && (null == (t = n.webView.current) || t.goBack(), true);
      };

      n.state = {
        isFirstOpendWebView: true,
        isErrorPage: false,
        canGoBack: false,
        isPressedBackButton: true,
        onDidFocus: false,
        isScrollTop: true,
        isLoading: false,
      };
      return n;
    }

    module8.default(j, [
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
                        isScrollTop: true,
                        isErrorPage: false,
                      });
                    else
                      this.setState({
                        isScrollTop: true,
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
        value: function () {
          this.setState({
            isFirstOpendWebView: false,
            isLoading: false,
          });
        },
      },
      {
        key: '_onStartWithRequest',
        value: function (t) {
          var n = t.url;
          module648.Logger.info(arguments.callee.name, n);

          if (C(n, this.props.platform)) {
            _();

            return false;
          } else if (M(n)) {
            B(n);
            return false;
          } else if (V(n)) {
            x(n);
            return false;
          } else if (F(n)) {
            D(n);
            return false;
          } else if (G(n)) {
            N(n);
            return false;
          } else if (A(n)) {
            Y();
            return false;
          } else return !O(n) || (H(n), false);
        },
      },
      {
        key: '_onMessage',
        value: function (t) {
          var n;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (
                      (t.nativeEvent.data.includes(module832.Message.scroll) &&
                        (0 === Number(t.nativeEvent.data.replace('scroll: ', ''))
                          ? this.setState({
                              isScrollTop: true,
                            })
                          : this.setState({
                              isScrollTop: false,
                            })),
                      !t.nativeEvent.data.includes(module832.Message.alert))
                    ) {
                      s.next = 4;
                      break;
                    }

                    n = t.nativeEvent.data.replace('alert: ', '');
                    return s.abrupt(
                      'return',
                      module609.simpleAlert({
                        content: n,
                        confirmText: this.props.uiLanguage.Confirm,
                      })
                    );

                  case 4:
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
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (this.props.isNetworkConnected) {
                      this.setState({
                        isLoading: true,
                        isErrorPage: false,
                      });
                      if (!(null == (t = this.webView.current))) t.reload();
                    } else
                      this.setState({
                        isLoading: true,
                        isErrorPage: true,
                      });

                  case 1:
                  case 'end':
                    return n.stop();
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
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            module17.ScrollView,
            {
              style: {
                flex: 1,
                backgroundColor: module755.Color.mainTheme,
              },
              contentContainerStyle: {
                flex: 1,
              },
              refreshControl: React.default.createElement(module17.RefreshControl, {
                refreshing: false,
                onRefresh: this._onRefresh.bind(this),
                enabled: this.state.isScrollTop,
              }),
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
              ref: this.webView,
              userAgent: this.props.userAgent,
              decelerationRate: module498.SystemManager.isIos() ? 'normal' : undefined,
              injectedJavaScript: module833.webviewScript.combineScript([module833.webviewScript.utils.overrideAlert, module833.webviewScript.utils.addScrollListener]),
              allowsBackForwardNavigationGestures: module498.SystemManager.isIos(),
              allowsFullscreenVideo: module498.SystemManager.isAndroid(),
              onLoadStart: function () {
                return t._onLoadStart();
              },
              onLoadEnd: function () {
                return t._onLoadEnd();
              },
              onMessage: this._onMessage.bind(this),
              onShouldStartLoadWithRequest: this._onStartWithRequest.bind(this),
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
              renderLoading: function () {
                return null;
              },
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
              visible: this.state.isFirstOpendWebView || this.state.isLoading,
            })
          );
        },
      },
    ]);
    return j;
  })(React.default.Component),
  j = module406.connect(function (t) {
    return {
      platform: t.system.platform,
      region: t.system.region,
      regionLanguage: t.system.regionLanguage,
      uiLanguage: t.system.uiLanguage,
      isNetworkConnected: t.system.isNetworkConnected,
      accessToken: t.account.accessToken,
    };
  })(I);

exports.default = j;
