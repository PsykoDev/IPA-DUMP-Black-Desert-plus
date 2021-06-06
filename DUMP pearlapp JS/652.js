var n = {
  createStackNavigator: true,
};
Object.defineProperty(exports, 'createStackNavigator', {
  enumerable: true,
  get: function () {
    return module707.default;
  },
});

var module653 = require('./653');

Object.keys(module653).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module653[t];
        },
      });
});

var module707 = require('./707');
