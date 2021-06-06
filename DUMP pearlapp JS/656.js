exports.default = function (t, l, o) {
  return n(
    u(t, l),
    u(
      t.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
      o
    )
  );
};

var module17 = require('./17'),
  n = module17.Animated.add,
  u = module17.Animated.multiply;
