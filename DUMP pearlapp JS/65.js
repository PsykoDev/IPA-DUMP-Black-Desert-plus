var module6 = require('./6'),
  module66 = require('./66'),
  module68 = require('./68'),
  module72 = require('./72'),
  module73 = require('./73'),
  PropTypes = require('prop-types'),
  c = module6({}, module68, module72, module73, {
    resizeMode: PropTypes.oneOf(['center', 'contain', 'cover', 'repeat', 'stretch']),
    backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
    backgroundColor: module66,
    borderColor: module66,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    overflow: PropTypes.oneOf(['visible', 'hidden']),
    tintColor: module66,
    opacity: PropTypes.number,
    overlayColor: PropTypes.string,
    borderTopLeftRadius: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    borderBottomLeftRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
  });

module.exports = c;
