var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function s() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (n) {
    return false;
  }
}

var module98 = (function (l, ...args) {
    module9(E, l);

    var p = E,
      f = s(),
      u = function () {
        var n,
          o = module13(p);

        if (f) {
          var s = module13(this).constructor;
          n = Reflect.construct(o, arguments, s);
        } else n = o.apply(this, arguments);

        return module11(this, n);
      };

    function E() {
      var o;
      module7(this, E);
      (o = u.call(this, ...args)).name = '';
      return o;
    }

    return E;
  })(require('./98')(Error)),
  p = 0;

function f(n, o) {
  var module102 = require('./102').default;

  if (module102) {
    var module103 = require('./103')(n),
      s = ++p,
      l = n.message || '',
      f = l;

    if (null != n.componentStack) f += '\n\nThis error is located at:' + n.componentStack;
    var u = null == n.name || '' === n.name ? '' : n.name + ': ',
      E = 'console.error' === n.name;
    if (!f.startsWith(u)) f = u + f;
    if (!E) console._errorOriginal ? console._errorOriginal(f) : console.error(f);
    f = null == n.jsEngine ? f : f + ', js engine: ' + n.jsEngine;
    module102.reportException({
      message: f,
      originalMessage: f === l ? null : l,
      name: null == n.name || '' === n.name ? null : n.name,
      componentStack: 'string' == typeof n.componentStack ? n.componentStack : null,
      stack: module103,
      id: s,
      isFatal: o,
      extraData: {
        jsEngine: n.jsEngine,
        rawStack: n.stack,
        framesPopped: n.framesToPop,
      },
    });
  }
}

function u() {
  if (console.reportErrorsAsExceptions) {
    if (arguments[0] && arguments[0].stack) f(arguments[0], false);
    else {
      console._errorOriginal.apply(console, arguments);

      var module41 = require('./41'),
        o = Array.prototype.map.call(arguments, module41).join(', ');

      if ('"Warning: ' === o.slice(0, 10)) return;
      var t = new module98(o);
      t.name = 'console.error';
      t.framesToPop = (t.framesToPop || 0) + 1;
      f(t, false);
    }
  } else console._errorOriginal.apply(console, arguments);
}

module.exports = {
  handleException: function (n, o) {
    f(n instanceof Error ? n : new module98(n), o);
  },
  installConsoleErrorReporter: function () {
    if (!console._errorOriginal) {
      console._errorOriginal = console.error.bind(console);
      console.error = u;
      if (undefined === console.reportErrorsAsExceptions) console.reportErrorsAsExceptions = true;
    }
  },
  SyntheticError: module98,
};
