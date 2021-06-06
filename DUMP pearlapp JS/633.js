function n(n) {
  return n && 'object' == typeof n && 'default' in n ? n.default : n;
}

var module634 = require('./634'),
  c = n(require('./6')),
  module57 = n(require('./57')),
  module635 = require('./635'),
  module636 = require('./636'),
  module419 = require('./419'),
  module638 = n(require('./638'));

require('./637');

var v = [],
  p = 0;

function h(n) {
  try {
    y();
    n();
  } finally {
    A();
  }
}

function E(n) {
  v.push(n);

  if (!p) {
    y();
    T();
  }
}

function C(n) {
  try {
    y();
    return n();
  } finally {
    T();
  }
}

function y() {
  p++;
}

function A() {
  p--;
}

function T() {
  var n;

  for (A(); !p && undefined !== (n = v.shift()); ) h(n);
}

var S = function (n) {
    return function (t) {
      return n.some(function (n) {
        return M(n)(t);
      });
    };
  },
  b = function (n) {
    return function (t) {
      return n(t);
    };
  },
  k = function (n) {
    return function (t) {
      return t.type === String(n);
    };
  },
  N = function (n) {
    return function (t) {
      return t.type === n;
    };
  },
  L = function () {
    return module636.kTrue;
  };

function M(n) {
  var t = '*' === n ? L : module635.string(n) ? k : module635.array(n) ? S : module635.stringableFunc(n) ? k : module635.func(n) ? b : module635.symbol(n) ? N : null;
  if (null === t) throw new Error('invalid pattern: ' + n);
  return t(n);
}

var x = {
    type: module634.CHANNEL_END_TYPE,
  },
  _ = function (n) {
    return n && n.type === module634.CHANNEL_END_TYPE;
  };

function j(n) {
  if (undefined === n) n = module636.expanding();
  var t = false,
    c = [];
  return {
    take: function (o) {
      if (t && n.isEmpty()) o(x);
      else if (n.isEmpty()) {
        c.push(o);

        o.cancel = function () {
          module636.remove(c, o);
        };
      } else o(n.take());
    },
    put: function (o) {
      if (!t) {
        if (0 === c.length) return n.put(o);
        c.shift()(o);
      }
    },
    flush: function (c) {
      if (t && n.isEmpty()) c(x);
      else c(n.flush());
    },
    close: function () {
      if (!t) {
        t = true;
        var n = c;
        c = [];

        for (var o = 0, u = n.length; o < u; o++) n[o](x);
      }
    },
  };
}

function R() {
  var n,
    c = false,
    o = [],
    u = o,
    l = function () {
      if (u === o) u = o.slice();
    },
    s = function () {
      c = true;
      var n = (o = u);
      u = [];
      n.forEach(function (n) {
        n(x);
      });
    };

  (n = {})[module634.MULTICAST] = true;

  n.put = function (n) {
    if (!c)
      if (_(n)) s();
      else
        for (var f = (o = u), l = 0, v = f.length; l < v; l++) {
          var p = f[l];

          if (p[module634.MATCH](n)) {
            p.cancel();
            p(n);
          }
        }
  };

  n.take = function (n, o) {
    if (undefined === o) o = L;
    if (c) n(x);
    else {
      n[module634.MATCH] = o;
      l();
      u.push(n);
      n.cancel = module636.once(function () {
        l();
        module636.remove(u, n);
      });
    }
  };

  n.close = s;
  return n;
}

function I() {
  var n = R(),
    c = n.put;

  n.put = function (n) {
    if (n[module634.SAGA_ACTION]) c(n);
    else
      E(function () {
        c(n);
      });
  };

  return n;
}

var O = 0,
  w = 1,
  D = 2,
  K = 3;

function P(n, c) {
  var o = n[module634.CANCEL];
  if (module635.func(o)) c.cancel = o;
  n.then(c, function (n) {
    c(n, true);
  });
}

var H,
  F = 0,
  G = function () {
    return ++F;
  };

