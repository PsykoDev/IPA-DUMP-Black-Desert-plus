var module6 = require('./6'),
  PropTypes = require('prop-types'),
  module384 = require('./384'),
  module388 = require('./388'),
  n = module384.default(
    'NativeViewGestureHandler',
    module6.default({}, module388.default, {
      shouldActivateOnStart: PropTypes.default.bool,
      disallowInterruption: PropTypes.default.bool,
    })
  );

exports.default = n;
