var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module440 = require('./440'),
  module449 = require('./449'),
  module450 = require('./450');

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

function P() {
  return (P =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    }).apply(this, arguments);
}

function k(t, n, o) {
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

var C = function (t, n, C) {
  var x = (function (v) {
    module9.default(O, v);

    var k = O,
      x = y(),
      b = function () {
        var t,
          n = module13.default(k);

        if (x) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function O(t, n) {
      var s;
      module7.default(this, O);
      (s = b.call(this, t, n)).state = {
        descriptors: {},
        screenProps: s.props.screenProps,
        theme: n,
        themeContext: n,
      };
      return s;
    }

    module8.default(
      O,
      [
        {
          key: 'componentDidUpdate',
          value: function () {
            if (this.context !== this.state.themeContext)
              this.setState({
                themeContext: this.context,
              });
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this;
            return (
              <React.Fragment>
                <module450.default
                  navigation={this.props.navigation}
                  onEvent={function (t, o, s) {
                    var c;
                    if (!(null === (c = n.state.descriptors[t]) || undefined === c)) c.navigation.emit(o, s);
                  }}
                />
                <t />
              </React.Fragment>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            var s = o.descriptors,
              c = t.navigation,
              u = t.screenProps;
            module440.default(
              null != c,
              'The navigation prop is missing for this navigator. In react-navigation v3 and v4 you must set up your app container directly. More info: https://reactnavigation.org/docs/en/app-containers.html'
            );
            var p = c.state,
              f = p.routes;
            if (undefined === f)
              throw new TypeError(
                'No "routes" found in navigation state. Did you try to pass the navigation prop of a React component to a Navigator child? See https://reactnavigation.org/docs/en/custom-navigators.html#navigator-navigation-prop'
              );
            return {
              descriptors: f.reduce(function (t, p) {
                if (s && s[p.key] && p === s[p.key].state && u === o.screenProps && o.themeContext === o.theme) {
                  t[p.key] = s[p.key];
                  return t;
                }

                var f = n.getComponentForRouteName.bind(null, p.routeName),
                  l = c.getChildNavigation(p.key),
                  v = n.getScreenOptions(l, u, o.themeContext);
                t[p.key] = {
                  key: p.key,
                  getComponent: f,
                  options: v,
                  state: p,
                  navigation: l,
                };
                return t;
              }, {}),
              screenProps: u,
              theme: p.themeContext,
            };
          },
        },
      ]
    );
    return O;
  })(React.Component);

  k(x, 'contextType', module449.default);
  k(x, 'router', n);
  k(x, 'navigationOptions', C.navigationOptions);
  return x;
};

exports.default = C;
