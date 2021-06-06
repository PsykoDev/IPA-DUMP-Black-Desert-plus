var module7 = require('./7'),
  module1028 = require('./1028'),
  module1055 = require('./1055'),
  c = (function () {
    function u() {
      module7.default(this, u);
    }

    module8.default(u, null, [
      {
        key: 'linear',
        value: function (u) {
          return u;
        },
      },
      {
        key: 'ease',
        value: function (u) {
          return new module1055.default(u, 0.42, 0, 1, 1);
        },
      },
      {
        key: 'quad',
        value: function (u) {
          return module1028.multiply(u, u);
        },
      },
      {
        key: 'cubic',
        value: function (u) {
          return module1028.multiply(u, u, u);
        },
      },
      {
        key: 'poly',
        value: function (u) {
          return function (n) {
            return module1028.pow(n, u);
          };
        },
      },
      {
        key: 'sin',
        value: function (u) {
          return module1028.sub(1, module1028.cos(module1028.multiply(u, Math.PI, 0.5)));
        },
      },
      {
        key: 'circle',
        value: function (u) {
          return module1028.sub(1, module1028.sqrt(module1028.sub(1, module1028.multiply(u, u))));
        },
      },
      {
        key: 'exp',
        value: function (u) {
          return module1028.pow(2, module1028.multiply(10, module1028.sub(u, 1)));
        },
      },
      {
        key: 'elastic',
        value: function () {
          var u = (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1) * Math.PI;
          return function (n) {
            return module1028.sub(1, module1028.multiply(module1028.pow(module1028.cos(module1028.multiply(n, Math.PI, 0.5)), 3), module1028.cos(module1028.multiply(n, u))));
          };
        },
      },
      {
        key: 'back',
        value: function (u) {
          if (undefined === u) u = 1.70158;
          return function (n) {
            return module1028.multiply(n, n, module1028.sub(module1028.multiply(module1028.add(u, 1), n), u));
          };
        },
      },
      {
        key: 'bounce',
        value: function (u) {
          var n = function (u) {
            return module1028.multiply(7.5625, u, u);
          };

          return module1028.cond(
            module1028.lessThan(u, 0.36363636363636365),
            n(u),
            module1028.cond(
              module1028.lessThan(u, 0.7272727272727273),
              module1028.add(0.75, n(module1028.sub(u, 0.5454545454545454))),
              module1028.cond(
                module1028.lessThan(u, 0.9057971014492754),
                module1028.add(0.9375, n(module1028.sub(u, 0.8181818181818182))),
                module1028.add(0.984375, n(module1028.sub(u, 0.9545454545454546)))
              )
            )
          );
        },
      },
      {
        key: 'bezier',
        value: function (u, n, t, l) {
          return function (c) {
            return new module1055.default(c, u, n, t, l);
          };
        },
      },
      {
        key: 'in',
        value: function (u) {
          return u;
        },
      },
      {
        key: 'out',
        value: function (u) {
          return function (n) {
            return module1028.sub(1, u(module1028.sub(1, n)));
          };
        },
      },
      {
        key: 'inOut',
        value: function (u) {
          return function (n) {
            return module1028.cond(
              module1028.lessThan(n, 0.5),
              module1028.divide(u(module1028.multiply(n, 2)), 2),
              module1028.sub(1, module1028.divide(u(module1028.multiply(module1028.sub(1, n), 2)), 2))
            );
          };
        },
      },
    ]);
    return u;
  })();

exports.default = c;