function U(n, t) {
  return n.isSagaIterator
    ? {
        name: n.meta.name,
      }
    : module636.getMetaInfo(t);
}

function q(n) {
  var t = n.context,
    c = n.fn,
    o = n.args;

  try {
    var l = c.apply(t, o);
    if (module635.iterator(l)) return l;
    var s = false;
    return module636.makeIterator(function (n) {
      if (s)
        return {
          value: n,
          done: true,
        };
      else {
        s = true;
        return {
          value: l,
          done: !module635.promise(l),
        };
      }
    });
  } catch (n) {
    return module636.makeIterator(function () {
      throw n;
    });
  }
}

function W(n) {
  if (n.isRunning()) n.cancel();
}

(H = {})[module636.TAKE] = function (n, c, o) {
  var f = c.channel,
    l = undefined === f ? n.channel : f,
    s = c.pattern,
    v = c.maybe,
    p = function (n) {
      if (n instanceof Error) o(n, true);
      else if (!_(n) || v) o(n);
      else o(module634.TERMINATE);
    };

  try {
    l.take(p, module635.notUndef(s) ? M(s) : null);
  } catch (n) {
    return void o(n, true);
  }

  o.cancel = p.cancel;
};

H[module636.PUT] = function (n, t, c) {
  var o = t.channel,
    f = t.action,
    l = t.resolve;
  E(function () {
    var t;

    try {
      t = (o ? o.put : n.dispatch)(f);
    } catch (n) {
      return void c(n, true);
    }

    if (l && module635.promise(t)) P(t, c);
    else c(t);
  });
};

H[module636.ALL] = function (n, t, c, o) {
  var l = o.digestEffect,
    s = F,
    v = Object.keys(t);

  if (0 !== v.length) {
    var p = module636.createAllStyleChildCallbacks(t, c);
    v.forEach(function (n) {
      l(t[n], s, p[n], n);
    });
  } else c(module635.array(t) ? [] : {});
};

H[module636.RACE] = function (n, t, c, o) {
  var l = o.digestEffect,
    s = F,
    v = Object.keys(t),
    p = module635.array(t) ? module636.createEmptyArray(v.length) : {},
    h = {},
    E = false;
  v.forEach(function (n) {
    var t = function (t, o) {
      if (!E) o || module636.shouldComplete(t) ? (c.cancel(), c(t, o)) : (c.cancel(), (E = true), (p[n] = t), c(p));
    };

    t.cancel = module636.noop;
    h[n] = t;
  });

  c.cancel = function () {
    if (!E) {
      E = true;
      v.forEach(function (n) {
        return h[n].cancel();
      });
    }
  };

  v.forEach(function (n) {
    if (!E) l(t[n], s, h[n], n);
  });
};

H[module636.CALL] = function (n, t, c, o) {
  var l = t.context,
    s = t.fn,
    v = t.args,
    p = o.task;

  try {
    var h = s.apply(l, v);
    if (module635.promise(h)) return void P(h, c);
    if (module635.iterator(h)) return void rn(n, h, p.context, F, module636.getMetaInfo(s), false, c);
    c(h);
  } catch (n) {
    c(n, true);
  }
};

H[module636.CPS] = function (n, t, c) {
  var o = t.context,
    f = t.fn,
    l = t.args;

  try {
    var s = function (n, t) {
      if (module635.undef(n)) c(t);
      else c(n, true);
    };

    f.apply(o, l.concat(s));
    if (s.cancel) c.cancel = s.cancel;
  } catch (n) {
    c(n, true);
  }
};

H[module636.FORK] = function (n, t, c, o) {
  var u = t.context,
    f = t.fn,
    l = t.args,
    s = t.detached,
    v = o.task,
    p = q({
      context: u,
      fn: f,
      args: l,
    }),
    h = U(p, f);
  C(function () {
    var t = rn(n, p, v.context, F, h, s, undefined);
    if (s) c(t);
    else if (t.isRunning()) {
      v.queue.addTask(t);
      c(t);
    } else if (t.isAborted()) v.queue.abort(t.error());
    else c(t);
  });
};

