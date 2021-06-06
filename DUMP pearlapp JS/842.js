var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module826 = require('./826'),
  module406 = require('./406'),
  module645 = require('./645'),
  module755 = require('./755'),
  module498 = require('./498'),
  module714 = require('./714'),
  module651 = require('./651'),
  module833 = require('./833'),
  module836 = require('./836'),
  module832 = require('./832'),
  module801 = require('./801'),
  module805 = require('./805'),
  module613 = require('./613');

function P() {
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

var q = module833.startWithRequest.isYoutubeOption,
  M = module833.startWithRequest.processYoutubeOption,
  x = module833.startWithRequest.isYoutubeEmbede,
  A = module833.startWithRequest.processYoutubeEmbede,
  N = module833.startWithRequest.isYoutubeSignIn,
  V = module833.startWithRequest.processYoutubeSignIn,
  Y = module833.startWithRequest.isShortcutMenu,
  O = module833.startWithRequest.isBlockedContent,
  I = module833.startWithRequest.willOpenContent,
  D = module833.startWithRequest.isAllowedContent,
  U = (function (t) {
    module9.default(j, t);

    var s = j,
      module406 = P(),
      U = function () {
        var t,
          n = module13.default(s);

        if (module406) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function j(t) {
      var s;
      module7.default(this, j);
      (s = U.call(this, t)).webView = React.createRef();
      s.state = {
        isLoading: true,
        isScrollTop: true,
        isErrorPage: false,
      };
      return s;
    }

    module8.default(j, [
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
                        isLoading: true,
                        isErrorPage: false,
                      });
                    else
                      this.setState({
                        isLoading: false,
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
            isLoading: false,
          });
        },
      },
      {
        key: '_onStartWithRequest',
        value: function (t) {
          var s = t.url;

          if (q(s)) {
            M(s);
            return false;
          } else if (x(s)) {
            A(s);
            return false;
          } else if (N(s)) {
            V(s);
            return false;
          } else
            return (
              !Y(s, this.props.platform, this.props.region, this.props.regionLanguage) &&
              !O(s) &&
              (I(s)
                ? (module651.NavigationService.navigate({
                    url: s,
                    router: module651.NavigationService.routers.MainRoute_ContentWeb,
                    needLogin: false,
                    needAccountLinking: false,
                  }),
                  false)
                : (D(s), true))
            );
        },
      },
      {
        key: '_onMessage',
        value: function (t) {
          var s = t.nativeEvent.data;
          if (s.includes(module832.Message.scroll))
            0 === Number(t.nativeEvent.data.replace('scroll: ', ''))
              ? this.setState({
                  isScrollTop: true,
                })
              : this.setState({
                  isScrollTop: false,
                });

          if (s.includes('invalidAccessToken')) {
            module645.default.clearAll(true);
            module613.bindAction.account.fetchLogout();
          }
        },
      },
      {
        key: '_onRefresh',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (this.props.isNetworkConnected) {
                      this.setState({
                        isLoading: false,
                        isErrorPage: false,
                      });
                      if (!(null == (t = this.webView.current))) t.reload();
                    } else
                      this.setState({
                        isLoading: false,
                        isErrorPage: true,
                      });

                  case 1:
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
            React.default.createElement(module826.WebView, {
              ref: this.webView,
              style: {
                backgroundColor: module755.Color.mainTheme,
              },
              source: module836.createPaWebViewRequest({
                url:
                  'UBDO' === module498.ServiceManager.getPlatformKey(this.props.platform, this.props.region)
                    ? module714.replacedUrl.home(this.props.region, this.props.regionLanguage) + '?t=' + this.props.accessToken
                    : module714.replacedUrl.home(this.props.region, this.props.regionLanguage) + '&?t=' + this.props.accessToken,
                accessToken: this.props.accessToken,
              }),
              userAgent: 'pearlApp',
              decelerationRate: module498.SystemManager.isIos() ? 'normal' : undefined,
              injectedJavaScript: module833.webviewScript.combineScript([module833.webviewScript.utils.addScrollListener, module833.webviewScript.utils.disableZoom]),
              allowsFullscreenVideo: module498.SystemManager.isAndroid(),
              onLoadStart: this._onLoadStart.bind(this),
              onLoadEnd: this._onLoadEnd.bind(this),
              onMessage: this._onMessage.bind(this),
              onError: function () {
                t.setState({
                  isLoading: false,
                  isErrorPage: true,
                });
              },
              onShouldStartLoadWithRequest: this._onStartWithRequest.bind(this),
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
              visible: this.state.isLoading,
            })
          );
        },
      },
    ]);
    return j;
  })(React.default.Component),
  j = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      regionLanguage: t.system.regionLanguage,
      platform: t.system.platform,
      region: t.system.region,
      isNetworkConnected: t.system.isNetworkConnected,
      accessToken: t.account.accessToken,
    };
  })(U);

exports.default = j;
