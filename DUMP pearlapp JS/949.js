var module950 = require('./950'),
  module952 = require('./952'),
  module953 = require('./953'),
  module954 = require('./954'),
  module955 = require('./955'),
  b = '[object Boolean]',
  j = '[object Date]',
  u = '[object Map]',
  y = '[object Number]',
  A = '[object RegExp]',
  w = '[object Set]',
  l = '[object String]',
  f = '[object Symbol]',
  p = '[object ArrayBuffer]',
  U = '[object DataView]',
  I = '[object Float32Array]',
  S = '[object Float64Array]',
  v = '[object Int8Array]',
  x = '[object Int16Array]',
  B = '[object Int32Array]',
  D = '[object Uint8Array]',
  F = '[object Uint8ClampedArray]',
  _ = '[object Uint16Array]',
  h = '[object Uint32Array]';

module.exports = function (C, E, M) {
  var N = C.constructor;

  switch (E) {
    case p:
      return module950(C);

    case b:
    case j:
      return new N(+C);

    case U:
      return module952(C, M);

    case I:
    case S:
    case v:
    case x:
    case B:
    case D:
    case F:
    case _:
    case h:
      return module955(C, M);

    case u:
      return new N();

    case y:
    case l:
      return new N(C);

    case A:
      return module953(C);

    case w:
      return new N();

    case f:
      return module954(C);
  }
};
