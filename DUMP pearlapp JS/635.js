var module634 = require('./634'),
  t = function (n) {
    return 'function' == typeof n;
  },
  o = function (n) {
    return 'string' == typeof n;
  },
  u = Array.isArray,
  c = function (n) {
    return n && t(n.take) && t(n.close);
  },
  f = function (n) {
    return Boolean(n) && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype;
  };

exports.array = u;

exports.buffer = function (n) {
  return n && t(n.isEmpty) && t(n.take) && t(n.put);
};

exports.channel = c;

exports.effect = function (t) {
  return t && t[module634.IO];
};

exports.func = t;

exports.iterable = function (n) {
  return n && t(Symbol) ? t(n[Symbol.iterator]) : u(n);
};

exports.iterator = function (n) {
  return n && t(n.next) && t(n.throw);
};

exports.multicast = function (t) {
  return c(t) && t[module634.MULTICAST];
};

exports.notUndef = function (n) {
  return null !== n && undefined !== n;
};

exports.number = function (n) {
  return 'number' == typeof n;
};

exports.object = function (n) {
  return n && !u(n) && 'object' == typeof n;
};

exports.observable = function (n) {
  return n && t(n.subscribe);
};

exports.pattern = function n(c) {
  return c && (o(c) || f(c) || t(c) || (u(c) && c.every(n)));
};

exports.promise = function (n) {
  return n && t(n.then);
};

exports.sagaAction = function (t) {
  return Boolean(t && t[module634.SAGA_ACTION]);
};

exports.string = o;

exports.stringableFunc = function (n) {
  return t(n) && n.hasOwnProperty('toString');
};

exports.symbol = f;

exports.task = function (t) {
  return t && t[module634.TASK];
};

exports.undef = function (n) {
  return null === n || undefined === n;
};