H[module636.JOIN] = function (n, t, c, o) {
  var l = o.task,
    s = function (n, t) {
      if (n.isRunning()) {
        var c = {
          task: l,
          cb: t,
        };

        t.cancel = function () {
          if (n.isRunning()) module636.remove(n.joiners, c);
        };

        n.joiners.push(c);
      } else n.isAborted() ? t(n.error(), true) : t(n.result());
    };

  if (module635.array(t)) {
    if (0 === t.length) return void c([]);
    var v = module636.createAllStyleChildCallbacks(t, c);
    t.forEach(function (n, t) {
      s(n, v[t]);
    });
  } else s(t, c);
};

H[module636.CANCEL] = function (n, c, o, f) {
  var l = f.task;
  if (c === module634.SELF_CANCELLATION) W(l);
  else if (module635.array(c)) c.forEach(W);
  else W(c);
  o();
};

H[module636.SELECT] = function (n, t, c) {
  var o = t.selector,
    u = t.args;

  try {
    c(o.apply(undefined, [n.getState()].concat(u)));
  } catch (n) {
    c(n, true);
  }
};

H[module636.ACTION_CHANNEL] = function (n, t, c) {
  var o = t.pattern,
    u = j(t.buffer),
    f = M(o),
    l = function t(c) {
      if (!_(c)) n.channel.take(t, f);
      u.put(c);
    },
    s = u.close;

  u.close = function () {
    l.cancel();
    s();
  };

  n.channel.take(l, f);
  c(u);
};

H[module636.CANCELLED] = function (n, t, c, o) {
  c(o.task.isCancelled());
};

H[module636.FLUSH] = function (n, t, c) {
  t.flush(c);
};

H[module636.GET_CONTEXT] = function (n, t, c, o) {
  c(o.task.context[t]);
};

H[module636.SET_CONTEXT] = function (n, t, c, o) {
  var u = o.task;
  module636.assignWithSymbols(u.context, t);
  c();
};

var z = H;

function X(n, t, c) {
  var o,
    u = [],
    l = false;
  v(n);

  function s(n) {
    t();
    p();
    c(n, true);
  }

  function v(t) {
    u.push(t);

    t.cont = function (v, p) {
      if (!l) {
        module636.remove(u, t);
        t.cont = module636.noop;
        if (p) s(v);
        else {
          if (t === n) o = v;

          if (!u.length) {
            l = true;
            c(o);
          }
        }
      }
    };
  }

  function p() {
    if (!l) {
      l = true;
      u.forEach(function (n) {
        n.cont = module636.noop;
        n.cancel();
      });
      u = [];
    }
  }

  return {
    addTask: v,
    cancelAll: p,
    abort: s,
    getTasks: function () {
      return u;
    },
  };
}

function Y(n, t) {
  return n + '?' + t;
}

function J(n) {
  var t = n.name,
    c = n.location;
  return c ? t + '  ' + Y(c.fileName, c.lineNumber) : t;
}

function B(n) {
  var t = module636.flatMap(function (n) {
    return n.cancelledTasks;
  }, n);
  return t.length ? ['Tasks cancelled due to error:'].concat(t).join('\n') : '';
}

var Q = null,
  V = [],
  Z = function (n) {
    n.crashedEffect = Q;
    V.push(n);
  },
  $ = function () {
    Q = null;
    V.length = 0;
  },
  nn = function (n) {
    Q = n;
  },
  tn = function () {
    var n,
      t,
      c = V[0],
      o = V.slice(1),
      u = c.crashedEffect ? ((n = c.crashedEffect), (t = module636.getLocation(n)) ? t.code + '  ' + Y(t.fileName, t.lineNumber) : '') : null;
    return ['The above error occurred in task ' + J(c.meta) + (u ? ' \n when executing effect ' + u : '')]
      .concat(
        o.map(function (n) {
          return '    created by ' + J(n.meta);
        }),
        [B(V)]
      )
      .join('\n');
  };

