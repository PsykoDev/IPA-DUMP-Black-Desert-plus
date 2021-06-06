exports.__esModule = true;

exports.default = function (t, n) {
  if (undefined === n) n = {};

  var p = n,
    M = p.getDisplayName,
    b =
      undefined === M
        ? function (t) {
            return 'ConnectAdvanced(' + t + ')';
          }
        : M,
    x = p.methodName,
    E = undefined === x ? 'connectAdvanced' : x,
    B = p.renderCountProp,
    D = undefined === B ? undefined : B,
    P = p.shouldHandleStateChanges,
    _ = undefined === P || P,
    A = p.storeKey,
    H = undefined === A ? 'store' : A,
    K = p.forwardRef,
    W = undefined !== K && K,
    T = p.context,
    U = undefined === T ? module408.ReactReduxContext : T,
    I = module57.default(p, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef', 'forwardRef', 'context']),
    L = U;

  return function (n) {
    var p = n.displayName || n.name || 'Component',
      v = b(p),
      M = module6.default({}, I, {
        getDisplayName: b,
        methodName: E,
        renderCountProp: D,
        shouldHandleStateChanges: _,
        storeKey: H,
        displayName: v,
        wrappedComponentName: p,
        WrappedComponent: n,
      }),
      x = I.pure;

    function B(n) {
      return t(n.dispatch, M);
    }

    var P = x
      ? React.useMemo
      : function (t) {
          return t();
        };

    function A(t) {
      if (Boolean(x)) Boolean(x.store);
      var f = React.useMemo(
          function () {
            var n = t.forwardedRef,
              u = module57.default(t, ['forwardedRef']);
            return [t.context, n, u];
          },
          [t]
        ),
        p = f[0],
        v = f[1],
        M = f[2],
        b = React.useMemo(
          function () {
            return p && p.Consumer && module414.isContextConsumer(React.default.createElement(p.Consumer, null)) ? p : L;
          },
          [p, L]
        ),
        x = React.useContext(b),
        E = Boolean(t.store) && Boolean(t.store.getState) && Boolean(t.store.dispatch),
        D = E ? t.store : x.store,
        A = React.useMemo(
          function () {
            return B(D);
          },
          [D]
        ),
        H = React.useMemo(
          function () {
            if (!_) return h;
            var t = new module409.default(D, E ? null : x.subscription),
              n = t.notifyNestedSubs.bind(t);
            return [t, n];
          },
          [D, E, x]
        ),
        K = H[0],
        W = H[1],
        T = React.useMemo(
          function () {
            return E
              ? x
              : module6.default({}, x, {
                  subscription: K,
                });
          },
          [E, x, K]
        ),
        U = React.useReducer(y, C, S),
        I = U[0],
        O = I[0],
        j = U[1];
      if (O && O.error) throw O.error;
      var k = React.useRef(),
        q = React.useRef(M),
        z = React.useRef(),
        F = React.useRef(false),
        G = P(
          function () {
            return z.current && M === q.current ? z.current : A(D.getState(), M);
          },
          [D, O, M]
        );
      R(w, [q, k, F, M, G, z, W]);
      R(N, [_, D, K, A, q, k, F, z, W, j], [D, K, A]);
      var J = React.useMemo(
          function () {
            return React.default.createElement(
              n,
              module6.default({}, G, {
                ref: v,
              })
            );
          },
          [v, n, G]
        ),
        Q = React.useMemo(
          function () {
            return _
              ? React.default.createElement(
                  b.Provider,
                  {
                    value: T,
                  },
                  J
                )
              : J;
          },
          [b, J, T]
        );
      return Q;
    }

    var K = x ? React.default.memo(A) : A;

    if (((K.WrappedComponent = n), (K.displayName = v), W)) {
      var T = React.default.forwardRef(function (t, n) {
        return React.default.createElement(
          K,
          module6.default({}, t, {
            forwardedRef: n,
          })
        );
      });
      T.displayName = v;
      T.WrappedComponent = n;
      return module412.default(T, n);
    }

    return module412.default(K, n);
  };
};

var module6 = require('./6'),
  module57 = require('./57'),
  module412 = require('./412'),
  React = require('react'),
  module414 = require('./414'),
  module409 = require('./409'),
  module415 = require('./415'),
  module408 = require('./408'),
  C = [],
  h = [null, null];

function y(t, n) {
  var u = t[1];
  return [n.payload, u + 1];
}

function R(t, n, u) {
  module415.useIsomorphicLayoutEffect(function () {
    return t.apply(undefined, n);
  }, u);
}

function w(t, n, u, o, f, c, l) {
  t.current = o;
  n.current = f;
  u.current = false;

  if (c.current) {
    c.current = null;
    l();
  }
}

function N(t, n, u, o, f, c, l, s, p, v) {
  if (t) {
    var C = false,
      h = null,
      y = function () {
        if (!C) {
          var t,
            u,
            y = n.getState();

          try {
            t = o(y, f.current);
          } catch (t) {
            u = t;
            h = t;
          }

          if (!u) h = null;
          if (t === c.current) {
            if (!l.current) p();
          } else {
            c.current = t;
            s.current = t;
            l.current = true;
            v({
              type: 'STORE_UPDATED',
              payload: {
                error: u,
              },
            });
          }
        }
      };

    u.onStateChange = y;
    u.trySubscribe();
    y();
    return function () {
      if (((C = true), u.tryUnsubscribe(), (u.onStateChange = null), h)) throw h;
    };
  }
}

var S = function () {
  return [null, 0];
};
