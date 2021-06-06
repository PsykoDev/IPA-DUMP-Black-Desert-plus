exports.PanGestureHandler = function (t) {
  var n = React.useRef(null);
  return React.createElement(
    module664.default.Provider,
    {
      value: n,
    },
    React.createElement(module2.PanGestureHandler, t)
  );
};

Object.defineProperty(exports, 'GestureHandlerRootView', {
  enumerable: true,
  get: function () {
    return module2.GestureHandlerRootView;
  },
});
Object.defineProperty(exports, 'GestureState', {
  enumerable: true,
  get: function () {
    return module2.State;
  },
});
Object.defineProperty(exports, 'PanGestureHandlerGestureEvent', {
  enumerable: true,
  get: function () {
    return module2.PanGestureHandlerGestureEvent;
  },
});

var React = require('react'),
  module2 = require('./2'),
  module664 = require('./664');
