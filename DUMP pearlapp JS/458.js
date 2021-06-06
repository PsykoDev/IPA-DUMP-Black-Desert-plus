function t(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var O = Object.getOwnPropertySymbols(t);
    if (n)
      O = O.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, O);
  }

  return o;
}

function n(n) {
  for (var O = 1; O < arguments.length; O++) {
    var p = null != arguments[O] ? arguments[O] : {};
    if (O % 2)
      t(Object(p), true).forEach(function (t) {
        o(n, t, p[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(p));
    else
      t(Object(p)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(p, t));
      });
  }

  return n;
}

function o(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

var O = 'Navigation/POP';
exports.POP = O;
exports.POP_TO_TOP = 'Navigation/POP_TO_TOP';
var p = 'Navigation/PUSH';
exports.PUSH = p;
var P = 'Navigation/RESET';
exports.RESET = P;
exports.REPLACE = 'Navigation/REPLACE';
exports.COMPLETE_TRANSITION = 'Navigation/COMPLETE_TRANSITION';

exports.pop = function (t) {
  return n(
    {
      type: O,
    },
    t
  );
};

exports.popToTop = function (t) {
  return n(
    {
      type: 'Navigation/POP_TO_TOP',
    },
    t
  );
};

exports.push = function (t) {
  return n(
    {
      type: p,
    },
    t
  );
};

exports.reset = function (t) {
  return n(
    {
      type: P,
      key: null,
    },
    t
  );
};

exports.replace = function (t) {
  return n(
    {
      type: 'Navigation/REPLACE',
    },
    t
  );
};

exports.completeTransition = function (t) {
  return n(
    {
      type: 'Navigation/COMPLETE_TRANSITION',
      preserveFocus: true,
    },
    t
  );
};
