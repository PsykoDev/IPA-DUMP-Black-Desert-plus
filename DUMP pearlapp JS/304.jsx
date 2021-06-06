var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function f(t) {
  var n = s();
  return function () {
    var o,
      f = module13(t);

    if (n) {
      var s = module13(this).constructor;
      o = Reflect.construct(f, arguments, s);
    } else o = f.apply(this, arguments);

    return module11(this, o);
  };
}

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

require('./287');

require('./58');

require('./287');

var module306 = require('./306'),
  React = require('react'),
  h = (function (u) {
    module9(s, u);
    var c = f(s);

    function s() {
      module7(this, s);
      return c.apply(this, arguments);
    }

    module8(s, [
      {
        key: 'render',
        value: function () {
          throw null;
        },
      },
    ]);
    return s;
  })(React.Component),
  y = (function (u) {
    module9(s, u);
    var c = f(s);

    function s() {
      module7(this, s);
      return c.apply(this, arguments);
    }

    module8(s, [
      {
        key: 'render',
        value: function () {
          return <module306>{this.props.children}</module306>;
        },
      },
    ]);
    return s;
  })(React.Component);

class h {
  constructor() {
    module7(this, s);
    return c.apply(this, arguments);
  }

  render() {
    throw null;
  }
}

y.MODE_DIALOG = 'dialog';
y.MODE_DROPDOWN = 'dropdown';
y.Item = h;
y.defaultProps = {
  mode: 'dialog',
};
module.exports = y;
