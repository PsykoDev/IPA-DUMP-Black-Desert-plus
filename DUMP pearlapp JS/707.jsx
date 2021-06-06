var React = require('react'),
  module437 = require('./437'),
  module708 = require('./708');

var c = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    c = module437.StackRouter(t, n);
  return module437.createNavigator(
    function (t) {
      return <module708.default />;
    },
    c,
    n
  );
};

exports.default = c;
