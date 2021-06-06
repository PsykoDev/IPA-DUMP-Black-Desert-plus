exports.default = function () {
  var n = React.useContext(module664.default);
  if (undefined === n) throw new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
  return n;
};

var React = require('react'),
  module664 = require('./664');
