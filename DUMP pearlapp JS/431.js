exports.__esModule = true;
exports.createStoreHook = n;

var React = require('react'),
  module408 = require('./408'),
  module432 = require('./432');

function n(n) {
  if (undefined === n) n = module408.ReactReduxContext;
  var c =
    n === module408.ReactReduxContext
      ? module432.useReduxContext
      : function () {
          return React.useContext(n);
        };
  return function () {
    return c().store;
  };
}

var c = n();
exports.useStore = c;
