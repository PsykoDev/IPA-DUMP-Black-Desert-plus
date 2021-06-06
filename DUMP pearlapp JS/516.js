var module6 = require('./6'),
  React = require('react'),
  module517 = require('./517');

function n(t) {
  var n = module6.default({}, t);
  return React.default.createElement(
    module517.default,
    module6.default({}, n, {
      class: 'RNFirebaseAdMobBanner',
    })
  );
}

n.propTypes = module517.default.propTypes;
n.defaultProps = {
  size: 'SMART_BANNER',
};
var o = n;
exports.default = o;
