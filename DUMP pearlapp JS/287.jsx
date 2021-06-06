var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function s() {
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

var React = require('react'),
  module60 = require('./60'),
  p = (function (l) {
    module9(R, l);

    var p = R,
      y = s(),
      v = function () {
        var t,
          n = module13(p);

        if (y) {
          var c = module13(this).constructor;
          t = Reflect.construct(n, arguments, c);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function R() {
      module7(this, R);
      return v.apply(this, arguments);
    }

    module8(R, [
      {
        key: 'render',
        value: function () {
          var module88 = require('./88');

          return <module88 style={[h.unimplementedView, this.props.style]}>{this.props.children}</module88>;
        },
      },
    ]);
    return R;
  })(React.Component),
  h = module60.create({
    unimplementedView: {},
  });

class p {
  constructor() {
    module7(this, R);
    return v.apply(this, arguments);
  }

  render() {
    var module88 = require('./88');

    return <module88 style={[h.unimplementedView, this.props.style]}>{this.props.children}</module88>;
  }
}

module.exports = p;
