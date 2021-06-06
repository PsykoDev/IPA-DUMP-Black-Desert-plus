var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module799 = require('./799');

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

var v = (function (t) {
  module9.default(P, t);

  var n = P,
    v = y(),
    b = function () {
      var t,
        l = module13.default(n);

      if (v) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function P() {
    module7.default(this, P);
    return b.apply(this, arguments);
  }

  module8.default(P, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          {
            accessibilityLabel: this.props.accessibilityLabel,
          },
          this.props.visible &&
            React.default.createElement(
              module799.PATouchable,
              {
                onPress: function () {
                  return t.props.onPress();
                },
              },
              React.default.createElement(
                module17.View,
                {
                  style: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingStart: 24,
                    paddingTop: 16,
                    paddingBottom: 16,
                  },
                },
                React.default.createElement(module17.Image, {
                  style: {
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  },
                  source: this.props.source,
                }),
                React.default.createElement(
                  module17.Text,
                  {
                    style: {
                      paddingStart: 32,
                      textAlignVertical: 'center',
                      textAlign: 'center',
                      fontSize: 14,
                      color: 'white',
                    },
                  },
                  this.props.title
                )
              )
            )
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = v;
v.defaultProps = {
  visible: true,
  title: 'untitled',
  onPress: function () {
    return null;
  },
};
