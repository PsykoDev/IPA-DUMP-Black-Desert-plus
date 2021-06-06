var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module1028 = require('./1028'),
  module1034 = require('./1034');

function f(n) {
  return 3.62 * (n - 30) + 194;
}

function s(n) {
  return 3 * (n - 8) + 25;
}

function p(n) {
  return module1028.add(module1028.multiply(module1028.sub(n, 30), 3.62), 194);
}

function c(n) {
  return module1028.add(module1028.multiply(module1028.sub(n, 8), 3), 25);
}

function y(n, u, l) {
  function f(n, t, u) {
    return module1028.divide(module1028.sub(n, t), module1028.sub(u, t));
  }

  function s(n, t, u) {
    return module1028.add(t, module1028.multiply(n, module1028.sub(u, t)));
  }

  function y(n, t, u) {
    return module1028.add(module1028.multiply(n, u), module1028.multiply(module1028.sub(1, n), t));
  }

  function b(n) {
    return module1028.add(module1028.sub(module1028.multiply(44e-6, module1028.pow(n, 3)), module1028.multiply(0.006, module1028.pow(n, 2))), module1028.multiply(0.36, n), 2);
  }

  function w(n) {
    return module1028.add(
      module1028.sub(module1028.multiply(4.5e-7, module1028.pow(n, 3)), module1028.multiply(332e-6, module1028.pow(n, 2))),
      module1028.multiply(0.1078, n),
      5.84
    );
  }

  var v = f(module1028.divide(n, 1.7), 0, 20);
  v = s(v, 0, 0.8);

  var h = v,
    M = module1028.cond(
      module1028.lessOrEq(O, 18),
      ((T = O),
      module1028.add(module1028.sub(module1028.multiply(7e-4, module1028.pow(T, 3)), module1028.multiply(0.031, module1028.pow(T, 2))), module1028.multiply(0.64, T), 1.28)),
      module1028.cond(module1028.and(module1028.greaterThan(O, 18), module1028.lessOrEq(O, 44)), b(O), w(O))
    ),
    C = 0.01,
    O = _,
    T,
    _ = s(f(module1028.divide(u, 1.7), 0, 20), 0.5, 200),
    k = y(module1028.sub(module1028.multiply(2, h), module1028.multiply(h, h)), M, C);

  return module6.default({}, l, {
    stiffness: p(_),
    damping: c(k),
  });
}

function b(n, u, o) {
  function l(n, t, u) {
    return (n - t) / (u - t);
  }

  function p(n, t, u) {
    return t + n * (u - t);
  }

  function c(n, t, u) {
    return n * u + (1 - n) * t;
  }

  function y(n) {
    return 44e-6 * n ** 3 - 0.006 * n ** 2 + 0.36 * n + 2;
  }

  function b(n) {
    return 4.5e-7 * n ** 3 - 332e-6 * n ** 2 + 0.1078 * n + 5.84;
  }

  var w = l(n / 1.7, 0, 20);
  w = p(w, 0, 0.8);
  var v = w,
    h = (M = O) <= 18 ? ((C = M), 7e-4 * C ** 3 - 0.031 * C ** 2 + 0.64 * C + 1.28) : M > 18 && M <= 44 ? y(M) : b(M),
    M,
    C,
    O = p(l(u / 1.7, 0, 20), 0.5, 200),
    T = c(2 * v - v * v, h, 0.01);
  return module6.default({}, o, {
    stiffness: f(O),
    damping: s(T),
  });
}

var w = {
  makeDefaultConfig: function () {
    return {
      stiffness: new module1034.default(100),
      mass: new module1034.default(1),
      damping: new module1034.default(10),
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      toValue: new module1034.default(0),
    };
  },
  makeConfigFromBouncinessAndSpeed: function (n) {
    var t = n.bounciness,
      o = n.speed,
      l = module56.default(n, ['bounciness', 'speed']);
    return 'number' == typeof t && 'number' == typeof o ? b(t, o, l) : y(t, o, l);
  },
  makeConfigFromOrigamiTensionAndFriction: function (n) {
    var o = n.tension,
      l = n.friction,
      y = module56.default(n, ['tension', 'friction']);
    return module6.default({}, y, {
      stiffness: 'number' == typeof o ? f(o) : p(o),
      damping: 'number' == typeof l ? s(l) : c(l),
    });
  },
};
exports.default = w;
