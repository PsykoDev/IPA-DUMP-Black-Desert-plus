var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module799 = require('./799'),
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

var x = (function (t) {
  module9.default(C, t);

  var x = C,
    v = y(),
    b = function () {
      var t,
        n = module13.default(x);

      if (v) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function C(t) {
    var l;
    module7.default(this, C);
    (l = b.call(this, t)).state = {
      text: '',
    };
    l.keywordMaxLength = 20;
    return l;
  }

  module8.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          null,
          React.default.createElement(
            module17.View,
            {
              style: {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
            React.default.createElement(module17.TextInput, {
              style: {
                flex: 1,
                color: module755.Color.white,
                fontSize: 16,
              },
              ref: function (n) {
                if (null != n) {
                  t.textInput = n;
                  t.props.refs(n);
                }
              },
              maxLength: this.keywordMaxLength,
              blurOnSubmit: true,
              onChangeText: function (n) {
                t.props.onChangeText(n);
              },
              autoCapitalize: 'none',
              placeholderTextColor: module755.Color.inactiveText,
              placeholder: this.props.placeholder,
              accessibilityLabel: this.props.accessibilityLabel,
            })
          ),
          React.default.createElement(module799.BorderLine, null)
        );
      },
    },
  ]);
  return C;
})(React.default.Component);

exports.default = x;
