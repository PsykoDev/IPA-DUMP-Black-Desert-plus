var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1091 = require('./1091'),
  module755 = require('./755');

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

var _ = (function (t) {
  module9.default(R, t);

  var n = R,
    _ = v(),
    C = function () {
      var t,
        o = module13.default(n);

      if (_) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function R() {
    module7.default(this, R);
    return C.apply(this, arguments);
  }

  module8.default(R, [
    {
      key: 'shouldComponentUpdate',
      value: function () {
        return false;
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: {
              alignItems: 'center',
              marginBottom: 10,
            },
          },
          React.default.createElement(
            module17.View,
            {
              style: module1091.default.navItemFooterStyle,
            },
            React.default.createElement(module17.Image, {
              style: {
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              },
              source: module755.ImageMap.icn_copyright_mo,
            })
          ),
          React.default.createElement(
            module17.Text,
            {
              style: {
                fontSize: 9,
                color: module755.Color.borderLine,
              },
            },
            'Copyright\xa9 Pearl Abyss Corp. All rights reserved.'
          )
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = _;
