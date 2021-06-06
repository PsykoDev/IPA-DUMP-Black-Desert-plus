exports.default = function (t) {
  var o = t.mode,
    h = t.scenes,
    p = t.layout,
    f = t.insets,
    y = t.getFocusedRoute,
    E = t.getPreviousRoute,
    S = t.onContentHeightChange,
    b = t.gestureDirection,
    k = t.styleInterpolator,
    w = t.style,
    _ = y();

  return (
    <module17.View pointerEvents="box-none" style={w}>
      {h.slice(-3).map(function (t, h, y) {
        if (('screen' === o && h !== y.length - 1) || !t) return null;
        var w,
          x = t.descriptor.options,
          C = _.key === t.route.key,
          F = E({
            route: t.route,
          });
        if (F)
          for (var P = h - 1; P >= 0; P--) {
            var R = y[P];

            if (R && R.route.key === F.key) {
              w = R;
              break;
            }
          }
        var A = y[h - 1],
          H = y[h + 1],
          I = (A && false === A.descriptor.options.headerShown && !H) || (H && false === H.descriptor.options.headerShown),
          L = {
            mode: o,
            layout: p,
            insets: f,
            scene: t,
            previous: w,
            navigation: t.descriptor.navigation,
            styleInterpolator:
              'float' === o
                ? I
                  ? 'vertical' === b || 'vertical-inverted' === b
                    ? module657.forSlideUp
                    : 'horizontal-inverted' === b
                    ? module657.forSlideRight
                    : module657.forSlideLeft
                  : k
                : module657.forNoAnimation,
          };
        return React.createElement(
          module437.NavigationContext.Provider,
          {
            key: t.route.key,
            value: t.descriptor.navigation,
          },
          React.createElement(
            React.Fragment,
            null,
            React.createElement(
              module17.View,
              {
                onLayout: S
                  ? function (o) {
                      return S({
                        route: t.route,
                        height: o.nativeEvent.layout.height,
                      });
                    }
                  : undefined,
                pointerEvents: C ? 'box-none' : 'none',
                accessibilityElementsHidden: !C,
                importantForAccessibility: C ? 'auto' : 'no-hide-descendants',
                style: ('float' === o && !C) || x.headerTransparent ? v.header : null,
              },
              false !== x.headerShown ? (undefined !== x.header ? x.header(L) : React.createElement(module700.default, L)) : null
            )
          )
        );
      })}
    </module17.View>
  );
};

var React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module700 = require('./700'),
  module657 = require('./657');

var v = module17.StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
