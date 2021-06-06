var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module799 = require('./799'),
  module755 = require('./755');

function B() {
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
  module9.default(C, t);

  var o = C,
    v = B(),
    y = function () {
      var t,
        n = module13.default(o);

      if (v) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function C(t) {
    var o;
    module7.default(this, C);
    (o = y.call(this, t)).state = {
      isActive: false,
      fadeValue: new module17.Animated.Value(0),
      placeHolder: o.props.placeHolder,
      borderBottomColor: module755.Color.borderBottom,
      borderBottomWidth: 1,
    };
    return o;
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(module799.PATextInputButton, {
          title: this.props.title,
          onFocus: function () {
            t.setState({
              isActive: true,
              placeHolder: '',
              borderBottomWidth: 2,
              borderBottomColor: '#DAB162',
            });
            module17.Animated.timing(t.state.fadeValue, {
              toValue: 1,
              duration: 1e3,
              delay: 100,
            }).start();
          },
          onChangeText: function (o) {
            t.props.onChangeText(o);
          },
          onBlur: function () {
            return t.setState({
              borderBottomWidth: 1,
              borderBottomColor: module755.Color.borderBottom,
            });
          },
          next: function () {
            if (t.props.next) t.props.next();
          },
          editable: this.props.editable,
          placeholder: this.state.placeHolder,
          borderBottomColor: this.state.borderBottomColor,
          borderBottomWidth: this.state.borderBottomWidth,
          secureTextEntry: this.props.secureTextEntry,
          fadeValue: this.state.fadeValue,
          accessibilityLabel: this.props.accessibilityLabel,
        });
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = v;
