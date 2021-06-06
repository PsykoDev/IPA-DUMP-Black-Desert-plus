exports.__esModule = true;
exports.createDispatchHook = c;

var module408 = require('./408'),
  module431 = require('./431');

function c(c) {
  if (undefined === c) c = module408.ReactReduxContext;
  var u = c === module408.ReactReduxContext ? module431.useStore : module431.createStoreHook(c);
  return function () {
    return u().dispatch;
  };
}

var u = c();
exports.useDispatch = u;
