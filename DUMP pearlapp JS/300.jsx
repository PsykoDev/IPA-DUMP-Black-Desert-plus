var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function u() {
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

require('./52');

require('./48');

require('./90');

var PropTypes = require('prop-types'),
  React = require('react'),
  module301 = require('./301'),
  module60 = require('./60'),
  module88 = require('./88'),
  y = (function (l, ...args) {
    module9(x, l);

    var module60 = x,
      y = u(),
      b = function () {
        var t,
          n = module13(module60);

        if (y) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function x() {
      var n;
      module7(this, x);
      (n = b.call(this, ...args)).state = {
        inspector: null,
        mainKey: 1,
      };
      n._subscription = null;
      return n;
    }

    module8(x, [
      {
        key: 'getChildContext',
        value: function () {
          return {
            rootTag: this.props.rootTag,
          };
        },
      },
      {
        key: 'componentDidMount',
        value: function () {},
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (null != this._subscription) this._subscription.remove();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = (
              <module88
                collapsable={!this.state.inspector}
                key={this.state.mainKey}
                pointerEvents="box-none"
                style={C.appContainer}
                ref={function (n) {
                  t._mainRef = n;
                }}
              >
                {this.props.children}
              </module88>
            ),
            o = this.props.WrapperComponent;
          if (null != o) n = <o>{n}</o>;
          return (
            <module301.Provider value={this.props.rootTag}>
              <module88 style={C.appContainer} pointerEvents="box-none">
                {n}
                {null}
                {this.state.inspector}
              </module88>
            </module301.Provider>
          );
        },
      },
    ]);
    return x;
  })(React.Component);

class y {
  constructor() {
    var n;
    module7(this, x);
    (n = b.call(this, ...args)).state = {
      inspector: null,
      mainKey: 1,
    };
    n._subscription = null;
    return n;
  }

  getChildContext() {
    return {
      rootTag: this.props.rootTag,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    if (null != this._subscription) this._subscription.remove();
  }

  render() {
    var t = this,
      n = (
        <module88
          collapsable={!this.state.inspector}
          key={this.state.mainKey}
          pointerEvents="box-none"
          style={C.appContainer}
          ref={function (n) {
            t._mainRef = n;
          }}
        >
          {this.props.children}
        </module88>
      ),
      o = this.props.WrapperComponent;
    if (null != o) n = <o>{n}</o>;
    return (
      <module301.Provider value={this.props.rootTag}>
        <module88 style={C.appContainer} pointerEvents="box-none">
          {n}
          {null}
          {this.state.inspector}
        </module88>
      </module301.Provider>
    );
  }
}

y.childContextTypes = {
  rootTag: PropTypes.number,
};
var C = module60.create({
  appContainer: {
    flex: 1,
  },
});
module.exports = y;
