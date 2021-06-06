exports.default = function (t) {
  var n = (function (n) {
    module9.default(w, n);

    var module488 = w,
      L = y(),
      O = function () {
        var t,
          n = module13.default(module488);

        if (L) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function w() {
      var t;
      module7.default(this, w);

      (t = O.call(this)).handleOrientationChange = function (n) {
        var o = n.window,
          u = D(o);
        t.setState({
          isLandscape: u,
        });
      };

      var n = D(module17.Dimensions.get('window'));
      t.state = {
        isLandscape: n,
      };
      return t;
    }

    module8.default(w, [
      {
        key: 'componentDidMount',
        value: function () {
          if ('function' == typeof module17.Dimensions.addEventListener) module17.Dimensions.addEventListener('change', this.handleOrientationChange);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof module17.Dimensions.removeEventListener) module17.Dimensions.removeEventListener('change', this.handleOrientationChange);
        },
      },
      {
        key: 'render',
        value: function () {
          return <t />;
        },
      },
    ]);
    return w;
  })(React.Component);

  return module488.default(n, t);
};

var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module488 = require('./488');

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

var D = function (t) {
  return t.width > t.height;
};

exports.isOrientationLandscape = D;
