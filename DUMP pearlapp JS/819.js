var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module755 = require('./755'),
  module498 = require('./498'),
  module820 = require('./820');

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

var D = (function (t) {
  module9.default(D, t);

  var n = D,
    module755 = b(),
    y = function () {
      var t,
        o = module13.default(n);

      if (module755) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function D(t) {
    var n;
    module7.default(this, D);
    (n = y.call(this, t)).state = {
      onDidFocus: false,
    };
    return n;
  }

  module8.default(D, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return this.props.visible
          ? React.default.createElement(
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
                    onRequestClose: function () {},
                  },
                  React.default.createElement(
                    module17.View,
                    {
                      style: C.modalBackground,
                    },
                    React.default.createElement(
                      module17.View,
                      {
                        style: C.modal,
                      },
                      React.default.createElement(module820.default, null)
                    )
                  )
                )
            )
          : null;
      },
    },
  ]);
  return D;
})(React.Component);

D.defaultProps = {
  visible: true,
};
var C = module17.StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: module755.Color.modalBackground,
    },
    modal: {
      width: module498.UIManager.getWidth(0.9),
      height: module498.UIManager.getHeight(0.55),
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: module755.Color.mainTheme,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
  }),
  E = D;
exports.default = E;
