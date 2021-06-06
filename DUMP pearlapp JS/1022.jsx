var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437');

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

function w() {
  return (w =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n, o) {
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

var P = (function (t, ...args) {
  module9.default(C, t);

  var n = C,
    P = y(),
    I = function () {
      var t,
        o = module13.default(n);

      if (P) {
        var s = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, s);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function C() {
    var t;
    module7.default(this, C);
    t = I.call(this, ...args);
    b(module12.default(t), 'getScreenOptions', function (n) {
      var o = t.props.descriptors[n];
      if (!o.options) throw new Error('Cannot access screen descriptor options from drawer sidebar');
      return o.options;
    });
    b(module12.default(t), 'getLabel', function (n) {
      var o = n.focused,
        s = n.tintColor,
        u = n.route,
        c = t.getScreenOptions(u.key),
        f = c.drawerLabel,
        l = c.title;
      if (f)
        return 'function' == typeof f
          ? f({
              tintColor: s,
              focused: o,
            })
          : f;
      else return 'string' == typeof l ? l : u.routeName;
    });
    b(module12.default(t), 'renderIcon', function (n) {
      var o = n.focused,
        s = n.tintColor,
        u = n.route,
        c = t.getScreenOptions(u.key).drawerIcon;
      return c
        ? 'function' == typeof c
          ? c({
              tintColor: s,
              focused: o,
            })
          : c
        : null;
    });
    b(module12.default(t), 'handleItemPress', function (n) {
      var o = n.route;
      if (n.focused) t.props.navigation.closeDrawer();
      else
        t.props.navigation.dispatch(
          module437.NavigationActions.navigate({
            routeName: o.routeName,
          })
        );
    });
    return t;
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this.props.contentComponent;
        if (!t) return null;
        var n = this.props.navigation.state;
        if ('number' != typeof n.index) throw new Error('The index of the route should be state in the navigation state');
        return (
          <module17.View style={[O.container, this.props.style]}>
            <t />
          </module17.View>
        );
      },
    },
  ]);
  return C;
})(React.PureComponent);

exports.default = P;
var O = module17.StyleSheet.create({
  container: {
    flex: 1,
  },
});
