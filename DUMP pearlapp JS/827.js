var n,
  module6 = require('./6'),
  React = require('react'),
  module17 = require('./17'),
  module18 = require('./18'),
  module828 = require('./828'),
  module830 = require('./830'),
  f =
    (this && this.__extends) ||
    ((n = function (t, o) {
      return (n =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (t, n) {
            t.__proto__ = n;
          }) ||
        function (t, n) {
          for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
        })(t, o);
    }),
    function (t, o) {
      function s() {
        this.constructor = t;
      }

      n(t, o);
      t.prototype = null === o ? Object.create(o) : ((s.prototype = o.prototype), new s());
    }),
  h =
    (this && this.__awaiter) ||
    function (t, n, o, s) {
      return new (o || (o = Promise))(function (l, u) {
        function c(t) {
          try {
            f(s.next(t));
          } catch (t) {
            u(t);
          }
        }

        function p(t) {
          try {
            f(s.throw(t));
          } catch (t) {
            u(t);
          }
        }

        function f(t) {
          var n;
          if (t.done) l(t.value);
          else
            ((n = t.value),
            n instanceof o
              ? n
              : new o(function (t) {
                  t(n);
                })).then(c, p);
        }

        f((s = s.apply(t, n || [])).next());
      });
    },
  v =
    (this && this.__generator) ||
    function (t, n) {
      var o,
        s,
        l,
        module18,
        c = {
          label: 0,
          sent: function () {
            if (1 & l[0]) throw l[1];
            return l[1];
          },
          trys: [],
          ops: [],
        };
      module18 = {
        next: p(0),
        throw: p(1),
        return: p(2),
      };
      if ('function' == typeof Symbol)
        module18[Symbol.iterator] = function () {
          return this;
        };
      return module18;

      function p(t) {
        return function (n) {
          return f([t, n]);
        };
      }

      function f(u) {
        if (o) throw new TypeError('Generator is already executing.');

        for (; c; )
          try {
            if (((o = 1), s && (l = 2 & u[0] ? s.return : u[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, u[1])).done)) return l;

            switch (((s = 0), l && (u = [2 & u[0], l.value]), u[0])) {
              case 0:
              case 1:
                l = u;
                break;

              case 4:
                c.label++;
                return {
                  value: u[1],
                  done: false,
                };

              case 5:
                c.label++;
                s = u[1];
                u = [0];
                continue;

              case 7:
                u = c.ops.pop();
                c.trys.pop();
                continue;

              default:
                if (!(l = (l = c.trys).length > 0 && l[l.length - 1]) && (6 === u[0] || 2 === u[0])) {
                  c = 0;
                  continue;
                }

                if (3 === u[0] && (!l || (u[1] > l[0] && u[1] < l[3]))) {
                  c.label = u[1];
                  break;
                }

                if (6 === u[0] && c.label < l[1]) {
                  c.label = l[1];
                  l = u;
                  break;
                }

                if (l && c.label < l[2]) {
                  c.label = l[2];
                  c.ops.push(u);
                  break;
                }

                if (l[2]) c.ops.pop();
                c.trys.pop();
                continue;
            }

            u = n.call(t, c);
          } catch (t) {
            u = [6, t];
            s = 0;
          } finally {
            o = l = 0;
          }

        if (5 & u[0]) throw u[1];
        return {
          value: u[0] ? u[1] : undefined,
          done: true,
        };
      }
    },
  w =
    (this && this.__rest) ||
    function (t, n) {
      var o = {};

      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && n.indexOf(s) < 0 && (o[s] = t[s]);

      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var l = 0;

        for (s = Object.getOwnPropertySymbols(t); l < s.length; l++) n.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[l]) && (o[s[l]] = t[s[l]]);
      }

      return o;
    },
  b = module17.UIManager,
  S = module17.Image.resolveAssetSource,
  y = function (t) {
    var n = t;
    if ('normal' === n) n = 0.998;
    else if ('fast' === n) n = 0.99;
    return n;
  },
  C = module17.NativeModules.RNCWebViewManager,
  E = module17.requireNativeComponent('RNCWebView'),
  L = (function (t) {
    function n() {
      var n = (null !== t && t.apply(this, arguments)) || this;
      n.state = {
        viewState: n.props.startInLoadingState ? 'LOADING' : 'IDLE',
        lastErrorEvent: null,
      };
      n.webViewRef = React.default.createRef();

      n.getCommands = function () {
        return b.getViewManagerConfig('RNCWebView').Commands;
      };

      n.goForward = function () {
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().goForward, undefined);
      };

      n.goBack = function () {
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().goBack, undefined);
      };

      n.reload = function () {
        n.setState({
          viewState: 'LOADING',
        });
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().reload, undefined);
      };

      n.stopLoading = function () {
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().stopLoading, undefined);
      };

      n.requestFocus = function () {
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().requestFocus, undefined);
      };

      n.postMessage = function (t) {
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().postMessage, [String(t)]);
      };

      n.injectJavaScript = function (t) {
        b.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().injectJavaScript, [t]);
      };

      n.updateNavigationState = function (t) {
        if (n.props.onNavigationStateChange) n.props.onNavigationStateChange(t.nativeEvent);
      };

      n.getWebViewHandle = function () {
        var t = module17.findNodeHandle(n.webViewRef.current);
        module18.default(null != t, 'nodeHandle expected to be non-null');
        return t;
      };

      n.onLoadingStart = function (t) {
        var o = n.props.onLoadStart;
        if (o) o(t);
        n.updateNavigationState(t);
      };

      n.onLoadingError = function (t) {
        t.persist();
        var o = n.props,
          s = o.onError,
          l = o.onLoadEnd;
        if (l) l(t);
        if (s) s(t);
        console.warn('Encountered an error loading page', t.nativeEvent);
        n.setState({
          lastErrorEvent: t.nativeEvent,
          viewState: 'ERROR',
        });
      };

      n.onHttpError = function (t) {
        var o = n.props.onHttpError;
        if (o) o(t);
      };

      n.onLoadingFinish = function (t) {
        var o = n.props,
          s = o.onLoad,
          l = o.onLoadEnd;
        if (s) s(t);
        if (l) l(t);
        n.setState({
          viewState: 'IDLE',
        });
        n.updateNavigationState(t);
      };

      n.onMessage = function (t) {
        var o = n.props.onMessage;
        if (o) o(t);
      };

      n.onLoadingProgress = function (t) {
        var o = n.props.onLoadProgress;
        if (o) o(t);
      };

      n.onShouldStartLoadWithRequestCallback = function (t, o, s) {
        ((n.props.nativeConfig && n.props.nativeConfig.viewManager) || C).startLoadWithResult(!!t, s);
      };

      n.onContentProcessDidTerminate = function (t) {
        var o = n.props.onContentProcessDidTerminate;
        if (o) o(t);
      };

      return n;
    }

    f(n, t);

    n.prototype.componentDidUpdate = function (t) {
      this.showRedboxOnPropChanges(t, 'allowsInlineMediaPlayback');
      this.showRedboxOnPropChanges(t, 'incognito');
      this.showRedboxOnPropChanges(t, 'mediaPlaybackRequiresUserAction');
      this.showRedboxOnPropChanges(t, 'dataDetectorTypes');
    };

    n.prototype.showRedboxOnPropChanges = function (t, n) {
      if (this.props[n] !== t[n]) console.error('Changes to property ' + n + ' do nothing after the initial render.');
    };

    n.prototype.render = function () {
      var t = this.props,
        n = t.decelerationRate,
        f = t.nativeConfig,
        h = undefined === f ? {} : f,
        v = t.onMessage,
        b = t.onShouldStartLoadWithRequest,
        C = t.originWhitelist,
        L = t.renderError,
        R = t.renderLoading,
        O = t.style,
        V = t.containerStyle,
        P = w(t, ['decelerationRate', 'nativeConfig', 'onMessage', 'onShouldStartLoadWithRequest', 'originWhitelist', 'renderError', 'renderLoading', 'style', 'containerStyle']),
        W = null;
      if ('LOADING' === this.state.viewState) W = (R || module828.defaultRenderLoading)();
      else if ('ERROR' === this.state.viewState) {
        var M = this.state.lastErrorEvent;
        module18.default(null != M, 'lastErrorEvent expected to be non-null');
        W = (L || module828.defaultRenderError)(M.domain, M.code, M.description);
      } else 'IDLE' !== this.state.viewState && console.error('RNCWebView invalid state encountered: ' + this.state.viewState);
      var _ = [module830.default.container, module830.default.webView, O],
        x = [module830.default.container, V],
        N = module828.createOnShouldStartLoadWithRequest(this.onShouldStartLoadWithRequestCallback, C, b),
        H = y(n),
        D = h.component || E,
        k = React.default.createElement(
          D,
          module6.default(
            {
              key: 'webViewKey',
            },
            P,
            {
              decelerationRate: H,
              messagingEnabled: 'function' == typeof v,
              onLoadingError: this.onLoadingError,
              onLoadingFinish: this.onLoadingFinish,
              onLoadingProgress: this.onLoadingProgress,
              onLoadingStart: this.onLoadingStart,
              onHttpError: this.onHttpError,
              onMessage: this.onMessage,
              onScroll: this.props.onScroll,
              onShouldStartLoadWithRequest: N,
              onContentProcessDidTerminate: this.onContentProcessDidTerminate,
              ref: this.webViewRef,
              source: S(this.props.source),
              style: _,
            },
            h.props
          )
        );
      return React.default.createElement(
        module17.View,
        {
          style: x,
        },
        k,
        W
      );
    };

    n.defaultProps = {
      javaScriptEnabled: true,
      cacheEnabled: true,
      originWhitelist: module828.defaultOriginWhitelist,
      useSharedProcessPool: true,
    };

    n.isFileUploadSupported = function () {
      return h(undefined, undefined, undefined, function () {
        return v(this, function (t) {
          return [2, true];
        });
      });
    };

    return n;
  })(React.default.Component);

exports.default = L;
