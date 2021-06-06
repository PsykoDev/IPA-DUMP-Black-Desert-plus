var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function f() {
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
  module197 = require('./197'),
  module88 = require('./88'),
  y = (function (s) {
    module9(k, s);

    var y = k,
      v = f(),
      R = function () {
        var t,
          n = module13(y);

        if (v) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function k() {
      module7(this, k);
      return R.apply(this, arguments);
    }

    module8(k, [
      {
        key: 'render',
        value: function () {
          return (
            <module88 style={[b.container, this.props.style]}>
              <module197 style={b.info}>TouchableNativeFeedback is not supported on this platform!</module197>
            </module88>
          );
        },
      },
    ]);
    return k;
  })(React.Component);

class y {
  constructor() {
    module7(this, k);
    return R.apply(this, arguments);
  }

  static SelectableBackground() {
    return {};
  }

  static SelectableBackgroundBorderless() {
    return {};
  }

  static Ripple() {
    return {};
  }

  static canUseNativeForeground() {
    return false;
  }

  render() {
    return (
      <module88 style={[b.container, this.props.style]}>
        <module197 style={b.info}>TouchableNativeFeedback is not supported on this platform!</module197>
      </module88>
    );
  }
}

var b = module60.create({
  container: {
    height: 100,
    width: 300,
    backgroundColor: '#ffbcbc',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  info: {
    color: '#333333',
    margin: 20,
  },
});
module.exports = y;
