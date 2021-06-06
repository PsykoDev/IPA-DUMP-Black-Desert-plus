var PropTypes = require('prop-types'),
  t = PropTypes.shape({
    uri: PropTypes.string,
    bundle: PropTypes.string,
    method: PropTypes.string,
    headers: PropTypes.objectOf(PropTypes.string),
    body: PropTypes.string,
    cache: PropTypes.oneOf(['default', 'reload', 'force-cache', 'only-if-cached']),
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
  }),
  c = PropTypes.oneOfType([t, PropTypes.number, PropTypes.arrayOf(t)]);

module.exports = c;
