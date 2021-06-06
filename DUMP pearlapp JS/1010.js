exports.default = function (t, o) {
  var v, module989;

  module989 = v = (function (t, ...args) {
    module9.default(x, t);

    var v = x,
      module989 = w(),
      y = function () {
        var t,
          o = module13.default(v);

        if (module989) {
          var n = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function x() {
      var t;
      module7.default(this, x);
      (t = y.call(this, ...args)).state = {
        logo: undefined,
        navIcon: undefined,
        overflowIcon: undefined,
        actions: undefined,
      };
      return t;
    }

    module8.default(x, [
      {
        key: 'componentDidMount',
        value: function () {
          this.updateLogoIconSource();
          this.updateNavIconSource();
          this.updateOverflowIconSource();
          this.updateActionIconSources();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (!z(t, this.props)) this.updateLogoIconSource();
          if (!O(t, this.props)) this.updateNavIconSource();
          if (!R(t, this.props)) this.updateOverflowIconSource();
          if (!T(t, this.props)) this.updateActionIconSources();
        },
      },
      {
        key: 'updateLogoIconSource',
        value: function () {
          var t, n, u, s, l, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    if (((t = this.props), (n = t.logoName), (u = t.iconSize), (s = t.iconColor), (l = t.titleColor), !n)) {
                      p.next = 8;
                      break;
                    }

                    p.next = 4;
                    return regeneratorRuntime.default.awrap(o(n, u, s || l));

                  case 4:
                    f = p.sent;
                    this.setState({
                      logo: f,
                    });
                    p.next = 9;
                    break;

                  case 8:
                    if (this.state.logo)
                      this.setState({
                        logo: undefined,
                      });

                  case 9:
                  case 'end':
                    return p.stop();
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
        key: 'updateNavIconSource',
        value: function () {
          var t, n, u, s, l, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    if (((t = this.props), (n = t.navIconName), (u = t.iconSize), (s = t.iconColor), (l = t.titleColor), !n)) {
                      p.next = 8;
                      break;
                    }

                    p.next = 4;
                    return regeneratorRuntime.default.awrap(o(n, u, s || l));

                  case 4:
                    f = p.sent;
                    this.setState({
                      navIcon: f,
                    });
                    p.next = 9;
                    break;

                  case 8:
                    if (this.state.navIcon)
                      this.setState({
                        navIcon: undefined,
                      });

                  case 9:
                  case 'end':
                    return p.stop();
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
        key: 'updateOverflowIconSource',
        value: function () {
          var t, n, u, s, l, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    if (((t = this.props), (n = t.overflowIconName), (u = t.iconSize), (s = t.iconColor), (l = t.titleColor), !n)) {
                      p.next = 8;
                      break;
                    }

                    p.next = 4;
                    return regeneratorRuntime.default.awrap(o(n, u, s || l));

                  case 4:
                    f = p.sent;
                    this.setState({
                      overflowIcon: f,
                    });
                    p.next = 9;
                    break;

                  case 8:
                    if (this.state.overflowIcon)
                      this.setState({
                        overflowIcon: undefined,
                      });

                  case 9:
                  case 'end':
                    return p.stop();
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
        key: 'updateActionIconSources',
        value: function () {
          var t, module7, module8, module9, module11, p;
          return regeneratorRuntime.default.async(
            function (v) {
              for (;;)
                switch ((v.prev = v.next)) {
                  case 0:
                    t = this.props;
                    module7 = t.actions;
                    module8 = t.iconSize;
                    module9 = t.iconColor;
                    module11 = t.titleColor;
                    v.next = 3;
                    return regeneratorRuntime.default.awrap(
                      Promise.all(
                        (module7 || []).map(function (t) {
                          return t.iconName
                            ? o(t.iconName, t.iconSize || module8, t.iconColor || module9 || module11).then(function (o) {
                                return module6.default({}, t, {
                                  icon: o,
                                });
                              })
                            : Promise.resolve(t);
                        })
                      )
                    );

                  case 3:
                    p = v.sent;
                    this.setState({
                      actions: p,
                    });

                  case 5:
                  case 'end':
                    return v.stop();
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
          return React.default.createElement(module849.ToolbarAndroid, module6.default({}, this.props, this.state));
        },
      },
    ]);
    return x;
  })(React.PureComponent);

  v.propTypes = {
    logoName: t,
    navIconName: t,
    overflowIconName: t,
    actions: PropTypes.default.arrayOf(
      PropTypes.default.shape({
        title: PropTypes.default.string.isRequired,
        iconName: t,
        iconSize: PropTypes.default.number,
        iconColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
        show: PropTypes.default.oneOf(['always', 'ifRoom', 'never']),
        showWithText: PropTypes.default.bool,
      })
    ),
    iconSize: PropTypes.default.number,
    iconColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    titleColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
  };
  v.defaultProps = {
    iconSize: 24,
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

function w() {
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

var x = ['iconSize', 'iconColor', 'titleColor'],
  C = [].concat(x, ['logoName']),
  N = [].concat(x, ['navIconName']),
  b = [].concat(x, ['overflowIconName']),
  k = [].concat(x, ['actions']),
  P = function (t) {
    return function (o, n) {
      return module997.default(module989.default(o, t), module989.default(n, t));
    };
  },
  z = P(C),
  O = P(N),
  R = P(b),
  T = P(k);
