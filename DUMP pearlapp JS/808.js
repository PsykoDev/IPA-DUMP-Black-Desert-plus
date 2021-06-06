var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755');

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

var b = (function (t) {
  module9.default(C, t);

  var o = C,
    b = y(),
    x = function () {
      var t,
        n = module13.default(o);

      if (b) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function C() {
    module7.default(this, C);
    return x.apply(this, arguments);
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          {
            style: {
              alignItems: 'center',
            },
          },
          React.default.createElement(
            module17.View,
            {
              style: {
                width: '100%',
                height: 70,
                justifyContent: 'space-around',
              },
            },
            React.default.createElement(
              module17.Animated.View,
              {
                style: {
                  opacity: this.props.fadeValue,
                },
              },
              React.default.createElement(
                module17.Text,
                {
                  style: {
                    fontSize: 15,
                    textAlign: 'left',
                    color: module755.Color.borderLine,
                  },
                },
                this.props.title
              )
            ),
            React.default.createElement(module17.TextInput, {
              style: {
                borderColor: '#aaa',
                color: 'white',
                width: '100%',
                fontSize: 15,
              },
              ref: function (o) {
                if (t.props.onRef) t.props.onRef(o);
              },
              editable: this.props.editable,
              onSubmitEditing: function () {
                if (t.props.next) t.props.next();
              },
              onChangeText: function (o) {
                if (t.props.onChangeText) t.props.onChangeText(o);
              },
              onFocus: function () {
                return t.props.onFocus();
              },
              onBlur: function () {
                return t.props.onBlur();
              },
              placeholder: this.props.placeholder,
              placeholderTextColor: '#846D65',
              autoCapitalize: 'none',
              secureTextEntry: this.props.secureTextEntry,
              accessibilityLabel: this.props.accessibilityLabel,
            }),
            React.default.createElement(module17.View, {
              style: {
                borderBottomColor: this.props.borderBottomColor,
                borderBottomWidth: this.props.borderBottomWidth,
              },
            })
          )
        );
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = b;
b.defaultProps = {
  title: 'activeButton',
  isFocus: false,
  isFillText: false,
  next: function () {
    return null;
  },
  onRef: function () {
    return null;
  },
  onFocus: function () {
    return null;
  },
  onChangeText: function () {
    return null;
  },
  onBlur: function () {
    return null;
  },
  placeholder: '',
  secureTextEntry: false,
  borderBottomColor: module755.Color.borderLine,
  borderBottomWidth: 1,
  fadeValue: 0,
  editable: true,
};
