exports.default = function (t, n) {
  var o = n;
  Object.keys(u).forEach(function (n) {
    if (n in t) {
      var s = u[n],
        c = s.compat;
      o = c ? c(t, o) : o;
    }
  });
  return o;
};

var module247 = require('./247');

function o(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      o(Object(s), true).forEach(function (n) {
        c(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      o(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

function c(t, n, o) {
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

var u = s(
  {
    transparentCard: {
      message:
        "'transparentCard' is removed in favor of 'cardStyle: { backgroundColor: 'transparent' }' in 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour.",
      compat: function (t, n) {
        return t.transparentCard
          ? s({}, n, {
              cardStyle: [
                {
                  backgroundColor: 'transparent',
                },
                n.cardStyle,
              ],
            })
          : n;
      },
    },
    headerLayoutPreset: {
      message: "'headerLayoutPreset' is renamed to 'headerTitleAlign' and moved to 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour.",
      compat: function (t, n) {
        return s({}, n, {
          headerTitleAlign: t.headerLayoutPreset,
        });
      },
    },
    headerTransitionPreset: {
      message: "'headerTransitionPreset' is removed in favor of the new animation APIs",
    },
    transitionConfig: {
      message: "'transitionConfig' is removed in favor of the new animation APIs",
    },
  },
  ['cardShadowEnabled', 'cardOverlayEnabled', 'cardStyle', 'headerBackTitleVisible', 'onTransitionStart', 'onTransitionEnd'].reduce(function (t, o) {
    t[o] = {
      message: "'".concat(o, "' is moved to 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour."),
      compat: function (t, c) {
        return s(
          {},
          c,
          module247.default({}, o, function () {
            return t[o];
          })
        );
      },
    };
    return t;
  }, {})
);