function en(n, c, o, u, l, v, p) {
  var h;
  if (undefined === p) p = module636.noop;
  var E,
    C,
    y = O,
    A = null,
    T = [],
    S = Object.create(o),
    b = X(
      c,
      function () {
        T.push.apply(
          T,
          b.getTasks().map(function (n) {
            return n.meta.name;
          })
        );
      },
      k
    );

  function k(c, o) {
    if (o) {
      if (
        ((y = D),
        Z({
          meta: l,
          cancelledTasks: T,
        }),
        N.isRoot)
      ) {
        var u = tn();
        $();
        n.onError(c, {
          sagaStack: u,
        });
      }

      C = c;
      if (A) A.reject(c);
    } else {
      if (c === module634.TASK_CANCEL) y = w;
      else if (y !== w) y = K;
      E = c;
      if (A) A.resolve(c);
    }

    N.cont(c, o);
    N.joiners.forEach(function (n) {
      n.cb(c, o);
    });
    N.joiners = null;
  }

  (h = {})[module634.TASK] = true;
  h.id = u;
  h.meta = l;
  h.isRoot = v;
  h.context = S;
  h.joiners = [];
  h.queue = b;

  h.cancel = function () {
    if (y === O) {
      y = w;
      b.cancelAll();
      k(module634.TASK_CANCEL, false);
    }
  };

  h.cont = p;
  h.end = k;

  h.setContext = function (n) {
    module636.assignWithSymbols(S, n);
  };

  h.toPromise = function () {
    if (A) return A.promise;
    else {
      A = module638();
      if (y === D) A.reject(C);
      else if (y !== O) A.resolve(E);
      return A.promise;
    }
  };

  h.isRunning = function () {
    return y === O;
  };

  h.isCancelled = function () {
    return y === w || (y === O && c.status === w);
  };

  h.isAborted = function () {
    return y === D;
  };

  h.result = function () {
    return E;
  };

  h.error = function () {
    return C;
  };

  var N = h;
  return N;
}

function rn(n, c, o, l, s, v, p) {
  var h = n.finalizeRunEffect(function (c, o, f) {
    if (module635.promise(c)) P(c, f);
    else if (module635.iterator(c)) rn(n, c, C.context, o, s, false, f);
    else if (c && c[module634.IO]) {
      var l = z[c.type];
      l(n, c.payload, f, y);
    } else f(c);
  });
  A.cancel = module636.noop;
  var E = {
      meta: s,
      cancel: function () {
        if (E.status === O) {
          E.status = w;
          A(module634.TASK_CANCEL);
        }
      },
      status: O,
    },
    C = en(n, E, o, l, s, v, p),
    y = {
      task: C,
      digestEffect: T,
    };
  if (p) p.cancel = C.cancel;
  A();
  return C;

  function A(n, o) {
    try {
      var s;

      if (o) {
        s = c.throw(n);
        $();
      } else if (module636.shouldCancel(n)) {
        E.status = w;
        A.cancel();
        s = module635.func(c.return)
          ? c.return(module634.TASK_CANCEL)
          : {
              done: true,
              value: module634.TASK_CANCEL,
            };
      } else
        s = module636.shouldTerminate(n)
          ? module635.func(c.return)
            ? c.return()
            : {
                done: true,
              }
          : c.next(n);

      if (s.done) {
        if (E.status !== w) E.status = K;
        E.cont(s.value);
      } else T(s.value, l, A);
    } catch (n) {
      if (E.status === w) throw n;
      E.status = D;
      E.cont(n, true);
    }
  }

  function T(t, c, o, u) {
    if (undefined === u) u = '';
    var l,
      s = G();

    function v(c, u) {
      if (!l) {
        l = true;
        o.cancel = module636.noop;
        if (n.sagaMonitor) u ? n.sagaMonitor.effectRejected(s, c) : n.sagaMonitor.effectResolved(s, c);
        if (u) nn(t);
        o(c, u);
      }
    }

    if (n.sagaMonitor)
      n.sagaMonitor.effectTriggered({
        effectId: s,
        parentEffectId: c,
        label: u,
        effect: t,
      });
    v.cancel = module636.noop;

    o.cancel = function () {
      if (!l) {
        l = true;
        v.cancel();
        v.cancel = module636.noop;
        if (n.sagaMonitor) n.sagaMonitor.effectCancelled(s);
      }
    };

    h(t, s, v);
  }
}

