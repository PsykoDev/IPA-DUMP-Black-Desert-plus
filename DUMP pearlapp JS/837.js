var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module826 = require('./826'),
  module406 = require('./406'),
  module498 = require('./498'),
  module609 = require('./609'),
  module755 = require('./755'),
  module833 = require('./833'),
  module832 = require('./832'),
  module836 = require('./836'),
  module838 = require('./838'),
  module801 = require('./801'),
  module805 = require('./805'),
  module810 = require('./810');

function M() {
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

var _ = module838.GuildScript,
  T = (function (t) {
    module9.default(T, t);

    var n = T,
      module406 = M(),
      P = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function T(t) {
      var n;
      module7.default(this, T);
      (n = P.call(this, t)).webView = React.createRef();
      n.textInput = React.createRef();

      n.backHandler = function () {
        var t;
        return !(!n.state.canGoBack || !n.webView) && (null == (t = n.webView.current) || t.goBack(), true);
      };

      n.state = {
        isErrorPage: false,
        canGoBack: false,
        isFirstOpendWebView: true,
        didFocusGuildChatPage: true,
        didFocusChat: false,
        message: '',
        keyboardHeight: 0,
      };
      return n;
    }

    module8.default(T, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;

          if (module498.SystemManager.isAndroid()) {
            this.keyboardDidShowListener = module17.Keyboard.addListener('keyboardDidShow', function (n) {
              var o;
              t.setState({
                keyboardHeight: n.endCoordinates.height,
              });
              if (!(null == (o = t.webView.current)))
                o.injectJavaScript(
                  '\n          window.scrollTo(0, window.scrollY + ' + n.endCoordinates.height + ')\n          androidKeyboardUpScrollY = window.scrollY\n        '
                );
            });
            this.keyboardDidHideListener = module17.Keyboard.addListener('keyboardDidHide', function (n) {
              var o;
              if (!(null == (o = t.webView.current))) o.injectJavaScript('\n        window.scrollTo(0, androidKeyboardUpScrollY - ' + t.state.keyboardHeight + ')\n        ');
              t.setState({
                keyboardHeight: 0,
              });
            });
          }

          if (module498.SystemManager.isIos()) {
            this.keyboardWillShowListener = module17.Keyboard.addListener('keyboardWillShow', function (n) {
              t.setState({
                keyboardHeight: n.endCoordinates.height,
              });
              setTimeout(function () {
                var o;
                if (!(null == (o = t.webView.current))) o.injectJavaScript('window.scrollTo(0, window.scrollY + ' + n.endCoordinates.height + ')');
              }, 50);
            });
            this.keyboardWillHideListener = module17.Keyboard.addListener('keyboardWillHide', function (n) {
              var o;
              if (!(null == (o = t.webView.current))) o.injectJavaScript('window.scrollTo(0, window.scrollY - ' + t.state.keyboardHeight + ')');
              t.setState({
                keyboardHeight: 0,
              });
            });
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (module498.SystemManager.isAndroid()) {
            if (undefined != this.keyboardDidShowListener) this.keyboardDidShowListener.remove();
            if (undefined != this.keyboardDidHideListener) this.keyboardDidHideListener.remove();
          }

          if (module498.SystemManager.isIos()) {
            if (undefined != this.keyboardWillShowListener) this.keyboardWillShowListener.remove();
            if (undefined != this.keyboardWillHideListener) this.keyboardWillHideListener.remove();
          }
        },
      },
      {
        key: '_onMessage',
        value: function (t) {
          var n,
            module7,
            c = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (!(n = t.nativeEvent.data).includes(module832.Message.alert)) {
                      o.next = 4;
                      break;
                    }

                    module7 = t.nativeEvent.data.replace('alert: ', '');
                    return o.abrupt(
                      'return',
                      module609.simpleAlert({
                        content: module7,
                        confirmText: this.props.uiLanguage.Confirm,
                      })
                    );

                  case 4:
                    if (!n.includes(module832.Message.command + ': goBack')) {
                      o.next = 6;
                      break;
                    }

                    return o.abrupt('return', this.props.navigation.goBack());

                  case 6:
                    if (!n.includes(module832.Message.command + ': noGuild')) {
                      o.next = 8;
                      break;
                    }

                    return o.abrupt(
                      'return',
                      module609.simpleAlert({
                        content: this.props.uiLanguage.Alert_No_Guild,
                        confirmText: this.props.uiLanguage.Confirm,
                        confirmOnPress: function () {
                          return c.props.navigation.goBack();
                        },
                      })
                    );

                  case 8:
                    if (!n.includes(module832.Message.click + ': guildChat')) {
                      o.next = 10;
                      break;
                    }

                    return o.abrupt(
                      'return',
                      this.setState({
                        didFocusGuildChatPage: true,
                      })
                    );

                  case 10:
                    if (!n.includes(module832.Message.click + ': guildMember')) {
                      o.next = 12;
                      break;
                    }

                    return o.abrupt(
                      'return',
                      this.setState({
                        didFocusGuildChatPage: false,
                      })
                    );

                  case 12:
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
          var n;
          this.setState({
            isFirstOpendWebView: false,
          });
          if (!(null == (n = this.webView.current)))
            n.injectJavaScript(module833.webviewScript.combineScript([_.initilizeChatHub, _.overrideGuildChatButton, _.overrideGuildMemberButton]));
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
                        isErrorPage: false,
                      });
                      if (!(null == (t = this.webView.current))) t.reload();
                    } else
                      this.setState({
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
            module17.KeyboardAvoidingView,
            {
              style: {
                flex: 1,
                backgroundColor: module755.Color.mainTheme,
                marginBottom: module498.SystemManager.isIos() ? this.state.keyboardHeight : 0,
              },
              enabled: true,
            },
            React.default.createElement(module826.WebView, {
              style: {
                flex: 1,
                backgroundColor: module755.Color.mainTheme,
              },
              source: module836.createPaWebViewRequest({
                url: this.props.url,
                accessToken: this.props.accessToken,
              }),
              ref: this.webView,
              decelerationRate: module498.SystemManager.isIos() ? 'normal' : undefined,
              injectedJavaScript: module833.webviewScript.combineScript([module833.webviewScript.utils.overrideAlert, module833.webviewScript.utils.disableZoom]),
              allowsBackForwardNavigationGestures: module498.SystemManager.isIos(),
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
            !this.state.isErrorPage &&
              this.state.didFocusGuildChatPage &&
              React.default.createElement(
                module17.View,
                {
                  style: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: '#FFFDF9',
                    borderStyle: 'solid',
                    width: '100%',
                    height: 50,
                  },
                },
                React.default.createElement(module17.TextInput, {
                  style: {
                    flex: 1,
                    fontSize: 18,
                    color: module755.Color.black,
                    paddingStart: 8,
                    paddingEnd: 8,
                  },
                  ref: this.textInput,
                  maxLength: 300,
                  blurOnSubmit: true,
                  onChange: function (n) {
                    t.setState({
                      message: n.nativeEvent.text,
                    });
                  },
                  accessibilityLabel: 'ChatWebView_Input',
                }),
                React.default.createElement(module810.default, {
                  style: {
                    width: 50,
                  },
                  imageStyle: {
                    width: 30,
                  },
                  onPress: function () {
                    var n, o, s;

                    if ('' != t.state.message) {
                      if (!(null == (n = t.webView.current))) n.injectJavaScript(_.sendGuildMessage.replace('$message', t.state.message));
                      if (!(null == (o = t.textInput.current))) o.clear();
                      t.setState({
                        message: '',
                      });
                      if (module498.SystemManager.isAndroid()) null == (s = t.webView.current) || s.injectJavaScript('androidKeyboardUpScrollY = window.scrollY + 100000');
                    }
                  },
                  source: module755.ImageMap.icn_send_message,
                  accessibilityLabel: 'ChatWebView_InputButton',
                })
              ),
            React.default.createElement(module805.default, {
              visible: this.state.isFirstOpendWebView || this.props.checkAccountIsValidProgress,
            }),
            this.state.isErrorPage &&
              React.default.createElement(module801.default, {
                onPress: function () {
                  t._onRefresh();
                },
                errorText: this.props.uiLanguage.Text_Error_Page,
                refreshText: this.props.uiLanguage.Text_Refresh,
              })
          );
        },
      },
    ]);
    return T;
  })(React.default.Component),
  H = module406.connect(function (t) {
    return {
      platform: t.system.platform,
      region: t.system.region,
      regionLanguage: t.system.regionLanguage,
      uiLanguage: t.system.uiLanguage,
      isNetworkConnected: t.system.isNetworkConnected,
      accessToken: t.account.accessToken,
      checkAccountIsValidProgress: t.progress.checkAccountIsValidProgress,
    };
  })(T);

exports.default = H;
