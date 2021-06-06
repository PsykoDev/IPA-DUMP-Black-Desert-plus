exports.__esModule = true;

exports.default = function (n, o) {
  n.stateReconciler = undefined === n.stateReconciler ? module623.default : n.stateReconciler;
  return module616.default(n, module419.combineReducers(o));
};

var module419 = require('./419'),
  module616 = require('./616'),
  module623 = require('./623');
