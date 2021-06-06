var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function l() {
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

require('./90');

var module307 = require('./307'),
  React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  module82 = require('./82'),
  y = (function (f, ...args) {
    module9(k, f);

    var y = k,
      x = l(),
      C = function () {
        var t,
          n = module13(y);

        if (x) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function k() {
      var n;
      module7(this, k);
      (n = C.call(this, ...args))._picker = null;
      n.state = {
        selectedIndex: 0,
        items: [],
      };

      n._onChange = function (t) {
        if (n.props.onChange) n.props.onChange(t);
        if (n.props.onValueChange) n.props.onValueChange(t.nativeEvent.newValue, t.nativeEvent.newIndex);
        if (n._picker && n.state.selectedIndex !== t.nativeEvent.newIndex)
          n._picker.setNativeProps({
            selectedIndex: n.state.selectedIndex,
          });
      };

      return n;
    }

    module8(
      k,
      [
        {
          key: 'render',
          value: function () {
            var t = this;
            return (
              <module88 style={this.props.style}>
                <module307
                  ref={function (n) {
                    t._picker = n;
                  }}
                  testID={this.props.testID}
                  style={[I.pickerIOS, this.props.itemStyle]}
                  items={this.state.items}
                  selectedIndex={this.state.selectedIndex}
                  onChange={this._onChange}
                  onStartShouldSetResponder={function () {
                    return true;
                  }}
                  onResponderTerminationRequest={function () {
                    return false;
                  }}
                />
              </module88>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t) {
            var n = 0,
              o = [];
            React.Children.toArray(t.children)
              .filter(function (t) {
                return null !== t;
              })
              .forEach(function (s, c) {
                if (s.props.value === t.selectedValue) n = c;
                o.push({
                  value: s.props.value,
                  label: s.props.label,
                  textColor: module82(s.props.color),
                });
              });
            return {
              selectedIndex: n,
              items: o,
            };
          },
        },
      ]
    );
    return k;
  })(React.Component);

y.Item = function (t) {
  return null;
};

var I = module60.create({
  pickerIOS: {
    height: 216,
  },
});
module.exports = y;
