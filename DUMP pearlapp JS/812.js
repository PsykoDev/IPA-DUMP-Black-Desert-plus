var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react');

function p() {
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

var h = (function (t) {
  module9.default(y, t);

  var n = y,
    h = p(),
    v = function () {
      var t,
        u = module13.default(n);

      if (h) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, l);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function y(t) {
    var n;
    module7.default(this, y);
    (n = v.call(this, t)).state = {
      selectedValue: n.props.initValue,
    };
    return n;
  }

  module8.default(y, [
    {
      key: 'componentDidMount',
      value: function () {
        if (this.props.canInitValue && undefined != this.props.initValue) this.props.onSelectChange(this.props.initValue);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = React.default.Children.map(this.props.children, function (n) {
            return React.default.cloneElement(n, {
              isActive: n.props.title == t.state.selectedValue,
              onPress: function () {
                t.setState({
                  selectedValue: n.props.title,
                });
                t.props.onSelectChange(n.props.title);
              },
            });
          });
        return this.props.visible ? n : null;
      },
    },
  ]);
  return y;
})(React.Component);

exports.default = h;
h.defaultProps = {
  initValue: undefined,
  canInitValue: true,
  visible: true,
  onSelectChange: function () {
    return null;
  },
};
