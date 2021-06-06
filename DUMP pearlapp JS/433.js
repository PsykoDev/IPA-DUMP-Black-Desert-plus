exports.__esModule = true;
exports.createSelectorHook = h;

var React = require('react'),
  module432 = require('./432'),
  module409 = require('./409'),
  module415 = require('./415'),
  module408 = require('./408'),
  f = function (t, n) {
    return t === n;
  };

function v(t, u, s, f) {
  var v,
    h = React.useReducer(function (t) {
      return t + 1;
    }, 0)[1],
    R = React.useMemo(
      function () {
        return new module409.default(s, f);
      },
      [s, f]
    ),
    x = React.useRef(),
    y = React.useRef(),
    S = React.useRef();

  try {
    v = t !== y.current || x.current ? t(s.getState()) : S.current;
  } catch (t) {
    throw (x.current && (t.message += '\nThe error may be correlated with this previous error:\n' + x.current.stack + '\n\n'), t);
  }

  module415.useIsomorphicLayoutEffect(function () {
    y.current = t;
    S.current = v;
    x.current = undefined;
  });
  module415.useIsomorphicLayoutEffect(
    function () {
      function t() {
        try {
          var t = y.current(s.getState());
          if (u(t, S.current)) return;
          S.current = t;
        } catch (t) {
          x.current = t;
        }

        h({});
      }

      R.onStateChange = t;
      R.trySubscribe();
      t();
      return function () {
        return R.tryUnsubscribe();
      };
    },
    [s, R]
  );
  return v;
}

function h(t) {
  if (undefined === t) t = module408.ReactReduxContext;
  var c =
    t === module408.ReactReduxContext
      ? module432.useReduxContext
      : function () {
          return React.useContext(t);
        };
  return function (t, n) {
    if (undefined === n) n = f;
    var u = c();
    return v(t, n, u.store, u.subscription);
  };
}

var R = h();
exports.useSelector = R;
