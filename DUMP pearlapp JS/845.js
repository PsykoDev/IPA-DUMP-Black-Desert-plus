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
  module498 = require('./498'),
  module714 = require('./714'),
  module833 = require('./833'),
  module836 = require('./836'),
  module801 = require('./801'),
  module805 = require('./805');

function V() {
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

var _ = (function (t) {
    module9.default(R, t);

    var n = R,
      module406 = V(),
      _ = function () {
        var t,
          s = module13.default(n);

        if (module406) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(s, arguments, o);
        } else t = s.apply(this, arguments);

        return module11.default(this, t);
      };

    function R(t) {
      var n;
      module7.default(this, R);
      (n = _.call(this, t)).webView = React.createRef();
      n.state = {
        isErrorPage: false,
        isFirstOpendWebView: true,
      };
      return n;
    }

    module8.default(R, [
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
        value: function () {
          this.setState({
            isFirstOpendWebView: false,
          });
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
              source: module836.createPaWebViewRequest({
                url: module714.replacedUrl.alarm(this.props.region),
                accessToken: this.props.accessToken,
              }),
              ref: this.webView,
              decelerationRate: module498.SystemManager.isIos() ? 'normal' : undefined,
              injectedJavaScript: module833.webviewScript.combineScript([module833.webviewScript.utils.disableZoom, module833.webviewScript.utils.overrideAlert]),
              onLoadStart: function () {
                return t._onLoadStart();
              },
              onLoadEnd: function () {
                return t._onLoadEnd();
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
              visible: this.state.isFirstOpendWebView || this.props.checkAccountIsValidProgress,
            })
          );
        },
      },
    ]);
    return R;
  })(React.default.Component),
  R = module406.connect(function (t) {
    return {
      platform: t.system.platform,
      region: t.system.region,
      regionLanguage: t.system.regionLanguage,
      uiLanguage: t.system.uiLanguage,
      isNetworkConnected: t.system.isNetworkConnected,
      accessToken: t.account.accessToken,
      checkAccountIsValidProgress: t.progress.checkAccountIsValidProgress,
    };
  })(_);

exports.default = R;
