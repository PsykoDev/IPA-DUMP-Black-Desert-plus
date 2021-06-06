var module6 = require('./6'),
  React = require('react'),
  module517 = require('./517');

function s(t) {
  var s = module6.default({}, t);
  return React.default.createElement(
    module517.default,
    module6.default({}, s, {
      class: 'RNFirebaseAdMobNativeExpress',
    })
  );
}

s.propTypes = module517.default.propTypes;
s.defaultProps = {
  size: 'SMART_BANNER',
};
var o = s;
exports.default = o;
