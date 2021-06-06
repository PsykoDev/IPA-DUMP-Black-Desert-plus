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
  module498 = require('./498'),
  module613 = require('./613'),
  module651 = require('./651'),
  module805 = require('./805'),
  module833 = require('./833'),
  module836 = require('./836');

function _(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = I(t)) || (n && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var s = 0;
      return function () {
        return s >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[s++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function I(t, n) {
  if (t) {
    if ('string' == typeof t) return M(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? M(t, n) : undefined;
  }
}

function M(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, s = new Array(n); o < n; o++) s[o] = t[o];

  return s;
}

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

var V = (function (t) {
    module9.default(M, t);

    var n = M,
      module406 = C(),
      I = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var s = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function M(t) {
      var n;
      module7.default(this, M);
      (n = I.call(this, t)).webView = React.createRef();
      n.state = {
        canGoBack: false,
        onDidFocus: false,
        isLoading: false,
        loginWebViewRequest: module836.createLoginWebViewRequest({
          url: n.props.url,
          region: n.props.region,
          regionLanguage: n.props.regionLanguage,
          accessToken: n.props.accessToken,
          targetService: module498.ServiceManager.getTargetService(n.props.platform, n.props.region),
          instanceId: module498.SystemManager.getFirebaseCloudToken(),
        }),
        isVisible: true,
      };
      return n;
    }

    module8.default(M, [
      {
        key: 'handleNewLogin',
        value: function (t) {
          var n = this;
          if (0 === t.resultCode)
            module613.bindAction.account.fetchNewLogin({
              accountId: t.AccountId,
              accessToken: t.AccessToken,
              refreshToken: t.RefreshToken,
              allowMarketing: t.AllowMarketing,
              allowAlarmList: t.AllowAlarmList,
              accountLinkingInfo: t.AccountLinkInfo,
            });
          else
            module609.simpleAlert({
              content: this.props.uiLanguage.Alert_API_Error,
              confirmText: this.props.uiLanguage.Confirm,
              confirmOnPress: function () {
                n.setState({
                  loginWebViewRequest: module836.createLoginWebViewRequest({
                    url: n.props.url,
                    region: n.props.region,
                    regionLanguage: n.props.regionLanguage,
                    accessToken: n.props.accessToken,
                    targetService: module498.ServiceManager.getTargetService(n.props.platform, n.props.region),
                    instanceId: module498.SystemManager.getFirebaseCloudToken(),
                  }),
                });
              },
            });
        },
      },
      {
        key: 'forceRender',
        value: function () {
          var t = this;
          this.setState(
            {
              isVisible: false,
            },
            function () {
              t.setState({
                isVisible: true,
              });
            }
          );
        },
      },
      {
        key: '_onMessage',
        value: function (t) {
          var n, module7, u;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (!(n = t.nativeEvent.data).startsWith('alert:')) {
                      o.next = 6;
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

                  case 6:
                    if (n.startsWith('loginResult:')) {
                      u = JSON.parse(n.split('loginResult:')[1]);
                      this.handleNewLogin(u);
                    }

                  case 7:
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
        key: '_onStartWithRequest',
        value: function (t) {
          var n = t.url;

          if (n.includes('Error') && !n.includes('returnUrl')) {
            this.forceRender();
            return false;
          }

          for (var o, s = _(module498.RemoteConfigManager.getConfig('common/SNS_LOGIN_LIST/' + this.props.region)); !(o = s()).done; ) {
            var u = o.value;

            if (n.includes(u)) {
              module651.NavigationService.getNavigation().navigate(module651.NavigationService.routers.MainRoute_SocialWebLogin, {
                returnUrl: n,
                userAgent: u.includes('google') ? 'pearlApp' : '',
                loginWebViewForceUpdateFunc: this.forceRender.bind(this),
              });
              return false;
            }
          }

          return true;
        },
      },
      {
        key: '_onLoadStart',
        value: function () {
          this.setState({
            isLoading: true,
          });
        },
      },
      {
        key: '_onLoadEnd',
        value: function () {
          this.setState({
            isLoading: false,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return this.state.isVisible
            ? React.default.createElement(
                module17.View,
                {
                  style: {
                    flex: 1,
                    backgroundColor: module755.Color.mainTheme,
                  },
                },
                React.default.createElement(module826.default, {
                  source: this.state.loginWebViewRequest,
                  userAgent: this.props.userAgent,
                  ref: this.webView,
                  injectedJavaScript: module833.webviewScript.utils.overrideAlert,
                  allowsBackForwardNavigationGestures: module498.SystemManager.isIos(),
                  onLoadStart: function () {
                    return t._onLoadStart();
                  },
                  onLoadEnd: function () {
                    return t._onLoadEnd();
                  },
                  onMessage: this._onMessage.bind(this),
                  onNavigationStateChange: function (n) {
                    t.setState({
                      canGoBack: n.canGoBack,
                    });
                  },
                  onShouldStartLoadWithRequest: this._onStartWithRequest.bind(this),
                  startInLoadingState: true,
                  renderLoading: function () {
                    return null;
                  },
                }),
                React.default.createElement(module805.default, {
                  visible: this.state.isLoading,
                  backgroundColor: '#FFFFFF',
                })
              )
            : null;
        },
      },
    ]);
    return M;
  })(React.Component),
  F = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      regionLanguage: t.system.regionLanguage,
      region: t.system.region,
      platform: t.system.platform,
      accessToken: t.account.accessToken,
    };
  })(V);

exports.default = F;
