var module26 = require('@babel/runtime/helpers/slicedToArray'),
  React = require('react'),
  module17 = require('./17'),
  module683 = require('./683'),
  module697 = require('./697'),
  module676 = require('./676'),
  f = 0.1;

var p = React.memo(function (t) {
  var n = t.active,
    p = t.cardOverlay,
    h = t.cardOverlayEnabled,
    S = t.cardShadowEnabled,
    b = t.cardStyle,
    E = t.cardStyleInterpolator,
    x = t.closing,
    C = t.gesture,
    I = t.focused,
    R = t.gestureDirection,
    P = t.gestureEnabled,
    w = t.gestureResponseDistance,
    D = t.gestureVelocityImpact,
    H = t.getPreviousRoute,
    O = t.getFocusedRoute,
    T = t.mode,
    A = t.headerMode,
    F = t.headerShown,
    V = t.headerStyleInterpolator,
    _ = t.headerTransparent,
    L = t.headerHeight,
    k = t.onHeaderHeightChange,
    B = t.index,
    G = t.layout,
    M = t.onCloseRoute,
    j = t.onOpenRoute,
    q = t.onPageChangeCancel,
    z = t.onPageChangeConfirm,
    J = t.onPageChangeStart,
    K = t.onTransitionEnd,
    N = t.onTransitionStart,
    Q = t.previousScene,
    U = t.renderHeader,
    W = t.renderScene,
    X = t.safeAreaInsetBottom,
    Y = t.safeAreaInsetLeft,
    Z = t.safeAreaInsetRight,
    $ = t.safeAreaInsetTop,
    ee = t.scene,
    te = t.transitionSpec;
  React.useEffect(
    function () {
      if (!(null === z || undefined === z)) z();
    },
    [n, z]
  );
  var ne = {
      top: $,
      right: Z,
      bottom: X,
      left: Y,
    },
    oe = module676.default().colors,
    re = React.useState('box-none'),
    ae = module26.default(re, 2),
    le = ae[0],
    se = ae[1];
  React.useEffect(
    function () {
      var t,
        n,
        o =
          null === (t = ee.progress.next) || undefined === t
            ? undefined
            : null === (n = t.addListener) || undefined === n
            ? undefined
            : n.call(t, function (t) {
                var n = t.value;
                se(n <= f ? 'box-none' : 'none');
              });
      return function () {
        var t, n;
        if (o) null === (t = ee.progress.next) || undefined === t || null === (n = t.removeListener) || undefined === n || n.call(t, o);
      };
    },
    [le, ee.progress.next]
  );
  return (
    <module683.default
      index={B}
      gestureDirection={R}
      layout={G}
      insets={ne}
      gesture={C}
      current={ee.progress.current}
      next={ee.progress.next}
      closing={x}
      onOpen={function () {
        if (!(null === K || undefined === K))
          K(
            {
              route: ee.route,
            },
            false
          );
        j({
          route: ee.route,
        });
      }}
      onClose={function () {
        if (!(null === K || undefined === K))
          K(
            {
              route: ee.route,
            },
            true
          );
        M({
          route: ee.route,
        });
      }}
      overlay={p}
      overlayEnabled={h}
      shadowEnabled={S}
      onTransitionStart={function (t) {
        var o = t.closing;
        if (n && o) {
          if (!(null === z || undefined === z)) z();
        } else if (!(null === q || undefined === q)) q();
        if (!(null === N || undefined === N))
          N(
            {
              route: ee.route,
            },
            o
          );
      }}
      onGestureBegin={J}
      onGestureCanceled={q}
      gestureEnabled={P}
      gestureResponseDistance={w}
      gestureVelocityImpact={D}
      transitionSpec={te}
      styleInterpolator={E}
      accessibilityElementsHidden={!I}
      importantForAccessibility={I ? 'auto' : 'no-hide-descendants'}
      pointerEvents={n ? 'box-none' : le}
      pageOverflowEnabled={'screen' === A && 'card' === T}
      containerStyle={
        'float' !== A || _ || false === F
          ? null
          : {
              marginTop: L,
            }
      }
      contentStyle={[
        {
          backgroundColor: oe.background,
        },
        b,
      ]}
      style={module17.StyleSheet.absoluteFill}
    >
      <module17.View style={y.container}>
        <module17.View style={y.scene}>
          {React.createElement(
            module697.default.Provider,
            {
              value: L,
            },
            W({
              route: ee.route,
            })
          )}
        </module17.View>
        {'screen' === A
          ? U({
              mode: 'screen',
              layout: G,
              insets: ne,
              scenes: [Q, ee],
              getPreviousRoute: H,
              getFocusedRoute: O,
              gestureDirection: R,
              styleInterpolator: V,
              onContentHeightChange: k,
            })
          : null}
      </module17.View>
    </module683.default>
  );
});
exports.default = p;
var y = module17.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  scene: {
    flex: 1,
  },
});
