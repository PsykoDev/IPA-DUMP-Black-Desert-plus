var module199 = require('./199'),
  module271 = require('./271'),
  module65 = require('./65'),
  module200 = require('./200'),
  PropTypes = require('prop-types');

module.exports = {
  style: module200(module65),
  source: module271,
  defaultSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      scale: PropTypes.number,
    }),
    PropTypes.number,
  ]),
  accessible: PropTypes.bool,
  accessibilityLabel: PropTypes.node,
  blurRadius: PropTypes.number,
  capInsets: module199,
  resizeMethod: PropTypes.oneOf(['auto', 'resize', 'scale']),
  resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),
  testID: PropTypes.string,
  onLayout: PropTypes.func,
  onLoadStart: PropTypes.func,
  onProgress: PropTypes.func,
  onError: PropTypes.func,
  onPartialLoad: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
};
