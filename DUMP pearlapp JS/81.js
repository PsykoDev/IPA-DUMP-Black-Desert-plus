var module6 = require('./6'),
  module66 = require('./66'),
  module68 = require('./68'),
  module72 = require('./72'),
  module73 = require('./73'),
  PropTypes = require('prop-types'),
  l = module6({}, module68, module72, module73, {
    backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
    backgroundColor: module66,
    borderColor: module66,
    borderTopColor: module66,
    borderRightColor: module66,
    borderBottomColor: module66,
    borderLeftColor: module66,
    borderStartColor: module66,
    borderEndColor: module66,
    borderRadius: PropTypes.number,
    borderTopLeftRadius: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    borderTopStartRadius: PropTypes.number,
    borderTopEndRadius: PropTypes.number,
    borderBottomLeftRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
    borderBottomStartRadius: PropTypes.number,
    borderBottomEndRadius: PropTypes.number,
    borderStyle: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
    borderWidth: PropTypes.number,
    borderTopWidth: PropTypes.number,
    borderRightWidth: PropTypes.number,
    borderBottomWidth: PropTypes.number,
    borderLeftWidth: PropTypes.number,
    opacity: PropTypes.number,
    elevation: PropTypes.number,
  });

module.exports = l;
