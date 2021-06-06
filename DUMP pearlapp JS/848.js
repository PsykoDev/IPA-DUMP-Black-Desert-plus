exports.default = function (t, o, C, S) {
  var _ = C ? C.replace(/\.(otf|ttf)$/, '') : o,
    T = module849.Platform.select({
      windows: '/Assets/' + C + '#' + o,
      android: _,
      web: _,
      default: o,
    }),
    E = PropTypes.default.oneOf(Object.keys(t)),
    A = (function (o, ...args) {
      module9.default(b, o);

      var module34 = b,
        PropTypes = F(),
        I = function () {
          var t,
            o = module13.default(module34);

          if (PropTypes) {
            var l = module13.default(this).constructor;
            t = Reflect.construct(o, arguments, l);
          } else t = o.apply(this, arguments);

          return module11.default(this, t);
        };

      function b() {
        var t;
        module7.default(this, b);
        (t = I.call(this, ...args)).root = null;

        t.handleRef = function (o) {
          t.root = o;
        };

        return t;
      }

      module8.default(b, [
        {
          key: 'setNativeProps',
          value: function (t) {
            if (this.root) this.root.setNativeProps(t);
          },
        },
        {
          key: 'render',
          value: function () {
            var o = this.props,
              n = o.name,
              u = o.size,
              f = o.color,
              c = o.style,
              s = o.children,
              v = module56.default(o, ['name', 'size', 'color', 'style', 'children']),
              y = n ? t[n] || '?' : '';
            if ('number' == typeof y) y = String.fromCharCode(y);
            var I = {
                fontSize: u,
                color: f,
              },
              b = {
                fontFamily: T,
                fontWeight: 'normal',
                fontStyle: 'normal',
              };
            v.style = [I, c, b, S || {}];
            v.ref = this.handleRef;
            return React.default.createElement(module849.Text, v, y, s);
          },
        },
      ]);
      return b;
    })(React.PureComponent);

  A.propTypes = {
    allowFontScaling: PropTypes.default.bool,
    name: E,
    size: PropTypes.default.number,
    color: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    children: PropTypes.default.node,
    style: PropTypes.default.any,
  };
  A.defaultProps = {
    size: R,
    allowFontScaling: false,
  };
  var D = {};

  function L(o) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : R,
      l = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : w;
    module850.default();
    var u = t[o] || '?';
    if ('number' == typeof u) u = String.fromCharCode(u);
    var f = module849.processColor(l),
      c = u + ':' + n + ':' + f,
      s = module849.PixelRatio.get();
    return new Promise(function (t, o) {
      var l = D[c];
      if (undefined !== l)
        !l || l instanceof Error
          ? o(l)
          : t({
              uri: l,
              scale: s,
            });
      else
        N.getImageForFont(T, u, n, f, function (n, l) {
          var u = 'string' == typeof n ? new Error(n) : n;
          D[c] = l || u || false;
          if (!u && l)
            t({
              uri: l,
              scale: s,
            });
          else o(u);
        });
    });
  }

  A.Button = module851.default(A);
  A.TabBarItem = module996.default(E, L);
  A.TabBarItemIOS = A.TabBarItem;
  A.ToolbarAndroid = module1010.default(E, L);
  A.getImageSource = L;

  A.loadFont = function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : C;

    if ('ios' === module849.Platform.OS) {
      module850.default();
      return t ? N.loadFontWithFileName.apply(N, module34.default(t.split('.'))) : Promise.reject(new Error('Unable to load font, because no file was specified. '));
    } else return Promise.resolve();
  };

  A.hasIcon = function (o) {
    return Object.prototype.hasOwnProperty.call(t, o);
  };

  A.getRawGlyphMap = function () {
    return t;
  };

  A.getFontFamily = function () {
    return T;
  };

  return A;
};

var module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module849 = require('./849'),
  module850 = require('./850'),
  module851 = require('./851'),
  module996 = require('./996'),
  module1010 = require('./1010');

function F() {
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

var N = module849.NativeModules.RNVectorIconsManager || module849.NativeModules.RNVectorIconsModule;
exports.NativeIconAPI = N;
var R = 12;
exports.DEFAULT_ICON_SIZE = R;
var w = 'black';
exports.DEFAULT_ICON_COLOR = w;
