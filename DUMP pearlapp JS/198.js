var module66 = require('./66'),
  module199 = require('./199'),
  module200 = require('./200'),
  PropTypes = require('prop-types'),
  module80 = module200(require('./80'));

module.exports = {
  ellipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
  numberOfLines: PropTypes.number,
  textBreakStrategy: PropTypes.oneOf(['simple', 'highQuality', 'balanced']),
  onLayout: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  pressRetentionOffset: module199,
  selectable: PropTypes.bool,
  selectionColor: module66,
  suppressHighlighting: PropTypes.bool,
  style: module80,
  testID: PropTypes.string,
  nativeID: PropTypes.string,
  allowFontScaling: PropTypes.bool,
  maxFontSizeMultiplier: PropTypes.number,
  accessible: PropTypes.bool,
  adjustsFontSizeToFit: PropTypes.bool,
  minimumFontScale: PropTypes.number,
  disabled: PropTypes.bool,
  dataDetectorType: PropTypes.oneOf(['phoneNumber', 'link', 'email', 'none', 'all']),
};