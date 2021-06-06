exports.default = function (t, n) {
  var h, module989;

  module989 = h = (function (t, ...args) {
    module9.default(k, t);

    var h = k,
      module989 = b(),
      y = function () {
        var t,
          n = module13.default(h);

        if (module989) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function k() {
      var t;
      module7.default(this, k);
      (t = y.call(this, ...args)).state = {
        icon: undefined,
        selectedIcon: undefined,
      };
      return t;
    }

    module8.default(k, [
      {
        key: 'componentDidMount',
        value: function () {
          this.updateIconSource();
          this.updateSelectedIconSource();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (!N(t, this.props)) this.updateIconSource();
          if (!P(t, this.props)) this.updateSelectedIconSource();
        },
      },
      {
        key: 'updateIconSource',
        value: function () {
          var t, o, u, s, l;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    if (((t = this.props), (o = t.iconName), (u = t.iconSize), (s = t.iconColor), !o)) {
                      f.next = 8;
                      break;
                    }

                    f.next = 4;
                    return regeneratorRuntime.default.awrap(n(o, u, s));

                  case 4:
                    l = f.sent;
                    this.setState({
                      icon: l,
                    });
                    f.next = 9;
                    break;

                  case 8:
                    if (this.state.icon)
                      this.setState({
                        icon: undefined,
                      });

                  case 9:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'updateSelectedIconSource',
        value: function () {
          var t, o, u, s, l, f, p;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    if (((t = this.props), (o = t.iconName), (u = t.iconColor), (s = t.iconSize), (l = t.selectedIconName), (f = t.selectedIconColor), !l && !f)) {
                      h.next = 8;
                      break;
                    }

                    h.next = 4;
                    return regeneratorRuntime.default.awrap(n(l || o, s, f || u));

                  case 4:
                    p = h.sent;
                    this.setState({
                      selectedIcon: p,
                    });
                    h.next = 9;
                    break;

                  case 8:
                    if (this.state.selectedIcon)
                      this.setState({
                        selectedIcon: undefined,
                      });

                  case 9:
                  case 'end':
                    return h.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(module849.TabBarIOS.Item, module6.default({}, this.state, this.props));
        },
      },
    ]);
    return k;
  })(React.PureComponent);

  h.propTypes = {
    iconName: t.isRequired,
    selectedIconName: t,
    iconSize: PropTypes.default.number,
    iconColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    selectedIconColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
  };
  h.defaultProps = {
    iconSize: 30,
  };
  return module989;
};

var module6 = require('./6'),
  regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module997 = require('./997'),
  module989 = require('./989'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module849 = require('./849');

function b() {
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

var k = ['iconName', 'iconSize', 'iconColor'],
  x = [].concat(k, ['selectedIconName', 'selectedIconColor']),
  C = function (t) {
    return function (n, o) {
      return module997.default(module989.default(n, t), module989.default(o, t));
    };
  },
  N = C(k),
  P = C(x);
