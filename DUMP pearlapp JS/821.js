var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module755 = require('./755');

function T() {
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

var x = (function (t) {
  module9.default(E, t);

  var o = E,
    module755 = T(),
    x = function () {
      var t,
        n = module13.default(o);

      if (module755) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function E(t) {
    var o;
    module7.default(this, E);
    (o = x.call(this, t)).state = {
      isCheckedAgreeMarketingPush: false,
      isCheckedAgreeNightMarketPush: false,
      onDidFocus: false,
    };
    return o;
  }

  module8.default(E, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module17.View,
          null,
          React.default.createElement(module437.NavigationEvents, {
            onDidFocus: function () {
              t.setState({
                onDidFocus: true,
              });
            },
            onWillBlur: function () {
              t.setState({
                onDidFocus: false,
              });
            },
          }),
          this.state.onDidFocus &&
            React.default.createElement(
              module17.Modal,
              {
                transparent: true,
                visible: this.props.visible,
                onRequestClose: function () {},
              },
              React.default.createElement(
                module17.View,
                {
                  style: b.modalBackground,
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: b.modal,
                  },
                  React.default.createElement(
                    module17.View,
                    {
                      style: b.content,
                    },
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.titleText,
                      },
                      this.props.title
                    ),
                    React.default.createElement(module17.View, {
                      style: {
                        marginTop: 12,
                        marginBottom: 12,
                      },
                    }),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.contentText,
                      },
                      this.props.sender
                    ),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.contentText,
                      },
                      this.props.marketing
                    ),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.contentText,
                      },
                      this.props.date
                    ),
                    React.default.createElement(module17.View, {
                      style: {
                        marginTop: 12,
                        marginBottom: 12,
                      },
                    }),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.contentText,
                      },
                      this.props.settingMessage
                    )
                  ),
                  React.default.createElement(module17.View, {
                    style: {
                      marginTop: 12,
                    },
                  }),
                  React.default.createElement(
                    module17.TouchableOpacity,
                    {
                      style: b.confirm,
                      onPress: function () {
                        t.props.onPress(true);
                      },
                      accessibilityLabel: 'NotificationModal_Confirm',
                    },
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.confirmText,
                      },
                      this.props.confirmText
                    )
                  )
                )
              )
            )
        );
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = x;
var b = module17.StyleSheet.create({
  modalBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: module755.Color.modalBackground,
  },
  modal: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: module755.Color.mainTheme,
    marginLeft: '5%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  content: {
    flexDirection: 'column',
    paddingStart: 32,
    paddingEnd: 32,
    marginTop: 32,
  },
  titleText: {
    fontSize: 18,
    color: module755.Color.headerTitle,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 14,
    color: module755.Color.headerTitle,
    marginBottom: 8,
  },
  confirm: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(129, 101, 88)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  confirmText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: module755.Color.white,
  },
});
