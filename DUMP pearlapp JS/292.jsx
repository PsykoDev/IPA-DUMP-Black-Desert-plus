var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module293 = require('./293');

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

require('./66');

require('./58');

var React = require('react'),
  module60 = require('./60'),
  y = (function (t) {
    module9.default(C, t);

    var module60 = C,
      y = f(),
      R = function () {
        var t,
          n = module13.default(module60);

        if (y) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function C() {
      module7.default(this, C);
      return R.apply(this, arguments);
    }

    module8.default(C, [
      {
        key: 'render',
        value: function () {
          return 0 === React.Children.count(this.props.children) ? null : (
            <module293.default style={[this.props.style, v.container]} nativeID={this.props.nativeID} backgroundColor={this.props.backgroundColor}>
              {this.props.children}
            </module293.default>
          );
        },
      },
    ]);
    return C;
  })(React.Component),
  v = module60.create({
    container: {
      position: 'absolute',
    },
  });

module.exports = y;
