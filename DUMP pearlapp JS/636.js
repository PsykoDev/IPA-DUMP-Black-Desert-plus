function n(n) {
  return n && 'object' == typeof n && 'default' in n ? n.default : n;
}

var t = true,
  module634 = require('./634'),
  module6 = n(require('./6')),
  module635 = require('./635'),
  module637 = n(require('./637')),
  l = function () {
    return t;
  };

exports.noop = function () {};

var p = function (n) {
  return n;
};

var C = function (n) {
    throw n;
  },
  E = function (n) {
    return {
      value: n,
      done: true,
    };
  };

var v = function (n) {
    return Array.apply(null, new Array(n));
  },
  s = function (n) {
    return n === module634.TERMINATE;
  },
  A = function (n) {
    return n === module634.TASK_CANCEL;
  },
  y = function (n) {
    return s(n) || A(n);
  };

function T(n) {
  return n[module634.SAGA_LOCATION];
}

var L = "Channel's Buffer overflow!",
  h = 1,
  N = 3,
  O = 4,
  S = {
    isEmpty: l,
    put: exports.noop,
    take: exports.noop,
  };

function _(n, t) {
  if (undefined === n) n = 10;

  var o = new Array(n),
    module6 = 0,
    c = 0,
    module637 = 0,
    l = function (t) {
      o[c] = t;
      c = (c + 1) % n;
      module6++;
    },
    p = function () {
      if (0 != module6) {
        var t = o[module637];
        o[module637] = null;
        module6--;
        module637 = (module637 + 1) % n;
        return t;
      }
    },
    C = function () {
      for (var n = []; module6; ) n.push(p());

      return n;
    };

  return {
    isEmpty: function () {
      return 0 == module6;
    },
    put: function (p) {
      var E;
      if (module6 < n) l(p);
      else
        switch (t) {
          case h:
            throw new Error(L);

          case N:
            o[c] = p;
            module637 = c = (c + 1) % n;
            break;

          case O:
            E = 2 * n;
            o = C();
            module6 = o.length;
            c = o.length;
            module637 = 0;
            o.length = E;
            n = E;
            l(p);
        }
    },
    take: p,
    flush: C,
  };
}

var b = function () {
    return S;
  },
  w = function (n) {
    return _(n, N);
  },
  I = function (n) {
    return _(n, O);
  },
  k = Object.freeze({
    __proto__: null,
    none: b,
    fixed: function (n) {
      return _(n, h);
    },
    dropping: function (n) {
      return _(n, 2);
    },
    sliding: w,
    expanding: I,
  }),
  x = 'TAKE',
  P = 'PUT',
  j = 'ALL',
  R = 'RACE',
  F = 'CALL',
  K = 'CPS',
  U = 'FORK',
  H = 'JOIN',
  X = 'CANCEL',
  G = 'SELECT',
  D = 'ACTION_CHANNEL',
  M = 'CANCELLED',
  J = 'FLUSH',
  z = 'GET_CONTEXT',
  B = 'SET_CONTEXT',
  W = Object.freeze({
    __proto__: null,
    TAKE: x,
    PUT: P,
    ALL: j,
    RACE: R,
    CALL: F,
    CPS: K,
    FORK: U,
    JOIN: H,
    CANCEL: X,
    SELECT: G,
    ACTION_CHANNEL: D,
    CANCELLED: M,
    FLUSH: J,
    GET_CONTEXT: z,
    SET_CONTEXT: B,
  }),
  q = function (n, t) {
    var u;
    (u = {})[module634.IO] = true;
    u.combinator = false;
    u.type = n;
    u.payload = t;
    return u;
  },
  Q = function (n) {
    return q(
      U,
      module6({}, n.payload, {
        detached: true,
      })
    );
  };

function V(n, t) {
  if (undefined === n) n = '*';
  return module635.pattern(n)
    ? q(x, {
        pattern: n,
      })
    : module635.multicast(n) && module635.notUndef(t) && module635.pattern(t)
    ? q(x, {
        channel: n,
        pattern: t,
      })
    : module635.channel(n)
    ? q(x, {
        channel: n,
      })
    : undefined;
}

function Y(n, t) {
  if (module635.undef(t)) {
    t = n;
    n = undefined;
  }

  return q(P, {
    channel: n,
    action: t,
  });
}

function Z(n, t) {
  var o,
    u = null;
  if (module635.func(n)) o = n;
  else {
    if (module635.array(n)) {
      u = n[0];
      o = n[1];
    } else {
      u = n.context;
      o = n.fn;
    }

    if (u && module635.string(o) && module635.func(u[o])) o = u[o];
  }
  return {
    context: u,
    fn: o,
    args: t,
  };
}

