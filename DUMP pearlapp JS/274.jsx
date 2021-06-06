var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6');

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

require('./58');

require('./254');

var React = require('react'),
  module275 = require('./275'),
  R = module6({}, module275.defaultProps, {
    stickySectionHeadersEnabled: true,
  }),
  h = (function (R, ...args) {
    module9(_, R);

    var h = _,
      v = u(),
      L = function () {
        var t,
          n = module13(h);

        if (v) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function _() {
      var n;
      module7(this, _);

      (n = L.call(this, ...args))._captureRef = function (t) {
        n._wrapperListRef = t;
      };

      return n;
    }

    module8(_, [
      {
        key: 'scrollToLocation',
        value: function (t) {
          if (null != this._wrapperListRef) this._wrapperListRef.scrollToLocation(t);
        },
      },
      {
        key: 'recordInteraction',
        value: function () {
          var t = this._wrapperListRef && this._wrapperListRef.getListRef();

          if (t) t.recordInteraction();
        },
      },
      {
        key: 'flashScrollIndicators',
        value: function () {
          var t = this._wrapperListRef && this._wrapperListRef.getListRef();

          if (t) t.flashScrollIndicators();
        },
      },
      {
        key: 'getScrollResponder',
        value: function () {
          var t = this._wrapperListRef && this._wrapperListRef.getListRef();

          if (t) return t.getScrollResponder();
        },
      },
      {
        key: 'getScrollableNode',
        value: function () {
          var t = this._wrapperListRef && this._wrapperListRef.getListRef();

          if (t) return t.getScrollableNode();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          var n = this._wrapperListRef && this._wrapperListRef.getListRef();

          if (n) n.setNativeProps(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return <module275 />;
        },
      },
    ]);
    return _;
  })(React.PureComponent);

class h {
  constructor() {
    var n;
    module7(this, _);

    (n = L.call(this, ...args))._captureRef = function (t) {
      n._wrapperListRef = t;
    };

    return n;
  }

  scrollToLocation(t) {
    if (null != this._wrapperListRef) this._wrapperListRef.scrollToLocation(t);
  }

  recordInteraction() {
    var t = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (t) t.recordInteraction();
  }

  flashScrollIndicators() {
    var t = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (t) t.flashScrollIndicators();
  }

  getScrollResponder() {
    var t = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (t) return t.getScrollResponder();
  }

  getScrollableNode() {
    var t = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (t) return t.getScrollableNode();
  }

  setNativeProps(t) {
    var n = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (n) n.setNativeProps(t);
  }

  render() {
    return <module275 />;
  }
}

h.defaultProps = R;
module.exports = h;
