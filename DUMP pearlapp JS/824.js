var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module755 = require('./755'),
  module805 = require('./805');

function C() {
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

var b = (function (t) {
  module9.default(E, t);

  var n = E,
    b = C(),
    D = function () {
      var t,
        o = module13.default(n);

      if (b) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function E(t) {
    var n;
    module7.default(this, E);
    (n = D.call(this, t)).state = {
      onDidFocus: false,
    };
    return n;
  }

  module8.default(E, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          null,
          React.default.createElement(module437.NavigationEvents, {
            onDidFocus: function () {
              t.setState({
                onDidFocus: true,
              });
            },
            onWillBlur: function () {
              t.setState({
                onDidFocus: false,
              });
            },
          }),
          this.state.onDidFocus &&
            React.default.createElement(
              module17.Modal,
              {
                transparent: true,
                animationType: 'none',
                visible: this.props.loading,
                onRequestClose: function () {},
              },
              React.default.createElement(
                module17.View,
                {
                  style: k.modalBackground,
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: k.activityIndicatorWrapper,
                  },
                  React.default.createElement(module805.default, {
                    backgroundColor: module755.Color.transparent,
                    visible: true,
                  })
                )
              )
            )
        );
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = b;
b.defaultProps = {
  loading: false,
  backgroundColor: {},
};
var k = module17.StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: module755.Color.modalBackground,
  },
  activityIndicatorWrapper: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
