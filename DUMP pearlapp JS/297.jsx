var t,
  module247 = require('./247'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module298 = require('./298'),
  module299 = require('./299');

function v() {
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

require('./300');

require('./58');

var module302 = require('./302'),
  module124 = require('./124'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module254 = require('./254'),
  module60 = require('./60'),
  module88 = require('./88'),
  k = null != module298.default ? new module124(module298.default) : null,
  x = 0,
  D = (function (t) {
    module9.default(y, t);

    var n = y,
      module247 = v(),
      f = function () {
        var t,
          s = module13.default(n);

        if (module247) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(s, arguments, l);
        } else t = s.apply(this, arguments);

        return module11.default(this, t);
      };

    function y(t) {
      var n;
      module7.default(this, y);
      n = f.call(this, t);

      y._confirmProps(t);

      n._identifier = x++;
      return n;
    }

    module8.default(
      y,
      [
        {
          key: 'getChildContext',
          value: function () {
            return {
              virtualizedList: null,
            };
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var t = this;
            if (k)
              this._eventSubscription = k.addListener('modalDismissed', function (n) {
                if (n.modalID === t._identifier && t.props.onDismiss) t.props.onDismiss();
              });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            if (this._eventSubscription) this._eventSubscription.remove();
          },
        },
        {
          key: 'UNSAFE_componentWillReceiveProps',
          value: function (t) {
            y._confirmProps(t);
          },
        },
        {
          key: 'render',
          value: function () {
            if (true !== this.props.visible) return null;
            var t = {
                backgroundColor: this.props.transparent ? 'transparent' : 'white',
              },
              n = this.props.animationType;

            if (!n) {
              n = 'none';
              if (this.props.animated) n = 'slide';
            }

            var o = this.props.presentationStyle;

            if (!o) {
              o = 'fullScreen';
              if (this.props.transparent) o = 'overFullScreen';
            }

            var s = this.props.children;
            return (
              <module299.default
                animationType={n}
                presentationStyle={o}
                transparent={this.props.transparent}
                hardwareAccelerated={this.props.hardwareAccelerated}
                onRequestClose={this.props.onRequestClose}
                onShow={this.props.onShow}
                identifier={this._identifier}
                style={T.modal}
                onStartShouldSetResponder={this._shouldSetResponder}
                supportedOrientations={this.props.supportedOrientations}
                onOrientationChange={this.props.onOrientationChange}
              >
                {React.createElement(
                  module254.Context.Provider,
                  {
                    value: null,
                  },
                  React.createElement(
                    module88,
                    {
                      style: [T.container, t],
                    },
                    s
                  )
                )}
              </module299.default>
            );
          },
        },
        {
          key: '_shouldSetResponder',
          value: function () {
            return true;
          },
        },
      ],
      [
        {
          key: '_confirmProps',
          value: function (t) {
            if (t.presentationStyle && 'overFullScreen' !== t.presentationStyle && t.transparent)
              console.warn("Modal with '" + t.presentationStyle + "' presentation style and 'transparent' value is not supported.");
          },
        },
      ]
    );
    return y;
  })(React.Component);

D.defaultProps = {
  visible: true,
  hardwareAccelerated: false,
};
D.contextTypes = {
  rootTag: PropTypes.number,
};
D.childContextTypes = {
  virtualizedList: PropTypes.object,
};
var P = module302.getConstants().isRTL ? 'right' : 'left',
  T = module60.create({
    modal: {
      position: 'absolute',
    },
    container: ((t = {}), module247.default(t, P, 0), module247.default(t, 'top', 0), module247.default(t, 'flex', 1), t),
  });
module.exports = D;
