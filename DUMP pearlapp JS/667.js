var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module668 = require('./668');

function h(t) {
  var n = N();
  return function () {
    var c,
      u = module13.default(t);

    if (n) {
      var o = module13.default(this).constructor;
      c = Reflect.construct(u, arguments, o);
    } else c = u.apply(this, arguments);

    return module11.default(this, c);
  };
}

function N() {
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

var k,
  y,
  C,
  w,
  R,
  b,
  H = false,
  E = function (t) {
    return undefined !== module17.UIManager.getViewManagerConfig ? module17.UIManager.getViewManagerConfig(t) : module17.UIManager[t];
  };

function M() {
  var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
  if ((H = t) && !E('RNSScreen')) console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
}

var V = {
    get NativeScreen() {
      k = k || module17.requireNativeComponent('RNSScreen', null);
      return k;
    },

    get NativeScreenContainer() {
      y = y || module17.requireNativeComponent('RNSScreenContainer', null);
      return y;
    },

    get NativeScreenStack() {
      C = C || module17.requireNativeComponent('RNSScreenStack', null);
      return C;
    },

    get NativeScreenStackHeaderConfig() {
      w = w || module17.requireNativeComponent('RNSScreenStackHeaderConfig', null);
      return w;
    },

    get NativeScreenStackHeaderSubview() {
      R = R || module17.requireNativeComponent('RNSScreenStackHeaderSubview', null);
      return R;
    },
  },
  A = (function (t, ...args) {
    module9.default(S, t);
    var f = h(S);

    function S() {
      var t;
      module7.default(this, S);

      (t = f.call(this, ...args)).setRef = function (n) {
        t._ref = n;
        if (t.props.onComponentRef) t.props.onComponentRef(n);
      };

      return t;
    }

    module8.default(S, [
      {
        key: 'setNativeProps',
        value: function (t) {
          this._ref.setNativeProps(t);
        },
      },
      {
        key: 'render',
        value: function () {
          if (H) {
            if (((b = b || module17.Animated.createAnimatedComponent(V.NativeScreen)), module668.version.minor >= 57 || 0 === module668.version.minor))
              return React.default.createElement(
                b,
                module6.default({}, this.props, {
                  ref: this.setRef,
                })
              );
            var t = this.props,
              u = t.style,
              o = t.children,
              l = module56.default(t, ['style', 'children']);
            return React.default.createElement(
              b,
              module6.default({}, l, {
                ref: this.setRef,
                style: module17.StyleSheet.absoluteFill,
              }),
              React.default.createElement(
                module17.Animated.View,
                {
                  style: u,
                },
                o
              )
            );
          }

          var f = this.props,
            S = module56.default(f, ['active', 'onComponentRef']);
          return React.default.createElement(
            module17.Animated.View,
            module6.default({}, S, {
              ref: this.setRef,
            })
          );
        },
      },
    ]);
    return S;
  })(React.default.Component),
  I = (function (t) {
    module9.default(c, t);
    var n = h(c);

    function c() {
      module7.default(this, c);
      return n.apply(this, arguments);
    }

    module8.default(c, [
      {
        key: 'render',
        value: function () {
          return H ? React.default.createElement(V.NativeScreenContainer, this.props) : React.default.createElement(module17.View, this.props);
        },
      },
    ]);
    return c;
  })(React.default.Component),
  q = module17.StyleSheet.create({
    headerSubview: {
      position: 'absolute',
      top: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

module.exports = {
  ScreenContainer: I,
  Screen: A,

  get NativeScreen() {
    return V.NativeScreen;
  },

  get NativeScreenContainer() {
    return V.NativeScreenContainer;
  },

  get ScreenStack() {
    return V.NativeScreenStack;
  },

  get ScreenStackHeaderConfig() {
    return V.NativeScreenStackHeaderConfig;
  },

  get ScreenStackHeaderSubview() {
    return V.NativeScreenStackHeaderSubview;
  },

  ScreenStackHeaderBackButtonImage: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      {
        type: 'back',
        style: q.headerSubview,
      },
      React.default.createElement(
        module17.Image,
        module6.default(
          {
            resizeMode: 'center',
            fadeDuration: 0,
          },
          t
        )
      )
    );
  },
  ScreenStackHeaderRightView: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      module6.default({}, t, {
        type: 'right',
        style: q.headerSubview,
      })
    );
  },
  ScreenStackHeaderLeftView: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      module6.default({}, t, {
        type: 'left',
        style: q.headerSubview,
      })
    );
  },
  ScreenStackHeaderCenterView: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      module6.default({}, t, {
        type: 'center',
        style: q.headerSubview,
      })
    );
  },
  enableScreens: M,
  useScreens: function () {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
    console.warn('Method `useScreens` is deprecated, please use `enableScreens`');
    M(t);
  },
  screensEnabled: function () {
    return H;
  },
};