function $(n) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) o[u - 1] = arguments[u];

  return q(F, Z(n, o));
}

function nn(n) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) o[u - 1] = arguments[u];

  return q(U, Z(n, o));
}

var rn = $.bind(null, module637);
exports.ACTION_CHANNEL = D;
exports.ALL = j;
exports.CALL = F;
exports.CANCEL = X;
exports.CANCELLED = M;
exports.CPS = K;
exports.FLUSH = J;
exports.FORK = U;
exports.GET_CONTEXT = z;
exports.JOIN = H;
exports.PUT = P;
exports.RACE = R;
exports.SELECT = G;
exports.SET_CONTEXT = B;
exports.TAKE = x;

exports.actionChannel = function (n, t) {
  return q(D, {
    pattern: n,
    buffer: t,
  });
};

exports.all = function (n) {
  var t = q(j, n);
  t.combinator = true;
  return t;
};

exports.apply = function (n, t, o) {
  if (undefined === o) o = [];
  return q(F, Z([n, t], o));
};

exports.assignWithSymbols = function (n, t) {
  module6(n, t);
  if (Object.getOwnPropertySymbols)
    Object.getOwnPropertySymbols(t).forEach(function (o) {
      n[o] = t[o];
    });
};

exports.buffers = k;
exports.call = $;

exports.cancel = function (n) {
  if (undefined === n) n = module634.SELF_CANCELLATION;
  return q(X, n);
};

exports.cancelled = function () {
  return q(M, {});
};

exports.cps = function (n) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) o[u - 1] = arguments[u];

  return q(K, Z(n, o));
};

exports.createAllStyleChildCallbacks = function (n, t) {
  var o,
    u = Object.keys(n),
    f = u.length,
    l = 0,
    p = module635.array(n) ? v(f) : {},
    C = {};
  u.forEach(function (n) {
    var u = function (u, c) {
      if (!o) c || y(u) ? (t.cancel(), t(u, c)) : ((p[n] = u), ++l === f && ((o = true), t(p)));
    };

    u.cancel = exports.noop;
    C[n] = u;
  });

  t.cancel = function () {
    if (!o) {
      o = true;
      u.forEach(function (n) {
        return C[n].cancel();
      });
    }
  };

  return C;
};

exports.createEmptyArray = v;
exports.delay = rn;
exports.detach = Q;
exports.effectTypes = W;
exports.expanding = I;

exports.flatMap = function (n, t) {
  var o;
  return (o = []).concat.apply(o, t.map(n));
};

exports.flush = function (n) {
  return q(J, n);
};

exports.fork = nn;

exports.getContext = function (n) {
  return q(z, n);
};

exports.getLocation = T;

exports.getMetaInfo = function (n) {
  return {
    name: n.name || 'anonymous',
    location: T(n),
  };
};

exports.identity = p;

exports.join = function (n) {
  return q(H, n);
};

exports.kTrue = l;

exports.logError = function (n, t) {
  var o = t.sagaStack;
  console.error(n);
  console.error(o);
};

exports.makeIterator = function (n, t, o) {
  if (undefined === t) t = C;
  if (undefined === o) o = 'iterator';
  var u = {
    meta: {
      name: o,
    },
    next: n,
    throw: t,
    return: E,
    isSagaIterator: true,
  };
  if ('undefined' != typeof Symbol)
    u[Symbol.iterator] = function () {
      return u;
    };
  return u;
};

exports.none = b;

exports.once = function (n) {
  var t = false;
  return function () {
    if (!t) {
      t = true;
      n();
    }
  };
};

exports.put = Y;

exports.putResolve = function () {
  var n = Y.apply(undefined, arguments);
  n.payload.resolve = true;
  return n;
};

exports.race = function (n) {
  var t = q(R, n);
  t.combinator = true;
  return t;
};

exports.remove = function (n, t) {
  var o = n.indexOf(t);
  if (o >= 0) n.splice(o, 1);
};

exports.select = function (n) {
  if (undefined === n) n = p;

  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) o[u - 1] = arguments[u];

  return q(G, {
    selector: n,
    args: o,
  });
};

exports.setContext = function (n) {
  return q(B, n);
};

exports.shouldCancel = A;
exports.shouldComplete = y;
exports.shouldTerminate = s;
exports.sliding = w;

exports.spawn = function (n) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) o[u - 1] = arguments[u];

  return Q(nn.apply(undefined, [n].concat(o)));
};

exports.take = V;

exports.takeMaybe = function () {
  var n = V.apply(undefined, arguments);
  n.payload.maybe = true;
  return n;
};

exports.wrapSagaDispatch = function (n) {
  return function (t) {
    return n(
      Object.defineProperty(t, module634.SAGA_ACTION, {
        value: true,
      })
    );
  };
};
