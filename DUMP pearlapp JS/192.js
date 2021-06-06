var module6 = require('./6'),
  module64 = {
    pointerEvents: true,
    accessible: true,
    accessibilityActions: true,
    accessibilityLabel: true,
    accessibilityLiveRegion: true,
    accessibilityRole: true,
    accessibilityStates: true,
    accessibilityState: true,
    accessibilityHint: true,
    importantForAccessibility: true,
    nativeID: true,
    testID: true,
    renderToHardwareTextureAndroid: true,
    shouldRasterizeIOS: true,
    onLayout: true,
    onAccessibilityAction: true,
    onAccessibilityTap: true,
    onMagicTap: true,
    onAccessibilityEscape: true,
    collapsable: true,
    needsOffscreenAlphaCompositing: true,
    style: require('./64'),
  },
  c = {
    UIView: module64,
    RCTView: module6({}, module64, {
      removeClippedSubviews: true,
    }),
  };

module.exports = c;
