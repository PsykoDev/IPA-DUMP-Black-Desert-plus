var module247 = require('./247'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module1087 = require('./1087');

function k() {
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

var I = (function (t, ...args) {
  module9.default(S, t);

  var n = S,
    I = k(),
    T = function () {
      var t,
        o = module13.default(n);

      if (I) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function S() {
    var t;
    module7.default(this, S);
    t = T.call(this, ...args);
    b(module12.default(t), 'context', undefined);
    return t;
  }

  module8.default(S, [
    {
      key: 'getActiveTintColor',
      value: function () {
        var t = this.props.activeTintColor;
        if (t) return 'string' == typeof t ? t : t[this.context];
      },
    },
    {
      key: 'getInactiveTintColor',
      value: function () {
        var t = this.props.inactiveTintColor;
        if (t) return 'string' == typeof t ? t : t[this.context];
      },
    },
    {
      key: 'getActiveBackgroundColor',
      value: function () {
        var t = this.props.activeBackgroundColor;
        if (t) return 'string' == typeof t ? t : t[this.context];
      },
    },
    {
      key: 'getInactiveBackgroundColor',
      value: function () {
        var t = this.props.inactiveBackgroundColor;
        if (t) return 'string' == typeof t ? t : t[this.context];
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.items,
          l = t.activeItemKey,
          c = t.getLabel,
          u = t.renderIcon,
          f = t.onItemPress,
          s = t.itemsContainerStyle,
          v = t.itemStyle,
          k = t.labelStyle,
          b = t.activeLabelStyle,
          I = t.inactiveLabelStyle,
          T = t.iconContainerStyle,
          S = t.drawerPosition,
          w = this.getActiveTintColor(),
          B = this.getActiveBackgroundColor(),
          P = this.getInactiveTintColor(),
          A = this.getInactiveBackgroundColor();
        return (
          <module17.View style={[x.container, s]}>
            {n.map(function (t, n) {
              var s,
                E = l === t.key,
                R = E ? w : P,
                L = E ? B : A,
                V = {
                  route: t,
                  index: n,
                  focused: E,
                  tintColor: R,
                },
                _ = u(V),
                D = c(V),
                j = 'string' == typeof D ? D : undefined,
                O = E ? b : I;

              return (
                <module1087.default
                  key={t.key}
                  accessible
                  accessibilityLabel={j}
                  onPress={function () {
                    f({
                      route: t,
                      focused: E,
                    });
                  }}
                  delayPressIn={0}
                >
                  <module437.SafeAreaView
                    style={[
                      {
                        backgroundColor: L,
                      },
                      x.item,
                      v,
                    ]}
                    forceInset={
                      ((s = {}), module247.default(s, S, 'always'), module247.default(s, 'left' === S ? 'right' : 'left', 'never'), module247.default(s, 'vertical', 'never'), s)
                    }
                  >
                    {_ ? <module17.View style={[x.icon, E ? null : x.inactiveIcon, T]}>{_}</module17.View> : null}
                    {'string' == typeof D ? (
                      <module17.Text
                        style={[
                          x.label,
                          {
                            color: R,
                          },
                          k,
                          O,
                        ]}
                      >
                        {D}
                      </module17.Text>
                    ) : (
                      D
                    )}
                  </module437.SafeAreaView>
                </module1087.default>
              );
            })}
          </module17.View>
        );
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = I;
b(I, 'defaultProps', {
  activeTintColor: {
    light: '#2196f3',
    dark: '#fff',
  },
  activeBackgroundColor: {
    light: 'rgba(0, 0, 0, .04)',
    dark: 'rgba(255, 255, 255, .04)',
  },
  inactiveTintColor: {
    light: 'rgba(0, 0, 0, .87)',
    dark: 'rgba(255, 255, 255, .87)',
  },
  inactiveBackgroundColor: {
    light: 'transparent',
    dark: 'transparent',
  },
});
b(I, 'contextType', module437.ThemeContext);
var x = module17.StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  inactiveIcon: {
    opacity: 0.62,
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
  },
});