function cn(n, t) {
  for (
    var c = n.channel,
      o = undefined === c ? I() : c,
      u = n.dispatch,
      s = n.getState,
      v = n.context,
      p = undefined === v ? {} : v,
      h = n.sagaMonitor,
      E = n.effectMiddlewares,
      y = n.onError,
      A = undefined === y ? module636.logError : y,
      T = arguments.length,
      S = new Array(T > 2 ? T - 2 : 0),
      b = 2;
    b < T;
    b++
  )
    S[b - 2] = arguments[b];

  var k,
    N = t.apply(undefined, S),
    L = G();

  if (
    (h &&
      ((h.rootSagaStarted = h.rootSagaStarted || module636.noop),
      (h.effectTriggered = h.effectTriggered || module636.noop),
      (h.effectResolved = h.effectResolved || module636.noop),
      (h.effectRejected = h.effectRejected || module636.noop),
      (h.effectCancelled = h.effectCancelled || module636.noop),
      (h.actionDispatched = h.actionDispatched || module636.noop),
      h.rootSagaStarted({
        effectId: L,
        saga: t,
        args: S,
      })),
    E)
  ) {
    var M = module419.compose.apply(undefined, E);

    k = function (n) {
      return function (t, c, o) {
        return M(function (t) {
          return n(t, c, o);
        })(t);
      };
    };
  } else k = module636.identity;

  var x = {
    channel: o,
    dispatch: module636.wrapSagaDispatch(u),
    getState: s,
    sagaMonitor: h,
    onError: A,
    finalizeRunEffect: k,
  };
  return C(function () {
    var n = rn(x, N, p, L, module636.getMetaInfo(t), true, undefined);
    if (h) h.effectResolved(L, n);
    return n;
  });
}

Object.defineProperty(exports, 'CANCEL', {
  enumerable: true,
  get: function () {
    return module634.CANCEL;
  },
});
Object.defineProperty(exports, 'SAGA_LOCATION', {
  enumerable: true,
  get: function () {
    return module634.SAGA_LOCATION;
  },
});
exports.buffers = module636.buffers;
exports.detach = module636.detach;
exports.END = x;
exports.channel = j;

exports.default = function (n) {
  var module634,
    u = undefined === n ? {} : n,
    l = u.context,
    s = undefined === l ? {} : l,
    v = u.channel,
    p = undefined === v ? I() : v,
    h = u.sagaMonitor,
    E = module57(u, ['context', 'channel', 'sagaMonitor']);

  function C(n) {
    var o = n.getState,
      u = n.dispatch;
    module634 = cn.bind(
      null,
      c({}, E, {
        context: s,
        channel: p,
        dispatch: u,
        getState: o,
        sagaMonitor: h,
      })
    );
    return function (n) {
      return function (t) {
        if (h && h.actionDispatched) h.actionDispatched(t);
        var c = n(t);
        p.put(t);
        return c;
      };
    };
  }

  C.run = function () {
    return module634.apply(undefined, arguments);
  };

  C.setContext = function (n) {
    module636.assignWithSymbols(s, n);
  };

  return C;
};

exports.eventChannel = function (n, t) {
  if (undefined === t) t = module636.none();

  var c,
    o = false,
    l = j(t),
    s = function () {
      if (!o) {
        o = true;
        if (module635.func(c)) c();
        l.close();
      }
    };

  c = n(function (n) {
    if (_(n)) s();
    else l.put(n);
  });
  c = module636.once(c);
  if (o) c();
  return {
    take: l.take,
    flush: l.flush,
    close: s,
  };
};

exports.isEnd = _;
exports.multicastChannel = R;
exports.runSaga = cn;
exports.stdChannel = I;
