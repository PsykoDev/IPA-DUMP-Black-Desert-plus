exports.default = function (t) {
  var n = t.disabled,
    y = t.allowFontScaling,
    p = t.backImage,
    v = t.label,
    O = t.labelStyle,
    w = t.labelVisible,
    P = undefined === w ? 'ios' === module17.Platform.OS : w,
    k = t.onLabelLayout,
    L = t.onPress,
    S = t.pressColorAndroid,
    j = t.screenLayout,
    E = t.tintColor,
    M = t.titleLayout,
    I = t.truncatedLabel,
    C = undefined === I ? module677.defaultBackTitle : I,
    x = t.accessibilityLabel,
    D = undefined === x ? (v && v !== module677.defaultBackTitle ? ''.concat(v, ', back') : 'Go back') : x,
    T = module676.default(),
    R = T.dark,
    V = T.colors,
    F = React.useState(undefined),
    z = module26.default(F, 2),
    W = z[0],
    B = z[1],
    _ =
      undefined !== E
        ? E
        : module17.Platform.select({
            ios: V.primary,
            default: V.text,
          }),
    A = undefined !== S ? S : R ? 'rgba(255, 255, 255, .32)' : 'rgba(0, 0, 0, .32)',
    X = function (t) {
      if (!(null === k || undefined === k)) k(t);
      B(t.nativeEvent.layout.x + t.nativeEvent.layout.width);
    },
    q = function () {
      return !v || (W && M && j && (j.width - M.width) / 2 < W + 26);
    };

  return React.createElement(
    module674.TouchableItem,
    {
      disabled: n,
      accessible: true,
      accessibilityRole: 'button',
      accessibilityComponentType: 'button',
      accessibilityLabel: D,
      accessibilityTraits: 'button',
      testID: 'header-back',
      delayPressIn: 0,
      onPress: n
        ? undefined
        : function () {
            return L && requestAnimationFrame(L);
          },
      pressColor: A,
      style: [h.container, n && h.disabled],
      hitSlop: module17.Platform.select({
        ios: undefined,
        default: {
          top: 16,
          right: 16,
          bottom: 16,
          left: 16,
        },
      }),
      borderless: true,
    },
    React.createElement(
      React.Fragment,
      null,
      p
        ? p({
            tintColor: _,
          })
        : React.createElement(module17.Image, {
            style: [
              h.icon,
              Boolean(P) && h.iconWithLabel,
              Boolean(_) && {
                tintColor: _,
              },
            ],
            source: require('./678'),
            fadeDuration: 0,
          }),
      (function () {
        var t = q() ? C : v;
        if (!P || undefined === t) return null;
        var n = React.createElement(
          module17.View,
          {
            style: j
              ? [
                  h.labelWrapper,
                  {
                    minWidth: j.width / 2 - 27,
                  },
                ]
              : null,
          },
          React.createElement(
            module17.Animated.Text,
            {
              accessible: false,
              onLayout: t === v ? X : undefined,
              style: [
                h.label,
                _
                  ? {
                      color: _,
                    }
                  : null,
                O,
              ],
              numberOfLines: 1,
              allowFontScaling: !!y,
            },
            t
          )
        );
        if (p || 'ios' !== module17.Platform.OS) return n;
        return React.createElement(
          module671.default,
          {
            maskElement: React.createElement(
              module17.View,
              {
                style: h.iconMaskContainer,
              },
              React.createElement(module17.Image, {
                source: require('./679'),
                style: h.iconMask,
              }),
              React.createElement(module17.View, {
                style: h.iconMaskFillerRect,
              })
            ),
          },
          n
        );
      })()
    )
  );
};

var module26 = require('@babel/runtime/helpers/slicedToArray'),
  React = require('react'),
  module17 = require('./17'),
  module671 = require('./671'),
  module674 = require('./674'),
  module676 = require('./676'),
  module677 = require('./677');

function y(t, n) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    l.push.apply(l, o);
  }

  return l;
}

function p(t, n, l) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = l;
  return t;
}

var h = module17.StyleSheet.create({
  container: (function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var l = null != arguments[n] ? arguments[n] : {};
      if (n % 2)
        y(Object(l), true).forEach(function (n) {
          p(t, n, l[n]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
      else
        y(Object(l)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
        });
    }

    return t;
  })(
    {
      alignItems: 'center',
      flexDirection: 'row',
    },
    module17.Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    })
  ),
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: module17.Platform.select({
    ios: {
      height: 21,
      width: 13,
      marginLeft: 8,
      marginRight: 22,
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [
        {
          scaleX: module17.I18nManager.isRTL ? -1 : 1,
        },
      ],
    },
    default: {
      height: 24,
      width: 24,
      margin: 3,
      resizeMode: 'contain',
      transform: [
        {
          scaleX: module17.I18nManager.isRTL ? -1 : 1,
        },
      ],
    },
  }),
  iconWithLabel:
    'ios' === module17.Platform.OS
      ? {
          marginRight: 6,
        }
      : {},
  iconMaskContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconMaskFillerRect: {
    flex: 1,
    backgroundColor: '#000',
  },
  iconMask: {
    height: 21,
    width: 13,
    marginLeft: -14.5,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [
      {
        scaleX: module17.I18nManager.isRTL ? -1 : 1,
      },
    ],
  },
});
