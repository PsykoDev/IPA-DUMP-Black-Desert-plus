var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

function v() {
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

var y = (function (t) {
  module9.default(S, t);

  var n = S,
    y = v(),
    R = function () {
      var t,
        u = module13.default(n);

      if (y) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, c);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function S(t) {
    module7.default(this, S);
    return R.call(this, t);
  }

  module8.default(S, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(module17.View, {
          style: h.content,
        });
      },
    },
  ]);
  return S;
})(React.Component);

y.defaultProps = {
  visible: true,
};
var h = module17.StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: 'column',
      paddingStart: 32,
      paddingEnd: 32,
      marginTop: 32,
    },
  }),
  R = y;
exports.default = R;
