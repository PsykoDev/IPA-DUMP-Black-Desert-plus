var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module360 = require('./360');

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

require('./223');

require('./58');

var module124 = require('./124'),
  module18 = require('./18'),
  y = (function (t) {
    module9.default(L, t);

    var module124 = L,
      y = s(),
      R = function () {
        var t,
          n = module13.default(module124);

        if (y) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function L() {
      module7.default(this, L);
      return R.call(this, module360.default);
    }

    module8.default(L, [
      {
        key: 'addEventListener',
        value: function (t, n) {
          this.addListener(t, n);
        },
      },
      {
        key: 'removeEventListener',
        value: function (t, n) {
          this.removeListener(t, n);
        },
      },
      {
        key: 'openURL',
        value: function (t) {
          this._validateURL(t);

          return module360.default.openURL(t);
        },
      },
      {
        key: 'canOpenURL',
        value: function (t) {
          this._validateURL(t);

          return module360.default.canOpenURL(t);
        },
      },
      {
        key: 'openSettings',
        value: function () {
          return module360.default.openSettings();
        },
      },
      {
        key: 'getInitialURL',
        value: function () {
          return module360.default.getInitialURL();
        },
      },
      {
        key: 'sendIntent',
        value: function (t, n) {
          return new Promise(function (t, n) {
            return n(new Error('Unsupported'));
          });
        },
      },
      {
        key: '_validateURL',
        value: function (t) {
          module18('string' == typeof t, 'Invalid URL: should be a string. Was: ' + t);
          module18(t, 'Invalid URL: cannot be empty');
        },
      },
    ]);
    return L;
  })(module124);

module.exports = new y();
