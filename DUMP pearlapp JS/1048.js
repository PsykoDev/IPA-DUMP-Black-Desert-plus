exports.createAnimatedOperator = function (t) {
  return function (...args) {
    return new q(t, args.map(module1030.adapt));
  };
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module1031 = require('./1031'),
  module210 = require('./210'),
  module1030 = require('./1030');

function v() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

function y(t) {
  return function (n) {
    return n.reduce(function (n, u) {
      return t(module1031.val(n), module1031.val(u));
    });
  };
}

function _(t, n) {
  return function (u) {
    return u.reduce(function (n, u) {
      return t(module1031.val(n), module1031.val(u));
    }, n);
  };
}

function M(t) {
  return function (n) {
    return t(module1031.val(n[0]), module1031.val(n[1]));
  };
}

function b(t) {
  return function (n) {
    return t(module1031.val(n[0]));
  };
}

var R = {
    add: y(function (t, n) {
      return t + n;
    }),
    sub: y(function (t, n) {
      return t - n;
    }),
    multiply: y(function (t, n) {
      return t * n;
    }),
    divide: y(function (t, n) {
      return t / n;
    }),
    pow: y(function (t, n) {
      return t ** n;
    }),
    modulo: y(function (t, n) {
      return ((t % n) + n) % n;
    }),
    sqrt: b(function (t) {
      return Math.sqrt(t);
    }),
    log: b(function (t) {
      return Math.log(t);
    }),
    sin: b(function (t) {
      return Math.sin(t);
    }),
    cos: b(function (t) {
      return Math.cos(t);
    }),
    tan: b(function (t) {
      return Math.tan(t);
    }),
    acos: b(function (t) {
      return Math.acos(t);
    }),
    asin: b(function (t) {
      return Math.asin(t);
    }),
    atan: b(function (t) {
      return Math.atan(t);
    }),
    exp: b(function (t) {
      return Math.exp(t);
    }),
    round: b(function (t) {
      return Math.round(t);
    }),
    and: _(function (t, n) {
      return t && n;
    }, true),
    or: _(function (t, n) {
      return t || n;
    }, false),
    not: b(function (t) {
      return !t;
    }),
    defined: b(function (t) {
      return null !== t && undefined !== t && !isNaN(t);
    }),
    lessThan: M(function (t, n) {
      return t < n;
    }),
    eq: M(function (t, n) {
      return t == n;
    }),
    greaterThan: M(function (t, n) {
      return t > n;
    }),
    lessOrEq: M(function (t, n) {
      return t <= n;
    }),
    greaterOrEq: M(function (t, n) {
      return t >= n;
    }),
    neq: M(function (t, n) {
      return t != n;
    }),
  },
  q = (function (t) {
    module9.default(_, t);

    var module1031 = _,
      module1030 = v(),
      y = function () {
        var t,
          n = module13.default(module1031);

        if (module1030) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function _(t, u) {
      var o;
      module7.default(this, _);
      module210.default('string' == typeof t, 'Reanimated: Animated.operator node first argument should be of type String, but got: ' + t);
      module210.default(
        u.every(function (t) {
          return t instanceof module1032.default || 'string' == typeof t || 'number' == typeof t;
        }),
        'Reanimated: Animated.operator node second argument should be one or more of type AnimatedNode, String or Number but got ' + u
      );
      (o = y.call(
        this,
        {
          type: 'op',
          op: t,
          input: u,
        },
        u
      ))._op = t;
      o._input = u;
      return o;
    }

    module8.default(_, [
      {
        key: 'toString',
        value: function () {
          return 'AnimatedOperator, id: ' + this.__nodeID;
        },
      },
      {
        key: '__onEvaluate',
        value: function () {
          if (!this._operation) {
            this._operation = R[this._op];
            module210.default(this._operation, "Illegal operator '%s'", this._op);
          }

          return this._operation(this._input);
        },
      },
    ]);
    return _;
  })(module1032.default);
