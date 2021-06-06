exports._TESTING_ONLY_reset_container_count = function () {
  0;
};

exports.default = function (t) {
  var P = (function (P) {
    module9.default(R, P);

    var w = R,
      O = b(),
      E = function () {
        var t,
          n = module13.default(w);

        if (O) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function R(n) {
      var module8;
      module7.default(this, R);
      module8 = E.call(this, n);
      N(module12.default(module8), 'subs', null);
      N(module12.default(module8), '_actionEventSubscribers', new Set());
      N(module12.default(module8), '_handleOpenURL', function (n) {
        var o = n.url,
          s = module8.props,
          u = s.enableURLHandling,
          l = s.uriPrefix;

        if (false !== u) {
          var p = k(o, l);

          if (p) {
            var f = p.path,
              v = p.params,
              h = t.router.getActionForPathAndParams(f, v);
            if (h) module8.dispatch(h);
          }
        }
      });
      N(module12.default(module8), '_persistNavigationState', function (t) {
        var n;
        return regeneratorRuntime.default.async(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  if (!(n = module8.props.persistNavigationState)) {
                    s.next = 10;
                    break;
                  }

                  s.prev = 2;
                  s.next = 5;
                  return regeneratorRuntime.default.awrap(n(t));

                case 5:
                  s.next = 10;
                  break;

                case 7:
                  s.prev = 7;
                  s.t0 = s.catch(2);
                  console.warn(
                    'Uncaught exception while calling persistNavigationState()! You should handle exceptions thrown from persistNavigationState(), ignoring them may result in undefined behavior.'
                  );

                case 10:
                case 'end':
                  return s.stop();
              }
          },
          null,
          null,
          [[2, 7]],
          Promise
        );
      });
      N(module12.default(module8), 'dispatch', function (n) {
        if (module8.props.navigation) return module8.props.navigation.dispatch(n);
        module8._navState = module8._navState || module8.state.nav;
        var o = module8._navState;
        module481.default(o, 'should be set in constructor if stateful');

        var s = t.router.getStateForAction(n, o),
          u = null === s ? o : s,
          l = function () {
            module8._actionEventSubscribers.forEach(function (t) {
              return t({
                type: 'action',
                action: n,
                state: u,
                lastState: o,
              });
            });
          };

        if (null === s) {
          l();
          return true;
        } else if (u !== o) {
          module8._navState = u;
          module8.setState(
            {
              nav: u,
            },
            function () {
              module8._onNavigationStateChange(o, u, n);

              l();

              module8._persistNavigationState(u);
            }
          );
          return true;
        } else {
          l();
          return false;
        }
      });
      N(module12.default(module8), '_getScreenProps', function () {
        return module8.props.screenProps;
      });
      N(module12.default(module8), '_getTheme', function () {
        return 'light' === module8.props.theme || 'dark' === module8.props.theme
          ? module8.props.theme
          : 'no-preference' === module8.props.theme
          ? 'light'
          : (console.warn('Invalid theme provided: '.concat(module8.props.theme, ". Only 'light' and 'dark' are supported. Falling back to 'light'")), 'light');
      });
      x(n);
      module8._initialAction = module438.NavigationActions.init();
      if (module8._isStateful() && module17.BackHandler && 'function' == typeof module17.BackHandler.addEventListener)
        module8.subs = module17.BackHandler.addEventListener('hardwareBackPress', function () {
          if (module8._isMounted) return module8.dispatch(module438.NavigationActions.back());
          if (module8.subs) module8.subs.remove();
        });
      module8.state = {
        nav: module8._isStateful() && !n.loadNavigationState ? t.router.getStateForAction(module8._initialAction) : null,
      };
      return module8;
    }

    module8.default(R, null, [
      {
        key: 'getDerivedStateFromProps',
        value: function (t) {
          x(t);
          return null;
        },
      },
    ]);
    module8.default(R, [
      {
        key: '_renderLoading',
        value: function () {
          return this.props.renderLoadingExperimental ? this.props.renderLoadingExperimental() : null;
        },
      },
      {
        key: '_isStateful',
        value: function () {
          return A(this.props);
        },
      },
      {
        key: '_onNavigationStateChange',
        value: function (t, n, o) {
          if (undefined === this.props.onNavigationStateChange && this._isStateful() && process.env.REACT_NAV_LOGGING)
            console.group
              ? (console.group('Navigation Dispatch: '), console.log('Action: ', o), console.log('New State: ', n), console.log('Last State: ', t), console.groupEnd())
              : console.log('Navigation Dispatch: ', {
                  action: o,
                  newState: n,
                  lastState: t,
                });
          else if ('function' == typeof this.props.onNavigationStateChange) this.props.onNavigationStateChange(t, n, o);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          if (this._navState === this.state.nav) this._navState = null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var n,
            s,
            u,
            c,
            l,
            p,
            f,
            v,
            S,
            _,
            b = this;

          return regeneratorRuntime.default.async(
            function (y) {
              for (;;)
                switch ((y.prev = y.next)) {
                  case 0:
                    if (((this._isMounted = true), this._isStateful())) {
                      y.next = 3;
                      break;
                    }

                    return y.abrupt('return');

                  case 3:
                    if ((0, module17.Linking.addEventListener('url', this._handleOpenURL), (n = null), (s = null), false === this.props.enableURLHandling)) {
                      y.next = 14;
                      break;
                    }

                    y.next = 11;
                    return regeneratorRuntime.default.awrap(this.getStartupParams());

                  case 11:
                    u = y.sent;
                    n = u.parsedUrl;
                    s = u.userProvidedStartupState;

                  case 14:
                    if (
                      ((c = this._initialAction),
                      (l = this.state.nav) || s || (process.env.REACT_NAV_LOGGING && console.log('Init new Navigation State'), (l = t.router.getStateForAction(c))),
                      s && ((l = s), (L = true)),
                      n &&
                        ((f = (p = n).path),
                        (v = p.params),
                        (S = t.router.getActionForPathAndParams(f, v)) &&
                          (process.env.REACT_NAV_LOGGING && console.log('Applying Navigation Action for Initial URL:', n), (c = S), (l = t.router.getStateForAction(S, l)))),
                      (_ = function () {
                        return b._actionEventSubscribers.forEach(function (t) {
                          return t({
                            type: 'action',
                            action: c,
                            state: b.state.nav,
                            lastState: null,
                          });
                        });
                      }),
                      l !== this.state.nav)
                    ) {
                      y.next = 23;
                      break;
                    }

                    _();

                    return y.abrupt('return');

                  case 23:
                    this.setState(
                      {
                        nav: l,
                      },
                      function () {
                        L = false;

                        _();
                      }
                    );

                  case 24:
                  case 'end':
                    return y.stop();
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
        key: 'getStartupParams',
        value: function () {
          var t, module7, module12, c, l, p, f;
          return regeneratorRuntime.default.async(
            function (v) {
              for (;;)
                switch ((v.prev = v.next)) {
                  case 0:
                    t = this.props;
                    module7 = t.uriPrefix;
                    module12 = t.loadNavigationState;
                    v.prev = 1;
                    v.next = 4;
                    return regeneratorRuntime.default.awrap(Promise.all([module17.Linking.getInitialURL(), module12 && module12()]));

                  case 4:
                    p = v.sent;
                    f = module26.default(p, 2);
                    c = f[0];
                    l = f[1];
                    v.next = 12;
                    break;

                  case 10:
                    v.prev = 10;
                    v.t0 = v.catch(1);

                  case 12:
                    return v.abrupt('return', {
                      parsedUrl: c && k(c, module7),
                      userProvidedStartupState: l,
                    });

                  case 13:
                  case 'end':
                    return v.stop();
                }
            },
            null,
            this,
            [[1, 10]],
            Promise
          );
        },
      },
      {
        key: 'componentDidCatch',
        value: function (t) {
          if (!L) throw t;
          L = false;
          console.warn('Uncaught exception while starting app from persisted navigation state! Trying to render again with a fresh navigation state...');
          this.dispatch(module438.NavigationActions.init());
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._isMounted = false;
          module17.Linking.removeEventListener('url', this._handleOpenURL);
          if (this.subs) this.subs.remove();
          if (this._isStateful()) 0;
        },
      },
      {
        key: 'render',
        value: function () {
          var n = this,
            o = this.props.navigation;

          if (this._isStateful()) {
            var s = this.state.nav;
            if (!s) return this._renderLoading();
            if (!(this._navigation && this._navigation.state === s))
              this._navigation = module438.getNavigation(t.router, s, this.dispatch, this._actionEventSubscribers, this._getScreenProps, function () {
                return n._navigation;
              });
            o = this._navigation;
          }

          module481.default(o, 'failed to get navigation');
          return React.default.createElement(
            module438.ThemeProvider,
            {
              value: this._getTheme(),
            },
            React.default.createElement(
              module438.NavigationProvider,
              {
                value: o,
              },
              React.default.createElement(
                t,
                y({}, this.props, {
                  navigation: o,
                })
              )
            )
          );
        },
      },
    ]);
    return R;
  })(React.default.Component);

  N(P, 'router', t.router);
  N(P, 'navigationOptions', null);
  N(P, 'defaultProps', {
    theme: 'light',
  });
  return P;
};

var module26 = require('@babel/runtime/helpers/slicedToArray'),
  regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module438 = require('./438'),
  module481 = require('./481');

require('./482');

function b() {
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

function y() {
  return (y =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    }).apply(this, arguments);
}

function N(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

function P(t, n) {
  if (null == t) return {};
  var o,
    s,
    u = w(t, n);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);

    for (s = 0; s < c.length; s++) {
      o = c[s];
      if (!(n.indexOf(o) >= 0)) Object.prototype.propertyIsEnumerable.call(t, o) && (u[o] = t[o]);
    }
  }

  return u;
}

function w(t, n) {
  if (null == t) return {};
  var o,
    s,
    u = {},
    c = Object.keys(t);

  for (s = 0; s < c.length; s++) {
    o = c[s];
    if (!(n.indexOf(o) >= 0)) u[o] = t[o];
  }

  return u;
}

var k = module438.pathUtils.urlToPathAndParams;

function A(t) {
  return !t.navigation;
}

function x(t) {
  if (
    (t.persistenceKey &&
      console.warn(
        'You passed persistenceKey prop to a navigator. The persistenceKey prop was replaced by a more flexible persistence mechanism, please see the navigation state persistence docs for more information. Passing the persistenceKey prop is a no-op.'
      ),
    !A(t))
  ) {
    var n = t.persistNavigationState,
      o = t.loadNavigationState,
      s = P(t, ['navigation', 'screenProps', 'persistNavigationState', 'loadNavigationState', 'theme']),
      u = Object.keys(s);
    if (0 !== u.length)
      throw new Error(
        'This navigator has both navigation and container props, so it is ' +
          'unclear if it should own its own state. Remove props: "'.concat(u.join(', '), '" ') +
          'if the navigator should get its state from the navigation prop. If the navigator should maintain its own state, do not pass a navigation prop.'
      );
    module481.default(
      (undefined === n && undefined === o) || ('function' == typeof n && 'function' == typeof o),
      'both persistNavigationState and loadNavigationState must either be undefined, or be functions'
    );
  }
}

var L = false;
