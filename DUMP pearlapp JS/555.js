var module551 = require('./551'),
  module556 = require('./556'),
  module547 = require('./547'),
  module558 = require('./558'),
  module560 = require('./560'),
  module561 = require('./561'),
  module507 = require('./507'),
  module562 = require('./562'),
  s = function (n) {
    var t = {};
    if (n)
      Object.keys(n).forEach(function (u) {
        var l = b(n[u]);
        if (l) t[u] = l;
      });
    return t;
  };

exports.buildNativeMap = s;

var y = function (n) {
  var t = [];
  if (n)
    n.forEach(function (n) {
      var u = b(n);
      if (u) t.push(u);
    });
  return t;
};

exports.buildNativeArray = y;

var b = function (n) {
  var f = module507.typeOf(n);
  return Number.isNaN(n)
    ? {
        type: 'nan',
        value: null,
      }
    : n === 1 / 0
    ? {
        type: 'infinity',
        value: null,
      }
    : null === n || undefined === n
    ? {
        type: 'null',
        value: null,
      }
    : n === module547.DOCUMENT_ID
    ? {
        type: 'documentid',
        value: null,
      }
    : 'boolean' === f || 'number' === f || 'string' === f
    ? {
        type: f,
        value: n,
      }
    : 'array' === f
    ? {
        type: f,
        value: y(n),
      }
    : 'object' === f
    ? n instanceof module551.default
      ? {
          type: 'reference',
          value: n.path,
        }
      : n instanceof module560.default
      ? {
          type: 'geopoint',
          value: {
            latitude: n.latitude,
            longitude: n.longitude,
          },
        }
      : n instanceof module562.default
      ? {
          type: 'timestamp',
          value: {
            seconds: n.seconds,
            nanoseconds: n.nanoseconds,
          },
        }
      : n instanceof Date
      ? {
          type: 'date',
          value: n.getTime(),
        }
      : n instanceof module556.default
      ? {
          type: 'blob',
          value: n.toBase64(),
        }
      : n instanceof module558.default
      ? {
          type: 'fieldvalue',
          value: {
            elements: n.elements,
            type: n.type,
          },
        }
      : {
          type: 'object',
          value: s(n),
        }
    : (console.warn('Unknown data type received ' + f), null);
};

exports.buildTypeMap = b;

var N = function (n, t) {
  var u;

  if (t) {
    u = {};
    Object.keys(t).forEach(function (l) {
      u[l] = M(n, t[l]);
    });
  }

  return u;
};

exports.parseNativeMap = N;

var w = function (n, t) {
    var u = [];
    if (t)
      t.forEach(function (t) {
        u.push(M(n, t));
      });
    return u;
  },
  M = function (n, l) {
    var o = l.type,
      v = l.value;
    return 'null' === o
      ? null
      : 'boolean' === o || 'number' === o || 'string' === o
      ? v
      : 'array' === o
      ? w(n, v)
      : 'object' === o
      ? N(n, v)
      : 'reference' === o
      ? new module551.default(n, module561.default.fromName(v))
      : 'geopoint' === o
      ? new module560.default(v.latitude, v.longitude)
      : 'timestamp' === o
      ? new module562.default(v.seconds, v.nanoseconds)
      : 'date' === o
      ? new Date(v)
      : 'blob' === o
      ? module556.default.fromBase64String(v)
      : 'infinity' === o
      ? 1 / 0
      : 'nan' === o
      ? NaN
      : (console.warn('Unknown data type received ' + o), v);
  };
