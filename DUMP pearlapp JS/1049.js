exports.createAnimatedFunction = function (t) {
  for (var u = new Array(t.length), c = 0; c < u.length; c++) u[c] = module1038.createAnimatedParam();

  var o = t.apply(undefined, u),
    l = module100.default(w, [o].concat(u));
  return function (...args) {
    if (args.length !== u.length) throw new Error('Parameter mismatch when calling reanimated function. Expected ' + u.length + ' parameters, got ' + args.length + '.');
    return module1050.createAnimatedCallFunc(l, args, u);
  };
};

var module100 = require('./100'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1032 = require('./1032'),
  module1050 = require('./1050'),
  module1038 = require('./1038'),
  module1031 = require('./1031'),
  module210 = require('./210');

function _() {
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

var w = (function (t) {
  module9.default(w, t);

  var module100 = w,
    module1050 = _(),
    v = function () {
      var t,
        u = module13.default(module100);

      if (module1050) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, c);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function w(t) {
    var n;
    module7.default(this, w);
    module210.default(t instanceof module1032.default, "Reanimated: AnimatedCallFunc 'what' argument should be of type AnimatedNode but got " + t);

    for (var c = arguments.length, o = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++) o[l - 1] = arguments[l];

    (n = v.call(
      this,
      {
        type: 'func',
        what: t,
      },
      [t].concat(o)
    ))._what = t;

    n.__attach();

    return n;
  }

  module8.default(w, [
    {
      key: '__onEvaluate',
      value: function () {
        return module1031.val(this._what);
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'AnimatedFunction, id: ' + this.__nodeID;
      },
    },
  ]);
  return w;
})(module1032.default);
