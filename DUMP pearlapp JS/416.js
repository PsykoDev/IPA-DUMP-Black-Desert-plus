exports.__esModule = true;
exports.createConnect = E;

var module6 = require('./6'),
  module57 = require('./57'),
  module411 = require('./411'),
  module417 = require('./417'),
  module418 = require('./418'),
  module426 = require('./426'),
  module427 = require('./427'),
  module428 = require('./428');

function v(t, o, n) {
  for (var u = o.length - 1; u >= 0; u--) {
    var p = o[u](t);
    if (p) return p;
  }

  return function (o, u) {
    throw new Error('Invalid value of type ' + typeof t + ' for ' + n + ' argument when connecting component ' + u.wrappedComponentName + '.');
  };
}

function P(t, o) {
  return t === o;
}

function E(t) {
  var E = undefined === t ? {} : t,
    q = E.connectHOC,
    S = undefined === q ? module411.default : q,
    h = E.mapStateToPropsFactories,
    w = undefined === h ? module426.default : h,
    M = E.mapDispatchToPropsFactories,
    T = undefined === M ? module418.default : M,
    C = E.mergePropsFactories,
    y = undefined === C ? module427.default : C,
    D = E.selectorFactory,
    F = undefined === D ? module428.default : D;
  return function (t, u, s, l) {
    if (undefined === l) l = {};
    var c = l,
      f = c.pure,
      E = undefined === f || f,
      q = c.areStatesEqual,
      h = undefined === q ? P : q,
      M = c.areOwnPropsEqual,
      C = undefined === M ? module417.default : M,
      D = c.areStatePropsEqual,
      O = undefined === D ? module417.default : D,
      _ = c.areMergedPropsEqual,
      N = undefined === _ ? module417.default : _,
      H = module57.default(c, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']),
      B = v(t, w, 'mapStateToProps'),
      I = v(u, T, 'mapDispatchToProps'),
      b = v(s, y, 'mergeProps');
    return S(
      F,
      module6.default(
        {
          methodName: 'connect',
          getDisplayName: function (t) {
            return 'Connect(' + t + ')';
          },
          shouldHandleStateChanges: Boolean(t),
          initMapStateToProps: B,
          initMapDispatchToProps: I,
          initMergeProps: b,
          pure: E,
          areStatesEqual: h,
          areOwnPropsEqual: C,
          areStatePropsEqual: O,
          areMergedPropsEqual: N,
        },
        H
      )
    );
  };
}

var q = E();
exports.default = q;
