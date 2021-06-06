var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module438 = require('./438');

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

function h() {
  return (h =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var l = arguments[n];

        for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (t[u] = l[u]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n) {
  if (null == t) return {};
  var l,
    u,
    o = w(t, n);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);

    for (u = 0; u < c.length; u++) {
      l = c[u];
      if (!(n.indexOf(l) >= 0)) Object.prototype.propertyIsEnumerable.call(t, l) && (o[l] = t[l]);
    }
  }

  return o;
}

function w(t, n) {
  if (null == t) return {};
  var l,
    u,
    o = {},
    c = Object.keys(t);

  for (u = 0; u < c.length; u++) {
    l = c[u];
    if (!(n.indexOf(l) >= 0)) o[l] = t[l];
  }

  return o;
}

var O = (function (t) {
    module9.default(j, t);

    var w = j,
      O = y(),
      P = function () {
        var t,
          n = module13.default(w);

        if (O) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function j(t) {
      var module8, module9, c, module13;
      module7.default(this, j);
      module8 = P.call(this);
      module9 = module12.default(module8);

      module13 = function () {
        return module8.props.animationEnabled || module8.props.swipeEnabled;
      };

      if ((c = '_mustAlwaysBeVisible') in module9)
        Object.defineProperty(module9, c, {
          value: module13,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      else module9[c] = module13;
      module8.state = {
        awake: !t.lazy || t.isFocused,
      };
      return module8;
    }

    module8.default(j, null, [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, n) {
          return t.isFocused && !n.awake
            ? {
                awake: true,
              }
            : null;
        },
      },
    ]);
    module8.default(j, [
      {
        key: 'render',
        value: function () {
          var t = this.state.awake,
            n = this.props,
            l = n.isFocused,
            u = n.childNavigation,
            o = n.removeClippedSubviews,
            c = b(n, ['isFocused', 'childNavigation', 'removeClippedSubviews']);
          return React.default.createElement(
            module17.View,
            {
              style: S.container,
              collapsable: false,
              removeClippedSubviews: 'android' === module17.Platform.OS ? o : !l && o,
            },
            React.default.createElement(
              module17.View,
              {
                style: this._mustAlwaysBeVisible() || l ? S.innerAttached : S.innerDetached,
              },
              t
                ? React.default.createElement(
                    module438.SceneView,
                    h({}, c, {
                      navigation: u,
                    })
                  )
                : null
            )
          );
        },
      },
    ]);
    return j;
  })(React.default.PureComponent),
  S = module17.StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    innerAttached: {
      flex: 1,
    },
    innerDetached: {
      flex: 1,
      top: 3e3,
    },
  }),
  P = O;

exports.default = P;
