var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module823 = require('./823'),
  module609 = require('./609'),
  module755 = require('./755'),
  module814 = require('./814');

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

var _ = (function (t) {
  module9.default(v, t);

  var o = v,
    _ = T(),
    x = function () {
      var t,
        n = module13.default(o);

      if (_) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function v(t) {
    var o;
    module7.default(this, v);
    (o = x.call(this, t)).state = {
      isClicked: false,
      isCheckedAgreeMarketingPush: false,
      isCheckedAgreeNightMarketPush: false,
      onDidFocus: false,
    };
    return o;
  }

  module8.default(v, [
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
                      this.props.title1
                    ),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: b.titleText,
                      },
                      this.props.title2
                    ),
                    React.default.createElement(module17.View, {
                      style: {
                        padding: 12,
                        paddingBottom: 12,
                      },
                    }),
                    React.default.createElement(module814.default, {
                      width: '100%',
                      height: 45,
                      circleSize: 22,
                      fontSize: 12,
                      title: this.props.optionTitle,
                      titleColor: module755.Color.white,
                      onPress: function (o) {
                        if (o) module823.default.show(module609.createFormatDate() + '\n' + t.props.uiLanguage.Text_Select_Alarm_Allow_Day_Msg);
                        else module823.default.show(module609.createFormatDate() + '\n' + t.props.uiLanguage.Text_Select_Alarm_Reject_Day_Msg);
                        t.setState({
                          isCheckedAgreeMarketingPush: o,
                        });
                      },
                    }),
                    React.default.createElement(module814.default, {
                      width: '100%',
                      height: 45,
                      circleSize: 22,
                      fontSize: 12,
                      title: this.props.optionTitle2,
                      titleColor: module755.Color.white,
                      onPress: function (o) {
                        if (o) module823.default.show(module609.createFormatDate() + '\n' + t.props.uiLanguage.Text_Select_Alarm_Allow_Night_Msg);
                        else module823.default.show(module609.createFormatDate() + '\n' + t.props.uiLanguage.Text_Select_Alarm_Reject_Night_Msg);
                        t.setState({
                          isCheckedAgreeNightMarketPush: o,
                        });
                      },
                      enabled: this.state.isCheckedAgreeMarketingPush,
                      visible: 'KR' == this.props.ipCountry,
                    }),
                    React.default.createElement(module17.View, {
                      style: {
                        paddingTop: 12,
                      },
                    }),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: {
                          color: module755.Color.white,
                          fontSize: 12,
                        },
                      },
                      this.props.additionalGuide
                    ),
                    React.default.createElement(module17.View, {
                      style: {
                        paddingTop: 12,
                      },
                    })
                  ),
                  React.default.createElement(
                    module17.TouchableOpacity,
                    {
                      style: this.state.isClicked ? b.unactivateConfirm : b.confirm,
                      activeOpacity: this.state.isClicked ? 1 : 0.2,
                      onPress: function () {
                        if (!t.state.isClicked) {
                          t.props.onPress(t.state.isCheckedAgreeMarketingPush, t.state.isCheckedAgreeNightMarketPush);
                          t.setState({
                            isClicked: true,
                          });
                        }
                      },
                    },
                    React.default.createElement(
                      module17.View,
                      {
                        style: {
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'center',
                        },
                      },
                      React.default.createElement(
                        module17.Text,
                        {
                          style: b.confirmText,
                        },
                        this.props.uiLanguage.Confirm
                      ),
                      this.state.isClicked &&
                        React.default.createElement(module17.ActivityIndicator, {
                          style: {
                            position: 'absolute',
                            paddingLeft: 56,
                          },
                          size: 'small',
                        })
                    )
                  )
                )
              )
            )
        );
      },
    },
  ]);
  return v;
})(React.Component);

exports.default = _;
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
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 24,
  },
  titleText: {
    fontSize: 16,
    color: module755.Color.headerTitle,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  confirm: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(129, 101, 88)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  unactivateConfirm: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(64, 64, 64)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  confirmText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 1,
    color: module755.Color.white,
  },
});
