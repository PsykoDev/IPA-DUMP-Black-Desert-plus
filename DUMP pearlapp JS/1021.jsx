var module34 = require('@babel/runtime/helpers/toConsumableArray'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module667 = require('./667'),
  module1018 = require('./1018'),
  module1022 = require('./1022'),
  module1023 = require('./1023'),
  module1024 = require('./1024'),
  module1025 = require('./1025');

function O() {
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

function W() {
  return (W =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n, o) {
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

var x = (function (t, ...args) {
  module9.default(L, t);

  var n = L,
    x = O(),
    E = function () {
      var t,
        o = module13.default(n);

      if (x) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, s);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function L() {
    var t;
    module7.default(this, L);
    t = E.call(this, ...args);
    b(module12.default(t), 'state', {
      loaded: [t.props.navigation.state.index],
      drawerWidth: 'function' == typeof t.props.navigationConfig.drawerWidth ? t.props.navigationConfig.drawerWidth() : t.props.navigationConfig.drawerWidth,
    });
    b(module12.default(t), 'context', undefined);
    b(module12.default(t), 'drawerGestureRef', React.createRef());
    b(module12.default(t), 'getLockMode', function (t) {
      var n = t.navigation;
      return t.descriptors[n.state.routes[n.state.index].key].options.drawerLockMode;
    });
    b(module12.default(t), 'handleDrawerOpen', function () {
      var n = t.props.navigation;
      n.dispatch(
        module1018.openDrawer({
          key: n.state.key,
        })
      );
    });
    b(module12.default(t), 'handleDrawerClose', function () {
      var n = t.props.navigation;
      n.dispatch(
        module1018.closeDrawer({
          key: n.state.key,
        })
      );
    });
    b(module12.default(t), 'updateWidth', function () {
      var n = 'function' == typeof t.props.navigationConfig.drawerWidth ? t.props.navigationConfig.drawerWidth() : t.props.navigationConfig.drawerWidth;
      if (t.state.drawerWidth !== n)
        t.setState({
          drawerWidth: n,
        });
    });
    b(module12.default(t), 'renderNavigationView', function (n) {
      var o = n.progress;
      return <module1022.default />;
    });
    b(module12.default(t), 'renderContent', function () {
      var n = t.props,
        o = n.lazy,
        s = n.navigation,
        p = t.state.loaded,
        c = s.state.routes;

      if (t.props.navigationConfig.unmountInactiveRoutes) {
        var u = s.state.routes[s.state.index].key,
          l = t.props.descriptors[u];
        return <module437.SceneView navigation={l.navigation} screenProps={t.props.screenProps} component={l.getComponent()} />;
      }

      return (
        <module667.ScreenContainer style={R.content}>
          {c.map(function (n, c) {
            if (o && !p.includes(c)) return null;
            var u = s.state.index === c,
              l = t.props.descriptors[n.key];
            return (
              <module1024.default
                key={n.key}
                style={[
                  module17.StyleSheet.absoluteFill,
                  {
                    opacity: u ? 1 : 0,
                  },
                ]}
                isVisible={u}
              >
                <module437.SceneView navigation={l.navigation} screenProps={t.props.screenProps} component={l.getComponent()} />
              </module1024.default>
            );
          })}
        </module667.ScreenContainer>
      );
    });
    b(module12.default(t), 'setDrawerGestureRef', function (n) {
      t.drawerGestureRef.current = n;
    });
    return t;
  }

  module8.default(
    L,
    [
      {
        key: 'componentDidMount',
        value: function () {
          if ('locked-open' === this.getLockMode(this.props)) this.handleDrawerOpen();
          module17.Dimensions.addEventListener('change', this.updateWidth);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.getLockMode(t),
            o = this.getLockMode(this.props);
          if (n !== o) 'locked-open' === o ? this.handleDrawerOpen() : this.handleDrawerClose();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module17.Dimensions.removeEventListener('change', this.updateWidth);
        },
      },
      {
        key: 'getDrawerBackgroundColor',
        value: function () {
          var t = this.props.navigationConfig.drawerBackgroundColor;
          return t ? ('string' == typeof t ? t : t[this.context]) : module437.ThemeColors[this.context].bodyContent;
        },
      },
      {
        key: 'getOverlayColor',
        value: function () {
          var t = this.props.navigationConfig.overlayColor;
          return t ? ('string' == typeof t ? t : t[this.context]) : 'rgba(0,0,0,0.5)';
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.navigation,
            o = t.navigationConfig,
            s = o.drawerType,
            p = o.sceneContainerStyle,
            c = o.edgeWidth,
            u = o.minSwipeDistance,
            l = o.hideStatusBar,
            f = o.statusBarAnimation,
            h = o.gestureHandlerProps,
            y = this.getLockMode(this.props),
            w = this.getDrawerBackgroundColor(),
            C = this.getOverlayColor();
          return React.createElement(
            module1023.default.Provider,
            {
              value: this.drawerGestureRef,
            },
            React.createElement(module1025.default, {
              open: n.state.isDrawerOpen,
              gestureEnabled: 'locked-open' !== y && 'locked-closed' !== y,
              onOpen: this.handleDrawerOpen,
              onClose: this.handleDrawerClose,
              onGestureRef: this.setDrawerGestureRef,
              gestureHandlerProps: h,
              drawerType: s,
              drawerPosition: this.props.navigationConfig.drawerPosition,
              sceneContainerStyle: p,
              drawerStyle: {
                backgroundColor: w,
                width: this.state.drawerWidth,
              },
              overlayStyle: {
                backgroundColor: C,
              },
              swipeEdgeWidth: c,
              swipeDistanceThreshold: u,
              hideStatusBar: l,
              statusBarAnimation: f,
              renderDrawerContent: this.renderNavigationView,
              renderSceneContent: this.renderContent,
            })
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, n) {
          var s = t.navigation.state.index;
          return {
            loaded: n.loaded.includes(s) ? n.loaded : [].concat(module34.default(n.loaded), [s]),
          };
        },
      },
    ]
  );
  return L;
})(React.PureComponent);

exports.default = x;
b(x, 'contextType', module437.ThemeContext);
b(x, 'defaultProps', {
  lazy: true,
});
var R = module17.StyleSheet.create({
  content: {
    flex: 1,
  },
});
