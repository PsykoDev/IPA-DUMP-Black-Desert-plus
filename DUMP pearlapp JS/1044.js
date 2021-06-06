exports.createAnimatedEvent = function (t, n) {
  return new E(t, n);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module1033 = require('./1033'),
  module1032 = require('./1032'),
  module1045 = require('./1045'),
  module1052 = require('./1052'),
  module210 = require('./210'),
  module1053 = require('./1053');

function w() {
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

function N(t) {
  var n = [],
    o = [],
    u = function (t) {
      return 'web' === module17.Platform.OS ? t : t.__nodeID;
    },
    f = function t(f, c) {
      if (f instanceof module1045.default) n.push(c.concat(u(f)));
      else if ('object' == typeof f && f.__val) n.push(c.concat(u(f.__val)));
      else if ('function' == typeof f) {
        var l = new module1045.default(0);
        o.push(module1052.createAnimatedAlways(f(l)));
        n.push(c.concat(u(l)));
      } else if ('object' == typeof f) for (var s in f) t(f[s], c.concat(s));
    };

  module210.default(t[0] && t[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');
  var c = t[0].nativeEvent;
  if ('object' == typeof c) f(c, []);
  else if ('function' == typeof c) {
    var s = {
        get: function (t, n) {
          return '__isProxy' === n || (t[n] || '__val' === n || (t[n] = new Proxy({}, s)), t[n]);
        },
        set: function (t, n, o) {
          return '__val' === n && ((t[n] = o), true);
        },
      },
      v = 'function' == typeof Proxy ? new Proxy({}, s) : module1053.default();
    o.push(module1052.createAnimatedAlways(c(v)));
    f(v, []);
  }
  return {
    eventMappings: n,
    alwaysNodes: o,
  };
}

var E = (function (t) {
  module9.default(h, t);

  var module1032 = h,
    module1045 = w(),
    y = function () {
      var t,
        n = module13.default(module1032);

      if (module1045) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h(t) {
    var o;
    if (arguments.length > 1 && undefined !== arguments[1]) arguments[1];
    module7.default(this, h);
    var u = N(t),
      f = u.eventMappings,
      c = u.alwaysNodes;
    (o = y.call(this, {
      type: 'event',
      argMapping: f,
    })).__isNative = true;
    o._alwaysNodes = c;
    return o;
  }

  module8.default(h, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedEvent, id: ' + this.__nodeID;
      },
    },
    {
      key: 'attachEvent',
      value: function (t, n) {
        for (var o = 0; o < this._alwaysNodes.length; o++) this._alwaysNodes[o].__attach();

        this.__attach();

        var u = module17.findNodeHandle(t);
        module1033.default.attachEvent(u, n, this.__nodeID);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return 0;
      },
    },
    {
      key: 'detachEvent',
      value: function (t, n) {
        for (var o = 0; o < this._alwaysNodes.length; o++) this._alwaysNodes[o].isNativelyInitialized() && this._alwaysNodes[o].__detach();

        var u = module17.findNodeHandle(t);
        module1033.default.detachEvent(u, n, this.__nodeID);

        this.__detach();
      },
    },
  ]);
  return h;
})(module1032.default);

exports.default = E;
