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
  module833 = require('./833'),
  module841 = require('./841'),
  module805 = require('./805');

function R() {
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
    module9.default(B, t);

    var n = B,
      module406 = R(),
      _ = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function B(t) {
      var n;
      module7.default(this, B);
      (n = _.call(this, t)).webView = React.createRef();

      n.backHandler = function () {
        var t;
        return !!(n.state.onDidFocus && n.state.canGoBack && n.webView) && (null == (t = n.webView.current) || t.goBack(), true);
      };

      n.state = {
        canGoBack: false,
        onDidFocus: false,
        isLoading: false,
      };
      return n;
    }

    module8.default(B, [
      {
        key: 'componentDidMount',
        value: function () {
          if (module498.SystemManager.isAndroid() && undefined != this.backHandlerListener)
            this.backHandlerListener = module17.BackHandler.addEventListener('hardwareBackPress', this.backHandler);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (module498.SystemManager.isAndroid() && undefined != this.backHandlerListener) this.backHandlerListener.remove();
        },
      },
      {
        key: 'onStartWithRequest',
        value: function (t) {
          var n = t.url;
          return !n.includes('intent') || (module841.IntentModule.launchApp(n), false);
        },
      },
      {
        key: '_onMessage',
        value: function (t) {
          var n;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (!t.nativeEvent.data.includes('alert:')) {
                      o.next = 3;
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

                  case 3:
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
                    this.setState({
                      isLoading: true,
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
              source: {
                uri: this.props.url,
              },
              ref: this.webView,
              decelerationRate: module498.SystemManager.isIos() ? 'normal' : undefined,
              allowsFullscreenVideo: module498.SystemManager.isAndroid(),
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
              onShouldStartLoadWithRequest: this.onStartWithRequest.bind(this),
              startInLoadingState: true,
              renderLoading: function () {
                return null;
              },
            }),
            React.default.createElement(module805.default, {
              visible: this.state.isLoading,
            })
          );
        },
      },
    ]);
    return B;
  })(React.default.Component),
  B = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
    };
  })(_);

exports.default = B;
