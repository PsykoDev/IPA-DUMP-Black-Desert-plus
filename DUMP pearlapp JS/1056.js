var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module1052 = require('./1052'),
  module1032 = require('./1032');

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

var h = (function (t) {
  module9.default(v, t);

  var React = v,
    module1032 = y(),
    h = function () {
      var t,
        n = module13.default(React);

      if (module1032) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function v() {
    module7.default(this, v);
    return h.apply(this, arguments);
  }

  module8.default(v, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this.props,
          n = t.children,
          o = t.exec,
          u = v.resolveNode(n),
          l = v.resolveNode(o);
        if (null === u && null === l)
          throw new Error(
            "<Animated.Code /> expects the 'exec' prop or children to be an animated node or a function returning an animated node. " +
              (null === u ? 'Got "' + typeof n + '" type passed to children' : 'Got "' + typeof o + '" type passed to exec')
          );
        this.always = module1052.createAnimatedAlways(l || u);

        this.always.__attach();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.always.__detach();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {
        this.componentWillUnmount();
        this.componentDidMount();
      },
    },
    {
      key: 'render',
      value: function () {
        return null;
      },
    },
  ]);
  return v;
})(React.default.PureComponent);

h.resolveNode = function (t) {
  return 'function' == typeof t ? h.resolveNode(t()) : t instanceof module1032.default ? t : null;
};

var v = h;
exports.default = v;
