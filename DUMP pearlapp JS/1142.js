var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755');

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

var v = (function (t) {
    module9.default(w, t);

    var n = w,
      module755 = p(),
      v = function () {
        var t,
          l = module13.default(n);

        if (module755) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(l, arguments, o);
        } else t = l.apply(this, arguments);

        return module11.default(this, t);
      };

    function w(t) {
      module7.default(this, w);
      return v.call(this, t);
    }

    module8.default(w, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            module17.View,
            {
              style: S.content,
            },
            React.default.createElement(module17.View, {
              style: S.line,
            }),
            React.default.createElement(module17.View, {
              style: [
                {
                  marginEnd: 12,
                },
                S.diamondSquare,
              ],
            }),
            React.default.createElement(
              module17.Text,
              {
                style: S.title,
              },
              this.props.title
            ),
            React.default.createElement(module17.View, {
              style: [
                {
                  marginStart: 12,
                },
                S.diamondSquare,
              ],
            }),
            React.default.createElement(module17.View, {
              style: S.line,
            })
          );
        },
      },
    ]);
    return w;
  })(React.Component),
  S = module17.StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    line: {
      flex: 0.45,
      height: 3,
      backgroundColor: 'rgb(218, 215, 212)',
    },
    diamondSquare: {
      width: 8,
      height: 8,
      backgroundColor: 'rgb(176, 167, 159)',
      transform: [
        {
          rotate: '45deg',
        },
      ],
      zIndex: 1,
    },
    title: {
      fontSize: 18,
      color: module755.Color.mainText,
      fontWeight: 'bold',
    },
  }),
  w = v;

exports.default = w;
