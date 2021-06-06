var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module498 = require('./498'),
  module755 = require('./755'),
  module799 = require('./799');

function _() {
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

var R = (function (t) {
    module9.default(I, t);

    var module406 = I,
      R = _(),
      C = function () {
        var t,
          n = module13.default(module406);

        if (R) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function I() {
      module7.default(this, I);
      return C.apply(this, arguments);
    }

    module8.default(I, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            module799.PABackgroundView,
            {
              style: {
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              },
              source: module755.ImageMap.bg_splash_mo,
            },
            React.default.createElement(module17.Image, {
              style: {
                width: 300,
                resizeMode: 'contain',
              },
              source: module755.ImageMap.img_error_mo,
            }),
            React.default.createElement(module799.PARoundButton, {
              width: module498.UIManager.getWidth(0.6),
              isActive: false,
              title: this.props.uiLanguage.Error_Connect_Failed,
              inactiveColor: module755.Color.activeButton,
            })
          );
        },
      },
    ]);
    return I;
  })(React.default.Component),
  C = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
    };
  })(R);

exports.default = C;
